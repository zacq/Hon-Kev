import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl">About Kelvin</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            A Visionary Leader Committed to Sustainable Development and Progress.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/About.png"
                alt="Hon. Kelvin Migongo Portrait"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-campaign-primary/10 rounded-full z-[-1]" />
          </div>

          <div className="prose prose-lg text-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">A Visionary Leader for the Modern Era</h3>
            <p className="mb-6">
              Hon. Kelvin Migongo's journey is defined by a commitment to service and transformative leadership. With a background in strategic management and community advocacy, he has dedicated his career to empowering citizens and driving sustainable development.
            </p>
            <p className="mb-6">
              As a seasoned professional and strategist, Kelvin brings a fresh perspective to governance, focusing on meritocracy, transparency, and economic inclusivity for all.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Philosophy</h3>
            <blockquote className="border-l-4 border-campaign-primary pl-4 italic text-gray-800 my-6">
              "True leadership is measured by the progress of the most vulnerable in our society."
            </blockquote>
            <p>
              Kelvin believes in a results-oriented approach to leadership, ensuring that every policy decision is backed by data and directly contributes to the long-term prosperity of the community.
            </p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="bg-gray-50 mt-20 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-center text-gray-900 mb-12">The Journey</h2>

          <div className="space-y-12 border-l-2 border-campaign-primary/30 pl-8 ml-4 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-campaign-primary h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-campaign-primary font-bold text-sm">2010</span>
              <h3 className="text-xl font-bold text-gray-900">Grassroots Advocacy</h3>
              <p className="mt-2 text-gray-600">Led community initiatives focused on youth mentorship and social welfare.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-campaign-primary h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-campaign-primary font-bold text-sm">2016</span>
              <h3 className="text-xl font-bold text-gray-900">Regional Development Strategist</h3>
              <p className="mt-2 text-gray-600">Consulted on major infrastructure projects, focusing on sustainable urban development.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-campaign-primary h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-campaign-primary font-bold text-sm">2022</span>
              <h3 className="text-xl font-bold text-gray-900">Elected Representative</h3>
              <p className="mt-2 text-gray-600">Elected with a mandate to champion transparency and economic growth.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-gray-300 h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-gray-500 font-bold text-sm">Today</span>
              <h3 className="text-xl font-bold text-gray-900">Building the Future</h3>
              <p className="mt-2 text-gray-600">Continuing the work to transform our community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;