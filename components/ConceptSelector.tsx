import React, { useState } from 'react';
import { CONCEPT_GROUPS } from '../constants';
import { Concept } from '../types';
import { CheckCircleIcon, ChevronUpIcon } from './IconComponents';

interface ConceptSelectorProps {
  selectedConcept: Concept;
  onSelectConcept: (concept: Concept) => void;
}

const ConceptSelector: React.FC<ConceptSelectorProps> = ({ selectedConcept, onSelectConcept }) => {
  const [isMainOpen, setIsMainOpen] = useState(true); // Main section toggle
  // Open the first group by default to guide the user
  const [openGroups, setOpenGroups] = useState<string[]>([CONCEPT_GROUPS[0]?.title].filter(Boolean) as string[]);

  const toggleGroup = (title: string) => {
    setOpenGroups(prev =>
      prev.includes(title)
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div>
      <div className="border rounded-lg bg-white overflow-hidden">
        <button
            onClick={() => setIsMainOpen(!isMainOpen)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
            <h2 className="text-xl">1. Chọn Hiệu Ứng (Concept)</h2>
            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isMainOpen ? 'rotate-0' : 'rotate-180'}`} />
        </button>
        {isMainOpen && (
            <div className="p-4 border-t border-gray-200">
                {CONCEPT_GROUPS.map((group) => {
                  const isGroupOpen = openGroups.includes(group.title);
                  return (
                    <div key={group.title} className="mb-2 border-b border-gray-100 last:border-b-0">
                      <button
                        onClick={() => toggleGroup(group.title)}
                        className="w-full flex justify-between items-center py-3 px-1 text-left font-semibold text-red-600 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <h3 className="uppercase tracking-wider text-base">{group.title}</h3>
                        <ChevronUpIcon className={`w-5 h-5 transition-transform ${isGroupOpen ? 'rotate-0' : 'rotate-180'}`} />
                      </button>
                      {isGroupOpen && (
                        <div className="pt-2 pb-4">
                          <div className="grid grid-cols-4 gap-2">
                            {group.concepts.map((concept) => {
                              const isSelected = selectedConcept.id === concept.id;
                              return (
                                <button
                                  key={concept.id}
                                  onClick={() => onSelectConcept(concept)}
                                  className={`relative flex flex-col items-center justify-center p-1.5 rounded-lg border-2 text-center transition-all duration-200 transform hover:scale-105 ${
                                      isSelected
                                      ? 'border-red-600 bg-red-600 text-white shadow-lg'
                                      : 'border-gray-200 bg-white hover:border-red-400'
                                  }`}
                                  title={concept.name}
                                >
                                  <concept.icon className={`w-7 h-7 mb-1 transition-colors ${isSelected ? 'text-white' : 'text-red-500'}`} />
                                  <span className={`text-xs font-medium leading-tight transition-colors ${isSelected ? 'text-white' : 'text-red-600'}`}>{concept.name}</span>
                                  {isSelected && (
                                    <CheckCircleIcon className="absolute -top-2 -right-2 w-6 h-6 text-white bg-red-600 rounded-full" />
                                  )}
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
        )}
      </div>
    </div>
  );
};

export default ConceptSelector;
