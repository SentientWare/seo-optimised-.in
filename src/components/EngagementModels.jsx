import React from 'react';
import { Users, Layers, ShieldCheck, Cpu, Terminal, Flame } from 'lucide-react';

export default function EngagementModels({ persona }) {
  const isBusiness = persona === 'businesses';

  const models = isBusiness ? [
    {
      icon: <Users size={32} color="var(--primary)" />,
      title: 'Team Augmentation',
      tagline: 'Scale Your Capacity Instantly',
      desc: 'Extend your in-house engineering team with vetted, AI-native developers. Integrate them directly into your slack, standups, and codebase workflows.',
      features: [
        'Developers trained in LLM autocomplete & AI tools',
        '40-60% faster pull request cycles',
        'Direct project management integration',
        'Flexible month-to-month contracts'
      ]
    },
    {
      icon: <Layers size={32} color="var(--primary)" />,
      title: 'Managed Projects',
      tagline: 'End-to-End Product Delivery',
      desc: 'Partner with us to build complete products. We manage the design, development, quality assurance, and deployment processes from start to finish.',
      features: [
        'Dedicated product manager & architect',
        'Agile milestones and weekly product demos',
        'Production-grade cloud setups (AWS/GCP)',
        'Post-launch support & maintenance SLAs'
      ]
    }
  ] : [
    {
      icon: <Terminal size={32} color="var(--primary)" />,
      title: 'Elite Contracting Placements',
      tagline: 'Work with Global Innovators',
      desc: 'Get placed with premium startup teams in the US and Europe. Work remotely on challenging, high-impact features and systems.',
      features: [
        'Highly competitive compensation packages',
        'Long-term stable remote contracts',
        'Access to cutting-edge backend & data stacks',
        '100% remote-first company culture'
      ]
    },
    {
      icon: <Flame size={32} color="var(--primary)" />,
      title: 'AI Upskilling Academy',
      tagline: 'Learn AI-Native Engineering',
      desc: 'Get trained on modern AI developer aids. Elevate your code generation, test automation, and code-review capabilities to the next level.',
      features: [
        'Workshops on LLM prompting & agents',
        'Best practices for Cursor & Copilot usage',
        'Certifications in AI-assisted coding',
        'Career mentoring from senior tech leaders'
      ]
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: '#ffffff', borderBottom: '1px solid var(--border-light)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--secondary)' }}>
            {isBusiness ? 'How We Can Partner Together' : 'Pathways to Grow With Us'}
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            {isBusiness 
              ? 'Choose the engagement model that best fits your development timeline and engineering structure.' 
              : 'Develop your capabilities, earn global remote client work, and work at the forefront of AI technologies.'}
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid-2">
          {models.map((model, idx) => (
            <div key={idx} className="glass-card" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ padding: '1rem', backgroundColor: '#e6f3fa', borderRadius: '16px' }}>
                  {model.icon}
                </div>
                <div>
                  <span style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase' }}>{model.tagline}</span>
                  <h3 style={{ fontSize: '1.5rem', color: 'var(--secondary)' }}>{model.title}</h3>
                </div>
              </div>
              
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                {model.desc}
              </p>

              <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1.5rem' }}>
                <h4 style={{ fontSize: '0.95rem', color: 'var(--secondary)', marginBottom: '1rem' }}>What to expect:</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {model.features.map((feat, fidx) => (
                    <li key={fidx} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                      <ShieldCheck size={18} style={{ color: '#10b981', flexShrink: 0 }} />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Proof Stripe */}
        {isBusiness && (
          <div style={{ marginTop: '5rem', padding: '2.5rem', background: 'var(--light)', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '2rem' }}>
            <div style={{ maxWidth: '500px' }}>
              <h4 style={{ fontSize: '1.25rem', color: 'var(--secondary)', marginBottom: '0.5rem' }}>Are you seeking specialized custom solutions?</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>We also support Dedicated Squads, MVP bootcamps, and technical consultancy architectures tailored to your requirements.</p>
            </div>
            <a href="#contact" className="btn btn-primary">
              Schedule Consultation
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
