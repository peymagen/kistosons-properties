import { Building2, Phone, Mail, MapPin } from 'lucide-react';

const scrollTo = (id: string) => {
  if (id === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function Footer() {
  return (
    <footer style={{
      background: 'linear-gradient(180deg, #0a0f1e 0%, #0d1428 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
      fontFamily: "'Outfit', sans-serif",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Outfit:wght@400;500;600;700&display=swap');

        .footer-link {
          color: rgba(255,255,255,0.55);
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          transition: color 0.2s ease, transform 0.2s ease;
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .footer-link:hover {
          color: #f87171;
          transform: translateX(4px);
        }
        .footer-link::before {
          content: '›';
          color: #dc2626;
          font-size: 1.1rem;
          font-weight: 700;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 18px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 10px;
          transition: background 0.2s, border-color 0.2s, transform 0.2s;
          text-decoration: none;
          color: inherit;
        }
        .contact-item:hover {
          background: rgba(220,38,38,0.1);
          border-color: rgba(220,38,38,0.3);
          transform: translateY(-2px);
        }
        .contact-icon {
          width: 38px;
          height: 38px;
          border-radius: 8px;
          background: linear-gradient(135deg, #dc2626, #991b1b);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(220,38,38,0.3);
        }

        .social-btn {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          transition: all 0.25s ease;
          cursor: pointer;
          text-decoration: none;
        }
        .social-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.3);
        }
        .social-fb:hover  { background: #1877f2; border-color: #1877f2; }
        .social-ig:hover  { background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888); border-color: transparent; }
        .social-tw:hover  { background: #1da1f2; border-color: #1da1f2; }

        .footer-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(220,38,38,0.4), rgba(255,255,255,0.1), rgba(220,38,38,0.4), transparent);
          margin: 0;
          border: none;
        }
      `}</style>

      {/* Top red accent line */}
      <div style={{ height: '4px', background: 'linear-gradient(90deg, #dc2626, #1d4ed8, #dc2626)' }} />

      {/* Background glow */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(220,38,38,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Main content */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '60px 32px 40px', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '48px', marginBottom: '48px' }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
              <div style={{
                background: 'linear-gradient(135deg, #1d4ed8, #dc2626)',
                padding: '10px', borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(220,38,38,0.3)',
              }}>
                <Building2 size={26} color="white" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: '700', margin: 0, letterSpacing: '0.03em' }}>
                  KISTO ASSOCIATES
                </h3>
                <p style={{ fontSize: '0.75rem', color: '#f87171', margin: 0, fontStyle: 'italic', fontWeight: '500' }}>
                  Property Consultants
                </p>
              </div>
            </div>

            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Your trusted partner for real estate in Delhi NCR. Specialising in sale, purchase &amp; renting with guaranteed high returns.
            </p>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social-btn social-fb" title="Facebook">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-btn social-ig" title="Instagram">
                <svg width="18" height="18" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-btn social-tw" title="Twitter / X">
                <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M4 4l16 16M4 20L20 4" stroke="white" strokeWidth="2.5" strokeLinecap="round"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
              Quick Links
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { label: 'Home', id: 'home' },
                { label: 'Properties', id: 'properties' },
                { label: 'About Us', id: 'partners' },
                { label: 'Contact', id: 'contact' },
              ].map(({ label, id }) => (
                <button key={id} className="footer-link" onClick={() => scrollTo(id)}>
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: '700', marginBottom: '20px', color: 'white' }}>
              Get In Touch
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>

              {/* Call AK Mandal */}
              <a href="tel:7503979555" className="contact-item">
                <div className="contact-icon"><Phone size={16} color="white" /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Call Now</p>
                  <p style={{ margin: 0, fontSize: '0.9rem', fontWeight: '600', color: 'white' }}>A.K MANDAL: 7503979555</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)' }}>9910904323</p>
                </div>
              </a>

              {/* Email */}
              <a href="mailto:Kistosons@gmail.com" className="contact-item">
                <div className="contact-icon"><Mail size={16} color="white" /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Email Us</p>
                  <p style={{ margin: 0, fontSize: '0.88rem', fontWeight: '600', color: 'white' }}>Kistosons@gmail.com</p>
                </div>
              </a>

              {/* Address */}
              <a href="https://maps.google.com/?q=Mayur+Vihar+Phase+3+Delhi" target="_blank" rel="noreferrer" className="contact-item">
                <div className="contact-icon"><MapPin size={16} color="white" /></div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Visit Us</p>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: '500', color: 'rgba(255,255,255,0.8)', lineHeight: 1.5 }}>3-N, Pocket-4, MIG Complex,<br />Mayur Vihar-3, Delhi-96</p>
                </div>
              </a>

            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="footer-divider" />

        {/* Bottom bar */}
        <div style={{
          paddingTop: '28px',
          display: 'flex', flexWrap: 'wrap',
          alignItems: 'center', justifyContent: 'space-between',
          gap: '12px',
        }}>
          <p style={{ margin: 0, fontSize: '0.82rem', color: 'rgba(255,255,255,0.35)' }}>
            © {new Date().getFullYear()} Kisto Associates. All rights reserved.
          </p>
          <p style={{ margin: 0, fontSize: '0.82rem', color: '#f87171', fontWeight: '600', letterSpacing: '0.05em' }}>
            🏆 Invest In Properties &amp; Get High Returns
          </p>
        </div>
      </div>
    </footer>
  );
}