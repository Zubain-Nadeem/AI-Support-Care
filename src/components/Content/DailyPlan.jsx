import React from 'react';

const DailyPlan = () => {
  const residents = [
    { id: 1, title: 'Frau', name: 'Mustermann' },
    { id: 2, title: 'Fr.', name: 'Schwarz' },
    { id: 3, title: 'Fr.', name: 'Koch' },
    { id: 4, title: 'Hr.', name: 'Lehmann' },
    { id: 5, title: 'Fr.', name: 'Lange' },
    { id: 6, title: 'Fr.', name: 'Meyer' },
    { id: 7, title: 'Hr.', name: 'Sommer' },
    { id: 8, title: 'Fr.', name: 'Borchel' },
  ];

  return (
    <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm h-full overflow-y-auto">
      <h2 className="text-lg lg:text-xl font-bold text-gray-800 mb-4">Tagesplan</h2>
      <div className="space-y-2">
        {residents.map((resident) => (
          <div
            key={resident.id}
            className="flex items-center p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors"
          >
            <span className="text-gray-600 font-medium text-sm lg:text-base">
              {resident.title} {resident.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DailyPlan;
