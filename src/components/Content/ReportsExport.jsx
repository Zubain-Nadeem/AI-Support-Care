import React, { useState } from 'react';

const ReportsExport = () => {
  const [selectedReport, setSelectedReport] = useState('daily');
  const [selectedFormat, setSelectedFormat] = useState('pdf');

  const reports = [
    {
      id: 'daily',
      name: 'Tagesbericht',
      description: 'Tägliche Aktivitäten und Pflegemaßnahmen',
      icon: '📅',
      lastGenerated: 'Heute, 08:00'
    },
    {
      id: 'weekly',
      name: 'Wochenbericht',
      description: 'Wöchentliche Zusammenfassung und Trends',
      icon: '📊',
      lastGenerated: 'Gestern, 18:00'
    },
    {
      id: 'monthly',
      name: 'Monatsbericht',
      description: 'Monatliche Statistiken und Analysen',
      icon: '📈',
      lastGenerated: 'Vor 3 Tagen'
    },
    {
      id: 'medication',
      name: 'Medikamentenbericht',
      description: 'Übersicht aller Medikamentengaben',
      icon: '💊',
      lastGenerated: 'Heute, 12:00'
    }
  ];

  const exportFormats = [
    { id: 'pdf', name: 'PDF', icon: '📄' },
    { id: 'csv', name: 'CSV', icon: '📊' },
    { id: 'excel', name: 'Excel', icon: '📈' },
    { id: 'json', name: 'JSON', icon: '🔧' }
  ];

  const statistics = [
    { label: 'Aktive Bewohner', value: '24', change: '+2', trend: 'up' },
    { label: 'Heutige Termine', value: '8', change: '-1', trend: 'down' },
    { label: 'Offene Aufgaben', value: '12', change: '+3', trend: 'up' },
    { label: 'KI-Vorschläge', value: '15', change: '+5', trend: 'up' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Berichte & Export</h3>

      {/* Statistics Overview */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {statistics.map((stat, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
              </div>
              <div className={`flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  {stat.trend === 'up' ? (
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                  ) : (
                    <path fillRule="evenodd" d="M12 13a1 1 0 100 2h5a1 1 0 001-1v-5a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586l-4.293-4.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" clipRule="evenodd" />
                  )}
                </svg>
                <span className="text-sm font-medium">{stat.change}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Report Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Berichtstyp auswählen</h4>
        <div className="grid grid-cols-2 gap-3">
          {reports.map((report) => (
            <div
              key={report.id}
              className={`p-3 rounded-lg border cursor-pointer transition-colors ${
                selectedReport === report.id
                  ? 'border-green-500 bg-green-50'
                  : 'border-gray-200 hover:border-gray-300'
              }`}
              onClick={() => setSelectedReport(report.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">{report.icon}</div>
                <div className="flex-1">
                  <h5 className="text-sm font-medium text-gray-800">{report.name}</h5>
                  <p className="text-xs text-gray-500">{report.description}</p>
                  <p className="text-xs text-gray-400 mt-1">Zuletzt: {report.lastGenerated}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Export Format Selection */}
      <div className="mb-6">
        <h4 className="text-sm font-medium text-gray-700 mb-3">Export-Format</h4>
        <div className="flex space-x-3">
          {exportFormats.map((format) => (
            <button
              key={format.id}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-colors ${
                selectedFormat === format.id
                  ? 'border-green-500 bg-green-50 text-green-700'
                  : 'border-gray-200 hover:border-gray-300 text-gray-600'
              }`}
              onClick={() => setSelectedFormat(format.id)}
            >
              <span className="text-lg">{format.icon}</span>
              <span className="text-sm font-medium">{format.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Export Actions */}
      <div className="flex space-x-3">
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          <div className="flex items-center justify-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span>Bericht generieren</span>
          </div>
        </button>
        <button className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
            <span>Einstellungen</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default ReportsExport;
