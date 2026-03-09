import { TrendingUp, MapPin, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToProperties = () => {
    const el = document.getElementById('properties');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      style={{
        fontFamily: "'Playfair Display', 'Georgia', serif",
        background: 'linear-gradient(135deg, #0a1628 0%, #1a2d5a 40%, #8b1a1a 100%)',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        color: 'white',
      }}
    >
      {/* Decorative background elements */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          radial-gradient(circle at 20% 50%, rgba(220, 38, 38, 0.15) 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, rgba(30, 64, 175, 0.2) 0%, transparent 50%),
          radial-gradient(circle at 60% 80%, rgba(220, 38, 38, 0.1) 0%, transparent 40%)
        `,
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Diagonal accent bars */}
      <div style={{
        position: 'absolute', top: 0, right: 0,
        width: '40%', height: '6px',
        background: 'linear-gradient(90deg, transparent, #dc2626)',
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0,
        width: '40%', height: '6px',
        background: 'linear-gradient(90deg, #dc2626, transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 32px', position: 'relative', zIndex: 10, width: '100%' }}>

        {/* Sanskrit badge */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
  <span
    style={{
      display: 'inline-block',
      background: 'linear-gradient(135deg, #dc2626, #991b1b)',
      color: 'white',
      padding: '10px 32px',
      borderRadius: '4px',
      fontFamily: "'Noto Serif Devanagari', serif",
      fontSize: '1.1rem',
      fontWeight: '700',
      letterSpacing: '0.1em',
      boxShadow: '0 0 30px rgba(220, 38, 38, 0.4)',
      border: '1px solid rgba(255,255,255,0.2)',
    animation: 'pulse 2s infinite',
    }}
  >
    !! जय श्री राम !!
  </span>
</div>

        {/* Main headline */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <h1 style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
            fontWeight: '900',
            lineHeight: 1.05,
            margin: 0,
            letterSpacing: '-0.02em',
            textShadow: '0 4px 20px rgba(0,0,0,0.5)',
          }}>
            <span style={{ color: '#ffffff' }}>SALE, PURCHASE</span>
            <br />
            <span style={{
              background: 'linear-gradient(135deg, #f87171, #dc2626)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>&amp; RENTING</span>
          </h1>
        </div>

        {/* Divider */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '28px' }}>
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, transparent, rgba(220,38,38,0.7))' }} />
          <div style={{ width: '8px', height: '8px', background: '#dc2626', transform: 'rotate(45deg)' }} />
          <div style={{ height: '1px', width: '80px', background: 'linear-gradient(90deg, rgba(220,38,38,0.7), transparent)' }} />
        </div>

        {/* Subtitle */}
        <p style={{
          textAlign: 'center',
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontWeight: '500',
          color: 'rgba(255,255,255,0.85)',
          marginBottom: '28px',
          letterSpacing: '0.03em',
          lineHeight: 1.5,
        }}>
          Flats, Offices &amp; Plots In<br />
          <span style={{ color: '#fca5a5', fontWeight: '600' }}>Delhi · Noida Extension · Ghaziabad · Jewar · All Over NCR</span>
        </p>

        {/* Investment tagline */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          gap: '12px', marginBottom: '40px',
        }}>
          <TrendingUp size={28} color="#f87171" />
          <span style={{
            fontFamily: "'Montserrat', 'Arial', sans-serif",
            fontSize: 'clamp(0.9rem, 2vw, 1.15rem)',
            fontWeight: '700',
            color: '#fca5a5',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>
            Invest In Properties &amp; Get High Returns
          </span>
        </div>

        {/* CTA Buttons — all scroll to #properties */}
        <div style={{
          display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
          gap: '16px', marginBottom: '48px',
        }}>
          {['SALE', 'PURCHASE', 'RENTING'].map((label, i) => (
            <button
              key={label}
              onClick={scrollToProperties}
              style={{
                background: i === 0
                  ? 'linear-gradient(135deg, #dc2626, #991b1b)'
                  : i === 1
                  ? 'rgba(255,255,255,0.1)'
                  : 'transparent',
                color: 'white',
                padding: '16px 40px',
                borderRadius: '4px',
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: '800',
                fontSize: '1rem',
                letterSpacing: '0.15em',
                border: i === 0 ? 'none' : '2px solid rgba(255,255,255,0.4)',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: '8px',
                boxShadow: i === 0 ? '0 8px 30px rgba(220,38,38,0.4)' : 'none',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-3px)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 12px 40px rgba(220,38,38,0.5)';
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLButtonElement).style.boxShadow = i === 0 ? '0 8px 30px rgba(220,38,38,0.4)' : 'none';
              }}
            >
              {label}
              {i === 0 && <ArrowRight size={18} />}
            </button>
          ))}
        </div>

      </div>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;900&family=Cormorant+Garamond:wght@500;600&family=Montserrat:wght@500;700;800&display=swap');
          @keyframes pulse {
            0% {
              opacity: 1;
              transform: scale(1);
              box-shadow: 0 0 20px rgba(220,38,38,0.4);
            }
            50% {
              opacity: 0.7;
              transform: scale(1.05);
              box-shadow: 0 0 40px rgba(220,38,38,0.8);
            }
            100% {
              opacity: 1;
              transform: scale(1);
              box-shadow: 0 0 20px rgba(220,38,38,0.4);
            }
          }
      `}</style>
    </section>
  );
}

