import React from 'react';
import ActionButtons from '../Content/ActionButtons';
import DailyPlan from '../Content/DailyPlan';
import ResidentCard from '../Content/ResidentCard';
import DocumentUpload from '../Content/DocumentUpload';
import AIInsights from '../Content/AIInsights';
import ReportsExport from '../Content/ReportsExport';
import UserManagement from '../Content/UserManagement';

const Dashboard = ({ activeView = 'residents', setActiveView }) => {
  const sampleResident = {
    title: 'Frau',
    name: 'Mustermann',
    dateOfBirth: '15.03.1945',
    bloodType: 'A+',
    weight: '68',
    allergies: ['Penicillin', 'Nüsse'],
    medications: [
      { name: 'Aspirin', dosage: '100mg täglich' },
      { name: 'Vitamin D', dosage: '1000 IE' }
    ],
    nextAppointment: 'Morgen, 14:00 Uhr - Arzttermin'
  };

  const renderMainView = () => (
    <div className="flex justify-center items-center h-full">
      {/* Centered Action Buttons */}
      <ActionButtons />
    </div>
  );

  const renderResidentsView = () => (
    <div className="flex justify-center items-center h-full">
      {/* Centered Action Buttons */}
      <ActionButtons />
    </div>
  );

  const renderDocumentsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Dokumente & KI-Scan</h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <DocumentUpload />
        <AIInsights />
      </div>
    </div>
  );

  const renderReportsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Berichte & Export</h2>
      </div>
      <ReportsExport />
    </div>
  );

  const renderUsersView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Benutzerverwaltung</h2>
      </div>
      <UserManagement />
    </div>
  );

  const renderScheduleView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Dienstplan</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Dienstplan bearbeiten
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600">Dienstplan-Funktionalität wird implementiert...</p>
      </div>
    </div>
  );

  const renderAppointmentsView = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">Termine</h2>
        <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
          Termin hinzufügen
        </button>
      </div>
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <p className="text-gray-600">Termin-Funktionalität wird implementiert...</p>
      </div>
    </div>
  );

  const renderView = () => {
    switch (activeView) {
      case 'residents':
        return renderResidentsView();
      case 'documents':
        return renderDocumentsView();
      case 'reports':
        return renderReportsView();
      case 'users':
        return renderUsersView();
      case 'schedule':
        return renderScheduleView();
      case 'appointments':
        return renderAppointmentsView();
      case 'evidence':
        return renderReportsView(); // Use reports view for evidence
      default:
        return renderMainView();
    }
  };

  return (
    <div className="h-full">
      {activeView !== 'residents' && (
        <div className="mb-6">
          <button
            onClick={() => setActiveView('residents')}
            className="flex items-center space-x-2 text-green-600 hover:text-green-700 font-medium"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            <span>Zurück zur Bewohnerakte</span>
          </button>
        </div>
      )}
      {renderView()}
    </div>
  );
};

export default Dashboard;
