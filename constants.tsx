import { Achievement, BlogPost, Policy } from './types';
import { BookOpen, Hammer, Users, TrendingUp, Cpu } from 'lucide-react';
import React from 'react';

export const CANDIDATE_NAME = "Hon. Kelvin Migongo";
export const CANDIDATE_TITLE = "Candidate for Member of Parliament, Bahati";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    projectName: 'Bahati Youth Empowerment',
    category: 'Education',
    impactMetrics: '5,000+ Youths Trained',
    description: 'Empowering the next generation through vocational training and digital literacy programs.',
    location: 'Bahati Constituency',
    photos: ['/images/progress.png'],
    dateCompleted: 'Ongoing'
  },
  {
    id: '2',
    projectName: 'Small Scale Farmers Support',
    category: 'Agriculture',
    impactMetrics: '10,000+ Farm Kits',
    description: 'Providing essential resources and market access to local smallholder farmers.',
    location: 'All Wards',
    photos: ['/images/progress.png'],
    dateCompleted: '2025'
  },
  {
    id: '3',
    projectName: 'Community Health Outreach',
    category: 'Healthcare',
    impactMetrics: '20+ Free Clinics',
    description: 'Bringing primary healthcare services closer to every resident of Bahati.',
    location: 'Bahati',
    photos: ['/images/progress.png'],
    dateCompleted: '2024'
  }
];

export const POLICIES: Policy[] = [
  {
    id: 'econ',
    policyArea: 'Economic Empowerment',
    description: 'Stimulating local growth by supporting SMEs and creating a business-friendly environment in Bahati.',
    keyInitiatives: ['SME Grants', 'Market Refurbishment', 'Financial Literacy'],
    targetAudience: 'Entrepreneurs & Youth',
    iconName: 'TrendingUp'
  },
  {
    id: 'edu',
    policyArea: 'Youth & Education',
    description: 'Investing in our future through modernized schools and accessible tertiary education funding.',
    keyInitiatives: ['Bursary Reform', 'Digital Hubs', 'Vocation training'],
    targetAudience: 'Students & Parents',
    iconName: 'BookOpen'
  },
  {
    id: 'agri',
    policyArea: 'Sustainable Agriculture',
    description: 'Enhancing food security and farmer incomes through technology and efficient value chains.',
    keyInitiatives: ['Input Subsidies', 'Cold Storage', 'Market Linkage'],
    targetAudience: 'Farmers & Food Traders',
    iconName: 'Hammer'
  },
  {
    id: 'health',
    policyArea: 'Healthcare Access',
    description: 'Strengthening community health systems and ensuring affordable care for all Bahati residents.',
    keyInitiatives: ['Health Fund', 'Mobile Clinics', 'Maternal Care'],
    targetAudience: 'Families & Elders',
    iconName: 'Users'
  },
  {
    id: 'infra',
    policyArea: 'Infrastructure Development',
    description: 'Building modern roads and utility networks to connect Bahati to economic hubs.',
    keyInitiatives: ['Rural Roads', 'Clean Water', 'Electrification'],
    targetAudience: 'All Residents',
    iconName: 'Cpu'
  }
];

// Note: Using the name CMSContent in code but mapping BlogPost for now
export const LATEST_NEWS: any[] = [
  {
    id: '1',
    title: 'Transforming Bahati: The Journey Begins',
    contentType: 'Update',
    publishDate: 'March 10, 2026',
    author: 'Admin',
    excerpt: 'Hon. Kelvin Migongo shares his detailed roadmap for a modernized and inclusive Bahati.',
    socialSnippets: ['A new dawn for Bahati! #BahatiFirst #KelvinMigongo'],
    status: 'published',
    mediaAssets: ['/images/progress.png']
  },
  {
    id: '2',
    title: 'Bridging the Digital Divide with Tech Hubs',
    contentType: 'Project',
    publishDate: 'March 12, 2026',
    author: 'Admin',
    excerpt: 'Launching free high-speed internet hubs across Bahati to empower our youth with essential digital skills.',
    socialSnippets: ['Connect. Learn. Grow. #DigitalBahati #YouthEmpowerment'],
    status: 'published',
    mediaAssets: ['/images/masomo-bora.png']
  },
  {
    id: '3',
    title: 'Clean Water Access: New Ward Projects',
    contentType: 'Update',
    publishDate: 'March 13, 2026',
    author: 'Admin',
    excerpt: 'Reliable clean water is now reaching hundreds of families as local infrastructure projects are completed.',
    socialSnippets: ['Water is life. Improving livelihoods in Bahati. #CleanWater #Infrastructure'],
    status: 'published',
    mediaAssets: ['/images/progress.png']
  }
];

export const IMPACT_STATS = [
  { name: 'Education', value: 45, fill: '#15803d' },
  { name: 'Infrastructure', value: 30, fill: '#16a34a' },
  { name: 'Economy', value: 15, fill: '#22c55e' },
  { name: 'Agriculture', value: 10, fill: '#4ade80' },
];