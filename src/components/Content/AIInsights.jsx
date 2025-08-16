import React from 'react';

const AIInsights = () => {
  const insights = [
    {
      id: 1,
      type: 'suggestion',
      title: 'Standard-Phrase vorschlagen',
      content: 'Für "Medikament verabreicht" könnte "Medikament X wurde wie verordnet um 08:00 Uhr verabreicht" verwendet werden.',
      icon: '💡',
      priority: 'medium'
    },
    {
      id: 2,
      type: 'error',
      title: 'Plausibilitätsprüfung',
      content: 'Blutdruck-Wert 180/120 mmHg ist ungewöhnlich hoch. Bitte überprüfen Sie die Eingabe.',
      icon: '⚠️',
      priority: 'high'
    },
    {
      id: 3,
      type: 'pattern',
      title: 'Muster erkannt',
      content: 'Häufige Aktivität: "Spaziergang im Garten" um 14:00 Uhr. Automatische Vorschläge aktiviert.',
      icon: '📊',
      priority: 'low'
    },
    {
      id: 4,
      type: 'reminder',
      title: 'Erinnerung',
      content: 'Nächste Medikamenten-Gabe für Frau Mustermann in 30 Minuten.',
      icon: '⏰',
      priority: 'high'
    }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'border-red-200 bg-red-50';
      case 'medium': return 'border-yellow-200 bg-yellow-50';
      case 'low': return 'border-blue-200 bg-blue-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'error': return 'text-red-600';
      case 'suggestion': return 'text-yellow-600';
      case 'pattern': return 'text-blue-600';
      case 'reminder': return 'text-green-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-800">KI-Einblicke</h3>
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-green-600">KI aktiv</span>
        </div>
      </div>

      <div className="space-y-3">
        {insights.map((insight) => (
          <div
            key={insight.id}
            className={`p-4 rounded-lg border-l-4 ${getPriorityColor(insight.priority)}`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{insight.icon}</div>
              <div className="flex-1">
                <h4 className={`text-sm font-medium ${getTypeColor(insight.type)}`}>
                  {insight.title}
                </h4>
                <p className="text-sm text-gray-700 mt-1">{insight.content}</p>
                <div className="flex items-center space-x-4 mt-2">
                  <button className="text-xs text-green-600 hover:text-green-700 font-medium">
                    Anwenden
                  </button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">
                    Ignorieren
                  </button>
                  <button className="text-xs text-gray-500 hover:text-gray-700">
                    Mehr erfahren
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">KI-Lernfortschritt</span>
          <div className="flex items-center space-x-2">
            <div className="w-20 bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <span className="text-gray-500">75%</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIInsights;
