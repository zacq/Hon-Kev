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
      <div className="min-h-screen flex items-center justify-center bg-dcp-bg px-4">
        <div className="max-w-md w-full glass-card-light rounded-2xl p-8 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-dcp-green/10 mb-6">
            <Heart className="h-8 w-8 text-dcp-green" />
          </div>
          <h2 className="text-2xl font-bold text-dcp-dark mb-2">Thank You!</h2>
          <p className="text-dcp-muted mb-6">
            Your generous donation of KES {formData.amount} will help us power this movement. A receipt has been sent to your email.
          </p>
          <button
            onClick={() => setStatus(FormStatus.IDLE)}
            className="text-dcp-green font-semibold hover:text-dcp-dark transition-colors"
          >
            Return to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-20 bg-white min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-serif font-bold text-dcp-dark">Invest in Our Future</h1>
          <p className="mt-2 text-dcp-muted">
            Grassroots campaigns are powered by people like you.
          </p>
        </div>

        <div className="glass-card-light rounded-2xl overflow-hidden">
          <div className="p-8">
            {status === FormStatus.ERROR && (
              <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-lg mb-8 text-sm">
                Transaction couldn't be completed. Please check your data and try again.
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Frequency Toggle */}
              <div className="flex justify-center">
                <div className="bg-dcp-bg p-1 rounded-lg flex border border-dcp-green/15">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, frequency: 'one-time' })}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${formData.frequency === 'one-time' ? 'bg-dcp-green shadow text-white' : 'text-dcp-muted hover:text-dcp-dark'}`}
                  >
                    One-time
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, frequency: 'monthly' })}
                    className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${formData.frequency === 'monthly' ? 'bg-dcp-green shadow text-white' : 'text-dcp-muted hover:text-dcp-dark'}`}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-dcp-sub mb-3">Select Amount (KES)</label>
                <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-4">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setFormData({ ...formData, amount: amt })}
                      className={`py-2 px-1 rounded-md text-sm font-bold border ${formData.amount === amt
                        ? 'border-dcp-green bg-dcp-green/10 text-dcp-green ring-1 ring-dcp-green'
                        : 'border-dcp-green/20 hover:border-dcp-green text-dcp-sub'
                      }`}
                    >
                      {amt.toLocaleString()}
                    </button>
                  ))}
                </div>
                <div className="relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-dcp-muted sm:text-sm">KES</span>
                  </div>
                  <input
                    type="number"
                    value={formData.amount}
                    onChange={(e) => setFormData({ ...formData, amount: Number(e.target.value) })}
                    className="bg-white border border-dcp-green/20 rounded-xl pl-14 pr-4 py-3 text-dcp-dark text-sm outline-none focus:border-dcp-green focus:ring-1 focus:ring-dcp-green/30 transition-colors w-full"
                    placeholder="Other Amount"
                  />
                </div>
              </div>

              {/* Personal Details */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-dcp-sub">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    className="mt-1 block w-full bg-white border border-dcp-green/20 rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none focus:border-dcp-green focus:ring-1 focus:ring-dcp-green/30 transition-colors"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dcp-sub">Email Address</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="mt-1 block w-full bg-white border border-dcp-green/20 rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none focus:border-dcp-green focus:ring-1 focus:ring-dcp-green/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dcp-sub">Phone Number</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-1 block w-full bg-white border border-dcp-green/20 rounded-xl px-4 py-2.5 text-dcp-dark text-sm outline-none focus:border-dcp-green focus:ring-1 focus:ring-dcp-green/30 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div className="border-t border-dcp-green/10 pt-6">
                <h4 className="text-sm font-medium text-dcp-dark mb-4 flex items-center">
                  <CreditCard className="w-4 h-4 mr-2 text-dcp-green" /> Payment Method
                </h4>
                <div className="flex gap-4">
                  <div className="flex items-center">
                    <input
                      id="mpesa"
                      name="payment"
                      type="radio"
                      checked={formData.paymentMethod === 'MPESA'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'MPESA' })}
                      className="focus:ring-dcp-green h-4 w-4 text-dcp-green border-dcp-green/20"
                    />
                    <label htmlFor="mpesa" className="ml-3 block text-sm font-medium text-dcp-sub">M-PESA</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      id="card"
                      name="payment"
                      type="radio"
                      checked={formData.paymentMethod === 'CARD'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'CARD' })}
                      className="focus:ring-dcp-green h-4 w-4 text-dcp-green border-dcp-green/20"
                    />
                    <label htmlFor="card" className="ml-3 block text-sm font-medium text-dcp-sub">Credit/Debit Card</label>
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
                    className="focus:ring-dcp-green h-4 w-4 text-dcp-green border-dcp-green/20 rounded"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="consent" className="font-medium text-dcp-sub">I confirm that:</label>
                  <p className="text-dcp-muted">I am a Kenyan citizen or permanent resident and this donation is made from my own funds.</p>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === FormStatus.SUBMITTING}
                className="w-full flex justify-center py-4 px-4 rounded-2xl text-lg font-bold text-white bg-dcp-green hover:bg-dcp-dark transition-colors shadow-lg shadow-dcp-green/20 disabled:opacity-50"
              >
                {status === FormStatus.SUBMITTING ? 'Processing...' : `Donate KES ${formData.amount.toLocaleString()}`}
              </button>

              <div className="flex justify-center items-center text-xs text-dcp-muted">
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
