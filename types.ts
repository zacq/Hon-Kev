export type BlogPost = CMSContent;

export interface Supporter {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  county: string;
  constituency: string;
  interestTags: string[];
  signupSource: string;
  engagementScore: number;
  dateJoined: string;
  notes?: string;
}

export interface Volunteer {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  skills: string;
  availability: string;
  county: string;
  rolePreference: string;
  status: 'active' | 'pending' | 'inactive';
  notes?: string;
}

export interface Donor {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  donationAmount: number;
  donationFrequency: 'one-time' | 'monthly';
  paymentMethod: string;
  lastDonationDate: string;
  lifetimeValue: number;
  notes?: string;
}

export interface Event {
  id: string;
  eventName: string;
  date: string;
  location: string;
  description: string;
  rsvpCount: number;
  mediaAssets: string[];
  notes?: string;
}

export interface MediaContact {
  id: string;
  fullName: string;
  organization: string;
  email: string;
  phone: string;
  coverageType: string;
  relationshipStrength: 1 | 2 | 3 | 4 | 5;
  notes?: string;
}

export interface CMSContent {
  id: string;
  title: string;
  contentType: 'Speech' | 'Event' | 'Opinion' | 'Announcement' | 'Project' | 'Update' | 'Education' | 'Legislative' | 'Blog';
  publishDate: string;
  author: string;
  socialSnippets: string[];
  status: 'draft' | 'published' | 'archived';
  mediaAssets: string[];
  notes?: string;
}

export interface Achievement {
  id: string;
  projectName: string;
  category: 'Education' | 'Infrastructure' | 'Youth' | 'Economy' | 'Community' | 'Legislative' | 'Agriculture' | 'Healthcare';
  description: string;
  location: string;
  impactMetrics: string;
  photos: string[];
  dateCompleted: string;
}

export interface Policy {
  id: string;
  policyArea: string;
  description: string;
  keyInitiatives: string[];
  targetAudience: string;
  iconName: string;
}

export interface VolunteerFormData {
  fullName: string;
  email: string;
  phone: string;
  skills: string;
  availability: string;
  county: string;
  rolePreference: string;
}

export interface DonationFormData {
  fullName: string;
  email: string;
  phone: string;
  amount: number;
  frequency: 'one-time' | 'monthly';
  paymentMethod: string;
}

export interface SupporterFormData {
  fullName: string;
  email: string;
  phone: string;
  county: string;
  constituency: string;
}

export enum FormStatus {
  IDLE = 'IDLE',
  SUBMITTING = 'SUBMITTING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Inquiry {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  message: string;
}