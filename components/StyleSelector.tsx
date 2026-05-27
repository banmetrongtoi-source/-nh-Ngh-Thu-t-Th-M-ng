import React, { useState } from 'react';
import { STYLES } from '../constants';
import { Style } from '../types';
import { ChevronUpIcon } from './IconComponents';

interface StyleSelectorProps {
  selectedStyle: Style;
  onSelectStyle: (style: Style) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedStyle, onSelectStyle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
       <div className="border rounded-lg bg-white overflow-hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
            <h2 className="text-xl">2. Chọn Phong Cách (Style)</h2>
            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                <div className="grid grid-cols-3 gap-2">
                    {STYLES.map((style) => {
                    const isSelected = selectedStyle.id === style.id;
                    return (
                        <button
                        key={style.id}
                        onClick={() => onSelectStyle(style)}
                        className={`w-full text-center px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                            isSelected ? 'bg-red-600 border-red-600 text-white' : 'bg-white border-red-300 text-red-600 hover:bg-red-50'
                        }`}
                        >
                        {style.name}
                        </button>
                    );
                    })}
                </div>
            </div>
        )}
       </div>
    </div>
  );
};

export default StyleSelector;