import React from 'react';
import { Download, Camera, FileText } from 'lucide-react';
import { submitMediaInquiry } from '../services/mockDatabase';

const Media: React.FC = () => {
  const handleMediaInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    submitMediaInquiry({ note: 'Form submitted' });
    alert("Inquiry sent to press team.");
  };

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 mb-8">Media Center</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column: Resources */}
          <div className="lg:col-span-2 space-y-12">

            {/* Press Kit */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="mr-2 h-6 w-6 text-campaign-primary" /> Official Press Kit
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <p className="text-gray-600 mb-4">
                  Download the official biography, policy one-pagers, and branding assets for Hon. Kelvin Migongo.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Download className="mr-2 h-4 w-4" /> Biography (PDF)
                  </button>
                  <button className="flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                    <Download className="mr-2 h-4 w-4" /> Official Logos (ZIP)
                  </button>
                </div>
              </div>
            </section>

            {/* High Res Photos */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Camera className="mr-2 h-6 w-6 text-campaign-primary" /> Approved Photos
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative group">
                  <img src="https://picsum.photos/400/300?random=10" alt="Headshot" className="rounded-lg w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <button className="text-white flex items-center"><Download className="mr-1 h-4 w-4" /> Download</button>
                  </div>
                </div>
                <div className="relative group">
                  <img src="https://picsum.photos/400/300?random=11" alt="Rally" className="rounded-lg w-full h-48 object-cover" />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                    <button className="text-white flex items-center"><Download className="mr-1 h-4 w-4" /> Download</button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Media Inquiries</h3>
              <p className="text-gray-500 text-sm mb-6">
                For interview requests, statements, or fact-checking, please contact our press secretary.
              </p>
              <form onSubmit={handleMediaInquiry} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Media House / Outlet</label>
                  <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary sm:text-sm border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Contact Name</label>
                  <input type="text" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary sm:text-sm border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary sm:text-sm border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Deadline (if applicable)</label>
                  <input type="date" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary sm:text-sm border p-2" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Inquiry Details</label>
                  <textarea rows={4} required className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary sm:text-sm border p-2"></textarea>
                </div>
                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-campaign-secondary hover:bg-gray-800">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Media;