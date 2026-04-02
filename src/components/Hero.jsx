import React, {useEffect, useState} from 'react'

export default function Hero(){
  const full = "Hi, I'm Prajjwal — Aspiring Software Engineer"
  const [text, setText] = useState('')
  const [openIdx, setOpenIdx] = useState(null)
  const [hoveredCard, setHoveredCard] = useState(null)
  const [typingComplete, setTypingComplete] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(()=>{
    let i = 0
    setText('')
    setTypingComplete(false)
    const t = setInterval(()=>{
      i++
      setText(full.slice(0,i))
      if(i >= full.length) {
        clearInterval(t)
        setTypingComplete(true)
      }
    }, 50)
    return ()=> clearInterval(t)
  },[])

  const toggleCard = (index) => {
    setOpenIdx(openIdx === index ? null : index)
  }

  const expertiseCards = [
    {
      id: 0,
      number: '01',
      title: 'Full Stack Development',
      description: 'Building responsive web apps with modern stacks, APIs, and deployments.',
      tags: ['React', 'Node.js', 'Python', 'MongoDB', 'Springboot Java'],
      expandedContent: 'I build end-to-end web applications — from REST APIs and database models to polished UI and deployment pipelines.',
      badge: '⚡ 3+ years experience',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 17L3 12l5-5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 17l5-5-5-5" strokeLinecap="round" strokeLinejoin="round"/>
          <rect x="9" y="4" width="6" height="16" rx="1" stroke="currentColor"/>
        </svg>
      )
    },
    {
      id: 1,
      number: '02',
      title: 'Artificial Intelligence',
      description: 'Modeling and prototyping ML systems and AI integrations.',
      tags: ['Python', 'TensorFlow', 'OpenAI', 'NLP', 'PyTorch'],
      expandedContent: 'I experiment with model prototyping, lightweight inference, and integrating ML features into products.',
      badge: '🤖 5+ AI projects',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor"/>
          <path d="M9 8v8" strokeLinecap="round"/>
          <path d="M15 8v8" strokeLinecap="round"/>
          <circle cx="12" cy="12" r="1.5" fill="currentColor"/>
          <path d="M12 4v2" strokeLinecap="round"/>
          <path d="M12 20v1" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 2,
      number: '03',
      title: 'Data Science',
      description: 'Analytics, visualization, and data-driven solutions.',
      tags: ['Pandas', 'NumPy', 'Matplotlib', 'SQL', 'Tableau'],
      expandedContent: 'I analyze datasets, build visualizations, and prototype insights to help products make smarter decisions.',
      badge: '📊 10+ analyses completed',
      icon: (
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18 9v6" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12v3" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M6 15v3" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="18" cy="15" r="0.5" fill="currentColor"/>
        </svg>
      )
    }
  ]

  return (
    <section className="hero">
      {/* Animated background elements */}
      <div className="hero-bg">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere second"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="container hero-grid">
        {/* Left Side - Hero Content */}
        <div className="hero-content">
          {/* Greeting Badge */}
          <div className="greeting-badge">
            <span className="wave">👋</span>
            <span className="greeting-text">Welcome to my portfolio</span>
            <span className="badge-dot"></span>
          </div>

          {/* Dynamic title with typing animation */}
          <h1 className="hero-title">
            {text}
            <span className="caret"></span>
          </h1>

          {/* Tagline */}
          <div className="tagline-wrapper">
            <p className="hero-tagline">
              <span className="tagline-highlight">Building innovative solutions with code</span>
            </p>
            {!isMobile && (
              <div className="tagline-inline">
                <span>Full Stack Developer</span>
                <span className="separator">•</span>
                <span>AI Enthusiast</span>
                <span className="separator">•</span>
                <span>Data Explorer</span>
              </div>
            )}
            {isMobile && (
              <div className="mobile-tagline-stack">
                <span>Full Stack Developer</span>
                <span>AI Enthusiast</span>
                <span>Data Explorer</span>
              </div>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hero-ctas">
            <a className="btn primary" href="/assets/MyResume-Prajjwal_Maharjan.pdf" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 3v12m0 0l-3-3m3 3l3-3M5 21h14"/>
              </svg>
              <span>Download Resume</span>
            </a>
            <a className="btn secondary" href="#contact">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
              </svg>
              <span>Get in Touch</span>
            </a>
          </div>
        </div>

        {/* Right Side - Profile Image */}
        <div className="hero-image-container">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img src="/assets/prajjwal.jpg" alt="Prajjwal Maharjan" className="profile-image" />
              <div className="image-glow"></div>
            </div>
            
            {/* Status Badge - Bottom Left */}
            <div className="status-badge">
              <span className="status-dot pulse"></span>
              <span>Open to work</span>
            </div>
            
            {/* Experience Badge - Top Right - FIXED VISIBILITY */}
            <div className="experience-badge-wrapper">
              <div className="experience-badge">
                <div className="exp-number">3+</div>
                <div className="exp-text">Years of<br />Experience</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Expertise Cards Section */}
      <div className="expertise-section-wrapper">
        <div className="container">
          <div className="expertise-section">
            <div className="section-header">
              <h3>Areas of Expertise</h3>
              <div className="header-line"></div>
            </div>

            <div className="cards-grid">
              {expertiseCards.map((card) => (
                <div
                  key={card.id}
                  className={`expertise-card ${openIdx === card.id ? 'expanded' : ''}`}
                  onMouseEnter={() => setHoveredCard(card.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                  style={{ animationDelay: `${card.id * 0.1}s` }}
                >
                  <div className="card-glow"></div>
                  
                  <div className="card-header">
                    <div className="icon-wrapper">
                      {card.icon}
                    </div>
                    <span className="card-number">{card.number}</span>
                  </div>

                  <h4>{card.title}</h4>
                  <p className="card-description">{card.description}</p>

                  <div className="tags-container">
                    {card.tags.slice(0, isMobile ? 3 : 5).map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <button
                      className="expand-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleCard(card.id)
                      }}
                    >
                      <span>{openIdx === card.id ? 'Show less' : 'Learn more'}</span>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className={`chevron ${openIdx === card.id ? 'rotated' : ''}`}>
                        <path d="M19 9l-7 7-7-7" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>

                  <div className={`expanded-content ${openIdx === card.id ? 'open' : ''}`}>
                    <div className="content-wrapper">
                      <p>{card.expandedContent}</p>
                      <div className="experience-badge-mini">
                        <span>{card.badge}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Container */}
          <div className="stats-container">
            <div className="stat-block">
              <div className="stat-number">50+</div>
              <div className="stat-label">Certificates</div>
              <div className="stat-trend positive">↑ +12 this year</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-block">
              <div className="stat-number">20+</div>
              <div className="stat-label">Projects</div>
              <div className="stat-trend">5 in progress</div>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-block">
              <div className="stat-number">Open</div>
              <div className="stat-label">to collaborate</div>
              <div className="availability-indicator">
                <span className="dot"></span>
                <span>Available now</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hero {
          min-height: 100vh;
          padding: 6rem 2rem;
          background: #0a0c0f;
          position: relative;
          overflow: hidden;
        }

        /* Animated background */
        .hero-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-sphere {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%);
          opacity: 0.08;
          border-radius: 50%;
          top: -200px;
          right: -200px;
          filter: blur(80px);
          animation: floatSphere 20s ease-in-out infinite;
        }

        .gradient-sphere.second {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at 70% 70%, #8b5cf6, transparent 70%);
          bottom: -200px;
          left: -200px;
          top: auto;
          right: auto;
          animation: floatSphere 25s ease-in-out infinite reverse;
        }

        .grid-pattern {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
          mask-image: radial-gradient(circle at 50% 50%, black, transparent 80%);
        }

        @keyframes floatSphere {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        /* Hero Grid */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr 0.9fr;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }

        /* Hero Content */
        .hero-content {
          animation: fadeIn 0.5s ease;
        }

        .greeting-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: rgba(21, 26, 32, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 0.6rem 1.2rem 0.6rem 0.8rem;
          border-radius: 40px;
          font-size: 0.95rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }

        .greeting-badge::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, #3b82f6, transparent);
          opacity: 0.1;
          animation: shimmer 3s infinite;
        }

        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .wave {
          font-size: 1.3rem;
          animation: wave 2s ease-in-out infinite;
          transform-origin: 70% 70%;
        }

        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(15deg); }
          75% { transform: rotate(-5deg); }
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        .hero-title {
          font-size: clamp(1.8rem, 5vw, 3.5rem);
          font-weight: 700;
          line-height: 1.2;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        .caret {
          display: inline-block;
          width: 4px;
          height: 1.2em;
          background: #3b82f6;
          margin-left: 4px;
          animation: blink 1s step-end infinite;
        }

        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }

        .tagline-wrapper {
          margin-bottom: 2rem;
        }

        .hero-tagline {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 0.5rem;
        }

        .tagline-highlight {
          color: #3b82f6;
          font-weight: 500;
        }

        .tagline-inline {
          display: flex;
          gap: 0.75rem;
          align-items: center;
          font-size: 1rem;
          color: #94a3b8;
          flex-wrap: wrap;
        }

        .separator {
          color: #2d3748;
        }

        .mobile-tagline-stack {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          font-size: 1rem;
          color: #94a3b8;
          margin-top: 0.5rem;
        }

        .mobile-tagline-stack span {
          position: relative;
          padding-left: 1rem;
        }

        .mobile-tagline-stack span::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #3b82f6;
        }

        /* CTA Buttons */
        .hero-ctas {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.9rem 2rem;
          border-radius: 12px;
          font-weight: 500;
          text-decoration: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-size: 0.95rem;
          cursor: pointer;
          border: none;
        }

        .btn.primary {
          background: #3b82f6;
          color: white;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        }

        .btn.primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
        }

        .btn.secondary {
          background: transparent;
          border: 2px solid #3b82f6;
          color: #3b82f6;
        }

        .btn.secondary:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-2px);
        }

        /* Hero Image Container */
        .hero-image-container {
          position: relative;
          display: flex;
          justify-content: center;
          animation: fadeIn 0.5s ease 0.2s both;
        }

        .profile-card {
          position: relative;
          width: 100%;
          max-width: 380px;
        }

        .profile-image-wrapper {
          position: relative;
          border-radius: 24px;
          overflow: hidden;
          background: linear-gradient(135deg, #1e2630, #151a20);
          padding: 4px;
        }

        .profile-image {
          width: 100%;
          height: auto;
          border-radius: 20px;
          display: block;
          position: relative;
          z-index: 2;
        }

        .image-glow {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.2));
          border-radius: 24px;
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .profile-card:hover .image-glow {
          opacity: 1;
        }

        /* Status Badge - Bottom Left */
        .status-badge {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          background: rgba(21, 26, 32, 0.95);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(59, 130, 246, 0.3);
          padding: 0.5rem 1.2rem;
          border-radius: 40px;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          font-size: 0.85rem;
          color: #ffffff;
          z-index: 10;
        }

        .status-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
        }

        /* Experience Badge - Top Right - FIXED VISIBILITY */
        .experience-badge-wrapper {
          position: absolute;
          top: -15px;
          right: -15px;
          z-index: 20;
        }

        .experience-badge {
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          border-radius: 20px;
          padding: 0.8rem 1rem;
          text-align: center;
          box-shadow: 0 8px 20px rgba(59, 130, 246, 0.3);
          min-width: 100px;
          backdrop-filter: blur(10px);
        }

        .exp-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          line-height: 1;
        }

        .exp-text {
          font-size: 0.7rem;
          color: white;
          opacity: 0.95;
          line-height: 1.3;
          margin-top: 4px;
        }

        /* Expertise Section */
        .expertise-section-wrapper {
          margin-top: 2rem;
        }

        .expertise-section {
          margin: 3rem 0;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .section-header h3 {
          font-size: 1.5rem;
          color: #ffffff;
          margin: 0;
        }

        .header-line {
          flex: 1;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, transparent);
          border-radius: 2px;
        }

        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .expertise-card {
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 20px;
          padding: 1.5rem;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          opacity: 0;
          transform: translateY(20px);
          animation: cardFadeIn 0.5s ease forwards;
        }

        @keyframes cardFadeIn {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .expertise-card:hover {
          transform: translateY(-6px);
          border-color: #3b82f6;
          box-shadow: 0 12px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .expertise-card:hover .card-glow {
          opacity: 0.15;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1rem;
        }

        .icon-wrapper {
          background: #1e2630;
          border: 1px solid #2d3748;
          border-radius: 14px;
          padding: 0.5rem;
          color: #3b82f6;
          transition: all 0.3s ease;
        }

        .expertise-card:hover .icon-wrapper {
          background: #3b82f6;
          color: white;
          transform: scale(1.05) rotate(5deg);
        }

        .card-number {
          font-size: 1.8rem;
          font-weight: 700;
          color: #2d3748;
          opacity: 0.5;
          line-height: 1;
        }

        .expertise-card h4 {
          font-size: 1.2rem;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .card-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .tags-container {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
          margin-bottom: 1.5rem;
        }

        .tag {
          background: #1e2630;
          border: 1px solid #2d3748;
          padding: 0.25rem 0.7rem;
          border-radius: 20px;
          font-size: 0.7rem;
          font-weight: 500;
          color: #94a3b8;
          transition: all 0.2s ease;
        }

        .card-footer {
          display: flex;
          align-items: center;
          min-height: 32px;
        }

        .expand-btn {
          background: transparent;
          border: none;
          color: #3b82f6;
          font-size: 0.9rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          padding: 0;
          transition: gap 0.2s ease;
        }

        .chevron {
          transition: transform 0.3s ease;
        }

        .chevron.rotated {
          transform: rotate(180deg);
        }

        .expanded-content {
          max-height: 0;
          opacity: 0;
          overflow: hidden;
          transition: all 0.5s ease;
        }

        .expanded-content.open {
          max-height: 300px;
          opacity: 1;
          margin-top: 1.5rem;
        }

        .content-wrapper {
          background: #1e2630;
          padding: 1.2rem;
          border-radius: 12px;
          border: 1px solid #2d3748;
        }

        .content-wrapper p {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .experience-badge-mini {
          display: inline-block;
          background: #151a20;
          border: 1px solid #3b82f6;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          color: #3b82f6;
        }

        /* Stats Container */
        .stats-container {
          display: flex;
          align-items: center;
          gap: 2rem;
          padding: 2rem 0 0;
          border-top: 1px solid #2d3748;
          flex-wrap: wrap;
        }

        .stat-block {
          text-align: center;
          transition: transform 0.2s ease;
          flex: 1;
          min-width: 100px;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: 700;
          color: #3b82f6;
          line-height: 1.2;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.9rem;
          margin-bottom: 0.3rem;
        }

        .stat-trend {
          font-size: 0.75rem;
          color: #94a3b8;
          opacity: 0.7;
        }

        .stat-trend.positive {
          color: #10b981;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: #2d3748;
        }

        .availability-indicator {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          justify-content: center;
          font-size: 0.75rem;
          color: #10b981;
        }

        .dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.7; }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 3rem;
            text-align: center;
          }

          .greeting-badge {
            margin: 0 auto 1.5rem auto;
          }

          .hero-ctas {
            justify-content: center;
          }

          .hero-image-container {
            order: -1;
            max-width: 320px;
            margin: 0 auto;
          }

          .cards-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .hero {
            padding: 4rem 1rem;
          }

          .greeting-badge {
            font-size: 0.85rem;
            padding: 0.5rem 1rem 0.5rem 0.7rem;
          }

          .hero-title {
            font-size: 1.8rem;
            text-align: left;
          }

          .hero-tagline {
            font-size: 0.95rem;
            text-align: left;
          }

          .tagline-inline {
            justify-content: flex-start;
          }

          .hero-ctas {
            flex-direction: column;
            width: 100%;
          }

          .btn {
            justify-content: center;
            width: 100%;
          }

          .cards-grid {
            grid-template-columns: 1fr;
          }

          .stats-container {
            gap: 1rem;
            justify-content: space-between;
          }

          .stat-divider {
            display: none;
          }

          .profile-card {
            max-width: 280px;
          }

          /* FIXED: Better positioning for badges on mobile */
          .experience-badge-wrapper {
            top: -12px;
            right: -12px;
          }

          .experience-badge {
            padding: 0.6rem 0.8rem;
            min-width: 85px;
          }

          .exp-number {
            font-size: 1.4rem;
          }

          .exp-text {
            font-size: 0.65rem;
          }

          .status-badge {
            font-size: 0.75rem;
            padding: 0.4rem 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.6rem;
            text-align: left;
          }

          .section-header h3 {
            font-size: 1.3rem;
          }

          .profile-card {
            max-width: 260px;
          }

          .experience-badge-wrapper {
            top: -10px;
            right: -10px;
          }

          .experience-badge {
            padding: 0.5rem 0.7rem;
            min-width: 75px;
          }

          .exp-number {
            font-size: 1.2rem;
          }

          .exp-text {
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  )
}