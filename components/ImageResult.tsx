
import React, { useState } from 'react';
import { DownloadIcon } from './IconComponents';

interface ImageResultProps {
  images: string[];
}

const ImageResult: React.FC<ImageResultProps> = ({ images }) => {
  const [copyStatus, setCopyStatus] = useState('Sao chép');
  const accountNumber = '19035907828017';

  if (images.length === 0) {
    return null;
  }

  const handleDownload = (imageSrc: string, index: number) => {
    const link = document.createElement('a');
    link.href = imageSrc;
    link.download = `NGUYEN-QUOC-THIEN-AI-${new Date().getTime()}-${index}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(accountNumber).then(() => {
      setCopyStatus('Đã chép!');
      setTimeout(() => {
        setCopyStatus('Sao chép');
      }, 2000);
    });
  };

  return (
    <div className="mt-8">
        <h2 className="text-2xl font-bold text-red-600 my-4 text-center">Kết Quả</h2>
        <div className="grid grid-cols-1 gap-4">
            {images.map((img, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-lg">
                <img src={img} alt={`Generated image ${index + 1}`} className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <button
                    onClick={() => handleDownload(img, index)}
                    className="flex items-center gap-2 px-4 py-2 bg-white text-red-700 font-semibold rounded-lg shadow-md opacity-0 group-hover:opacity-100 transform group-hover:scale-100 scale-90 transition-all duration-300"
                >
                    <DownloadIcon className="w-5 h-5" />
                    Tải xuống
                </button>
                </div>
            </div>
            ))}
        </div>

        <div className="mt-8 p-4 border-2 border-dashed border-red-300 bg-red-50 rounded-xl text-center">
            <p className="text-red-800 font-semibold text-lg">
                Chúc mừng Anh chị đã có ảnh đẹp!
            </p>
            <p className="text-red-700 mt-1">
                Nếu Anh Chị hài lòng với app tạo ảnh này, thì có thể mời THIỆN 1 ly Cà phê nhé!
            </p>
            <div className="mt-4 text-left inline-block bg-white p-4 rounded-lg border-2 border-red-300 shadow-md relative">
                <p className="text-red-900 mb-2"><strong className="font-sans font-semibold text-sm">Tên TK:</strong> <span className="font-mono">NGUYỄN QUỐC THIỆN</span></p>
                <p className="text-red-900 mb-2"><strong className="font-sans font-semibold text-sm">Ngân hàng:</strong> <span className="font-mono">TECHCOMBANK</span></p>
                <div className="flex items-center gap-2 bg-red-50 p-2 rounded-md">
                    <strong className="font-sans font-semibold text-sm text-red-900">STK:</strong>
                    <span className="font-mono text-xl font-bold text-red-700 tracking-wider">
                        {accountNumber}
                    </span>
                    <button
                        onClick={handleCopyToClipboard}
                        className="ml-auto px-2 py-1 bg-red-100 text-red-700 text-xs font-semibold rounded hover:bg-red-200 transition-colors"
                        title="Sao chép số tài khoản"
                    >
                        {copyStatus}
                    </button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ImageResult;
