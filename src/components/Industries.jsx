import React from 'react';
import { DollarSign, Landmark, Activity, Compass, Code, LayoutGrid } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <DollarSign size={24} color="var(--primary)" />,
      name: 'FinTech & Payments',
      description: 'Building secure payment gateways, neo-banking APIs, ledger integrations, and fraud-detection layers complying with SOC2 standards.'
    },
    {
      icon: <Activity size={24} color="var(--primary)" />,
      name: 'Healthcare & HealthTech',
      description: 'HIPAA-compliant custom medical platforms, telehealth integrations, patient database synchronization, and EHR systems.'
    },
    {
      icon: <Landmark size={24} color="var(--primary)" />,
      name: 'Real Estate & PropTech',
      description: 'Interactive map-based real estate portals, multi-party listing portals, smart contract processing, and broker CRM dashboards.'
    },
    {
      icon: <Compass size={24} color="var(--primary)" />,
      name: 'Travel & Logistics',
      description: 'Real-time routing engines, booking systems, dispatch pipelines, flight trackers, and custom scheduling architectures.'
    }
  ];

  return (
    <section id="industries" className="section bg-gradient-blue bg-glowing-dots">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '3.5rem' }}>
          <span className="badge">Our Industry Vertical Experience</span>
          <h2 style={{ fontSize: '2.5rem', color: 'var(--secondary)' }}>Tailored Technical Expertise</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', marginTop: '0.5rem' }}>
            We bring domain-specific insights and pre-configured design frameworks to jumpstart project speeds in major industry segments.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid-4">
          {industries.map((ind, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.75rem' }}>
              <div style={{ width: '45px', height: '45px', backgroundColor: '#e6f3fa', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {ind.icon}
              </div>
              <h3 style={{ fontSize: '1.2rem', color: 'var(--secondary)' }}>{ind.name}</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
