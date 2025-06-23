import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Award, HelpCircle, Users, FileText } from 'lucide-react';
import type { Post, User } from '../types';

interface PostCardProps {
  post: Post;
  onLike: (postId: string) => void;
  currentUser: User;
}

const PostCard: React.FC<PostCardProps> = ({ post, onLike, currentUser }) => {
  const [showComments, setShowComments] = useState(false);

  const getPostTypeIcon = (type: string) => {
    switch (type) {
      case 'question':
        return <HelpCircle className="w-5 h-5 text-blue-500" />;
      case 'milestone':
        return <Award className="w-5 h-5 text-green-500" />;
      case 'discussion':
        return <Users className="w-5 h-5 text-purple-500" />;
      case 'article':
        return <FileText className="w-5 h-5 text-orange-500" />;
      default:
        return null;
    }
  };

  const getPostTypeLabel = (type: string) => {
    switch (type) {
      case 'question':
        return 'Question';
      case 'milestone':
        return 'Milestone';
      case 'discussion':
        return 'Discussion';
      case 'article':
        return 'Article';
      default:
        return '';
    }
  };

  const getPostTypeBg = (type: string) => {
    switch (type) {
      case 'question':
        return 'bg-blue-50 border-blue-200';
      case 'milestone':
        return 'bg-green-50 border-green-200';
      case 'discussion':
        return 'bg-purple-50 border-purple-200';
      case 'article':
        return 'bg-orange-50 border-orange-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className={`bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 ${getPostTypeBg(post.type)}`}>
      {/* Post Header */}
      <div className="p-6 pb-4">
        <div className="flex items-start space-x-4">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-12 h-12 rounded-full object-cover ring-2 ring-white shadow-sm"
          />
          
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <span className="text-gray-500">•</span>
              <span className="text-sm text-gray-500">{post.timestamp}</span>
              <div className="flex items-center space-x-1 ml-2">
                {getPostTypeIcon(post.type)}
                <span className="text-sm font-medium text-gray-600">
                  {getPostTypeLabel(post.type)}
                </span>
              </div>
            </div>
            <p className="text-sm text-gray-600">{post.author.title}</p>
          </div>
          
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
            <MoreHorizontal className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-6 pb-4">
        <h2 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-700 leading-relaxed">
          {post.content}
        </p>

        {/* Milestone Progress */}
        {post.milestone && (
          <div className="mt-4 p-4 bg-green-50 rounded-xl border border-green-200">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-green-800">Goal Progress</span>
              <span className="text-sm font-bold text-green-600">{post.milestone.progress}%</span>
            </div>
            <div className="w-full bg-green-200 rounded-full h-2 mb-2">
              <div 
                className="bg-green-500 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${post.milestone.progress}%` }}
              ></div>
            </div>
            <p className="text-sm text-green-700">{post.milestone.goal}</p>
          </div>
        )}

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-700 hover:bg-blue-200 transition-colors duration-200 cursor-pointer"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Post Actions */}
      <div className="px-6 py-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <button
              onClick={() => onLike(post.id)}
              className={`flex items-center space-x-2 transition-all duration-200 ${
                post.isLiked
                  ? 'text-red-500 hover:text-red-600'
                  : 'text-gray-500 hover:text-red-500'
              }`}
            >
              <Heart className={`w-5 h-5 ${post.isLiked ? 'fill-current' : ''}`} />
              <span className="font-medium">{post.likes}</span>
            </button>
            
            <button
              onClick={() => setShowComments(!showComments)}
              className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors duration-200"
            >
              <MessageCircle className="w-5 h-5" />
              <span className="font-medium">{post.comments}</span>
            </button>
            
            <button className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors duration-200">
              <Share2 className="w-5 h-5" />
              <span className="font-medium">{post.shares}</span>
            </button>
          </div>
          
          <button className="text-gray-500 hover:text-yellow-500 transition-colors duration-200">
            <Bookmark className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-6 py-4 border-t border-gray-100 bg-white">
          <div className="flex items-center space-x-3 mb-4">
            <img
              src={currentUser.avatar}
              alt={currentUser.name}
              className="w-8 h-8 rounded-full object-cover"
            />
            <input
              type="text"
              placeholder="Write a comment..."
              className="flex-1 p-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=50"
                alt="Commenter"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex-1 bg-gray-50 rounded-xl p-3">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="font-medium text-sm text-gray-900">Emma Wilson</span>
                  <span className="text-xs text-gray-500">5m ago</span>
                </div>
                <p className="text-sm text-gray-700">
                  Great insights! I've been implementing similar strategies in our team.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostCard;