import type { User, Post, Topic } from '../types';

export const mockData = {
  users: [
    {
      id: '1',
      name: 'Alex Johnson',
      avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Senior Product Manager',
      bio: 'Passionate about building products that make a difference. Always learning, always growing.',
      expertise: ['Product Management', 'UX Design', 'Team Leadership'],
      goals: ['Launch AI-powered features', 'Mentor junior PMs', 'Build scalable systems'],
      mentoring: true,
      followers: 1247,
      following: 589,
      posts: 142
    },
    {
      id: '2',
      name: 'Sarah Chen',
      avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Full Stack Developer',
      bio: 'Building the future one line of code at a time. React enthusiast and open source contributor.',
      expertise: ['React', 'Node.js', 'System Design'],
      goals: ['Contribute to major OSS project', 'Speak at conferences', 'Build SaaS product'],
      mentoring: true,
      followers: 892,
      following: 234,
      posts: 89
    },
    {
      id: '3',
      name: 'Michael Torres',
      avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
      title: 'Data Scientist',
      bio: 'Turning data into insights and insights into impact. Always curious about the stories data tells.',
      expertise: ['Machine Learning', 'Python', 'Data Visualization'],
      goals: ['Publish ML research', 'Lead data team', 'Create educational content'],
      mentoring: false,
      followers: 654,
      following: 412,
      posts: 67
    }
  ] as User[],

  topics: [
    {
      id: 'career',
      name: 'Career Growth',
      description: 'Discussions about career development, job hunting, and professional growth',
      members: 15420,
      posts: 2847,
      color: 'bg-blue-500',
      icon: 'TrendingUp'
    },
    {
      id: 'tech',
      name: 'Technology',
      description: 'Latest trends, tools, and discussions about technology',
      members: 22350,
      posts: 4521,
      color: 'bg-purple-500',
      icon: 'Cpu'
    },
    {
      id: 'startup',
      name: 'Startup Life',
      description: 'Entrepreneurship, startup challenges, and success stories',
      members: 8930,
      posts: 1642,
      color: 'bg-green-500',
      icon: 'Rocket'
    },
    {
      id: 'design',
      name: 'Design & UX',
      description: 'User experience, design principles, and creative processes',
      members: 12540,
      posts: 2156,
      color: 'bg-pink-500',
      icon: 'Palette'
    },
    {
      id: 'leadership',
      name: 'Leadership',
      description: 'Management, team building, and leadership development',
      members: 9870,
      posts: 1534,
      color: 'bg-orange-500',
      icon: 'Users'
    },
    {
      id: 'wellness',
      name: 'Work-Life Balance',
      description: 'Mental health, productivity, and maintaining healthy work habits',
      members: 18650,
      posts: 3247,
      color: 'bg-teal-500',
      icon: 'Heart'
    }
  ] as Topic[],

  posts: [
    {
      id: '1',
      type: 'milestone',
      title: 'Just shipped my first AI feature to production! 🚀',
      content: 'After 6 months of research, development, and testing, our personalized recommendation engine is now live. The journey taught me so much about machine learning at scale and the importance of user feedback in AI systems.',
      author: {
        id: '1',
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        title: 'Senior Product Manager'
      } as User,
      topicId: 'tech',
      likes: 127,
      comments: 23,
      shares: 8,
      timestamp: '2 hours ago',
      tags: ['AI', 'ProductLaunch', 'MachineLearning'],
      milestone: {
        progress: 100,
        goal: 'Launch AI-powered features'
      }
    },
    {
      id: '2',
      type: 'question',
      title: 'Best practices for conducting remote team retrospectives?',
      content: 'I\'m leading a distributed team of 8 developers across 4 time zones. Our current retrospective format feels stale and engagement is dropping. What tools and techniques have worked well for your remote teams?',
      author: {
        id: '2',
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        title: 'Full Stack Developer'
      } as User,
      topicId: 'leadership',
      likes: 45,
      comments: 12,
      shares: 3,
      timestamp: '5 hours ago',
      tags: ['Remote', 'TeamManagement', 'Agile']
    },
    {
      id: '3',
      type: 'discussion',
      title: 'The importance of psychological safety in tech teams',
      content: 'After reading "The Fearless Organization," I\'ve been thinking about how we can create more psychologically safe environments in our engineering teams. It\'s not just about being nice – it\'s about creating conditions where people feel safe to take risks, make mistakes, and speak up with ideas or concerns.',
      author: {
        id: '3',
        name: 'Michael Torres',
        avatar: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150',
        title: 'Data Scientist'
      } as User,
      topicId: 'leadership',
      likes: 89,
      comments: 31,
      shares: 15,
      timestamp: '1 day ago',
      tags: ['Culture', 'TeamBuilding', 'Psychology']
    },
    {
      id: '4',
      type: 'article',
      title: 'Building resilient microservices: Lessons from 5 years in production',
      content: 'Over the past 5 years, our team has learned some hard lessons about building and maintaining microservices at scale. Here are the key patterns and anti-patterns we\'ve discovered, from circuit breakers to distributed tracing.',
      author: {
        id: '2',
        name: 'Sarah Chen',
        avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
        title: 'Full Stack Developer'
      } as User,
      topicId: 'tech',
      likes: 234,
      comments: 67,
      shares: 42,
      timestamp: '2 days ago',
      tags: ['Microservices', 'Architecture', 'DevOps']
    },
    {
      id: '5',
      type: 'milestone',
      title: 'Completed my first marathon AND got promoted! 🏃‍♀️📈',
      content: 'What a month! Just crossed the finish line of the Chicago Marathon and received news about my promotion to Senior Data Scientist. The discipline from marathon training definitely helped me push through the challenging projects that led to this promotion.',
      author: {
        id: '1',
        name: 'Alex Johnson',
        avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
        title: 'Senior Product Manager'
      } as User,
      topicId: 'wellness',
      likes: 156,
      comments: 28,
      shares: 12,
      timestamp: '3 days ago',
      tags: ['PersonalGrowth', 'Career', 'Wellness'],
      milestone: {
        progress: 100,
        goal: 'Run first marathon'
      }
    }
  ] as Post[]
};