import React from 'react';
import { ArrowRight, Sparkles, Award, Zap } from 'lucide-react';

export default function Hero({ persona }) {
  const content = {
    businesses: {
      badge: 'AI-Native Engineering Agency',
      badgeIcon: <Sparkles size={14} style={{ color: 'var(--primary)' }} />,
      title: 'Ship 10x Faster with AI-Accelerated Software Teams',
      subtitle: 'Unlock exponential growth with custom-assembled, AI-augmented development teams. We build premium, secure product architectures in record time.',
      ctaPrimary: 'Hire AI-Native Teams',
      ctaSecondary: 'Read Case Studies',
      stats: [
        { value: '10x', label: 'Faster Shipping Speed' },
        { value: '45%', label: 'Cost Reductions' },
        { value: '150+', label: 'Digital Products Shipped' }
      ]
    },
    engineers: {
      badge: 'Join the Elite AI Talent Network',
      badgeIcon: <Zap size={14} style={{ color: 'var(--primary)' }} />,
      title: 'Accelerate Your Code & Career With AI-Native Tools',
      subtitle: 'Integrate the latest LLMs, AI agents, and code intelligence workflows. Gain global client exposure and scale your software output.',
      ctaPrimary: 'Apply as an Engineer',
      ctaSecondary: 'Explore Job Openings',
      stats: [
        { value: 'Top 1%', label: 'Vetted Talent Pool' },
        { value: 'US/EU', label: 'Global Clients & Markets' },
        { value: '40%+', label: 'Developer Output Boost' }
      ]
    }
  };

  const current = content[persona];

  return (
    <section className="section bg-gradient-blue bg-glowing-dots" style={{ marginTop: '80px', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          {/* Hero Left Content */}
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div className="badge flex-center" style={{ gap: '0.4rem', border: '1px solid rgba(39, 169, 225, 0.3)' }}>
              {current.badgeIcon}
              <span>{current.badge}</span>
            </div>
            
            <h1 style={{ fontSize: '3.2rem', fontWeight: 800, color: 'var(--secondary)', marginBottom: '1.5rem', letterSpacing: '-1px' }}>
              {current.title}
            </h1>
            
            <p style={{ fontSize: '1.15rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '540px' }}>
              {current.subtitle}
            </p>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
              <a href="#contact" className="btn btn-primary">
                {current.ctaPrimary}
                <ArrowRight size={16} />
              </a>
              <a href="#services" className="btn btn-outline">
                {current.ctaSecondary}
              </a>
            </div>

            {/* Stats Showcase */}
            <div style={{ display: 'flex', gap: '2.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '2rem', width: '100%' }}>
              {current.stats.map((stat, index) => (
                <div key={index}>
                  <p style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--primary)', lineHeight: 1.1 }}>{stat.value}</p>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Right Visuals */}
          <div className="flex-center" style={{ position: 'relative' }}>
            {/* Glowing Orb Background */}
            <div style={{
              position: 'absolute',
              width: '350px',
              height: '350px',
              background: 'radial-gradient(circle, rgba(39, 169, 225, 0.2) 0%, rgba(39,169,225,0) 70%)',
              filter: 'blur(30px)',
              zIndex: 1
            }} />
            
            {/* Floating Glassmorphic Cards Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', width: '100%', maxWidth: '450px', zIndex: 2 }}>
              <div className="glass-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ padding: '0.8rem', background: '#e6f3fa', borderRadius: '12px', color: 'var(--primary)' }}>
                  <Zap size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>AI Agent Integrations</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Using Cursor & LLMs to prototype features instantly.</p>
                </div>
              </div>

              <div className="glass-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginLeft: '2rem' }}>
                <div style={{ padding: '0.8rem', background: '#eafcf2', borderRadius: '12px', color: '#10b981' }}>
                  <Award size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>Vetted Tech Experts</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Strict multi-stage technical screening process.</p>
                </div>
              </div>
              
              <div className="glass-card" style={{ display: 'flex', gap: '1.2rem', alignItems: 'center' }}>
                <div style={{ padding: '0.8rem', background: '#fff7ed', borderRadius: '12px', color: '#f97316' }}>
                  <Sparkles size={24} />
                </div>
                <div>
                  <h4 style={{ fontSize: '1.1rem', color: 'var(--secondary)' }}>Clean Software Delivery</h4>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Rigorous automated tests, coverage & CI/CD pipelines.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
