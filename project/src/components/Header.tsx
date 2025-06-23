import React from 'react';
import { Search, Bell, MessageCircle, User, Menu } from 'lucide-react';
import type { User as UserType } from '../types';

interface HeaderProps {
  user: UserType;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onProfileClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, searchQuery, onSearchChange, onProfileClick }) => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-lg border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
            </div>
            <div className="hidden md:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CommunityHub
              </h1>
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search discussions, questions, people..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-white/50 backdrop-blur-sm"
              />
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-full">
              <Bell className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="relative p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200 hover:bg-blue-50 rounded-full">
              <MessageCircle className="w-6 h-6" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-500 text-white text-xs rounded-full flex items-center justify-center">
                7
              </span>
            </button>

            {/* User Profile */}
            <button 
              onClick={onProfileClick}
              className="flex items-center space-x-2 p-2 rounded-full hover:bg-gray-100 transition-all duration-200 group"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-8 h-8 rounded-full object-cover ring-2 ring-transparent group-hover:ring-blue-300 transition-all duration-200"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                {user.name.split(' ')[0]}
              </span>
            </button>

            <button className="md:hidden p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;