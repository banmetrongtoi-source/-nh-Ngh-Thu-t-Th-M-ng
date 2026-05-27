
import React, { useState } from 'react';
import { ChevronUpIcon } from './IconComponents';

interface PromptEditorProps {
  prompt: string;
}

const PromptEditor: React.FC<PromptEditorProps> = ({ prompt }) => {
  const [copyStatus, setCopyStatus] = useState('Sao chép');
  const [isOpen, setIsOpen] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(prompt).then(() => {
      setCopyStatus('Đã sao chép!');
      setTimeout(() => setCopyStatus('Sao chép'), 2000);
    }, () => {
      setCopyStatus('Lỗi!');
      setTimeout(() => setCopyStatus('Sao chép'), 2000);
    });
  };

  return (
    <div className="mb-6">
      <div className="border rounded-lg bg-white overflow-hidden">
        <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex justify-between items-center p-4 text-left font-semibold text-red-600 bg-gray-50 hover:bg-gray-100 focus:outline-none"
        >
            <h2 className="text-xl">6. Prompt Chi Tiết (Dành cho AI)</h2>
            <ChevronUpIcon className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-0' : 'rotate-180'}`} />
        </button>
        {isOpen && (
            <div className="p-4 border-t border-gray-200">
                <div className="relative">
                    <textarea
                    readOnly
                    value={prompt}
                    className="w-full h-40 p-3 border border-gray-300 rounded-lg bg-red-50 text-sm leading-relaxed font-mono text-red-800"
                    placeholder="Prompt sẽ được tạo ở đây sau khi bạn chọn các tùy chọn..."
                    />
                    <button
                    onClick={handleCopy}
                    className="absolute top-3 right-3 px-3 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded hover:bg-red-200 transition-colors"
                    >
                    {copyStatus}
                    </button>
                </div>
            </div>
        )}
      </div>
    </div>
  );
};

export default PromptEditor;
