import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-serif font-bold text-gray-900 text-center mb-16">Contact The Team</h1>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Info Cards */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-campaign-primary" />
                </div>
                <h3 className="ml-4 text-lg font-bold text-gray-900">Constituency Office</h3>
              </div>
              <p className="text-gray-600 ml-16">
                Kiharu Constituency Office<br />
                Murang'a Town, Murang'a County<br />
                Open: Mon-Fri, 8am - 5pm
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-campaign-primary" />
                </div>
                <h3 className="ml-4 text-lg font-bold text-gray-900">Phone</h3>
              </div>
              <p className="text-gray-600 ml-16">
                General: +254 700 000 000<br />
                Press: +254 700 000 001
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-campaign-primary" />
                </div>
                <h3 className="ml-4 text-lg font-bold text-gray-900">Email</h3>
              </div>
              <p className="text-gray-600 ml-16">
                info@ndindinyoro.com<br />
                press@ndindinyoro.com
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary border p-3" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name</label>
                  <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary border p-3" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary border p-3" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Topic</label>
                <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary border p-3">
                  <option>General Inquiry</option>
                  <option>Help with Government Services</option>
                  <option>Event Invitation</option>
                  <option>Partnership Request</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea rows={5} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-campaign-primary focus:ring-campaign-primary border p-3"></textarea>
              </div>
              <button type="submit" className="w-full bg-campaign-primary text-white py-3 px-6 rounded-md font-medium hover:bg-green-800 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;