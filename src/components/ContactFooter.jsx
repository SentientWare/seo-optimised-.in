import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail } from 'lucide-react';

export default function ContactFooter() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setForm({ name: '', email: '', company: '', message: '' });
        }, 3000);
      } else {
        const result = await response.json();
        alert(result.error || "Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error sending message.");
    }
  };

  return (
    <footer id="contact" style={{ backgroundColor: 'var(--secondary)', color: 'var(--text-light)', padding: '5rem 0 2rem 0' }}>
      <div className="container">
        {/* Contact Form Section */}
        <div className="grid-2" style={{ gap: '4rem', paddingBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          {/* Left contact info */}
          <div>
            <span style={{ color: 'var(--primary)', fontWeight: 600, textTransform: 'uppercase', fontSize: '0.85rem' }}>Let's Build Together</span>
            <h2 style={{ fontSize: 'clamp(1.8rem, 6vw, 2.5rem)', color: '#ffffff', marginTop: '0.5rem', marginBottom: '1.5rem' }}>Partner with the AI-Native Elite</h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2.5rem', maxWidth: '450px' }}>
              Fill out the form and our technical solutions architect will get in touch with you within 24 hours to map out your product needs.
            </p>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><MapPin size={22} /></div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem' }}>Global HQ (US)</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>1309 Coffeen Avenue, Ste 1200, Sheridan, WY 82801</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><Phone size={22} /></div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem' }}>Phone Support</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>+91 6371763610</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <div style={{ color: 'var(--primary)' }}><Mail size={22} /></div>
                <div>
                  <h4 style={{ color: '#ffffff', fontSize: '0.95rem' }}>General Inquiries</h4>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>info@sentientware.in</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right form submission */}
          <div className="glass-card" style={{ backgroundColor: 'rgba(255,255,255,0.03)', borderColor: 'rgba(255,255,255,0.08)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <h3 style={{ color: '#ffffff', marginBottom: '1rem' }}>Successfully taken</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>Our team will connect with you soon</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>Your Name *</label>
                  <input 
                    type="text" 
                    required 
                    value={form.name} 
                    onChange={e => setForm({...form, name: e.target.value})} 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                  />
                </div>
                
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>Your Email *</label>
                  <input 
                    type="email" 
                    required 
                    value={form.email} 
                    onChange={e => setForm({...form, email: e.target.value})} 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>Company / Project Name</label>
                  <input 
                    type="text" 
                    value={form.company} 
                    onChange={e => setForm({...form, company: e.target.value})} 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none' }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', color: 'rgba(255,255,255,0.8)', marginBottom: '0.4rem' }}>Project Details *</label>
                  <textarea 
                    rows="4" 
                    required 
                    value={form.message} 
                    onChange={e => setForm({...form, message: e.target.value})} 
                    style={{ width: '100%', padding: '0.8rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: '#ffffff', outline: 'none', resize: 'none' }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', gap: '0.6rem', marginTop: '0.5rem' }}>
                  <span>Send Message</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer Bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', paddingTop: '2rem' }}>
          <div>
            <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#ffffff' }}>ajackus<span style={{ color: 'var(--primary)' }}>.</span></span>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem', marginTop: '0.25rem' }}>© 2026 Ajackus Consulting LLP. All rights reserved.</p>
          </div>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: '1.2rem' }}>
            <a href="https://www.linkedin.com/company/ajackus/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a href="https://twitter.com/ajackus" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
            </a>
            <a href="https://www.facebook.com/ajackus" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://www.instagram.com/ajackus/" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)' }} className="social-icon">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

