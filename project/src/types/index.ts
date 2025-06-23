export interface User {
  id: string;
  name: string;
  avatar: string;
  title: string;
  bio: string;
  expertise: string[];
  goals: string[];
  mentoring: boolean;
  followers: number;
  following: number;
  posts: number;
}

export interface Post {
  id: string;
  type: 'question' | 'discussion' | 'milestone' | 'article';
  title: string;
  content: string;
  author: User;
  topicId: string;
  likes: number;
  comments: number;
  shares: number;
  timestamp: string;
  isLiked?: boolean;
  tags: string[];
  milestone?: {
    progress: number;
    goal: string;
  };
}

export interface Topic {
  id: string;
  name: string;
  description: string;
  members: number;
  posts: number;
  color: string;
  icon: string;
}

export interface Comment {
  id: string;
  content: string;
  author: User;
  timestamp: string;
  likes: number;
}