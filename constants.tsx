import { Achievement, BlogPost, Policy } from './types';
import { BookOpen, Hammer, Users, TrendingUp, Cpu } from 'lucide-react';
import React from 'react';

export const CANDIDATE_NAME = "Hon. Ndindi Nyoro";
export const CANDIDATE_TITLE = "MP, Kiharu | Chair, Budget & Appropriations Committee";

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: '1',
    projectName: 'Masomo Bora Programme',
    category: 'Education',
    impactMetrics: 'KSh 500 Fees per Term',
    description: 'Standardized day secondary school fees to just KSh 500 per term for over 12,000 students.',
    location: 'Kiharu Constituency',
    photos: ['/images/masomo-bora.png'],
    dateCompleted: 'Ongoing'
  },
  {
    id: '2',
    projectName: 'Labor-Based Model',
    category: 'Infrastructure',
    impactMetrics: '100% Primary Schools Tiled',
    description: 'Transforming Kiharu by training and hiring local youth to tile every public primary school classroom.',
    location: 'All Wards',
    photos: ['/images/progress.png'],
    dateCompleted: '2023'
  },
  {
    id: '3',
    projectName: 'Budget Committee Leadership',
    category: 'Legislative',
    impactMetrics: 'Equitable Revenue Allocation',
    description: 'Spearheading national budget reforms to ensure resources reach the common mwananchi.',
    location: 'National Assembly',
    photos: ['/images/budget.png'],
    dateCompleted: '2024'
  },
  {
    id: '4',
    projectName: 'Economic Empowerment',
    category: 'Economy',
    impactMetrics: 'SME Support Policies',
    description: 'Championing policies that support entrepreneurs and small businesses through legislative bills.',
    location: 'National',
    photos: ['/images/landing.png'],
    dateCompleted: 'Ongoing'
  }
];

export const POLICIES: Policy[] = [
  {
    id: 'edu',
    policyArea: 'Masomo Bora',
    description: 'Ensuring 100% transition rates and equipping schools with modern digital learning tools.',
    keyInitiatives: ['Fee Standardization', 'School Feeding', 'Infrastructure Upgrades'],
    targetAudience: 'Students & Parents',
    iconName: 'BookOpen'
  },
  {
    id: 'infra',
    policyArea: 'Kiharu Model',
    description: 'Modernizing roads and public facilities using cost-effective labor-based indigenous models.',
    keyInitiatives: ['Road Tarmacking', 'School Tiling', 'Market Construction'],
    targetAudience: 'Local Residents & Youth',
    iconName: 'Hammer'
  },
  {
    id: 'econ',
    policyArea: 'Economic Stewardship',
    description: 'Promoting fiscal discipline and equitable distribution of national resources.',
    keyInitiatives: ['Budget Oversight', 'Revenue Sharing', 'SME Incentives'],
    targetAudience: 'Entrepreneurs & Taxpayers',
    iconName: 'TrendingUp'
  }
];

// Note: Using the name CMSContent in code but mapping BlogPost for now
export const LATEST_NEWS: any[] = [
  {
    id: '1',
    title: 'Checking progress in Mjini',
    contentType: 'Update',
    publishDate: 'Feb 10, 2025',
    author: 'Admin',
    excerpt: 'Inspecting the progress of our new administrative offices and standardizing infrastructure.',
    socialSnippets: ['Transforming Mjini one project at a time #KiharuModel'],
    status: 'published',
    mediaAssets: ['/images/progress.png']
  },
  {
    id: '2',
    title: 'Who Is Benefiting from the Safaricom Sale?',
    contentType: 'Opinion',
    publishDate: 'Feb 17, 2026',
    author: 'Hon. Ndindi Nyoro',
    excerpt: 'I am raising a public challenge about valuation, transparency, and accountability. This is not theory. This is about the future of our economy and the protection of public assets. Kenya is preparing to sell part of one of its most profitable national assets. My question is straightforward: Are Kenyans getting fair value?',
    socialSnippets: ['I am raising a public challenge about valuation, transparency, and accountability regarding the Safaricom sale. #Accountability #Transparency'],
    youtubeEmbed: 'https://www.youtube.com/embed/cClib1H74RY',
    status: 'published',
    mediaAssets: ['/images/Saf.png'],
    body: `Market Price Is Not the Same as Transaction Value
The government has made repeated claims that Safaricom shares are being sold at “market price.” That explanation is not only weak, it is misleading.
In real markets, major strategic transactions rarely happen at the quoted trading price. We have recent Kenyan examples:
NCBA shares were trading below KSh70, yet a major transaction occurred above KSh102.
EABL shares traded near KSh244, yet a transaction occurred at around KSh590.
Serious strategic deals are negotiated based on true value, not daily trading price. Kenyans know this.

I Am Calling for Immediate Suspension of the Sale
The government MUST stop this transaction and provide credible answers.
Kenyans deserve:
Transparency
A proper explanation of valuation
Accountability in negotiation
This is not optional when public assets are involved.

If Answers Do Not Come, Kenyans Will Engage the Buyers Directly:
If government negotiators cannot defend this deal, then Kenyans deserve direct engagement with the buyers.

I am prepared to share the contacts of Vodacom leadership so citizens can engage them themselves. This deal involves the wealth of millions of Kenyans. 
Silence is not acceptable!

H.E Ndindi Nyoro.`
  }
];

export const IMPACT_STATS = [
  { name: 'Education', value: 45, fill: '#047857' },
  { name: 'Infrastructure', value: 30, fill: '#059669' },
  { name: 'Economy', value: 15, fill: '#10b981' },
  { name: 'National Policy', value: 10, fill: '#34d399' },
];