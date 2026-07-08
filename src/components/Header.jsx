import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Search } from 'lucide-react';

export default function Header({ persona, setPersona }) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const businessLinks = [
    { label: 'Industries', href: '#industries' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Company', href: '#company' }
  ];

  const engineerLinks = [
    { label: 'Build Profile', href: '#profile' },
    { label: 'Search Jobs', href: '#jobs' },
    { label: 'Why Ajackus', href: '#why-us' },
    { label: 'FAQs', href: '#faqs' }
  ];

  const activeLinks = persona === 'businesses' ? businessLinks : engineerLinks;
  const ctaText = persona === 'businesses' ? 'Partner With Us' : 'Join Talent Network';

  return (
    <>
      <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
        {/* Top bar with Persona Selection */}
        <div className="top-bar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="persona-switcher">
              <button 
                onClick={() => setPersona('businesses')} 
                className={`persona-tab ${persona === 'businesses' ? 'active' : ''}`}
              >
                Businesses
              </button>
              <button 
                onClick={() => setPersona('engineers')} 
                className={`persona-tab ${persona === 'engineers' ? 'active' : ''}`}
              >
                Engineers
              </button>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              <span>Contact: +1 973 910 9755</span>
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="container">
          <nav className="navbar">
            <a href="/" className="logo" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <img 
                src="https://www.ajackus.com/images/logo-icon-blue.svg" 
                alt="Ajackus Logo" 
              />
              <span style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--secondary)', letterSpacing: '-0.5px' }}>
                ajackus<span style={{ color: 'var(--primary)' }}>.</span>
              </span>
            </a>

            {/* Desktop Links */}
            <ul className="nav-links">
              {activeLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="nav-item">{link.label}</a>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <button className="flex-center" style={{ color: 'var(--primary)', padding: '0.5rem' }}>
                <Search size={20} />
              </button>
              <a href="#contact" className="btn btn-primary">
                {ctaText}
                <ArrowRight size={16} />
              </a>
              <button className="menu-btn" onClick={() => setDrawerOpen(true)}>
                <Menu size={24} />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`overlay ${drawerOpen ? 'visible' : ''}`} 
        onClick={() => setDrawerOpen(false)}
      />

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <span style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--secondary)' }}>
            ajackus<span style={{ color: 'var(--primary)' }}>.</span>
          </span>
          <button onClick={() => setDrawerOpen(false)}>
            <X size={24} color="var(--secondary)" />
          </button>
        </div>
        <ul className="mobile-nav-links">
          {activeLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                className="mobile-nav-item" 
                onClick={() => setDrawerOpen(false)}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a 
            href="#contact" 
            className="btn btn-primary" 
            style={{ width: '100%' }}
            onClick={() => setDrawerOpen(false)}
          >
            {ctaText}
          </a>
        </div>
      </div>
    </>
  );
}
