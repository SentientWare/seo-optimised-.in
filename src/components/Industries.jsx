import React from 'react';
import { Landmark, Activity, ShoppingCart, Factory, GraduationCap, Cpu, Truck, Radio, Home, Plane } from 'lucide-react';

export default function Industries() {
  const industries = [
    {
      icon: <Landmark size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Banking & Financial Services',
      description: 'Securing digital assets and accelerating fintech innovation through robust architecture.',
      linkText: 'Case Study'
    },
    {
      icon: <Activity size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Healthcare & Life Sciences',
      description: 'Engineering patient-centric ecosystems and interoperable data networks for global health systems.',
      linkText: 'View Solutions'
    },
    {
      icon: <ShoppingCart size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Retail & eCommerce',
      description: 'Designing high-conversion storefronts, omnichannel experiences, and AI-driven personalized shopping.',
      linkText: 'View Solutions'
    },
    {
      icon: <Factory size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Manufacturing & Industrial',
      description: 'Driving Industry 4.0 through IoT sensors, digital twins, and predictive maintenance solutions.',
      linkText: 'Case Study'
    },
    {
      icon: <GraduationCap size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Education & EdTech',
      description: 'Building interactive learning management systems, student analytics dashboards, and virtual classrooms.',
      linkText: 'Case Study'
    },
    {
      icon: <Cpu size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Software & Hi-Tech',
      description: 'Engineering the next generation of SaaS, cloud infrastructure, and enterprise AI frameworks.',
      linkText: 'View Solutions'
    },
    {
      icon: <Truck size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Logistics & Supply Chain',
      description: 'Optimizing global fleet operations, real-time tracking, and automated warehouse management through AI.',
      linkText: 'View Solutions'
    },
    {
      icon: <Radio size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'IoT & Connected Devices',
      description: 'Transforming environments with smart sensors, real-time analytics, and edge processing.',
      linkText: 'Case Study'
    },
    {
      icon: <Home size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Real Estate & PropTech',
      description: 'Modernizing property management and virtual tours through connected digital platforms.',
      linkText: 'View Solutions'
    },
    {
      icon: <Plane size={26} color="var(--primary)" style={{ transition: 'transform 0.3s ease' }} className="icon-hover" />,
      name: 'Drone & UAV Solutions',
      description: 'Empowering aerial data collection, mapping, and automated surveying operations.',
      linkText: 'Case Study'
    }
  ];

  return (
    <section id="industries" className="section bg-gradient-blue bg-glowing-dots">
      <div className="container">
        {/* Section Header */}
        <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
          <span className="badge" style={{ margin: '0 auto 1rem auto', display: 'inline-block' }}>Our Industry Vertical Experience</span>
          <h2 style={{ fontSize: '2.75rem', color: 'var(--secondary)', fontWeight: '700', letterSpacing: '-0.03em' }}>Tailored Technical Expertise</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.15rem', maxWidth: '650px', margin: '1rem auto 0', lineHeight: '1.6' }}>
            We bring domain-specific insights and pre-configured design frameworks to jumpstart project speeds in major industry segments.
          </p>
        </div>

        {/* Card Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {industries.map((ind, idx) => (
            <div 
              key={idx} 
              className="glass-card group" 
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: '1.25rem', 
                padding: '2.5rem 2rem',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                background: 'rgba(10, 15, 30, 0.6)',
                boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                backdropFilter: 'blur(10px)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 112, 243, 0.15)';
                e.currentTarget.style.border = '1px solid rgba(0, 112, 243, 0.3)';
                const icon = e.currentTarget.querySelector('.icon-hover');
                if (icon) (icon as HTMLElement).style.transform = 'scale(1.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.1)';
                e.currentTarget.style.border = '1px solid rgba(255, 255, 255, 0.05)';
                const icon = e.currentTarget.querySelector('.icon-hover');
                if (icon) (icon as HTMLElement).style.transform = 'scale(1)';
              }}
            >
              <div 
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  backgroundColor: 'rgba(0, 112, 243, 0.1)', 
                  borderRadius: '14px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  marginBottom: '0.5rem'
                }}
              >
                {ind.icon}
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--secondary)', fontWeight: '600' }}>{ind.name}</h3>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6', margin: '0', flexGrow: 1 }}>
                {ind.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-white/10 flex items-center gap-2 text-primary font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                {ind.linkText}
                <span className="material-symbols-outlined text-sm">arrow_outward</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

