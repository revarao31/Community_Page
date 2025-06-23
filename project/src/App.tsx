import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import MainFeed from './components/MainFeed';
import UserProfile from './components/UserProfile';
import { mockData } from './data/mockData';
import type { User, Post, Topic } from './types';

function App() {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [posts, setPosts] = useState<Post[]>([]);
  const [topics, setTopics] = useState<Topic[]>([]);
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Initialize with mock data
    setCurrentUser(mockData.users[0]);
    setPosts(mockData.posts);
    setTopics(mockData.topics);
  }, []);

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1, isLiked: !post.isLiked }
        : post
    ));
  };

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopic(topicId);
  };

  const filteredPosts = posts.filter(post => {
    const matchesTopic = selectedTopic === 'all' || post.topicId === selectedTopic;
    const matchesSearch = !searchQuery || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTopic && matchesSearch;
  });

  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header 
        user={currentUser}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onProfileClick={() => setShowProfile(!showProfile)}
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="flex gap-8">
          <Sidebar 
            topics={topics}
            selectedTopic={selectedTopic}
            onTopicSelect={handleTopicSelect}
          />
          
          <MainFeed 
            posts={filteredPosts}
            onLike={handleLike}
            currentUser={currentUser}
          />
          
          {showProfile && (
            <UserProfile 
              user={currentUser}
              onClose={() => setShowProfile(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;