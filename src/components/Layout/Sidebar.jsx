import React from 'react';

const Sidebar = ({ onNavigate, activeView = 'residents' }) => {
  const navigationItems = [
    { id: 'residents', name: 'Bewohnerakte' },
    { id: 'reports', name: 'Berichte' },
    { id: 'evidence', name: 'Nachweise' },
    { id: 'schedule', name: 'Dienstplan' },
    { id: 'documents', name: 'Dokumente' },
    { id: 'appointments', name: 'Termine' },
  ];

  const handleItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className="w-64 lg:w-64 bg-white h-screen flex flex-col shadow-sm">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-end p-4">
        <button className="text-green-800 hover:text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Logo */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
            <span className="text-white font-bold text-lg">c</span>
          </div>
          <span className="text-xl font-bold text-green-600">curalink</span>
        </div>
      </div>

      <div className="flex-1 p-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center mb-3 cursor-pointer rounded-lg p-3 transition-colors ${
              activeView === item.id
                ? 'bg-green-50 text-green-700'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className={`w-2 h-2 rounded-full mr-3 ${
              activeView === item.id ? 'bg-green-500' : 'bg-green-400'
            }`}></div>
            <span className="font-medium text-sm">{item.name}</span>
          </div>
        ))}
      </div>
      
      {/* Bottom indicator */}
      <div className="p-4 border-t border-gray-100">
        <div className="w-full h-1 bg-gray-200 rounded-full">
          <div className="w-1/4 h-1 bg-green-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
