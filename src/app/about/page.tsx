'use client';

import { useState } from 'react';
import AboutMe from './sections/AboutMe';
import MyJourney from './sections/MyJourney';
import Interviews from './sections/Interviews';

const AboutPage = () => {
  const [activeTab, setActiveTab] = useState('about-me');

  const tabs = [
    { id: 'about-me', label: 'About Me', component: <AboutMe /> },
    { id: 'my-journey', label: 'My Journey', component: <MyJourney /> },
    { id: 'interviews', label: 'Interviews', component: <Interviews /> },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold text-center mb-8">About DJ Hop</h1>
      
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <nav className="flex space-x-4" aria-label="Tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 text-sm font-medium rounded-md ${
                activeTab === tab.id
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="mt-8">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </div>
  );
};

export default AboutPage; 