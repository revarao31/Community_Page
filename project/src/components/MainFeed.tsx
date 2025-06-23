import React from 'react';
import PostCard from './PostCard';
import type { Post, User } from '../types';

interface MainFeedProps {
  posts: Post[];
  onLike: (postId: string) => void;
  currentUser: User;
}

const MainFeed: React.FC<MainFeedProps> = ({ posts, onLike, currentUser }) => {
  return (
    <div className="flex-1 space-y-6">
      {/* Feed Header */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center space-x-4">
          <img
            src={currentUser.avatar}
            alt={currentUser.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <button className="flex-1 text-left p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-all duration-200 group">
            <span className="text-gray-500 group-hover:text-gray-700">
              What's on your mind, {currentUser.name.split(' ')[0]}?
            </span>
          </button>
        </div>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-blue-50 text-blue-600 transition-all duration-200">
            <span className="text-xl">❓</span>
            <span className="font-medium">Ask Question</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-green-50 text-green-600 transition-all duration-200">
            <span className="text-xl">🎯</span>
            <span className="font-medium">Share Milestone</span>
          </button>
          
          <button className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-purple-50 text-purple-600 transition-all duration-200">
            <span className="text-xl">💡</span>
            <span className="font-medium">Start Discussion</span>
          </button>
        </div>
      </div>

      {/* Posts */}
      <div className="space-y-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            className="animate-fade-in"
            style={{
              animationDelay: `${index * 100}ms`,
              animationFillMode: 'both'
            }}
          >
            <PostCard 
              post={post} 
              onLike={onLike}
              currentUser={currentUser}
            />
          </div>
        ))}
      </div>

      {posts.length === 0 && (
        <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 text-center">
          <div className="text-6xl mb-4">🔍</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">No posts found</h3>
          <p className="text-gray-500">Try adjusting your search or topic filters</p>
        </div>
      )}
    </div>
  );
};

export default MainFeed;