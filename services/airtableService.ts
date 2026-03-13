import Airtable from 'airtable';
import { SupporterFormData, VolunteerFormData, DonationFormData } from '../types';

const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_PAT || '';
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID || 'app6j8ItePOm5UZbc';

// Table IDs (more reliable than names — won't break if tables are renamed)
const TABLE_IDS = {
    SUPPORTERS: 'tblrTErE0KuMferDl',
    VOLUNTEERS: 'tbla3yHB2SdQ4MgoJ',
    DONORS: 'tblgIXtxk781HbLi4',
};

/**
 * Returns an Airtable base instance only when a valid key exists.
 * Prevents the app from crashing on load when env vars are missing.
 */
function getBase() {
    if (!AIRTABLE_API_KEY) {
        console.warn(
            '[Airtable] VITE_AIRTABLE_PAT is not set. ' +
            'Form submissions will be skipped until the environment variable is configured.'
        );
        return null;
    }
    return new Airtable({ apiKey: AIRTABLE_API_KEY }).base(AIRTABLE_BASE_ID);
}

/**
 * CRM Integration Services
 */
export const airtableService = {

    /**
     * Add a new supporter to the CRM → tblrTErE0KuMferDl (Supporters)
     * Triggers: Welcome Email (via Airtable Automations)
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
                        'Constituency': data.constituency || 'Kiharu',
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
     * Add a new volunteer to the CRM → tbla3yHB2SdQ4MgoJ (Volunteers)
     * Triggers: Team Notification
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
     * Record a donation → tblgIXtxk781HbLi4 (Donors)
     * Triggers: Receipt Email, LTV Update
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
};
