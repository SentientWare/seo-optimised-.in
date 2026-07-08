import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import EngagementModels from './components/EngagementModels';
import Industries from './components/Industries';
import ContactFooter from './components/ContactFooter';
import './App.css';

function App() {
  const [persona, setPersona] = useState('businesses'); // 'businesses' | 'engineers'

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Dynamic Header */}
      <Header persona={persona} setPersona={setPersona} />
      
      <main style={{ flexGrow: 1 }}>
        {/* Dynamic Hero Section */}
        <Hero persona={persona} />
        
        {/* Interactive Engagement Models */}
        <EngagementModels persona={persona} />
        
        {/* Domain Experience Grid */}
        <Industries />
      </main>
      
      {/* Interactive Contact & Global Footer */}
      <ContactFooter />
    </div>
  );
}

export default App;

