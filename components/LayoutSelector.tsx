import React, { useState } from 'react';
import { LAYOUT_OPTIONS } from '../constants';
import { LayoutOption } from '../types';
import { CheckCircleIcon, ChevronUpIcon } from './IconComponents';

interface LayoutSelectorProps {
  selectedLayout: LayoutOption;
  onSelectLayout: (layout: LayoutOption) => void;
}

const LayoutSelector: React.FC<LayoutSelectorProps> = ({ selectedLayout, onSelectLayout }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="border rounded-lg bg-white overflow-hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
            <h2 className="text-xl">3. Chọn Bố Cục (Layout)</h2>
            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                {LAYOUT_OPTIONS.map((group) => (
                    <div key={group.title} className="mb-4">
                    <h3 className="font-bold text-red-600 mb-3 text-center uppercase tracking-wider">{group.title}</h3>
                    <div className="grid grid-cols-3 gap-3">
                        {group.layouts.map((layout) => {
                        const isSelected = selectedLayout.id === layout.id;
                        return (
                            <button
                            key={layout.id}
                            onClick={() => onSelectLayout(layout)}
                            className={`relative flex flex-col items-center justify-start p-2 rounded-lg border-2 text-center transition-all duration-200 transform hover:scale-105 ${
                                isSelected
                                ? 'border-red-600 bg-red-600 text-white shadow-lg'
                                : 'border-gray-200 bg-white hover:border-red-400'
                            }`}
                            title={layout.name}
                            >
                            <layout.icon className={`w-10 h-10 mb-2 transition-colors ${isSelected ? 'text-white' : 'text-red-500'}`} />
                            <span className={`text-xs font-medium leading-tight transition-colors ${isSelected ? 'text-white' : 'text-red-600'}`}>{layout.name}</span>
                            {isSelected && (
                                <CheckCircleIcon className="absolute -top-2 -right-2 w-6 h-6 text-white bg-red-600 rounded-full" />
                            )}
                            </button>
                        );
                        })}
                    </div>
                    </div>
                ))}
            </div>
        )}
      </div>
    </div>
  );
};

export default LayoutSelector;