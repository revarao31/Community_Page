import React from 'react';
import { X, MapPin, Calendar, Link, Users, MessageCircle, Star, Award } from 'lucide-react';
import type { User } from '../types';

interface UserProfileProps {
  user: User;
  onClose: () => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ user, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="relative">
          <div className="h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-t-2xl"></div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200"
          >
            <X className="w-5 h-5 text-white" />
          </button>
          
          <div className="absolute -bottom-12 left-6">
            <img
              src={user.avatar}
              alt={user.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>

        {/* Profile Content */}
        <div className="pt-16 p-6">
          {/* Basic Info */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              {user.mentoring && (
                <div className="flex items-center space-x-1 bg-green-100 text-green-700 px-2 py-1 rounded-full">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-medium">Mentor</span>
                </div>
              )}
            </div>
            <p className="text-gray-600 font-medium mb-2">{user.title}</p>
            <p className="text-gray-700 leading-relaxed">{user.bio}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.followers}</div>
              <div className="text-sm text-gray-500">Followers</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.following}</div>
              <div className="text-sm text-gray-500">Following</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-gray-900">{user.posts}</div>
              <div className="text-sm text-gray-500">Posts</div>
            </div>
          </div>

          {/* Expertise */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Award className="w-5 h-5 mr-2 text-blue-500" />
              Expertise
            </h3>
            <div className="flex flex-wrap gap-2">
              {user.expertise.map((skill) => (
                <span
                  key={skill}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <Star className="w-5 h-5 mr-2 text-green-500" />
              Current Goals
            </h3>
            <div className="space-y-2">
              {user.goals.map((goal, index) => (
                <div key={goal} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">{goal}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
              <div className="flex items-center justify-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Connect</span>
              </div>
            </button>
            
            <button className="w-full border border-gray-300 text-gray-700 font-medium py-3 rounded-xl hover:bg-gray-50 transition-all duration-200">
              <div className="flex items-center justify-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Message</span>
              </div>
            </button>

            {user.mentoring && (
              <button className="w-full bg-green-500 text-white font-medium py-3 rounded-xl hover:bg-green-600 transition-all duration-200">
                <div className="flex items-center justify-center space-x-2">
                  <Star className="w-5 h-5" />
                  <span>Request Mentorship</span>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;