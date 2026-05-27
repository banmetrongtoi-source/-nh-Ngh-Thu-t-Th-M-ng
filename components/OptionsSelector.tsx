import React, { useState, useMemo } from 'react';

interface OptionsSelectorProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onSelectionChange: (selected: string[]) => void;
  placeholder?: string;
  singleSelect?: boolean;
}

const OptionsSelector: React.FC<OptionsSelectorProps> = ({ title, options, selectedOptions, onSelectionChange, placeholder = "Tìm kiếm...", singleSelect = false }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredOptions = useMemo(() =>
    options.filter(option =>
      option.toLowerCase().includes(searchTerm.toLowerCase())
    ), [options, searchTerm]);

  const handleToggle = (option: string) => {
    if (singleSelect) {
      // If the same option is clicked, deselect it. Otherwise, select the new one.
      const newSelection = selectedOptions.includes(option) ? [] : [option];
      onSelectionChange(newSelection);
    } else {
      const newSelection = selectedOptions.includes(option)
        ? selectedOptions.filter(item => item !== option)
        : [...selectedOptions, option];
      onSelectionChange(newSelection);
    }
  };

  return (
    <div>
      <label className="block text-sm font-semibold text-red-600 mb-2">{title}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 mb-2"
      />
      <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto p-2 border rounded-md bg-gray-50">
        {filteredOptions.length > 0 ? filteredOptions.map(option => {
          const isSelected = selectedOptions.includes(option);
          return (
            <button
              key={option}
              onClick={() => handleToggle(option)}
              className={`w-full text-left px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${
                isSelected 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'bg-white border-red-300 text-red-600 hover:bg-red-50'
              }`}
            >
              {option}
            </button>
          );
        }) : (
          <p className="text-sm text-gray-500 p-2 col-span-3 text-center">Không tìm thấy lựa chọn nào.</p>
        )}
      </div>
    </div>
  );
};

export default OptionsSelector;