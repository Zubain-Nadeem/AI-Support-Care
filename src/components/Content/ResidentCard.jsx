import React from 'react';

const ResidentCard = ({ resident }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {resident.title} {resident.name}
          </h3>
          <p className="text-sm text-gray-500">Geboren: {resident.dateOfBirth}</p>
        </div>
        <div className="flex space-x-2">
          {resident.allergies?.map((allergy, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-red-100 text-red-700 text-xs rounded-full"
            >
              {allergy}
            </span>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        {/* Medical Data */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Medizinische Daten</h4>
          <div className="grid grid-cols-2 gap-2 text-sm">
            <div>
              <span className="text-gray-500">Blutgruppe:</span>
              <span className="ml-2 font-medium">{resident.bloodType}</span>
            </div>
            <div>
              <span className="text-gray-500">Gewicht:</span>
              <span className="ml-2 font-medium">{resident.weight} kg</span>
            </div>
          </div>
        </div>

        {/* Medications */}
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Medikamente</h4>
          <div className="space-y-1">
            {resident.medications?.map((med, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="text-gray-600">{med.name}</span>
                <span className="text-gray-400">{med.dosage}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Next Appointment */}
        {resident.nextAppointment && (
          <div className="pt-2 border-t border-gray-100">
            <h4 className="text-sm font-medium text-gray-700 mb-1">Nächster Termin</h4>
            <p className="text-sm text-gray-600">{resident.nextAppointment}</p>
          </div>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors">
          Akte öffnen
        </button>
      </div>
    </div>
  );
};

export default ResidentCard;
