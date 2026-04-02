import React from 'react'

export default function Footer(){
  const currentYear = new Date().getFullYear()
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* Wave Decoration */}
        <div className="footer-wave">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120">
            <path fill="var(--card-bg, #151a20)" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
          </svg>
        </div>

        <div className="footer-content">
          {/* Main Footer Content */}
          <div className="footer-main">
            {/* Brand Section */}
            <div className="footer-brand">
              <h3 className="footer-logo">Prajjwal Maharjan</h3>
              <p className="footer-tagline">
                Building digital experiences with code and creativity.
              </p>
              <div className="footer-social">
                <a href="https://github.com/Prajjwal-dev" target="_blank" rel="noreferrer" className="social-link" aria-label="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.03-2.682-.103-.253-.447-1.27.098-2.646 0 0 .84-.269 2.75 1.025.8-.223 1.65-.334 2.5-.334.85 0 1.7.111 2.5.334 1.91-1.294 2.75-1.025 2.75-1.025.545 1.376.201 2.393.099 2.646.64.698 1.03 1.591 1.03 2.682 0 3.841-2.34 4.687-4.57 4.935.36.31.68.92.68 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12c0-5.523-4.477-10-10-10z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/prajjwal-maharjan-5592a0281/" target="_blank" rel="noreferrer" className="social-link" aria-label="LinkedIn">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <ul>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                  <a href="mailto:prajjwal.maharjan2013@gmail.com">prajjwal.maharjan2013@gmail.com</a>
                </li>
                <li>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                  <span>Available for opportunities</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="footer-bottom">
            <div className="copyright">
              <span>© {currentYear} Prajjwal Maharjan. All rights reserved.</span>
            </div>
            
            <div className="footer-badges">
              <span className="badge">Built with React</span>
              <span className="badge">Open Source</span>
            </div>

            <button 
              onClick={scrollToTop} 
              className="back-to-top"
              aria-label="Back to top"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 19V5M5 12l7-7 7 7"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .site-footer {
          background: var(--bg-primary, #0a0c0f);
          position: relative;
          margin-top: 4rem;
        }

        .footer-container {
          position: relative;
        }

        /* Wave Decoration */
        .footer-wave {
          position: absolute;
          top: -1px;
          left: 0;
          width: 100%;
          line-height: 0;
          transform: rotate(180deg);
        }

        .footer-wave svg {
          display: block;
          width: 100%;
          height: 60px;
        }

        /* Footer Content */
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 4rem 2rem 2rem;
          position: relative;
          z-index: 1;
        }

        /* Main Footer Grid */
        .footer-main {
          display: grid;
          grid-template-columns: 2fr 1fr 1.5fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        /* Brand Section */
        .footer-logo {
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--text-primary, #ffffff);
          margin-bottom: 1rem;
          letter-spacing: -0.5px;
        }

        .footer-tagline {
          color: var(--text-secondary, #94a3b8);
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          max-width: 300px;
        }

        .footer-social {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          width: 40px;
          height: 40px;
          background: var(--card-bg, #151a20);
          border: 1px solid var(--border-color, #2d3748);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-secondary, #94a3b8);
          transition: all 0.2s ease;
        }

        .social-link:hover {
          background: var(--accent-color, #3b82f6);
          color: white;
          transform: translateY(-4px);
          border-color: transparent;
        }

        /* Links Sections */
        .footer-links h4,
        .footer-contact h4 {
          font-size: 1.1rem;
          color: var(--text-primary, #ffffff);
          margin-bottom: 1.2rem;
          font-weight: 600;
        }

        .footer-links ul,
        .footer-contact ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li,
        .footer-contact li {
          margin-bottom: 0.8rem;
        }

        .footer-links a {
          color: var(--text-secondary, #94a3b8);
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          display: inline-block;
        }

        .footer-links a:hover {
          color: var(--accent-color, #3b82f6);
          transform: translateX(4px);
        }

        .footer-contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: var(--text-secondary, #94a3b8);
          font-size: 0.95rem;
        }

        .footer-contact svg {
          color: var(--accent-color, #3b82f6);
          flex-shrink: 0;
        }

        .footer-contact a {
          color: var(--text-secondary, #94a3b8);
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-contact a:hover {
          color: var(--accent-color, #3b82f6);
        }

        /* Bottom Bar */
        .footer-bottom {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 2rem;
          border-top: 1px solid var(--border-color, #2d3748);
        }

        .copyright {
          color: var(--text-secondary, #94a3b8);
          font-size: 0.9rem;
        }

        .footer-badges {
          display: flex;
          gap: 0.75rem;
        }

        .badge {
          background: var(--card-bg, #151a20);
          border: 1px solid var(--border-color, #2d3748);
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          font-size: 0.75rem;
          color: var(--text-secondary, #94a3b8);
        }

        .badge:hover {
          border-color: var(--accent-color, #3b82f6);
          color: var(--accent-color, #3b82f6);
        }

        /* Back to Top Button */
        .back-to-top {
          width: 44px;
          height: 44px;
          background: var(--card-bg, #151a20);
          border: 1px solid var(--border-color, #2d3748);
          border-radius: 12px;
          color: var(--text-secondary, #94a3b8);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }

        .back-to-top:hover {
          background: var(--accent-color, #3b82f6);
          color: white;
          transform: translateY(-4px);
          border-color: transparent;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: span 2;
            text-align: center;
          }

          .footer-tagline {
            max-width: 100%;
          }

          .footer-social {
            justify-content: center;
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            padding: 3rem 1.5rem 1.5rem;
          }

          .footer-main {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .footer-brand {
            grid-column: span 1;
          }

          .footer-links,
          .footer-contact {
            text-align: center;
          }

          .footer-links a:hover {
            transform: none;
          }

          .footer-contact li {
            justify-content: center;
          }

          .footer-bottom {
            flex-direction: column;
            gap: 1.5rem;
            text-align: center;
          }

          .footer-badges {
            flex-wrap: wrap;
            justify-content: center;
          }

          .back-to-top {
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            background: var(--accent-color, #3b82f6);
            color: white;
            border: none;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
            z-index: 100;
          }

          .footer-wave svg {
            height: 40px;
          }
        }

        @media (max-width: 480px) {
          .footer-badges {
            flex-direction: column;
            align-items: center;
          }

          .badge {
            width: fit-content;
          }
        }
      `}</style>
    </footer>
  )
}