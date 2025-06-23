import React from 'react';
import { TrendingUp, Cpu, Rocket, Palette, Users, Heart, Hash, Star } from 'lucide-react';
import type { Topic } from '../types';

interface SidebarProps {
  topics: Topic[];
  selectedTopic: string;
  onTopicSelect: (topicId: string) => void;
}

const iconMap = {
  TrendingUp,
  Cpu,
  Rocket,
  Palette,
  Users,
  Heart
};

const Sidebar: React.FC<SidebarProps> = ({ topics, selectedTopic, onTopicSelect }) => {
  return (
    <div className="w-80 space-y-6 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto">
      {/* Quick Actions */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4">Quick Actions</h2>
        <div className="space-y-3">
          <button className="w-full text-left p-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-[1.02]">
            <div className="flex items-center space-x-3">
              <Star className="w-5 h-5" />
              <span className="font-medium">Ask a Question</span>
            </div>
          </button>
          <button className="w-full text-left p-3 rounded-xl border border-gray-200 hover:bg-gray-50 transition-all duration-200">
            <div className="flex items-center space-x-3">
              <Hash className="w-5 h-5 text-gray-500" />
              <span className="font-medium text-gray-700">Share a Milestone</span>
            </div>
          </button>
        </div>
      </div>

      {/* Topics */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4">Topics</h2>
        <div className="space-y-2">
          <button
            onClick={() => onTopicSelect('all')}
            className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
              selectedTopic === 'all'
                ? 'bg-blue-50 text-blue-700 border border-blue-200'
                : 'hover:bg-gray-50 text-gray-700'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-medium">All Topics</span>
              <span className="text-sm text-gray-500">
                {topics.reduce((sum, topic) => sum + topic.posts, 0)}
              </span>
            </div>
          </button>
          
          {topics.map((topic) => {
            const IconComponent = iconMap[topic.icon as keyof typeof iconMap];
            return (
              <button
                key={topic.id}
                onClick={() => onTopicSelect(topic.id)}
                className={`w-full text-left p-3 rounded-xl transition-all duration-200 group ${
                  selectedTopic === topic.id
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'hover:bg-gray-50 text-gray-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-8 h-8 rounded-lg ${topic.color} flex items-center justify-center`}>
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{topic.name}</span>
                      <span className="text-sm text-gray-500">{topic.posts}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1 line-clamp-1">
                      {topic.members.toLocaleString()} members
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Trending */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="font-semibold text-gray-900 mb-4">Trending This Week</h2>
        <div className="space-y-3">
          {['#RemoteWork', '#AIProductivity', '#CareerGrowth', '#StartupLife'].map((tag, index) => (
            <div key={tag} className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 transition-colors duration-200 cursor-pointer">
              <span className="text-blue-600 font-medium">{tag}</span>
              <span className="text-sm text-gray-500">+{12 - index * 2}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;