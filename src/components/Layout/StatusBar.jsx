import React from 'react';

const StatusBar = () => {
  return (
    <div className="bg-white border-t border-gray-200 px-4 lg:px-6 py-3">
      <div className="flex flex-col sm:flex-row items-center justify-between text-sm space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-4 lg:space-x-6">
          {/* Synchronization Status */}
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
            <span className="text-gray-600">Synchronisiert</span>
          </div>

          {/* AI Status */}
          <div className="flex items-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-600">KI aktiv</span>
          </div>
        </div>

        {/* Slogan */}
        <div className="flex-1 text-center order-first sm:order-none">
          <span className="text-green-600 font-medium">Pflege, die verbindet.</span>
        </div>

        {/* User Info */}
        <div className="flex items-center">
          <span className="text-gray-600 text-xs sm:text-sm">Peter M. (Frühdienst)</span>
        </div>
      </div>
    </div>
  );
};

export default StatusBar;
