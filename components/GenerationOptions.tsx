import React from 'react';
import { AspectRatio } from '../types';
import { ASPECT_RATIOS, IMAGE_COUNTS } from '../constants';
import { SparklesIcon, CheckCircleIcon } from './IconComponents';

interface GenerationOptionsProps {
    selectedAspectRatio: AspectRatio;
    onAspectRatioChange: (aspectRatio: AspectRatio) => void;
    selectedImageCount: number;
    onImageCountChange: (count: number) => void;
    onGenerate: () => void;
    isLoading: boolean;
    canGenerate: boolean;
    generationWarning: string | null;
}

const GenerationOptions: React.FC<GenerationOptionsProps> = ({
  selectedAspectRatio,
  onAspectRatioChange,
  selectedImageCount,
  onImageCountChange,
  onGenerate,
  isLoading,
  canGenerate,
  generationWarning,
}) => {
  return (
    <div className="p-4 mt-6 border-t-2 border-red-200 bg-white sticky bottom-0 rounded-b-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
            <label className="block text-md font-bold text-red-600 mb-2 text-center">Tỉ lệ khung hình</label>
            <div className="grid grid-cols-4 gap-2">
              {ASPECT_RATIOS.map(ratio => {
                const isSelected = selectedAspectRatio.id === ratio.id;
                return (
                  <button
                    key={ratio.id}
                    onClick={() => onAspectRatioChange(ratio)}
                    className={`flex items-center justify-center gap-1 px-2 py-2 border-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
                      isSelected 
                        ? 'bg-red-600 text-white border-red-700 shadow-lg animate-selected-glow' 
                        : 'bg-white text-red-600 border-gray-300 hover:bg-red-50 hover:border-red-400'
                    }`}
                  >
                    {isSelected && <CheckCircleIcon className="w-5 h-5" />}
                    <span>{ratio.name}</span>
                  </button>
                )
              })}
            </div>
        </div>
        <div>
            <label className="block text-md font-bold text-red-600 mb-2 text-center">Số lượng ảnh tạo ra</label>
            <div className="grid grid-cols-4 gap-2">
              {IMAGE_COUNTS.map(count => {
                const isSelected = selectedImageCount === count;
                return (
                  <button
                    key={count}
                    onClick={() => onImageCountChange(count)}
                    className={`flex items-center justify-center gap-1 px-2 py-2 border-2 rounded-lg text-sm font-bold transition-all transform hover:scale-105 ${
                      isSelected
                        ? 'bg-red-600 text-white border-red-700 shadow-lg animate-selected-glow' 
                        : 'bg-white text-red-600 border-gray-300 hover:bg-red-50 hover:border-red-400'
                    }`}
                  >
                    {isSelected && <CheckCircleIcon className="w-5 h-5" />}
                    <span>{count}</span>
                  </button>
                )
              })}
            </div>
        </div>
      </div>
      <button
        onClick={onGenerate}
        disabled={isLoading || !canGenerate}
        className="w-full flex items-center justify-center gap-2 px-6 py-4 border border-transparent text-2xl font-bold rounded-md shadow-lg text-white bg-gradient-to-r from-red-600 to-rose-500 hover:from-red-700 hover:to-rose-600 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-102 transition-transform duration-300"
      >
        {isLoading ? (
          <>
            <div className="animate-spin rounded-full h-6 w-6 border-t-2 border-b-2 border-white"></div>
            <span>Đang kiến tạo kiệt tác...</span>
          </>
        ) : (
          <>
            <SparklesIcon className="w-8 h-8" />
            Kiến Tạo Kiệt Tác Ngay!
          </>
        )}
      </button>
      {generationWarning && (
         <p className="text-sm text-center text-red-600 mt-3 font-semibold">{generationWarning}</p>
      )}
    </div>
  );
};

export default GenerationOptions;