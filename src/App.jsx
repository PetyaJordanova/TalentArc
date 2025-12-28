import React, { useState, useEffect } from 'react';

const TalentArc = () => {
  const [activeTab, setActiveTab] = useState('seekers');

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);

    document.querySelectorAll('.step, .price-card, .coach-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(40px)';
      el.style.transition = 'all 0.8s ease-out';
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div style={{ fontFamily: "'Josefin Sans', sans-serif", overflowX: 'hidden', width: '100%', maxWidth: '100vw' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&family=Crimson+Pro:wght@400;600;700;900&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Josefin Sans', sans-serif;
          color: #1A1A1A;
          background: #FFFFFF;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
          overflow-x: hidden;
        }

        /* Navigation */
        nav {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid #EFE3E7;
          z-index: 1000;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-family: 'Crimson Pro', serif;
          font-size: 2rem;
          font-weight: 900;
          color: #1A1A1A;
          letter-spacing: -0.01em;
        }

        .nav-links {
          display: flex;
          gap: 3rem;
          list-style: none;
        }

        .nav-links a {
          text-decoration: none;
          color: #6B6B6B;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .nav-links a:hover {
          color: #9A6B7A;
        }

        .nav-cta {
          background: #2A2A2A;
          color: #FFFFFF;
          padding: 0.9rem 2.2rem;
          border: none;
          font-weight: 800;
          font-size: 0.9rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-cta:hover {
          background: #1A1A1A;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        /* Hero */
        .hero {
          margin-top: 80px;
          min-height: 90vh;
          background: linear-gradient(135deg, #1A1A1A 0%, #6E4B59 100%);
          position: relative;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -10%;
          right: -15%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(154, 107, 122, 0.2) 0%, transparent 70%);
          animation: float 25s ease-in-out infinite;
        }

        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 30px) rotate(5deg); }
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -20%;
          left: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(154, 107, 122, 0.15) 0%, transparent 70%);
        }

        .hero-container {
          max-width: 1400px;
          margin: 0 auto;
          padding: 4rem 3rem;
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 6rem;
          align-items: center;
        }

        .hero-content {
          color: #FFFFFF;
        }

        .hero-label {
          font-size: 0.85rem;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #9A6B7A;
          font-weight: 700;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.2s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .hero h1 {
          font-family: 'Crimson Pro', serif;
          font-size: 5.5rem;
          font-weight: 900;
          line-height: 1.05;
          margin-bottom: 2rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.4s forwards;
        }

        .hero h1 .accent {
          color: #9A6B7A;
          font-style: italic;
        }

        .hero-subtitle {
          font-size: 1.3rem;
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 3rem;
          max-width: 600px;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.6s forwards;
        }

        .hero-buttons {
          display: flex;
          gap: 1.5rem;
          opacity: 0;
          animation: fadeInUp 1s ease-out 0.8s forwards;
        }

        .btn-primary {
          background: #D4B5BD;
          color: #1A1A1A;
          padding: 1.2rem 3rem;
          border: none;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .btn-primary:hover {
          background: #FFFFFF;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          color: #FFFFFF;
          padding: 1.2rem 3rem;
          border: 2px solid #FFFFFF;
          font-weight: 700;
          font-size: 0.95rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          text-decoration: none;
          display: inline-block;
          transition: all 0.4s ease;
          cursor: pointer;
        }

        .btn-secondary:hover {
          background: #FFFFFF;
          color: #1A1A1A;
        }

        .hero-visual {
          opacity: 0;
          animation: fadeInUp 1s ease-out 1s forwards;
        }

        .stat-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 2rem;
        }

        .stat-item {
          background: rgba(154, 107, 122, 0.1);
          border: 1px solid rgba(154, 107, 122, 0.3);
          padding: 2.5rem 2rem;
          backdrop-filter: blur(10px);
          transition: all 0.5s ease;
        }

        .stat-item:hover {
          background: rgba(154, 107, 122, 0.2);
          border-color: #9A6B7A;
          transform: translateY(-10px);
        }

        .stat-number {
          font-family: 'Crimson Pro', serif;
          font-size: 3.8rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .stat-label {
          color: rgba(255, 255, 255, 0.9);
          font-size: 0.9rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          font-weight: 600;
        }

        /* Philosophy */
        .philosophy {
          padding: 8rem 3rem;
          background: #FAF8F5;
          position: relative;
        }

        .philosophy::before {
          content: '"';
          position: absolute;
          top: 2rem;
          left: 5%;
          font-family: 'Crimson Pro', serif;
          font-size: 28rem;
          color: rgba(154, 107, 122, 0.06);
          line-height: 1;
          font-weight: 900;
        }

        .philosophy-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .section-label {
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9A6B7A;
          font-weight: 700;
          margin-bottom: 2rem;
        }

        .philosophy h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 3.8rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 2.5rem;
          line-height: 1.2;
        }

        .philosophy p {
          font-size: 1.25rem;
          line-height: 1.9;
          color: #6B6B6B;
          margin-bottom: 1.5rem;
        }

        .emphasis {
          font-style: italic;
          color: #9A6B7A;
          font-weight: 600;
        }

        /* How It Works */
        .how-it-works {
          padding: 8rem 3rem;
          background: #1A1A1A;
          color: #FFFFFF;
        }

        .section-header {
          max-width: 1400px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .section-title {
          font-family: 'Crimson Pro', serif;
          font-size: 4rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 3rem;
        }

        .tabs {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 4rem;
          border-bottom: 1px solid rgba(154, 107, 122, 0.3);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .tab-btn {
          background: none;
          border: none;
          color: rgba(255, 255, 255, 0.6);
          font-size: 1rem;
          font-weight: 700;
          padding: 1rem 2rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          position: relative;
          transition: color 0.3s ease;
        }

        .tab-btn::after {
          content: '';
          position: absolute;
          bottom: -1px;
          left: 0;
          width: 0;
          height: 3px;
          background: #9A6B7A;
          transition: width 0.3s ease;
        }

        .tab-btn.active {
          color: #FFFFFF;
        }

        .tab-btn.active::after {
          width: 100%;
        }

        .steps-container {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .step {
          position: relative;
          padding: 3rem 2.5rem;
          background: rgba(154, 107, 122, 0.08);
          border: 1px solid rgba(154, 107, 122, 0.25);
          transition: all 0.5s ease;
        }

        .step:nth-child(2) {
          transform: translateY(40px);
        }

        .step:hover {
          background: rgba(154, 107, 122, 0.15);
          border-color: #9A6B7A;
          transform: translateY(-10px);
        }

        .step:nth-child(2):hover {
          transform: translateY(30px);
        }

        .step-number {
          font-family: 'Crimson Pro', serif;
          font-size: 5.5rem;
          font-weight: 900;
          color: #9A6B7A;
          opacity: 0.3;
          line-height: 1;
          margin-bottom: 1.5rem;
        }

        .step h3 {
          font-family: 'Crimson Pro', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }

        .step p {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.8;
          font-size: 1.05rem;
        }

        /* Pricing */
        .pricing {
          padding: 8rem 3rem;
          background: #FAF8F5;
        }

        .pricing-header {
          max-width: 1400px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .pricing-header h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 4rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 1.5rem;
        }

        .pricing-header p {
          font-size: 1.2rem;
          color: #6B6B6B;
        }

        .pricing-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .price-card {
          background: #FFFFFF;
          border: 2px solid #EFE3E7;
          padding: 3.5rem 3rem;
          transition: all 0.5s ease;
          position: relative;
        }

        .price-card.featured {
          background: #9A6B7A;
          border-color: #9A6B7A;
          transform: scale(1.05);
          box-shadow: 0 20px 60px rgba(154, 107, 122, 0.3);
        }

        .featured-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: #D4B5BD;
          color: #1A1A1A;
          padding: 0.5rem 1.5rem;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.15em;
        }

        .price-card:hover:not(.featured) {
          border-color: #9A6B7A;
          transform: translateY(-10px);
          box-shadow: 0 15px 40px rgba(154, 107, 122, 0.2);
        }

        .tier-name {
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9A6B7A;
          font-weight: 700;
          margin-bottom: 1.5rem;
        }

        .price-card.featured .tier-name {
          color: #D4B5BD;
        }

        .price {
          font-family: 'Crimson Pro', serif;
          font-size: 4.5rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 0.5rem;
          line-height: 1;
        }

        .price-card.featured .price {
          color: #D4B5BD;
        }

        .price span {
          font-size: 1.2rem;
          color: #6B6B6B;
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 400;
        }

        .price-card.featured .price span {
          color: rgba(255, 255, 255, 0.7);
        }

        .price-description {
          color: #6B6B6B;
          margin-bottom: 2.5rem;
          padding-bottom: 2.5rem;
          border-bottom: 1px solid #EFE3E7;
        }

        .price-card.featured .price-description {
          color: rgba(255, 255, 255, 0.8);
          border-color: rgba(255, 255, 255, 0.2);
        }

        .features {
          list-style: none;
          margin-bottom: 2.5rem;
        }

        .features li {
          padding: 0.8rem 0;
          color: #6B6B6B;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .price-card.featured .features li {
          color: rgba(255, 255, 255, 0.9);
        }

        .features li::before {
          content: '—';
          color: #9A6B7A;
          font-weight: 700;
          flex-shrink: 0;
        }

        .price-card.featured .features li::before {
          color: #D4B5BD;
        }

        /* Coaches */
        .coaches {
          padding: 8rem 3rem;
          background: #1A1A1A;
          color: #FFFFFF;
        }

        .coaches-header {
          max-width: 1400px;
          margin: 0 auto 5rem;
          text-align: center;
        }

        .coaches-header h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 4rem;
          font-weight: 900;
          color: #FFFFFF;
        }

        .coaches-grid {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }

        .coach-card {
          background: rgba(154, 107, 122, 0.08);
          border: 1px solid rgba(154, 107, 122, 0.25);
          padding: 3rem 2.5rem;
          transition: all 0.5s ease;
        }

        .coach-card:hover {
          background: rgba(154, 107, 122, 0.15);
          border-color: #9A6B7A;
          transform: translateY(-10px);
        }

        .coach-initials {
          width: 90px;
          height: 90px;
          background: linear-gradient(135deg, #6E4B59, #1A1A1A);
          border: 2px solid #9A6B7A;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Crimson Pro', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 2rem;
        }

        .coach-name {
          font-family: 'Crimson Pro', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 0.5rem;
        }

        .coach-title {
          color: #9A6B7A;
          font-size: 0.85rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .coach-specialties {
          display: flex;
          flex-wrap: wrap;
          gap: 0.8rem;
          margin-bottom: 2rem;
        }

        .specialty {
          background: rgba(154, 107, 122, 0.2);
          border: 1px solid rgba(154, 107, 122, 0.4);
          color: #9A6B7A;
          padding: 0.5rem 1rem;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .coach-price {
          font-family: 'Crimson Pro', serif;
          font-size: 2.2rem;
          font-weight: 900;
          color: #9A6B7A;
          margin-bottom: 1.5rem;
        }

        .coach-price span {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.6);
          font-family: 'Josefin Sans', sans-serif;
          font-weight: 400;
        }

        .coach-bio {
          color: rgba(255, 255, 255, 0.8);
          line-height: 1.7;
          margin-bottom: 2rem;
        }

        /* CTA */
        .cta {
          padding: 10rem 3rem;
          background: #1A1A1A;
          position: relative;
          overflow: hidden;
        }

        .cta::before {
          content: '';
          position: absolute;
          top: -40%;
          right: -15%;
          width: 800px;
          height: 800px;
          background: radial-gradient(circle, rgba(154, 107, 122, 0.15) 0%, transparent 70%);
        }

        .cta-container {
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .cta h2 {
          font-family: 'Crimson Pro', serif;
          font-size: 5rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 2rem;
          line-height: 1.2;
        }

        .cta p {
          font-size: 1.4rem;
          color: #9A6B7A;
          margin-bottom: 3rem;
          line-height: 1.8;
        }

        .cta-buttons {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
        }

        /* Footer */
        footer {
          background: #1A1A1A;
          color: rgba(255, 255, 255, 0.7);
          padding: 5rem 3rem 3rem;
        }

        .footer-container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 4rem;
          margin-bottom: 4rem;
        }

        .footer-brand h3 {
          font-family: 'Crimson Pro', serif;
          font-size: 2rem;
          font-weight: 900;
          color: #FFFFFF;
          margin-bottom: 1.5rem;
        }

        .footer-brand p {
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        .aporis {
          color: #9A6B7A;
          font-weight: 700;
        }

        .footer-section h4 {
          color: #9A6B7A;
          font-size: 0.85rem;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          margin-bottom: 1.5rem;
          font-weight: 700;
        }

        .footer-section ul {
          list-style: none;
        }

        .footer-section a {
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          display: block;
          padding: 0.5rem 0;
          transition: color 0.3s ease;
          cursor: pointer;
        }

        .footer-section a:hover {
          color: #9A6B7A;
        }

        .footer-bottom {
          border-top: 1px solid rgba(154, 107, 122, 0.3);
          padding-top: 2rem;
          text-align: center;
          font-size: 0.9rem;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-container,
          .steps-container,
          .pricing-grid,
          .coaches-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .hero h1 {
            font-size: 3.5rem;
          }

          .section-title,
          .coaches-header h2,
          .pricing-header h2,
          .cta h2 {
            font-size: 3rem;
          }

          .nav-links {
            display: none;
          }

          .step:nth-child(2) {
            transform: translateY(0);
          }

          .price-card.featured {
            transform: scale(1);
          }
        }

        @media (max-width: 768px) {
          nav {
            padding: 1rem 1.5rem;
          }

          .hero,
          .philosophy,
          .how-it-works,
          .pricing,
          .coaches,
          .cta {
            padding: 4rem 1.5rem;
          }

          .hero h1 {
            font-size: 2.5rem;
          }

          .philosophy h2 {
            font-size: 2.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav>
        <div className="nav-container">
          <div className="logo">TalentArc</div>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('philosophy')}>Philosophy</a></li>
            <li><a onClick={() => scrollToSection('how')}>How It Works</a></li>
            <li><a onClick={() => scrollToSection('pricing')}>For Coaches</a></li>
            <li><a onClick={() => scrollToSection('coaches')}>Find a Coach</a></li>
          </ul>
          <button className="nav-cta" onClick={() => scrollToSection('apply')}>Become a Coach</button>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-label">Career Navigation — Redefined</div>
            <h1>Navigate Your Career in the <span className="accent">Age of AI</span></h1>
            <p className="hero-subtitle">The world is transforming. Connect with expert career coaches who understand how to build meaningful careers in an AI-driven economy—whether you work in AI or not.</p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('coaches')}>Find Your Coach</button>
              <button className="btn-secondary" onClick={() => scrollToSection('philosophy')}>Our Philosophy</button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="stat-grid">
              <div className="stat-item">
                <div className="stat-number">50+</div>
                <div className="stat-label">Expert Coaches</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">500+</div>
                <div className="stat-label">Careers Guided</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">95%</div>
                <div className="stat-label">Success Rate</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">$120K</div>
                <div className="stat-label">Avg Increase</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section id="philosophy" className="philosophy">
        <div className="philosophy-container">
          <div className="section-label">Our Philosophy</div>
          <h2>The World Has Changed. Your Career Strategy Should Too.</h2>
          <p>AI isn't just disrupting tech—it's reshaping <span className="emphasis">every industry, every role, every career path.</span> The old playbooks don't work anymore.</p>
          <p>You need guidance from people who understand both the timeless fundamentals of career development and the seismic shifts happening right now.</p>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="how-it-works">
        <div className="section-header">
          <div className="section-label">How It Works</div>
          <h2 className="section-title">Two Paths. One Mission.</h2>
        </div>

        <div className="tabs">
          <button 
            className={`tab-btn ${activeTab === 'seekers' ? 'active' : ''}`}
            onClick={() => setActiveTab('seekers')}
          >
            For Career Seekers
          </button>
          <button 
            className={`tab-btn ${activeTab === 'experts' ? 'active' : ''}`}
            onClick={() => setActiveTab('experts')}
          >
            For Career Experts
          </button>
        </div>

        {activeTab === 'seekers' && (
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Discover Your Coach</h3>
              <p>Browse our curated directory of career experts. Filter by industry experience, coaching specialty, and expertise in AI-era career transitions.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Book & Connect</h3>
              <p>Review detailed profiles, read testimonials, and book directly through each coach's calendar. Choose one-time sessions or comprehensive packages.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Transform Your Path</h3>
              <p>Get personalized guidance on resumes, interviews, career pivots, and navigating AI-driven industry changes from experts who've been on the other side.</p>
            </div>
          </div>
        )}

        {activeTab === 'experts' && (
          <div className="steps-container">
            <div className="step">
              <div className="step-number">01</div>
              <h3>Apply to Join</h3>
              <p>Submit your application showcasing your background in recruiting, hiring, career coaching, or HR. We carefully vet all coaches to maintain quality.</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <h3>Build Your Presence</h3>
              <p>Create your profile, set your own rates, connect your booking system, and showcase your unique expertise and approach.</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <h3>Coach & Earn</h3>
              <p>Get featured on TalentArc and benefit from our marketing efforts. Keep 100% of your earnings—we just charge a flat monthly platform fee.</p>
            </div>
          </div>
        )}
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="pricing-header">
          <div className="section-label">For Coaches</div>
          <h2>Transparent. Fair. Simple.</h2>
          <p>No revenue sharing. No hidden fees. Just a flat monthly subscription.</p>
        </div>

        <div className="pricing-grid">
          <div className="price-card">
            <div className="tier-name">Basic Listing</div>
            <div className="price">$50<span>/month</span></div>
            <p className="price-description">Essential presence on the platform</p>
            <ul className="features">
              <li>Profile page in directory</li>
              <li>Contact information displayed</li>
              <li>Basic search listing</li>
              <li>Keep 100% of earnings</li>
              <li>Email support</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}} onClick={() => scrollToSection('apply')}>Get Started</button>
          </div>

          <div className="price-card featured">
            <div className="featured-badge">MOST POPULAR</div>
            <div className="tier-name">Featured Coach</div>
            <div className="price">$100<span>/month</span></div>
            <p className="price-description">Maximum visibility and tools</p>
            <ul className="features">
              <li>Everything in Basic</li>
              <li>Priority homepage placement</li>
              <li>Booking calendar integration</li>
              <li>Featured badge on profile</li>
              <li>Performance analytics</li>
              <li>Priority support</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}} onClick={() => scrollToSection('apply')}>Get Started</button>
          </div>

          <div className="price-card">
            <div className="tier-name">Premium</div>
            <div className="price">$150<span>/month</span></div>
            <p className="price-description">For established coaches</p>
            <ul className="features">
              <li>Everything in Featured</li>
              <li>Content & blog opportunities</li>
              <li>Direct lead introductions</li>
              <li>Premium profile badge</li>
              <li>Newsletter features</li>
              <li>Dedicated account manager</li>
            </ul>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}} onClick={() => scrollToSection('apply')}>Get Started</button>
          </div>
        </div>
      </section>

      {/* Coaches */}
      <section id="coaches" className="coaches">
        <div className="coaches-header">
          <div className="section-label">Featured Experts</div>
          <h2>Meet Our Coaches</h2>
        </div>

        <div className="coaches-grid">
          <div className="coach-card">
            <div className="coach-initials">SM</div>
            <div className="coach-name">Sarah Mitchell</div>
            <div className="coach-title">Former Tech Recruiter</div>
            <div className="coach-specialties">
              <span className="specialty">Career Transitions</span>
              <span className="specialty">Interview Prep</span>
              <span className="specialty">Tech Industry</span>
            </div>
            <div className="coach-price">$150 <span>per session</span></div>
            <p className="coach-bio">15 years recruiting for tech companies. Specialized in helping professionals navigate career changes in AI-transformed industries.</p>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}}>View Profile</button>
          </div>

          <div className="coach-card">
            <div className="coach-initials">JC</div>
            <div className="coach-name">James Chen</div>
            <div className="coach-title">Career Strategist</div>
            <div className="coach-specialties">
              <span className="specialty">Career Pivots</span>
              <span className="specialty">Leadership</span>
              <span className="specialty">Strategy</span>
            </div>
            <div className="coach-price">$125 <span>per session</span></div>
            <p className="coach-bio">Former hiring manager at Fortune 500 companies. Expert in positioning professionals for roles in evolving industries.</p>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}}>View Profile</button>
          </div>

          <div className="coach-card">
            <div className="coach-initials">RE</div>
            <div className="coach-name">Rachel Evans</div>
            <div className="coach-title">Resume & Brand Expert</div>
            <div className="coach-specialties">
              <span className="specialty">CV Writing</span>
              <span className="specialty">LinkedIn</span>
              <span className="specialty">Personal Brand</span>
            </div>
            <div className="coach-price">$100 <span>per session</span></div>
            <p className="coach-bio">Reviewed 20,000+ resumes as a corporate recruiter. Specializes in helping professionals stand out in competitive markets.</p>
            <button className="btn-primary" style={{width: '100%', textAlign: 'center'}}>View Profile</button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="apply" className="cta">
        <div className="cta-container">
          <h2>Ready to Begin?</h2>
          <p>Whether you're navigating your career in uncertain times or sharing your expertise to guide others, TalentArc is your platform.</p>
          <div className="cta-buttons">
            <a href="https://forms.gle/your-application-link" className="btn-primary">Apply as a Coach</a>
            <button className="btn-secondary" onClick={() => scrollToSection('coaches')}>Find a Coach</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3>TalentArc</h3>
              <p>The premier marketplace for career guidance in the age of AI. Connecting professionals with expert coaches who understand the future of work.</p>
              <p style={{marginTop: '2rem'}}>Part of the <span className="aporis">Aporis</span> family — Building AI-Ready Teams</p>
            </div>
            <div className="footer-section">
              <h4>For Seekers</h4>
              <ul>
                <li><a onClick={() => scrollToSection('coaches')}>Find a Coach</a></li>
                <li><a onClick={() => scrollToSection('how')}>How It Works</a></li>
                <li><a>Success Stories</a></li>
                <li><a>Resources</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>For Coaches</h4>
              <ul>
                <li><a onClick={() => scrollToSection('apply')}>Apply Now</a></li>
                <li><a onClick={() => scrollToSection('pricing')}>Pricing</a></li>
                <li><a>Coach Login</a></li>
                <li><a>FAQ</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li><a>About</a></li>
                <li><a>Contact</a></li>
                <li><a>Privacy</a></li>
                <li><a>Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TalentArc. A service by Aporis LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TalentArc;