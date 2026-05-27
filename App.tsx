import React, { useState, useCallback, useMemo } from 'react';
import { GoogleGenAI, Modality } from "@google/genai";

import { Concept, Style, LayoutOption, AspectRatio, HistoryItem, PromptParams } from './types';
import { CONCEPT_GROUPS, STYLES, LAYOUT_OPTIONS, ASPECT_RATIOS, HANDHELD_ITEMS, BACKGROUNDS, LOCATIONS, PROMPT_SUGGESTIONS, IMAGE_COUNTS, OUTFITS_MEN, OUTFITS_WOMEN, PETS, TRAVEL_DESTINATIONS, PREMIUM_FRAMES } from './constants';
import { generateDetailedPrompt } from './services/promptService';

import Header from './components/Header';
import ImageUploader from './components/ImageUploader';
import ConceptSelector from './components/ConceptSelector';
import StyleSelector from './components/StyleSelector';
import LayoutSelector from './components/LayoutSelector';
import OptionsSelector from './components/OptionsSelector';
import GenerationOptions from './components/GenerationOptions';
import ImageResult from './components/ImageResult';
import { Loader } from './components/Loader';
import HistoryViewer from './components/HistoryViewer';
import CongratulationsBanner from './components/CongratulationsBanner';
import { ChevronUpIcon } from './components/IconComponents';

// Helper to get all items in a flat array
const allLayouts = LAYOUT_OPTIONS.flatMap(group => group.layouts);
const allConcepts = CONCEPT_GROUPS.flatMap(group => group.concepts);

function App() {
  // --- STATE MANAGEMENT ---
  const [sourceImage, setSourceImage] = useState<{ base64: string; mimeType: string; preview: string } | null>(null);
  const [customPrompt, setCustomPrompt] = useState<string>('');
  
  const [selectedConcept, setSelectedConcept] = useState<Concept>(allConcepts[0]);
  const [selectedStyle, setSelectedStyle] = useState<Style>(STYLES[0]);
  const [selectedLayout, setSelectedLayout] = useState<LayoutOption>(allLayouts[0]);
  const [selectedAspectRatio, setSelectedAspectRatio] = useState<AspectRatio>(ASPECT_RATIOS[0]);
  const [selectedImageCount, setSelectedImageCount] = useState<number>(IMAGE_COUNTS[0]);
  
  const [subjectGender, setSubjectGender] = useState<'female' | 'male'>('female');
  const [selectedOutfits, setSelectedOutfits] = useState<string[]>([]);
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [selectedBackgrounds, setSelectedBackgrounds] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [selectedPets, setSelectedPets] = useState<string[]>([]);
  const [selectedTravelDestinations, setSelectedTravelDestinations] = useState<string[]>([]);
  const [selectedFrames, setSelectedFrames] = useState<string[]>([]);
  
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] =useState<HistoryItem[]>([]);
  const [showCongrats, setShowCongrats] = useState(false);

  const [isOutfitSectionOpen, setIsOutfitSectionOpen] = useState(false);
  const [isDestinationSectionOpen, setIsDestinationSectionOpen] = useState(false);
  const [selectedCountryIndex, setSelectedCountryIndex] = useState(0);
  const [isFrameSectionOpen, setIsFrameSectionOpen] = useState(false);


  // --- DERIVED STATE & MEMOS ---
  const promptParams: PromptParams = useMemo(() => ({
    concept: selectedConcept,
    style: selectedStyle,
    layout: selectedLayout,
    customPrompt: customPrompt || PROMPT_SUGGESTIONS[selectedConcept.id as keyof typeof PROMPT_SUGGESTIONS]?.[0] || 'nhân vật trong ảnh',
    outfits: selectedOutfits,
    items: selectedItems,
    backgrounds: selectedBackgrounds,
    locations: selectedLocations,
    pets: selectedPets,
    travelDestinations: selectedTravelDestinations,
    frames: selectedFrames,
  }), [selectedConcept, selectedStyle, selectedLayout, customPrompt, selectedOutfits, selectedItems, selectedBackgrounds, selectedLocations, selectedPets, selectedTravelDestinations, selectedFrames]);

  const detailedPrompt = useMemo(() => {
      let finalPrompt = generateDetailedPrompt(promptParams);
      // Append aspect ratio to prompt as a hint for the model
      finalPrompt += ` **Tỉ lệ khung hình (Aspect Ratio):** ${selectedAspectRatio.value}.`;
      return finalPrompt;
  }, [promptParams, selectedAspectRatio]);

  const isSpecialComboActive = selectedConcept.id === 'tuyet' && selectedStyle.id === 'nghethuat';
  const isOutfitRequiredAndMissing = isSpecialComboActive && selectedOutfits.length === 0;

  const canGenerate = !!sourceImage && !isOutfitRequiredAndMissing;
  
  const generationWarning = useMemo(() => {
    if (!sourceImage) {
        return "Vui lòng tải ảnh gốc lên để bắt đầu.";
    }
    if (isOutfitRequiredAndMissing) {
        return "Với concept 'Tuyết Rơi' & style 'Nghệ thuật', bạn phải chọn một trang phục.";
    }
    return null;
  }, [sourceImage, isOutfitRequiredAndMissing]);


  // --- HANDLERS ---
  const handleImageUpload = useCallback((file: { base64: string; mimeType: string; preview: string }) => {
    setSourceImage(file);
    setGeneratedImages([]);
    setShowCongrats(false);
  }, []);

  const handleGenerateClick = async () => {
    if (!canGenerate) {
      setError('Vui lòng đáp ứng các yêu cầu để tạo ảnh.');
      return;
    }
    
    setIsLoading(true);
    setError(null);
    setGeneratedImages([]);
    setShowCongrats(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const imagePart = {
        inlineData: {
          data: sourceImage.base64,
          mimeType: sourceImage.mimeType,
        },
      };

      // Create an array of generation promises
      const generationPromises = Array.from({ length: selectedImageCount }, (_, i) => {
        const variedPrompt = detailedPrompt + ` **Biến thể duy nhất #${i + 1}**.`;
        const textPart = { text: variedPrompt };
        
        return ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [imagePart, textPart] },
          config: {
              responseModalities: [Modality.IMAGE],
          },
        });
      });

      // Execute all promises in parallel
      const responses = await Promise.all(generationPromises);

      // Process results
      const allImages: string[] = [];
      responses.forEach(response => {
        for (const part of response.candidates?.[0]?.content?.parts ?? []) {
          if (part.inlineData) {
            allImages.push(`data:${part.inlineData.mimeType};base64,${part.inlineData.data}`);
          }
        }
      });


      if (allImages.length > 0) {
        setGeneratedImages(allImages);
        setShowCongrats(true);
        const newHistoryItem: HistoryItem = {
          id: `hist-${Date.now()}-${Math.random()}`,
          prompt: detailedPrompt, // Store the base prompt
          images: allImages,
          timestamp: new Date(),
        };
        setHistory(prevHistory => [newHistoryItem, ...prevHistory]);
      } else {
        // This condition might be triggered if all parallel requests fail or are blocked.
        setError('Không nhận được hình ảnh từ AI. Phản hồi có thể đã bị chặn hoặc có lỗi xảy ra. Vui lòng thử một ảnh hoặc một mô tả khác.');
      }

    } catch (e: any) {
      console.error(e);
      const errorMessage = (e.message || '').toLowerCase();
      
      if (errorMessage.includes('blocked') || errorMessage.includes('safety')) {
         setError('Yêu cầu của bạn đã bị chặn vì lý do an toàn. Vui lòng thử một ảnh hoặc một mô tả khác.');
      } else if (errorMessage.includes('quota') || errorMessage.includes('resource_exhausted')) {
        setError('Lỗi: Bạn đã dùng hết lượt tạo ảnh trong hôm nay. Vui lòng quay lại sau hoặc liên hệ quản trị viên để nâng cấp.');
      } else {
        setError(`Đã có lỗi xảy ra. Vui lòng thử lại sau.`);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <div className="container mx-auto p-4 max-w-7xl">
        <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Controls */}
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
            <ImageUploader onImageUpload={handleImageUpload} sourceImagePreview={sourceImage?.preview ?? null} />
            
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Left Sub-Column */}
              <div className="flex flex-col gap-6">
                <ConceptSelector selectedConcept={selectedConcept} onSelectConcept={setSelectedConcept} />
                <StyleSelector selectedStyle={selectedStyle} onSelectStyle={setSelectedStyle} />
                <LayoutSelector selectedLayout={selectedLayout} onSelectLayout={setSelectedLayout} />
                 <div>
                    <div className="border rounded-lg bg-white overflow-hidden">
                        <button
                            onClick={() => setIsOutfitSectionOpen(!isOutfitSectionOpen)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                        >
                            <h2 className="text-xl">4. Chọn Trang Phục</h2>
                            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isOutfitSectionOpen ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        {isOutfitSectionOpen && (
                            <div className="p-4 border-t border-gray-200">
                               <div className="mb-4">
                                    <label className="block text-sm font-semibold text-red-600 mb-2 text-center">Chọn đối tượng cho trang phục</label>
                                    <div className="flex justify-center gap-2">
                                        <button
                                            onClick={() => { setSubjectGender('female'); setSelectedOutfits([]); }}
                                            className={`px-4 py-2 border rounded-lg font-semibold text-sm transition-colors ${subjectGender === 'female' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-300 hover:bg-red-50'}`}
                                        >
                                            Trang Phục Nữ
                                        </button>
                                        <button
                                            onClick={() => { setSubjectGender('male'); setSelectedOutfits([]); }}
                                            className={`px-4 py-2 border rounded-lg font-semibold text-sm transition-colors ${subjectGender === 'male' ? 'bg-red-600 text-white border-red-600' : 'bg-white text-red-600 border-red-300 hover:bg-red-50'}`}
                                        >
                                            Trang Phục Nam
                                        </button>
                                    </div>
                                </div>
                                <OptionsSelector
                                    title={subjectGender === 'female' ? "Gợi ý trang phục Nữ cao cấp" : "Gợi ý trang phục Nam cao cấp"}
                                    options={subjectGender === 'female' ? OUTFITS_WOMEN : OUTFITS_MEN}
                                    selectedOptions={selectedOutfits}
                                    onSelectionChange={setSelectedOutfits}
                                    placeholder="Tìm kiếm trang phục..."
                                />
                            </div>
                        )}
                    </div>
                </div>
              </div>

              {/* Right Sub-Column */}
              <div className="flex flex-col gap-6">
                <div>
                    <div className="border rounded-lg bg-white overflow-hidden">
                        <button
                            onClick={() => setIsDestinationSectionOpen(!isDestinationSectionOpen)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                        >
                            <h2 className="text-xl">6. Chọn Địa Điểm Du Lịch</h2>
                            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isDestinationSectionOpen ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        {isDestinationSectionOpen && (
                            <div className="p-4 border-t border-gray-200">
                                 <label htmlFor="country-select" className="block text-sm font-semibold text-red-600 mb-2">Chọn Quốc Gia</label>
                                 <select
                                    id="country-select"
                                    value={selectedCountryIndex}
                                    onChange={e => {
                                        setSelectedCountryIndex(parseInt(e.target.value));
                                        setSelectedTravelDestinations([]); // Reset selection when country changes
                                    }}
                                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 mb-4"
                                >
                                    {TRAVEL_DESTINATIONS.map((countryData, index) => (
                                        <option key={countryData.country} value={index}>{countryData.country}</option>
                                    ))}
                                </select>
                                <OptionsSelector
                                    title={`Gợi ý 50 địa điểm tại ${TRAVEL_DESTINATIONS[selectedCountryIndex].country}`}
                                    options={TRAVEL_DESTINATIONS[selectedCountryIndex].locations}
                                    selectedOptions={selectedTravelDestinations}
                                    onSelectionChange={setSelectedTravelDestinations}
                                    placeholder="Tìm kiếm địa điểm..."
                                />
                            </div>
                        )}
                    </div>
                </div>
                
                <div>
                    <div className="border rounded-lg bg-white overflow-hidden">
                        <button
                            onClick={() => setIsFrameSectionOpen(!isFrameSectionOpen)}
                            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
                        >
                            <h2 className="text-xl">7. Thêm Khung Viền</h2>
                            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isFrameSectionOpen ? 'rotate-0' : 'rotate-180'}`} />
                        </button>
                        {isFrameSectionOpen && (
                            <div className="p-4 border-t border-gray-200">
                                <OptionsSelector
                                    title="20 loại khung viền đẳng cấp"
                                    options={PREMIUM_FRAMES}
                                    selectedOptions={selectedFrames}
                                    onSelectionChange={setSelectedFrames}
                                    placeholder="Tìm kiếm khung viền..."
                                    singleSelect={true}
                                />
                            </div>
                        )}
                    </div>
                </div>
                
                <div>
                  <h2 className="text-xl font-semibold text-red-600 mb-4 text-center">5. Tùy chọn bổ sung</h2>
                  <textarea
                      value={customPrompt}
                      onChange={(e) => setCustomPrompt(e.target.value)}
                      placeholder="Mô tả chân dung của bạn (vd: người tóc ngắn, mắt buồn...)"
                      className="w-full p-2 border border-gray-300 rounded-md mb-4"
                      rows={2}
                  />
                  <div className="flex flex-col gap-4">
                      <OptionsSelector title="Cầm/Đội/Đeo (Items)" options={HANDHELD_ITEMS} selectedOptions={selectedItems} onSelectionChange={setSelectedItems} placeholder="Tìm kiếm vật phẩm..."/>
                      <OptionsSelector title="Động vật/Thú cưng" options={PETS} selectedOptions={selectedPets} onSelectionChange={setSelectedPets} placeholder="Tìm kiếm thú cưng..."/>
                      <OptionsSelector title="Bối cảnh (Backgrounds)" options={BACKGROUNDS} selectedOptions={selectedBackgrounds} onSelectionChange={setSelectedBackgrounds} placeholder="Tìm kiếm bối cảnh..."/>
                      <OptionsSelector title="Địa điểm (Locations)" options={LOCATIONS} selectedOptions={selectedLocations} onSelectionChange={setSelectedLocations} placeholder="Tìm kiếm địa điểm..."/>
                  </div>
                </div>
              </div>
            </div>

            <GenerationOptions
              selectedAspectRatio={selectedAspectRatio}
              onAspectRatioChange={setSelectedAspectRatio}
              selectedImageCount={selectedImageCount}
              onImageCountChange={setSelectedImageCount}
              onGenerate={handleGenerateClick}
              isLoading={isLoading}
              canGenerate={canGenerate}
              generationWarning={generationWarning}
            />

          </div>

          {/* Right Column: Results */}
          <div className="sticky top-8">
            
            {error && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg relative mb-4" role="alert">{error}</div>}
            
            {isLoading && <Loader />}
            
            {showCongrats && <CongratulationsBanner />}

            {!isLoading && generatedImages.length > 0 && (
              <ImageResult images={generatedImages} />
            )}

            {!isLoading && generatedImages.length === 0 && (
                <div className="text-center p-8 border-2 border-dashed rounded-lg text-red-400">
                    <p className="font-semibold text-lg">Kết quả sẽ hiện ở đây</p>
                    <p>Hãy chọn ảnh và các tùy chọn để bắt đầu sáng tạo!</p>
                </div>
            )}
            <HistoryViewer history={history} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;