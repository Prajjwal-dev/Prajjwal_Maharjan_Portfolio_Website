import React, {useRef, useEffect, useState} from 'react'

const techSkills = [
  { 
    name:'React JS', 
    projects: ['BQI', 'CineQuest', 'Yatra-Z'],
    description: 'Building interactive interfaces with reusable components, routing, and API-driven views.',
    projectCount: 3,
    level: 'Project-ready',
    focus: 'Frontend apps'
  },
  { 
    name:'HTML / CSS / JS', 
    projects: ['FlappyVerse', 'Memory Match Game', 'TicTacToe', 'Bookmark Manager', 'DesignSphere'],
    description: 'The base of my web work: layouts, responsive UI, DOM logic, animations, and browser APIs.',
    projectCount: 8,
    level: 'Strong foundation',
    focus: 'Core web'
  },
  { 
    name:'PHP', 
    projects: ['Smart Traffic Management', 'Hamrocanteen', 'Yatra-Z'],
    description: 'Server-side features, form handling, and database-backed pages for practical web apps.',
    projectCount: 3,
    level: 'Comfortable',
    focus: 'Backend basics'
  },
  { 
    name:'Python', 
    projects: ['AI Chatbot', 'QR Generator', 'Weather App', 'Data Analytics Projects'],
    description: 'Automation, data analysis, scripts, small apps, and AI experiments.',
    projectCount: 12,
    level: 'Project-ready',
    focus: 'Automation and AI'
  },
  { 
    name:'Unity', 
    projects: ['PM Kitchen Chaos'],
    description: 'Game mechanics, level flow, and gameplay experimentation with C#.',
    projectCount: 1,
    level: 'Exploring',
    focus: 'Game prototyping'
  },
  { 
    name:'C#', 
    projects: ['PM Kitchen Chaos', 'Unity Games'],
    description: 'Gameplay scripting, object-oriented logic, and Unity behaviors.',
    projectCount: 2,
    level: 'Comfortable',
    focus: 'Unity logic'
  },
  { 
    name:'C++', 
    projects: ['DSA Practice', 'Competitive Programming'],
    description: 'Data structures, algorithms practice, and lower-level programming concepts.',
    projectCount: 5,
    level: 'Practicing',
    focus: 'DSA'
  },
  { 
    name:'C', 
    projects: ['System Programming', 'College Projects'],
    description: 'Programming fundamentals, procedural thinking, and memory basics.',
    projectCount: 4,
    level: 'Foundation',
    focus: 'Core concepts'
  },
  { 
    name:'Java', 
    projects: ['QuickMart', 'College Projects'],
    description: 'Object-oriented programming and application structure through college and side projects.',
    projectCount: 2,
    level: 'Comfortable',
    focus: 'OOP apps'
  },
  { 
    name:'DSA', 
    projects: ['DSA Visualizer Hub', 'LeetCode 100+ problems'],
    description: 'Problem solving, algorithm patterns, visual explanations, and consistent practice.',
    projectCount: 100,
    isLeetCode: true,
    level: 'Practicing deeply',
    focus: 'Problem solving'
  },
  { 
    name:'AI / Data Science', 
    projects: ['PrajjwalGPT', 'Data Analytics Python', 'BridgeGuard'],
    description: 'LLM experiments, data analysis, model basics, and product-minded AI prototypes.',
    projectCount: 2,
    level: 'Exploring',
    focus: 'AI prototypes'
  }
]

function Icon({name}){
  const k = name.toLowerCase()
  if(k.includes('react')) return (
    <svg width="22" height="22" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" stroke="#61dafb" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="128" cy="128" rx="88" ry="40" />
        <ellipse cx="128" cy="128" rx="88" ry="40" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="88" ry="40" transform="rotate(120 128 128)" />
      </g>
      <circle cx="128" cy="128" r="12" fill="#61dafb" />
    </svg>
  )
  if(k.includes('html')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3 3h18l-1.6 18L12 21 4.6 21 3 3z" fill="#e34f26"/>
      <path d="M7 8h10v2H7V8zm0 4h10v2H7v-2z" fill="#fff" opacity="0.9"/>
    </svg>
  )
  if(k.includes('php')) return (
    <svg width="22" height="22" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="32" cy="32" rx="26" ry="14" fill="#8892bf" />
      <text x="32" y="37" fontSize="14" textAnchor="middle" fill="#fff" fontFamily="Arial" fontWeight="700">php</text>
    </svg>
  )
  if(k.includes('python')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2c-2 0-4 1-4 3v2h6v1H8v2c0 2 2 3 4 3s4-1 4-3V5c0-2-2-3-4-3z" fill="#3776ab"/>
      <path d="M12 22c2 0 4-1 4-3v-2h-6v-1h6v-2c0-2-2-3-4-3s-4 1-4 3v6c0 2 2 3 4 3z" fill="#ffd43b"/>
    </svg>
  )
  if(k.includes('unity')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M2 7l10-5 10 5v10l-10 5L2 17V7z" fill="#000" opacity="0.85"/>
    </svg>
  )
  if(k === 'c#' || k==='c#') return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#9b4dca"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C#</text>
    </svg>
  )
  if(k.includes('c++')||k==='c++') return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#004482"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C++</text>
    </svg>
  )
  if(k==='c') return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" fill="#00599c"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C</text>
    </svg>
  )
  if(k.includes('java')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7s3-3 6-1 6 1 6 1-1 2-5 2" stroke="#e34c26" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="3" fill="#e07a4d" />
    </svg>
  )
  if(k.includes('dsa')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 3v18M5 10l7-7 7 7" stroke="#7bd389" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if(k.includes('ai')||k.includes('data')) return (
    <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 7h12v10H6z" fill="#6b8cff" opacity="0.95"/>
      <circle cx="9.5" cy="10.5" r="1.2" fill="#fff"/>
      <circle cx="14.5" cy="13.5" r="1.2" fill="#fff"/>
      <path d="M9.5 12.5c1 1 4 1 4 2" stroke="#fff" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  )
  return null
}

export default function Skills(){
  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)
  const [hoveredSkill, setHoveredSkill] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobile, setIsMobile] = useState(false)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const el = rootRef.current
    if(!el) return
    
    // Set inView to true immediately for mobile to ensure visibility
    if (isMobile) {
      setInView(true)
    } else {
      const obs = new IntersectionObserver(entries => {
        entries.forEach(en => { 
          if(en.isIntersecting) setInView(true) 
        })
      }, { threshold: 0.1 })
      obs.observe(el)
      return () => obs.disconnect()
    }
  }, [isMobile])

  const handleMouseMove = (e) => {
    if (isMobile) return // Disable hover card on mobile
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    })
  }

  const scrollToProjects = (projects) => {
    const projectSection = document.getElementById('projects')
    if(projectSection) {
      projectSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="skills-section" ref={rootRef} onMouseMove={handleMouseMove}>
      {/* Background decoration */}
      <div className="skills-bg">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere second"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="skills-container">
        <div className="section-header">
          <span className="section-subtitle">My Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-underline"></div>
          <p className="section-description">Skills shown through projects, coursework, and what I am ready to keep improving in an internship.</p>
        </div>
        
        <div className="legend-container">
          <div className="legend-item">
            <span className="legend-dot project-dot"></span>
            <span className="legend-text">Project proof</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot experience-dot"></span>
            <span className="legend-text">Current comfort</span>
          </div>
          <div className="legend-item">
            <span className="legend-dot dsa-dot"></span>
            <span className="legend-text">Learning focus</span>
          </div>
        </div>
        
        <div className="skills-grid">
          {techSkills.map((s, index) => {
            return (
              <div 
                className={`skill-card ${inView ? 'animate' : ''}`}
                key={s.name}
                style={{ animationDelay: `${index * 0.05}s` }}
                onMouseEnter={() => !isMobile && setHoveredSkill(s.name)}
                onMouseLeave={() => !isMobile && setHoveredSkill(null)}
                onClick={() => scrollToProjects(s.projects)}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <Icon name={s.name} />
                  </div>
                  <div className="skill-title">
                    <h3>{s.name}</h3>
                    <span className="skill-badge">{s.level}</span>
                  </div>
                </div>

                <div className="skill-stats">
                  <div className="stat">
                    <span className="stat-value">{s.projectCount}</span>
                    <span className="stat-label">{s.isLeetCode ? 'problems' : 'projects'}</span>
                  </div>
                  <div className="stat">
                    <span className="stat-value skill-focus-text">{s.focus}</span>
                    <span className="stat-label">focus area</span>
                  </div>
                </div>

                <p className="skill-description">{s.description}</p>

                <div className="projects-preview">
                  {s.projects.slice(0, isMobile ? 2 : 3).map(proj => (
                    <span key={proj} className="project-tag">{proj}</span>
                  ))}
                  {s.projects.length > (isMobile ? 2 : 3) && (
                    <span className="project-tag more">+{s.projects.length - (isMobile ? 2 : 3)}</span>
                  )}
                </div>
                
                {/* Mobile-only description */}
                {isMobile && (
                  <div className="mobile-description">
                    <p className="mobile-desc-text">{s.description}</p>
                  </div>
                )}
              </div>
            )
          })}
        </div>
        
        <p className="footer-note">
          <span className="footer-icon">Note</span>
          Select any card to view related projects
        </p>
      </div>

      {/* Hover Info Card - Only on desktop */}
      {!isMobile && hoveredSkill && (
        <div 
          className="hover-info-card"
          style={{
            position: 'fixed',
            left: mousePosition.x + 20,
            top: mousePosition.y - 150,
          }}
        >
          {techSkills.filter(s => s.name === hoveredSkill).map(s => {
            return (
              <div key={s.name}>
                <div className="info-card-header">
                  <span className="info-icon">Skill</span>
                  <h4>{s.name}</h4>
                </div>
                <p className="info-description">{s.description}</p>
                <div className="info-stats">
                  <div className="info-stat">
                    <span className="info-stat-label">Projects</span>
                    <span className="info-stat-value">{s.projectCount}</span>
                  </div>
                  <div className="info-stat">
                    <span className="info-stat-label">Comfort</span>
                    <span className="info-stat-value">{s.level}</span>
                  </div>
                  <div className="info-stat">
                    <span className="info-stat-label">Focus</span>
                    <span className="info-stat-value">{s.focus}</span>
                  </div>
                </div>
                <div className="info-projects">
                  <span className="info-projects-label">Key projects:</span>
                  <div className="info-project-tags">
                    {s.projects.slice(0, 2).map(proj => (
                      <span key={proj} className="info-project-tag">{proj}</span>
                    ))}
                    {s.projects.length > 2 && (
                      <span className="info-project-tag more">+{s.projects.length - 2}</span>
                    )}
                  </div>
                </div>
                <div className="info-footer">
                  <span className="info-click-hint">Click to view projects</span>
                </div>
              </div>
            )
          })}
        </div>
      )}

      <style jsx>{`
        .skills-section {
          padding: 6rem 2rem;
          background: #0a0c0f;
          position: relative;
          overflow: visible;
          min-height: 100vh;
        }

        /* Background decorations */
        .skills-bg {
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
          opacity: 0.05;
          border-radius: 50%;
          top: -200px;
          right: -200px;
          filter: blur(60px);
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

        .skills-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-subtitle {
          display: inline-block;
          color: #3b82f6;
          font-size: 1rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 0.5rem;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .title-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }

        .section-description {
          max-width: 600px;
          margin: 0 auto;
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
        }

        /* Legend Styles */
        .legend-container {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 3rem;
          flex-wrap: wrap;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: #151a20;
          padding: 0.5rem 1.2rem;
          border-radius: 30px;
          border: 1px solid #2d3748;
          transition: all 0.2s ease;
        }

        .legend-item:hover {
          border-color: #3b82f6;
          transform: translateY(-2px);
        }

        .legend-dot {
          width: 12px;
          height: 12px;
          border-radius: 3px;
        }

        .project-dot {
          background: #4ade80;
        }

        .experience-dot {
          background: #60a5fa;
        }

        .dsa-dot {
          background: #c084fc;
        }

        .legend-text {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        /* Skills Grid */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
          position: relative;
        }

        .skill-card {
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 24px;
          padding: 1.8rem 1.5rem;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          opacity: 1;
          transform: translateY(0);
          overflow: visible;
        }

        .skill-card.animate {
          animation: slideUp 0.5s ease forwards;
        }

        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: #3b82f6;
          box-shadow: 0 10px 25px -5px rgba(59, 130, 246, 0.3);
        }

        .skill-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.2rem;
        }

        .skill-icon-wrapper {
          width: 52px;
          height: 52px;
          background: #1e2630;
          border: 1px solid #2d3748;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          transition: all 0.3s ease;
        }

        .skill-card:hover .skill-icon-wrapper {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .skill-title h3 {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.3rem;
        }

        .skill-badge {
          font-size: 0.75rem;
          color: #94a3b8;
          background: #1e2630;
          padding: 0.25rem 0.8rem;
          border-radius: 20px;
          border: 1px solid #2d3748;
          display: inline-block;
        }

        .skill-stats {
          display: flex;
          gap: 2rem;
          margin-bottom: 1.2rem;
        }

        .stat {
          display: flex;
          flex-direction: column;
        }

        .stat-value {
          font-size: 1.4rem;
          font-weight: 700;
          color: #3b82f6;
          line-height: 1.2;
        }

        .skill-focus-text {
          font-size: 1rem;
          color: #f5b461;
          max-width: 160px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .skill-description {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0 0 1.2rem;
          min-height: 58px;
        }

        .progress-container {
          margin-bottom: 1.2rem;
        }

        .progress-bar {
          height: 8px;
          background: #1e2630;
          border-radius: 4px;
          overflow: hidden;
          border: 1px solid #2d3748;
        }

        .progress-fill {
          height: 100%;
          border-radius: 4px;
          transition: width 1s ease-in-out;
        }

        .progress-fill.default {
          background: linear-gradient(90deg, #4ade80, #3b82f6, #60a5fa);
        }

        .progress-fill.dsa {
          background: linear-gradient(90deg, #c084fc, #a855f7);
        }

        .projects-preview {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .project-tag {
          font-size: 0.7rem;
          background: #1e2630;
          border: 1px solid #2d3748;
          color: #94a3b8;
          padding: 0.25rem 0.8rem;
          border-radius: 20px;
          transition: all 0.2s ease;
        }

        .project-tag:hover {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .project-tag.more {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        /* Mobile description */
        .mobile-description {
          margin-top: 1rem;
          padding-top: 1rem;
          border-top: 1px solid #2d3748;
        }

        .mobile-desc-text {
          color: #94a3b8;
          font-size: 0.85rem;
          line-height: 1.5;
          margin: 0;
        }

        /* Hover Info Card - Desktop only */
        .hover-info-card {
          width: 280px;
          background: #1e2630;
          border: 2px solid #3b82f6;
          border-radius: 16px;
          padding: 1.2rem;
          box-shadow: 0 20px 30px -10px rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(10px);
          z-index: 9999;
          pointer-events: none;
          animation: fadeIn 0.15s ease;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .info-card-header {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.8rem;
          padding-bottom: 0.5rem;
          border-bottom: 1px solid #2d3748;
        }

        .info-icon {
          font-size: 1.2rem;
        }

        .info-card-header h4 {
          color: #3b82f6;
          font-size: 1rem;
          font-weight: 600;
          margin: 0;
        }

        .info-description {
          color: #ffffff;
          font-size: 0.9rem;
          line-height: 1.5;
          margin-bottom: 1rem;
        }

        .info-stats {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.5rem;
          margin-bottom: 1rem;
          background: #151a20;
          padding: 0.8rem;
          border-radius: 12px;
          border: 1px solid #2d3748;
        }

        .info-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .info-stat-label {
          color: #94a3b8;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .info-stat-value {
          color: #3b82f6;
          font-size: 0.86rem;
          font-weight: 600;
          overflow-wrap: anywhere;
        }

        .info-projects {
          background: #151a20;
          padding: 0.8rem;
          border-radius: 12px;
          border: 1px solid #2d3748;
        }

        .info-projects-label {
          color: #94a3b8;
          font-size: 0.7rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .info-project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .info-project-tag {
          background: #1e2a3a;
          border: 1px solid #2d3748;
          color: #94a3b8;
          padding: 0.2rem 0.6rem;
          border-radius: 12px;
          font-size: 0.7rem;
        }

        .info-project-tag.more {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .info-footer {
          margin-top: 0.8rem;
          text-align: center;
        }

        .info-click-hint {
          color: #3b82f6;
          font-size: 0.7rem;
          font-style: italic;
          opacity: 0.8;
        }

        .footer-note {
          text-align: center;
          color: #94a3b8;
          font-size: 0.95rem;
          margin-top: 3rem;
          padding: 1.5rem;
          border-top: 1px solid #2d3748;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .footer-icon {
          font-size: 1.1rem;
        }

        /* Responsive Styles */
        @media (max-width: 1024px) {
          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .skills-section {
            padding: 3rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .section-description {
            font-size: 0.9rem;
          }

          .skills-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .skill-card {
            padding: 1.2rem;
          }

          .skill-header {
            gap: 0.8rem;
          }

          .skill-icon-wrapper {
            width: 45px;
            height: 45px;
          }

          .skill-title h3 {
            font-size: 1rem;
          }

          .skill-stats {
            gap: 1rem;
          }

          .stat-value {
            font-size: 1.2rem;
          }

          .legend-container {
            gap: 0.8rem;
            margin-bottom: 2rem;
          }

          .legend-item {
            padding: 0.35rem 0.9rem;
          }

          .legend-text {
            font-size: 0.75rem;
          }

          .project-tag {
            font-size: 0.65rem;
            padding: 0.2rem 0.6rem;
          }

          .footer-note {
            font-size: 0.8rem;
            margin-top: 2rem;
            padding: 1rem;
          }
        }

        @media (max-width: 480px) {
          .legend-container {
            flex-direction: column;
            align-items: stretch;
          }

          .legend-item {
            justify-content: center;
          }

          .skill-stats {
            gap: 1.5rem;
          }

          .projects-preview {
            gap: 0.4rem;
          }
        }
      `}</style>
    </section>
  )
}
