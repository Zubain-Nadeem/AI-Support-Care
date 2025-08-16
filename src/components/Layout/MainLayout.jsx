import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import StatusBar from './StatusBar';
import DailyPlan from '../Content/DailyPlan';
import MobileDailySchedule from '../Content/MobileDailySchedule';

const MainLayout = ({ children }) => {
  const [activeView, setActiveView] = useState('residents');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [dailyScheduleOpen, setDailyScheduleOpen] = useState(false);

  const handleNavigation = (view) => {
    setActiveView(view);
    // Close sidebar on mobile after navigation
    if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`fixed lg:relative z-50 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'} transition-transform duration-300 ease-in-out`}>
        <Sidebar onNavigate={handleNavigation} activeView={activeView} />
      </div>
      
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <Header onMenuClick={() => setSidebarOpen(true)} />
        
        {/* Main Content */}
        <div className="flex-1 flex flex-col lg:flex-row">
          {/* Center Content */}
          <div className="flex-1 p-4 lg:p-8 min-w-0">
            {React.cloneElement(children, { activeView, setActiveView })}
          </div>
        </div>
        
        {/* Status Bar */}
        <StatusBar />
      </div>

      {/* Right Panel - Daily Schedule (hidden on mobile) */}
      <div className="hidden lg:block w-80 bg-white border-l border-gray-200">
        <DailyPlan />
      </div>

      {/* Mobile Daily Schedule Button */}
      <div className="lg:hidden fixed bottom-20 right-4 z-30">
        <button 
          onClick={() => setDailyScheduleOpen(true)}
          className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Mobile Daily Schedule Modal */}
      <MobileDailySchedule 
        isOpen={dailyScheduleOpen} 
        onClose={() => setDailyScheduleOpen(false)} 
      />
    </div>
  );
};

export default MainLayout;
