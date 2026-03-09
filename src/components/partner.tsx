

const partners = [
  {
    
    name: 'DASNAC',
    initial: 'D',
    bg: 'linear-gradient(135deg, #1a3a6b, #2563eb)',
    shadow: 'rgba(37,99,235,0.4)',
    tagline: 'Premium Residences',
  },
  {
    name: 'GAURS',
    initial: 'G',
    bg: 'linear-gradient(135deg, #991b1b, #dc2626)',
    shadow: 'rgba(220,38,38,0.4)',
    tagline: 'Luxury Living',
  },
  {
    name: 'JAYPEE',
    initial: 'JP',
    bg: 'linear-gradient(135deg, #1e3a5f, #0ea5e9)',
    shadow: 'rgba(14,165,233,0.4)',
    tagline: 'Iconic Projects',
  },
  {
    name: 'BHUTANI',
    initial: 'B',
    bg: 'linear-gradient(135deg, #065f46, #10b981)',
    shadow: 'rgba(16,185,129,0.4)',
    tagline: 'Commercial Spaces',
  },
  {
    name: 'nextra',
    initial: 'NX',
    bg: 'linear-gradient(135deg, #4c1d95, #8b5cf6)',
    shadow: 'rgba(139,92,246,0.4)',
    tagline: 'Modern Homes',
  },
  {
    name: 'iKON',
    initial: 'iK',
    bg: 'linear-gradient(135deg, #111827, #374151)',
    shadow: 'rgba(220,38,38,0.4)',
    tagline: 'Elite Towers',
  },
  {
    name: 'Eros Holiday Inn',
    initial: 'EH',
    bg: 'linear-gradient(135deg, #7c3aed, #c026d3)',
    shadow: 'rgba(192,38,211,0.4)',
    tagline: 'Hospitality & Stays',
  },
];

export default function Partners() {
  return (
    <section style={{
      background: '#f8f5f0',
      padding: '90px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Outfit:wght@400;500;600;700;800&display=swap');

        .partners-section {
          font-family: 'Outfit', sans-serif;
        }

        .partner-pill {
          display: flex;
          align-items: center;
          gap: 16px;
          background: white;
          border-radius: 100px;
          padding: 12px 28px 12px 12px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 1px solid rgba(0,0,0,0.06);
          transition: all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: default;
          white-space: nowrap;
        }
        .partner-pill:hover {
          transform: translateY(-5px) scale(1.03);
          box-shadow: 0 16px 48px var(--shadow);
          border-color: transparent;
        }
        .pill-avatar {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Outfit', sans-serif;
          font-weight: 800;
          font-size: 0.9rem;
          color: white;
          background: var(--bg);
          flex-shrink: 0;
          box-shadow: 0 4px 16px var(--shadow);
          letter-spacing: 0.05em;
        }
        .pill-text {}
        .pill-name {
          font-weight: 700;
          font-size: 0.95rem;
          color: #111827;
          letter-spacing: 0.03em;
        }
        .pill-tagline {
          font-size: 0.72rem;
          color: #9ca3af;
          font-weight: 500;
          margin-top: 2px;
        }

        .marquee-wrapper {
          overflow: hidden;
          mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
          -webkit-mask-image: linear-gradient(90deg, transparent, black 8%, black 92%, transparent);
        }
        .marquee-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: marquee 28s linear infinite;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .stats-row {
          display: flex;
          justify-content: center;
          gap: 0;
          margin-top: 64px;
          background: white;
          border-radius: 20px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.08);
          overflow: hidden;
          max-width: 720px;
          margin-left: auto;
          margin-right: auto;
          margin-top: 64px;
        }
        .stat-item {
          flex: 1;
          padding: 28px 20px;
          text-align: center;
          border-right: 1px solid #f3f4f6;
          transition: background 0.2s;
        }
        .stat-item:last-child { border-right: none; }
        .stat-item:hover { background: #fef2f2; }
        .stat-number {
          font-family: 'Playfair Display', serif;
          font-size: 2rem;
          font-weight: 900;
          color: #dc2626;
          line-height: 1;
        }
        .stat-label {
          font-size: 0.75rem;
          color: #6b7280;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-top: 6px;
        }
      `}</style>

      <div className="partners-section">
        {/* Decorative blobs */}
        <div style={{
          position: 'absolute', top: '-80px', right: '-80px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(220,38,38,0.07), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-60px', left: '-60px',
          width: '250px', height: '250px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.07), transparent 70%)',
          pointerEvents: 'none',
        }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '52px', padding: '0 24px' }}>
          <span style={{
            display: 'inline-block',
            background: '#fef2f2',
            color: '#dc2626',
            fontSize: '0.7rem',
            fontWeight: '700',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            padding: '6px 18px',
            borderRadius: '100px',
            marginBottom: '16px',
            border: '1px solid #fecaca',
          }}>Our Trusted Network</span>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3rem)',
            fontWeight: '900',
            color: '#111827',
            margin: '0 0 14px',
            lineHeight: 1.1,
          }}>
            Associated With India's{' '}
            <span style={{
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Top Developers
            </span>
          </h2>

          <p style={{
            color: '#6b7280',
            fontSize: '1rem',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.6,
          }}>
            Partnered with Delhi NCR's most trusted real estate brands to bring you verified, premium properties.
          </p>
        </div>

        {/* Marquee */}
        <div className="marquee-wrapper" style={{ padding: '12px 0' }}>
          <div className="marquee-track">
            {/* Duplicate for seamless loop */}
            {[...partners, ...partners].map((partner, i) => (
              <div
                key={i}
                className="partner-pill"
                style={{
                  '--bg': partner.bg,
                  '--shadow': partner.shadow,
                } as React.CSSProperties}
              >
                <div className="pill-avatar" style={{ background: partner.bg, boxShadow: `0 4px 16px ${partner.shadow}` }}>
                  {partner.initial}
                </div>
                <div className="pill-text">
                  <div className="pill-name">{partner.name}</div>
                  <div className="pill-tagline">{partner.tagline}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number">7+</div>
            <div className="stat-label">Partners</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">20+</div>
            <div className="stat-label">Years Exp.</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Properties</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">4</div>
            <div className="stat-label">Cities</div>
          </div>
        </div>
      </div>
    </section>
  );
}