import React, { useState, useEffect } from 'react'

export default function Header() {
  const [navOpen, setNavOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState('')

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
      
      const sections = ['about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveLink(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile nav on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setNavOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevent body scroll when mobile nav is open
  useEffect(() => {
    if (navOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [navOpen])

  const navItems = [
    { href: '/#about', label: 'About', id: 'about', icon: '👤' },
    { href: '/certificates', label: 'Certificates', external: true, icon: '📜' },
    { href: '/#skills', label: 'Skills', id: 'skills', icon: '⚡' },
    { href: '/#projects', label: 'Projects', id: 'projects', icon: '🚀' },
    { href: '/#contact', label: 'Contact', id: 'contact', icon: '📧' }
  ]

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-glow"></div>
        <div className="header-inner">
          {/* Logo with Animation */}
          <a className="brand" href="/">
            <div className="brand-icon">
              <img src="/assets/prajjwal.jpg" alt="Prajjwal" className="logo" />
              <div className="logo-ring"></div>
            </div>
            <div className="brand-text">
              <span className="brand-first">Prajjwal</span>
              <span className="brand-last">Maharjan</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <ul>
              {navItems.map((item) => (
                <li key={item.label}>
                  <a 
                    href={item.href} 
                    className={!item.external && activeLink === item.id ? 'active' : ''}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-dot"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* POLISHED HAMBURGER BUTTON */}
          <button 
            className={`hamburger-btn ${navOpen ? 'open' : ''}`} 
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle menu"
          >
            <div className="hamburger-wrapper">
              <div className="hamburger-line top"></div>
              <div className="hamburger-line middle"></div>
              <div className="hamburger-line bottom"></div>
            </div>
            <span className="hamburger-text">{navOpen ? 'Close' : 'Menu'}</span>
          </button>

          {/* Mobile Overlay with Blur - Only visible when navOpen is true */}
          <div className={`mobile-overlay ${navOpen ? 'open' : ''}`} onClick={() => setNavOpen(false)}></div>
          
          {/* MOBILE MENU - COMPLETELY HIDDEN UNTIL HAMBURGER CLICKED */}
          <div className={`mobile-menu ${navOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="mobile-avatar">
                <img src="/assets/prajjwal.jpg" alt="Prajjwal" />
                <div className="avatar-pulse"></div>
              </div>
              <div className="mobile-user-info">
                <h3>Prajjwal Maharjan</h3>
                <p>Full Stack Developer</p>
              </div>
              <button className="mobile-close-btn" onClick={() => setNavOpen(false)}>
                ✕
              </button>
            </div>
            
            <div className="mobile-menu-stats">
              <div className="stat">
                <span className="stat-value">20+</span>
                <span className="stat-label">Projects</span>
              </div>
              <div className="stat">
                <span className="stat-value">15+</span>
                <span className="stat-label">Technologies</span>
              </div>
              <div className="stat">
                <span className="stat-value">1000+</span>
                <span className="stat-label">Hours</span>
              </div>
            </div>
            
            <ul className="mobile-menu-links">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  <a href={item.href} onClick={() => setNavOpen(false)}>
                    <span className="link-icon">{item.icon}</span>
                    <span className="link-text">{item.label}</span>
                    <span className="link-arrow">→</span>
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="mobile-menu-footer">
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C0.792 0 0 0.774 0 1.729v20.542C0 23.227 0.792 24 1.771 24h20.451c0.979 0 1.771-0.773 1.771-1.729V1.729C24 0.774 23.207 0 22.225 0z"/>
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="social-link">
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.104c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.964-12.114c0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
              <p>© {new Date().getFullYear()} Prajjwal Maharjan</p>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Header Styles */
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(10, 12, 15, 0.85);
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
        }

        .site-header.scrolled {
          background: rgba(10, 12, 15, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        .header-glow {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #3b82f6, #8b5cf6, #3b82f6, transparent);
          animation: glowMove 3s linear infinite;
          background-size: 200% 100%;
        }

        @keyframes glowMove {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }

        .header-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 70px;
          padding: 0 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* Brand Styles */
        .brand {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          text-decoration: none;
          z-index: 1001;
        }

        .brand-icon {
          position: relative;
          width: 42px;
          height: 42px;
        }

        .logo {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #3b82f6;
          transition: all 0.3s ease;
        }

        .logo-ring {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          opacity: 0;
          filter: blur(6px);
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .brand:hover .logo {
          transform: scale(1.05);
          border-color: #8b5cf6;
        }

        .brand:hover .logo-ring {
          opacity: 0.6;
        }

        .brand-text {
          display: flex;
          gap: 0.25rem;
        }

        .brand-first {
          font-size: 1.2rem;
          font-weight: 600;
          color: #ffffff;
        }

        .brand-last {
          font-size: 1.2rem;
          font-weight: 600;
          color: #3b82f6;
        }

        /* Desktop Navigation */
        .nav-desktop {
          display: block;
        }

        .nav-desktop ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-desktop a {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          padding: 0.5rem 0;
        }

        .nav-icon {
          font-size: 1.1rem;
          transition: transform 0.3s ease;
        }

        .nav-label {
          position: relative;
        }

        .nav-dot {
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          transition: all 0.3s ease;
          transform: translateX(-50%);
          border-radius: 2px;
        }

        .nav-desktop a:hover {
          color: #ffffff;
        }

        .nav-desktop a:hover .nav-icon {
          transform: translateY(-2px);
        }

        .nav-desktop a:hover .nav-dot {
          width: 100%;
        }

        .nav-desktop a.active {
          color: #3b82f6;
        }

        .nav-desktop a.active .nav-dot {
          width: 100%;
          background: #3b82f6;
        }

        /* POLISHED HAMBURGER BUTTON */
        .hamburger-btn {
          display: none;
          position: relative;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.1);
          border: 1.5px solid rgba(59, 130, 246, 0.3);
          border-radius: 40px;
          cursor: pointer;
          padding: 10px 16px;
          z-index: 1002;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger-wrapper {
          width: 22px;
          height: 18px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          position: relative;
        }

        .hamburger-line {
          width: 100%;
          height: 2px;
          background: #ffffff;
          border-radius: 4px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger-text {
          font-size: 0.85rem;
          font-weight: 500;
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .hamburger-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          border-color: rgba(59, 130, 246, 0.6);
          transform: scale(1.02);
        }

        .hamburger-btn.open {
          background: rgba(59, 130, 246, 0.2);
          border-color: #3b82f6;
        }

        .hamburger-btn.open .hamburger-line.top {
          transform: translateY(8px) rotate(45deg);
          background: #3b82f6;
        }

        .hamburger-btn.open .hamburger-line.middle {
          opacity: 0;
          transform: scale(0);
        }

        .hamburger-btn.open .hamburger-line.bottom {
          transform: translateY(-8px) rotate(-45deg);
          background: #3b82f6;
        }

        .hamburger-btn.open .hamburger-text {
          color: #3b82f6;
        }

        /* Mobile Overlay - Hidden by default */
        .mobile-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(12px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 999;
        }

        .mobile-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* MOBILE MENU - COMPLETELY HIDDEN ON PAGE LOAD */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: -100%;
          width: 85%;
          max-width: 380px;
          height: 100vh;
          background: linear-gradient(135deg, rgba(10, 12, 15, 0.98) 0%, rgba(15, 17, 21, 0.98) 100%);
          backdrop-filter: blur(20px);
          border-left: 1px solid rgba(59, 130, 246, 0.2);
          z-index: 1000;
          transition: right 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 50px rgba(0, 0, 0, 0.3);
          overflow-y: auto;
          visibility: hidden;
        }

        /* Show menu when open */
        .mobile-menu.open {
          right: 0;
          visibility: visible;
        }

        .mobile-menu-header {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 2rem 1.5rem;
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
          position: relative;
        }

        .mobile-close-btn {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.1);
          border: 1px solid rgba(59, 130, 246, 0.3);
          color: #94a3b8;
          font-size: 1.2rem;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .mobile-close-btn:hover {
          background: rgba(59, 130, 246, 0.2);
          color: #3b82f6;
          border-color: #3b82f6;
        }

        .mobile-avatar {
          position: relative;
          width: 65px;
          height: 65px;
        }

        .mobile-avatar img {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          object-fit: cover;
          border: 2px solid #3b82f6;
        }

        .avatar-pulse {
          position: absolute;
          inset: -3px;
          border-radius: 50%;
          background: rgba(59, 130, 246, 0.4);
          animation: pulse 2s infinite;
          pointer-events: none;
        }

        @keyframes pulse {
          0% {
            transform: scale(0.95);
            opacity: 0.7;
          }
          70% {
            transform: scale(1.1);
            opacity: 0;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }

        .mobile-user-info h3 {
          color: #ffffff;
          font-size: 1.2rem;
          font-weight: 600;
          margin: 0 0 4px 0;
        }

        .mobile-user-info p {
          color: #94a3b8;
          font-size: 0.85rem;
          margin: 0;
        }

        .mobile-menu-stats {
          display: flex;
          justify-content: space-around;
          padding: 1.5rem;
          background: rgba(59, 130, 246, 0.05);
          border-bottom: 1px solid rgba(59, 130, 246, 0.1);
        }

        .stat {
          text-align: center;
        }

        .stat-value {
          display: block;
          color: #3b82f6;
          font-size: 1.3rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .stat-label {
          color: #94a3b8;
          font-size: 0.7rem;
        }

        .mobile-menu-links {
          flex: 1;
          list-style: none;
          padding: 1rem 0;
          margin: 0;
        }

        .mobile-menu-links li {
          opacity: 0;
          transform: translateX(30px);
          transition: opacity 0.3s ease, transform 0.3s ease;
        }

        .mobile-menu.open .mobile-menu-links li {
          opacity: 1;
          transform: translateX(0);
        }

        .mobile-menu-links li:nth-child(1) { transition-delay: 0.05s; }
        .mobile-menu-links li:nth-child(2) { transition-delay: 0.1s; }
        .mobile-menu-links li:nth-child(3) { transition-delay: 0.15s; }
        .mobile-menu-links li:nth-child(4) { transition-delay: 0.2s; }
        .mobile-menu-links li:nth-child(5) { transition-delay: 0.25s; }

        .mobile-menu-links a {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.5rem;
          color: #94a3b8;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .mobile-menu-links a::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 0;
          background: rgba(59, 130, 246, 0.1);
          transition: width 0.3s ease;
          z-index: -1;
        }

        .mobile-menu-links a:hover {
          color: #3b82f6;
          transform: translateX(10px);
        }

        .mobile-menu-links a:hover::before {
          width: 100%;
        }

        .link-icon {
          font-size: 1.2rem;
          width: 28px;
        }

        .link-text {
          flex: 1;
        }

        .link-arrow {
          opacity: 0;
          transform: translateX(-10px);
          transition: all 0.3s ease;
          color: #3b82f6;
        }

        .mobile-menu-links a:hover .link-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        .mobile-menu-footer {
          padding: 1.5rem;
          border-top: 1px solid rgba(59, 130, 246, 0.1);
          text-align: center;
        }

        .social-links {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 1rem;
        }

        .social-link {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(59, 130, 246, 0.1);
          border-radius: 50%;
          color: #94a3b8;
          transition: all 0.3s ease;
        }

        .social-link:hover {
          background: #3b82f6;
          color: white;
          transform: translateY(-3px);
        }

        .mobile-menu-footer p {
          color: #64748b;
          font-size: 0.75rem;
          margin: 0;
        }

        /* Responsive Styles */
        @media (max-width: 768px) {
          .nav-desktop {
            display: none !important;
          }

          .hamburger-btn {
            display: flex !important;
          }

          .header-inner {
            padding: 0 1rem;
            height: 65px;
          }

          .brand-icon {
            width: 38px;
            height: 38px;
          }

          .brand-first,
          .brand-last {
            font-size: 1rem;
          }
        }

        @media (max-width: 480px) {
          .brand-last {
            display: none;
          }

          .hamburger-btn {
            padding: 8px 14px;
          }

          .hamburger-wrapper {
            width: 20px;
            height: 16px;
          }

          .hamburger-text {
            font-size: 0.8rem;
          }

          .mobile-menu {
            width: 100%;
            max-width: none;
          }

          .mobile-avatar {
            width: 55px;
            height: 55px;
          }

          .mobile-user-info h3 {
            font-size: 1rem;
          }

          .mobile-user-info p {
            font-size: 0.75rem;
          }
        }

        /* Desktop: Hide mobile elements */
        @media (min-width: 769px) {
          .mobile-overlay,
          .mobile-menu,
          .hamburger-btn {
            display: none !important;
          }
        }
      `}</style>
    </>
  )
}