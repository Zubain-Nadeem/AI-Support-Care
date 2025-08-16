import React from 'react';

const ActionButtons = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center h-full p-4">
      {/* Voice Note Button */}
      <button className="bg-green-600 hover:bg-green-700 text-white p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center w-full sm:w-48 h-32 sm:h-48 transition-colors shadow-lg">
        <div className="mb-2 sm:mb-4">
          <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-base sm:text-lg font-semibold">Sprachnotiz</span>
      </button>

      {/* Text Note Button */}
      <button className="bg-green-400 hover:bg-green-500 text-white p-6 sm:p-8 rounded-xl flex flex-col items-center justify-center w-full sm:w-48 h-32 sm:h-48 transition-colors shadow-lg">
        <div className="mb-2 sm:mb-4">
          <svg className="w-8 h-8 sm:w-12 sm:h-12" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="text-base sm:text-lg font-semibold">Notiz</span>
      </button>
    </div>
  );
};

export default ActionButtons;
