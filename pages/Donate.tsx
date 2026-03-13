import React, { useState } from 'react';
import { submitDonation } from '../services/mockDatabase';
import { DonationFormData, FormStatus } from '../types';
import { Heart, Lock, CreditCard } from 'lucide-react';

const Donate: React.FC = () => {
  const [formData, setFormData] = useState<DonationFormData>({
    fullName: '',
    email: '',
    phone: '',
    amount: 1000,
    frequency: 'one-time',
    paymentMethod: 'MPESA'
  });
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const presetAmounts = [500, 1000, 2500, 5000, 10000];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!consent) {
      alert("Please confirm you are an eligible donor.");
      return;
    }
    setStatus(FormStatus.SUBMITTING);
    try {
      await submitDonation(formData);
      setStatus(FormStatus.SUCCESS);
    } catch (e) {
      setStatus(FormStatus.ERROR);
    }
  };

  if (status === FormStatus.SUCCESS) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-6">
            <Heart className="h-8 w-8 text-red-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">
            Your generous donation of KES {formData.amount} will help us power this movement. A receipt has been sent to your email.
          </p>
          <button
            onClick={() => setStatus(FormStatus.IDLE)}
            className="text-campaign-primary font-medium hover:underline"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-8 pb-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold text-gray-900">Invest in Our Future</h1>
          <p className="mt-2 text-gray-600">
            Grassroots campaigns are powered by people like you.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-8">
            {status === FormStatus.ERROR && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-8 text-sm">
                Transaction couldn't be completed. Please check your data and try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Frequency Toggle */}
              <div className="flex justify-center">
                <div className="bg-gray-100 p-1 rounded-lg flex">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, frequency: 'one-time' })}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${formData.frequency === 'one-time' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
                      }`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, frequency: 'monthly' })}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${formData.frequency === 'monthly' ? 'bg-white shadow text-gray-900' : 'text-gray-500 hover:text-gray-900'
                      }`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Amount (KES)</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: amt })}
                      className={`py-2 px-1 rounded-md text-sm font-bold border ${formData.amount === amt
                        ? 'border-campaign-accent bg-red-50 text-campaign-accent ring-1 ring-campaign-accent'
                        : 'border-gray-200 hover:border-campaign-accent text-gray-700'
                        }`}
                    >
                      {amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">KES</span>
                  </div>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                    className="focus:ring-campaign-accent focus:border-campaign-accent block w-full pl-12 pr-12 sm:text-sm border-gray-300 rounded-md py-3 border"
                    placeholder="Other Amount"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-accent focus:border-campaign-accent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-accent focus:border-campaign-accent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-campaign-accent focus:border-campaign-accent"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="border-t border-gray-100 pt-6">
                <h4 className="text-sm font-medium text-gray-900 mb-4 flex items-center">
                  <CreditCard className="w-4 h-4 mr-2" /> Payment Method
                </h4>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      id="mpesa"
                      name="payment"
                      type="radio"
                      checked={formData.paymentMethod === 'MPESA'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'MPESA' })}
                      className="focus:ring-campaign-accent h-4 w-4 text-campaign-accent border-gray-300"
                    />
                    <label htmlFor="mpesa" className="ml-3 block text-sm font-medium text-gray-700">M-PESA</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="card"
                      name="payment"
                      type="radio"
                      checked={formData.paymentMethod === 'CARD'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'CARD' })}
                      className="focus:ring-campaign-accent h-4 w-4 text-campaign-accent border-gray-300"
                    />
                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-gray-700">Credit/Debit Card</label>
                  </div>
                </div>
              </div>

              {/* Legal */}
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="consent"
                    type="checkbox"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="focus:ring-campaign-accent h-4 w-4 text-campaign-accent border-gray-300 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-gray-700">I confirm that:</label>
                  <p className="text-gray-500">I am a Kenyan citizen or permanent resident and this donation is made from my own funds.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full flex justify-center py-4 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-campaign-accent hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
              >
                {status === FormStatus.SUBMITTING ? 'Processing...' : `Donate KES ${formData.amount.toLocaleString()}`}
              </button>

              <div className="flex justify-center items-center text-xs text-gray-400">
                <Lock className="w-3 h-3 mr-1" /> Secure 256-bit SSL Encrypted Donation
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;