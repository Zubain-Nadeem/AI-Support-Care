import React from 'react';

const Sidebar = ({ onNavigate, activeView = 'main' }) => {
  const navigationItems = [
    { id: 'main', name: 'Dashboard', icon: '🏠' },
    { id: 'residents', name: 'Bewohnerakte', icon: '👤' },
    { id: 'reports', name: 'Berichte', icon: '📊' },
    { id: 'documents', name: 'Dokumente', icon: '📁' },
    { id: 'users', name: 'Benutzer', icon: '👥' },
    { id: 'schedule', name: 'Dienstplan', icon: '📅' },
    { id: 'appointments', name: 'Termine', icon: '⏰' },
  ];

  const handleItemClick = (itemId) => {
    if (onNavigate) {
      onNavigate(itemId);
    }
  };

  return (
    <div className="w-64 lg:w-64 bg-green-100 h-screen flex flex-col">
      {/* Mobile Close Button */}
      <div className="lg:hidden flex justify-end p-4">
        <button className="text-green-800 hover:text-green-600">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 p-4">
        {navigationItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center mb-4 cursor-pointer rounded-lg p-2 transition-colors ${
              activeView === item.id
                ? 'bg-green-200 text-green-800'
                : 'hover:bg-green-200 text-green-800'
            }`}
            onClick={() => handleItemClick(item.id)}
          >
            <div className={`w-3 h-3 rounded-full mr-3 ${
              activeView === item.id ? 'bg-green-600' : 'bg-green-600'
            }`}></div>
            <span className="font-medium">{item.name}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-green-200">
        <div className="w-full h-1 bg-green-200 rounded-full">
          <div className="w-1/3 h-1 bg-green-600 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
