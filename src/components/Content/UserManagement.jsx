import React, { useState } from 'react';

const UserManagement = () => {
  const [activeTab, setActiveTab] = useState('users');

  const users = [
    {
      id: 1,
      name: 'Peter M.',
      email: 'peter.m@curalink.de',
      role: 'Pflegekraft',
      shift: 'Frühdienst',
      status: 'online',
      lastActive: 'Jetzt',
      permissions: ['read', 'write', 'export']
    },
    {
      id: 2,
      name: 'Anna Schmidt',
      email: 'anna.s@curalink.de',
      role: 'Pflegekraft',
      shift: 'Spätdienst',
      status: 'offline',
      lastActive: 'Vor 2 Stunden',
      permissions: ['read', 'write']
    },
    {
      id: 3,
      name: 'Dr. Müller',
      email: 'dr.mueller@curalink.de',
      role: 'Arzt',
      shift: 'Tagesdienst',
      status: 'online',
      lastActive: 'Jetzt',
      permissions: ['read', 'write', 'admin', 'export']
    },
    {
      id: 4,
      name: 'Maria Weber',
      email: 'maria.w@curalink.de',
      role: 'Pflegekraft',
      shift: 'Nachtdienst',
      status: 'offline',
      lastActive: 'Gestern',
      permissions: ['read', 'write']
    }
  ];

  const roles = [
    {
      id: 'admin',
      name: 'Administrator',
      description: 'Vollzugriff auf alle Funktionen',
      permissions: ['read', 'write', 'admin', 'export', 'user_management'],
      userCount: 1
    },
    {
      id: 'doctor',
      name: 'Arzt',
      description: 'Medizinische Dokumentation und Berichte',
      permissions: ['read', 'write', 'export'],
      userCount: 2
    },
    {
      id: 'nurse',
      name: 'Pflegekraft',
      description: 'Pflegedokumentation und tägliche Aufgaben',
      permissions: ['read', 'write'],
      userCount: 8
    },
    {
      id: 'viewer',
      name: 'Betrachter',
      description: 'Nur Leserechte für Berichte',
      permissions: ['read'],
      userCount: 3
    }
  ];

  const getStatusColor = (status) => {
    return status === 'online' ? 'bg-green-500' : 'bg-gray-400';
  };

  const getPermissionBadge = (permission) => {
    const colors = {
      read: 'bg-blue-100 text-blue-700',
      write: 'bg-green-100 text-green-700',
      admin: 'bg-red-100 text-red-700',
      export: 'bg-purple-100 text-purple-700',
      user_management: 'bg-orange-100 text-orange-700'
    };
    return colors[permission] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Benutzerverwaltung</h3>

      {/* Tabs */}
      <div className="flex space-x-1 mb-6 bg-gray-100 rounded-lg p-1">
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'users'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('users')}
        >
          Benutzer
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'roles'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('roles')}
        >
          Rollen & Rechte
        </button>
        <button
          className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
            activeTab === 'security'
              ? 'bg-white text-gray-800 shadow-sm'
              : 'text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => setActiveTab('security')}
        >
          Sicherheit
        </button>
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-medium text-gray-700">Aktive Benutzer</h4>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Benutzer hinzufügen
            </button>
          </div>
          <div className="space-y-3">
            {users.map((user) => (
              <div key={user.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-medium">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className={`absolute -bottom-1 -right-1 w-3 h-3 ${getStatusColor(user.status)} rounded-full border-2 border-white`}></div>
                  </div>
                  <div>
                    <h5 className="text-sm font-medium text-gray-800">{user.name}</h5>
                    <p className="text-xs text-gray-500">{user.email}</p>
                    <p className="text-xs text-gray-400">{user.role} • {user.shift}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    {user.permissions.map((permission) => (
                      <span
                        key={permission}
                        className={`px-2 py-1 text-xs rounded-full ${getPermissionBadge(permission)}`}
                      >
                        {permission}
                      </span>
                    ))}
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-gray-500">Zuletzt aktiv</p>
                    <p className="text-xs font-medium text-gray-700">{user.lastActive}</p>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Roles Tab */}
      {activeTab === 'roles' && (
        <div>
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-sm font-medium text-gray-700">Rollen & Berechtigungen</h4>
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Rolle erstellen
            </button>
          </div>
          <div className="space-y-4">
            {roles.map((role) => (
              <div key={role.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h5 className="text-sm font-medium text-gray-800">{role.name}</h5>
                    <p className="text-xs text-gray-500">{role.description}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-800">{role.userCount}</p>
                    <p className="text-xs text-gray-500">Benutzer</p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {role.permissions.map((permission) => (
                    <span
                      key={permission}
                      className={`px-2 py-1 text-xs rounded-full ${getPermissionBadge(permission)}`}
                    >
                      {permission}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Security Tab */}
      {activeTab === 'security' && (
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-4">Sicherheitseinstellungen</h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-800">Zwei-Faktor-Authentifizierung</h5>
                <p className="text-xs text-gray-500">Erhöhte Sicherheit für alle Benutzer</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Aktiviert</span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-800">Automatische Sperrung</h5>
                <p className="text-xs text-gray-500">Sperrt inaktive Sitzungen nach 30 Minuten</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Aktiviert</span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <h5 className="text-sm font-medium text-gray-800">Verschlüsselung</h5>
                <p className="text-xs text-gray-500">Alle Daten sind Ende-zu-Ende verschlüsselt</p>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-green-600 font-medium">Aktiviert</span>
                <button className="p-1 text-gray-400 hover:text-gray-600">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserManagement;
