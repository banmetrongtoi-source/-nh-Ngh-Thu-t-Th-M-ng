

import React from 'react';

const CongratulationsBanner: React.FC = () => {
  return (
    <div className="text-center mt-4 mb-6 bg-white p-4 rounded-lg shadow-xl border-4 animate-super-pulse-border">
      <h2 className="text-2xl font-bold text-red-600">🎉 KIỆT TÁC CỦA BẠN ĐẸP XUẤT SẮC 🎉</h2>
      <p className="mt-2 text-gray-800 text-base">
        Tham gia nhóm Zalo để nhận thêm nhiều app và quà tặng hấp dẫn!
      </p>
      <a
        href="https://byvn.net/ky3c"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-4 inline-block bg-red-600 text-white font-bold py-2 px-6 rounded-full text-base hover:bg-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        NHẬN THÊM APP TẠI ĐÂY
      </a>
    </div>
  );
};

export default CongratulationsBanner;