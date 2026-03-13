import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Users, Layout, Activity } from 'lucide-react';
import { LATEST_NEWS } from '../constants';
import { submitSupporterData } from '../services/mockDatabase';

const Home: React.FC = () => {
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [county, setCounty] = useState('Murang\'a');
  const [subStatus, setSubStatus] = useState<'idle' | 'success' | 'submitting' | 'error'>('idle');

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !fullName) return;

    setSubStatus('submitting');
    const success = await submitSupporterData({
      fullName,
      email,
      phone,
      county,
      constituency: 'Kiharu'
    });

    if (success) {
      setSubStatus('success');
      setEmail('');
      setFullName('');
      setPhone('');
    } else {
      setSubStatus('error');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-campaign-secondary text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/landing.png"
            alt="Hon. Ndindi Nyoro Landing"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-campaign-secondary via-campaign-secondary/90 to-transparent"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="lg:w-2/3">
            <h1 className="text-4xl lg:text-6xl font-serif font-bold tracking-tight mb-6 leading-tight">
              Building a Prosperous Kiharu. <br />
              <span className="text-campaign-primary">Securing Kenya’s Future.</span> <br />
              Accountable Leadership.
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl">
              Empowering Every Citizen through Education, Innovation, and the Kiharu "Labour-Based" Model. Follow Hon. Ndindi Nyoro's journey in transforming lives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/get-involved" className="inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-campaign-primary hover:bg-green-800 md:text-lg transition-colors">
                Join the Movement
              </Link>
              <Link to="/volunteer" className="inline-flex justify-center items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-white hover:bg-white/10 md:text-lg transition-colors">
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Key Highlights Strip */}
      <div className="bg-campaign-primary py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Schools Tiled</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">12,000+</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">Students Supported</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">KSh 500</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">School Fees</div>
            </div>
            <div className="p-4">
              <div className="text-4xl font-bold mb-2">1st</div>
              <div className="text-green-100 text-sm uppercase tracking-wider">NG-CDF Ranking</div>
            </div>
          </div>
        </div>
      </div>

      {/* Intro / Value Prop */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold text-gray-900 sm:text-4xl">Why We Serve</h2>
            <p className="mt-4 text-xl text-gray-500">Bringing modern leadership to tackle historic challenges.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <Activity className="h-8 w-8 text-campaign-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Economic Growth</h3>
              <p className="text-gray-600">Supporting SMEs and creating market linkages to boost local household incomes.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <Users className="h-8 w-8 text-campaign-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Youth Empowerment</h3>
              <p className="text-gray-600">Digital hubs and vocational training to turn our youth demographic into an economic dividend.</p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <Layout className="h-8 w-8 text-campaign-primary" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Infrastructure</h3>
              <p className="text-gray-600">Paving roads, lighting streets, and ensuring clean water reaches every ward.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Updates */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-gray-900">Latest Updates</h2>
              <p className="mt-2 text-gray-600">Stay informed about our progress.</p>
            </div>
            <Link to="/blog" className="hidden sm:flex items-center text-campaign-primary font-medium hover:text-green-800">
              View all news <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {LATEST_NEWS.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                <img src={post.mediaAssets[0]} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="text-xs font-semibold text-campaign-primary uppercase tracking-wide mb-2">
                    {post.contentType}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link to={`/blog/${post.id}`} className="text-sm font-medium text-gray-900 hover:text-campaign-primary">
                    Read more &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supporter Signup */}
      <section className="py-20 bg-campaign-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Join the Movement</h2>
          <p className="text-gray-300 mb-8">Join thousands of Kenyans building a prosperous future. Get involved in the Kiharu Model.</p>
          {subStatus === 'success' ? (
            <div className="bg-campaign-primary text-white p-6 rounded-lg flex flex-col items-center justify-center animate-fade-in shadow-xl border border-white/20">
              <CheckCircle className="mb-4 h-12 w-12 text-white" />
              <h3 className="text-xl font-bold mb-2">Welcome to the Team!</h3>
              <p>Check your email for a welcome message from Hon. Ndindi Nyoro.</p>
              <button onClick={() => setSubStatus('idle')} className="mt-4 text-white hover:underline text-sm font-light">Signup someone else</button>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-4 max-w-2xl mx-auto">
              {subStatus === 'error' && (
                <div className="bg-red-500/20 border border-red-500 text-red-200 p-3 rounded-md mb-4 text-sm font-medium">
                  Something went wrong. Please try again or check your internet connection.
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="px-6 py-3 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-campaign-primary bg-white/95"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-6 py-3 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-campaign-primary bg-white/95"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="px-6 py-3 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-campaign-primary bg-white/95"
                />
                <select
                  value={county}
                  onChange={(e) => setCounty(e.target.value)}
                  className="px-6 py-3 rounded-md text-gray-900 w-full focus:outline-none focus:ring-2 focus:ring-campaign-primary bg-white/95"
                >
                  <option>Murang'a</option>
                  <option>Nairobi</option>
                  <option>Kiambu</option>
                  <option>Nakuru</option>
                  <option>Mombasa</option>
                  <option>Other</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={subStatus === 'submitting'}
                className="bg-campaign-primary w-full md:w-auto px-12 py-4 rounded-md font-bold text-lg hover:bg-green-700 transition-all shadow-lg hover:shadow-campaign-primary/20 disabled:opacity-50"
              >
                {subStatus === 'submitting' ? 'Joining...' : 'Become a Supporter'}
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;