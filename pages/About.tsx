import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pt-8 pb-20">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 sm:text-5xl">About Ndindi</h1>
          <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
            From street hawker to national statesman – a journey of resilience and service.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
          <div className="relative mb-12 lg:mb-0">
            <div className="aspect-w-3 aspect-h-4 rounded-xl overflow-hidden shadow-xl">
              <img
                src="/images/about.png"
                alt="Hon. Ndindi Nyoro Portrait"
                className="object-cover w-full h-full"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-campaign-primary/10 rounded-full z-[-1]" />
          </div>

          <div className="prose prose-lg text-gray-600">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">From Street Hawker to National Statesman</h3>
            <p className="mb-6">
              Born and raised in Gathukiini, Kiharu, Ndindi Nyoro’s journey is a testament to the power of resilience. From his early days as a cobbler and hawker to becoming a leading economist and MP, he understands the "Hustler" spirit.
            </p>
            <p className="mb-6">
              A proud alumnus of Kenyatta University (BA Economics), Ndindi has used his expertise to chair the Budget and Appropriations Committee, ensuring national resources work for the common mwananchi.
            </p>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">Leadership Philosophy</h3>
            <blockquote className="border-l-4 border-campaign-primary pl-4 italic text-gray-800 my-6">
              "Leadership is not a title; it is the service we give to the people who trust us with their future."
            </blockquote>
            <p>
              Ndindi believes in accountable leadership and the "Kiharu Model" of development, where every shilling is accounted for and every project directly impacts the lives of the people.
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
              <h3 className="text-xl font-bold text-gray-900">Community Organizer</h3>
              <p className="mt-2 text-gray-600">Founded "Vijana na Kazi", a grassroots CBO helping youths find casual employment.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-campaign-primary h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-campaign-primary font-bold text-sm">2015</span>
              <h3 className="text-xl font-bold text-gray-900">Head of Development Board</h3>
              <p className="mt-2 text-gray-600">Appointed to the constituency development board, overseeing the construction of 3 health centers.</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[41px] top-0 bg-campaign-primary h-5 w-5 rounded-full border-4 border-white" />
              <span className="text-campaign-primary font-bold text-sm">2022</span>
              <h3 className="text-xl font-bold text-gray-900">Elected MP</h3>
              <p className="mt-2 text-gray-600">Won the Nairobi Central seat with a mandate to reform infrastructure and education.</p>
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