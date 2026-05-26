
import React from 'react';
import { NavLink } from 'react-router-dom';
import { MessageSquare, List, BarChart3, Clock, Settings } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navItems = [
    { path: '/', icon: MessageSquare, label: '对话' },
    { path: '/clues', icon: List, label: '线索看板' },
    { path: '/dashboard', icon: BarChart3, label: '态势概览' },
    { path: '/schedule', icon: Clock, label: '巡检计划' },
    { path: '/settings', icon: Settings, label: '设置' }
  ];

  return (
    <div className="w-64 bg-gray-900 text-white h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-800">
        <h1 className="text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
            <span className="text-sm">食</span>
          </div>
          网络餐饮巡检
        </h1>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={item.path === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive 
                  ? 'bg-blue-600 text-white' 
                  : 'text-gray-400 hover:bg-gray-800 hover:text-white'
              }`
            }
          >
            <item.icon size={20} />
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium">检</span>
          </div>
          <div>
            <p className="text-sm font-medium">检察官</p>
            <p className="text-xs text-gray-500">在线</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
