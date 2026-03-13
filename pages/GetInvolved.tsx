import React, { useState } from 'react';
import { submitVolunteerData } from '../services/mockDatabase';
import { VolunteerFormData, FormStatus } from '../types';
import { CheckCircle, Users, Megaphone, Calendar } from 'lucide-react';

const GetInvolved: React.FC = () => {
  const [formData, setFormData] = useState<VolunteerFormData>({
    fullName: '',
    email: '',
    phone: '',
    skills: '',
    availability: 'Weekends',
    county: 'Murang\'a',
    rolePreference: 'Grassroots Mobilization'
  });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.SUBMITTING);
    try {
      await submitVolunteerData(formData);
      setStatus(FormStatus.SUCCESS);
    } catch (e) {
      setStatus(FormStatus.ERROR);
    }
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
            <CheckCircle className="h-10 w-10 text-campaign-primary" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Karibu! Welcome Aboard!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for volunteering. Our field coordinator will contact you within 24 hours to get you started.
          </p>
          <button
            onClick={() => setStatus(FormStatus.IDLE)}
            className="text-campaign-primary font-medium hover:underline"
          >
            Register another volunteer
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-gray-900">Get Involved</h1>
          <p className="mt-4 text-xl text-gray-600">
            Change doesn't happen by watching. It happens by doing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Information Column */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Ways to Help</h2>
            {/* Icons... omitted for brevity if possible, keeping them for consistency */}
          </div>

          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Volunteer Sign Up</h3>
            {status === FormStatus.ERROR && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-6 text-sm">
                We couldn't process your application at this time. Please try again or contact us directly.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">County</label>
                  <input
                    type="text"
                    required
                    value={formData.county}
                    onChange={e => setFormData({ ...formData, county: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Availability</label>
                  <select
                    value={formData.availability}
                    onChange={e => setFormData({ ...formData, availability: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                  >
                    <option>Weekdays</option>
                    <option>Weekends</option>
                    <option>Evenings</option>
                    <option>Full-time</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Role Preference</label>
                <select
                  value={formData.rolePreference}
                  onChange={e => setFormData({ ...formData, rolePreference: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                >
                  <option>Grassroots Mobilization</option>
                  <option>Digital/Social Media</option>
                  <option>Event Staffing</option>
                  <option>Data Entry</option>
                  <option>Professional Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">Special Skills / Notes</label>
                <textarea
                  rows={2}
                  value={formData.skills}
                  onChange={e => setFormData({ ...formData, skills: e.target.value })}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-primary focus:border-campaign-primary"
                  placeholder="e.g. Legal, Tech, Design, Languages"
                />
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-campaign-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-campaign-primary disabled:opacity-50"
              >
                {status === FormStatus.SUBMITTING ? 'Submitting...' : 'Join the Team'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;