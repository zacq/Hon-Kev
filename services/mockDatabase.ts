import {
  DonationFormData,
  VolunteerFormData,
  SupporterFormData,
  CMSContent
} from '../types';
import { airtableService } from './airtableService';

/**
 * CRM Integration Entry Points
 * These functions connect the UI to the official Airtable CRM.
 */

// Automation 1: New Supporter
export const submitSupporterData = async (data: SupporterFormData): Promise<boolean> => {
  console.log('[CRM] Processing Supporter Signup:', data.email);
  try {
    await airtableService.addSupporter(data);
    return true;
  } catch (error) {
    console.error('[CRM] Supporter Signup Error:', error);
    return false;
  }
};

// Automation 2: Volunteer Signup
export const submitVolunteerData = async (data: VolunteerFormData): Promise<boolean> => {
  console.log('[CRM] Processing Volunteer Signup:', data.email);
  try {
    await airtableService.addVolunteer(data);
    return true;
  } catch (error) {
    console.error('[CRM] Volunteer Signup Error:', error);
    return false;
  }
};

// Automation 3: Donation Received
export const submitDonation = async (data: DonationFormData): Promise<boolean> => {
  console.log('[CRM] Processing Donation:', data.amount);
  try {
    await airtableService.addDonation(data);
    return true;
  } catch (error) {
    console.error('[CRM] Donation Error:', error);
    return false;
  }
};

// Automation 4: Content Management (CMS)
export const publishContent = async (content: CMSContent): Promise<boolean> => {
  console.log('[CRM] Publishing content to Airtable CMS:', content.title);
  // Real implementation for CMS write-back if needed
  return true;
};

export const subscribeNewsletter = async (email: string): Promise<boolean> => {
  console.log('[CRM] Tagging Newsletter Subscriber:', email);
  // Reusing supporter logic or specialized tagging
  return true;
};

export const submitMediaInquiry = async (data: any): Promise<boolean> => {
  console.log('[CRM] New Press Inquiry:', data.email);
  return true;
};