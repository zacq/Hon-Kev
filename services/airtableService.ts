import Airtable from 'airtable';
import { SupporterFormData, VolunteerFormData, DonationFormData, Inquiry } from '../types';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_PAT || '';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || 'app6j8ItePOm5UZbc';

// Table IDs (more reliable than names — won't break if tables are renamed)
const TABLE_IDS = {
    SUPPORTERS: 'tblrTErE0KuMferDl',
    VOLUNTEERS: 'tbla3yHB2SdQ4MgoJ',
    DONORS: 'tblgIXtxk781HbLi4',
    CMS_CONTENT: 'CMS Content',
    ACHIEVEMENTS: 'Achievements',
    INQUIRIES: 'tbl_inquiries_id', // Placeholder ID
};

/**
 * Returns an Airtable base instance only when a valid key exists.
 */
function getBase() {
    if (!AIRTABLE_API_KEY) {
        console.warn('[Airtable] VITE_AIRTABLE_PAT is not set.');
        return null;
    }
    return new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
}

/**
 * CRM Integration Services
 */
export const airtableService = {

    /**
     * Add a new supporter to the CRM
     */
    async addSupporter(data: SupporterFormData) {
        const base = getBase();
        if (!base) return null;
        try {
            return await base(TABLE_IDS.SUPPORTERS).create([
                {
                    fields: {
                        'Full Name': data.fullName,
                        'Email': data.email,
                        'Phone': data.phone,
                        'County': data.county,
                        'Constituency': data.constituency || 'Bahati',
                        'Signup Source': 'Website',
                        'Date Joined': new Date().toISOString(),
                    },
                },
            ]);
        } catch (error) {
            console.error('[Airtable] Error adding supporter:', error);
            throw error;
        }
    },

    /**
     * Add a new volunteer to the CRM
     */
    async addVolunteer(data: VolunteerFormData) {
        const base = getBase();
        if (!base) return null;
        try {
            return await base(TABLE_IDS.VOLUNTEERS).create([
                {
                    fields: {
                        'Full Name': data.fullName,
                        'Email': data.email,
                        'Phone': data.phone,
                        'Skills': data.skills,
                        'Availability': data.availability,
                        'County': data.county,
                        'Role Preference': data.rolePreference,
                        'Status': 'Pending',
                    },
                },
            ]);
        } catch (error) {
            console.error('[Airtable] Error adding volunteer:', error);
            throw error;
        }
    },

    /**
     * Record a donation
     */
    async addDonation(data: DonationFormData) {
        const base = getBase();
        if (!base) return null;
        try {
            return await base(TABLE_IDS.DONORS).create([
                {
                    fields: {
                        'Full Name': data.fullName,
                        'Email': data.email,
                        'Phone': data.phone,
                        'Donation Amount': data.amount,
                        'Donation Frequency': data.frequency,
                        'Payment Method': data.paymentMethod,
                        'Last Donation Date': new Date().toISOString(),
                    },
                },
            ]);
        } catch (error) {
            console.error('[Airtable] Error adding donation:', error);
            throw error;
        }
    },

    /**
     * Add a new inquiry from the contact form
     */
    async addInquiry(data: Inquiry) {
        const base = getBase();
        if (!base) return null;
        try {
            return await base(TABLE_IDS.INQUIRIES).create([
                {
                    fields: {
                        'First Name': data.firstName,
                        'Last Name': data.lastName,
                        'Email': data.email,
                        'Topic': data.topic,
                        'Message': data.message,
                        'Date Received': new Date().toISOString(),
                    },
                },
            ]);
        } catch (error) {
            console.error('[Airtable] Error adding inquiry:', error);
            throw error;
        }
    },

    /**
     * Fetch latest news/blog posts from Airtable CMS
     */
    async getLatestNews() {
        const base = getBase();
        if (!base) return [];
        try {
            const records = await base(TABLE_IDS.CMS_CONTENT)
                .select({
                    filterByFormula: '{Status} = "Published"',
                    sort: [{ field: 'Publish Date', direction: 'desc' }],
                    maxRecords: 10
                })
                .all();

            return records.map(record => ({
                id: record.id,
                title: record.get('Title'),
                contentType: record.get('Content Type'),
                publishDate: record.get('Publish Date'),
                author: record.get('Author') || 'Admin',
                excerpt: record.get('Excerpt') || record.get('Title'),
                socialSnippets: record.get('Social Snippets') ? [record.get('Social Snippets')] : [],
                status: 'published',
                mediaAssets: record.get('Media Assets') ? (record.get('Media Assets') as any[]).map(m => m.url) : ['/images/progress.png']
            }));
        } catch (error) {
            console.error('[Airtable] Error fetching news:', error);
            return [];
        }
    },

    /**
     * Fetch achievements from Airtable
     */
    async getAchievements() {
        const base = getBase();
        if (!base) return [];
        try {
            const records = await base(TABLE_IDS.ACHIEVEMENTS)
                .select({
                    sort: [{ field: 'Date Completed', direction: 'desc' }]
                })
                .all();

            return records.map(record => ({
                id: record.id,
                projectName: record.get('Project Name'),
                category: record.get('Category'),
                impactMetrics: record.get('Impact Metrics'),
                description: record.get('Description'),
                location: record.get('Location'),
                photos: record.get('Photos') ? (record.get('Photos') as any[]).map(m => m.url) : ['/images/progress.png'],
                dateCompleted: record.get('Date Completed')
            }));
        } catch (error) {
            console.error('[Airtable] Error fetching achievements:', error);
            return [];
        }
    }
};
