import React, { useState } from 'react'

export default function Contact(){
  const [copied, setCopied] = useState(false)
  const [hoveredSocial, setHoveredSocial] = useState(null)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("prajjwal.maharjan2013@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/Prajjwal-dev', icon: '/assets/github.png', color: '#2ea44f' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/prajjwal-maharjan-5592a0281/', icon: '/assets/linked_in.png', color: '#0077b5' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=100054117796669', icon: '/assets/facebook.png', color: '#1877f2' },
    { name: 'Instagram', url: 'https://www.instagram.com/prajjwalmaharjan/', icon: '/assets/instagram.jpeg', color: '#e4405f' }
  ]

  return (
    <section id="contact" className="contact-section">
      {/* Background decoration */}
      <div className="contact-bg">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere second"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="contact-container">
        <div className="section-header">
          <span className="section-subtitle">Get in Touch</span>
          <h2 className="section-title">Let's Connect</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            I'm always interested in hearing about new opportunities, 
            collaborations, or just having a chat about technology and innovation.
          </p>
        </div>

        <div className="contact-grid">
          {/* Email Card */}
          <div className="contact-card email-card">
            <div className="card-glow"></div>
            <div className="card-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="4" width="20" height="16" rx="2" />
                <path d="M22 7L12 13 2 7" />
              </svg>
            </div>
            <h3>Email</h3>
            <p className="contact-detail">prajjwal.maharjan2013@gmail.com</p>
            <div className="card-actions">
              <a href="mailto:prajjwal.maharjan2013@gmail.com" className="contact-btn primary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/>
                </svg>
                <span>Send Email</span>
              </a>
              <button onClick={handleCopyEmail} className="contact-btn secondary">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
                  <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                </svg>
                <span>{copied ? 'Copied!' : 'Copy'}</span>
              </button>
            </div>
            {copied && <div className="copy-toast">Email copied to clipboard</div>}
          </div>

          {/* Social Links Card */}
          <div className="contact-card social-card">
            <div className="card-glow"></div>
            <div className="card-icon-wrapper">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </div>
            <h3>Social Media</h3>
            <p className="contact-detail">Connect with me on social platforms</p>
            <div className="social-grid">
              {socialLinks.map((social, index) => (
                <a 
                  key={social.name}
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="social-item"
                  onMouseEnter={() => setHoveredSocial(social.name)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  style={{
                    borderColor: hoveredSocial === social.name ? social.color : 'var(--border-color)',
                    background: hoveredSocial === social.name ? `${social.color}15` : 'var(--bg-secondary)'
                  }}
                >
                  <img src={social.icon} alt={social.name} className="social-icon" />
                  <span>{social.name}</span>
                  {hoveredSocial === social.name && (
                    <span className="social-hint">↗</span>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="quick-response">
          <div className="response-badge">
            <span className="status-dot"></span>
            <span>Usually responds within 24 hours</span>
          </div>
          <div className="availability">
            <span className="availability-label">Available for:</span>
            <div className="availability-tags">
              <span className="tag">Freelance</span>
              <span className="tag">Full-time</span>
              <span className="tag">Remote</span>
              <span className="tag">Collaboration</span>
            </div>
          </div>
        </div>

        <div className="contact-footer">
          <div className="footer-content">
            <span className="location">Based in Kathmandu, Nepal</span>
            <span className="separator">•</span>
            <span className="remote">Open to remote opportunities worldwide</span>
          </div>
          <div className="footer-response-time">
            <span className="response-time">Usually replies within a few hours</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .contact-section {
          padding: 6rem 2rem;
          background: #0a0c0f;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
          display: flex;
          align-items: center;
        }

        /* Background decorations */
        .contact-bg {
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

        .contact-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
          width: 100%;
        }

        .section-header {
          text-align: center;
          margin-bottom: 4rem;
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
          line-height: 1.7;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .contact-card {
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 30px;
          padding: 2.5rem;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, #3b82f6, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .contact-card:hover {
          transform: translateY(-8px);
          border-color: #3b82f6;
          box-shadow: 0 20px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .contact-card:hover::before {
          opacity: 0.1;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }

        .contact-card:hover .card-glow {
          opacity: 0.15;
        }

        .card-icon-wrapper {
          width: 70px;
          height: 70px;
          background: #1e2630;
          border: 1px solid #2d3748;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.8rem;
          color: #3b82f6;
          transition: all 0.3s ease;
        }

        .contact-card:hover .card-icon-wrapper {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
          transform: scale(1.05) rotate(5deg);
        }

        .contact-card h3 {
          font-size: 1.8rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .contact-detail {
          color: #94a3b8;
          font-size: 1.1rem;
          line-height: 1.6;
          margin-bottom: 2rem;
          word-break: break-word;
        }

        .card-actions {
          display: flex;
          gap: 1rem;
          position: relative;
        }

        .contact-btn {
          flex: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          padding: 0.9rem 1rem;
          border-radius: 14px;
          font-size: 0.95rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }

        .contact-btn::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.2);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .contact-btn:hover::before {
          width: 300px;
          height: 300px;
        }

        .contact-btn.primary {
          background: #3b82f6;
          color: white;
          box-shadow: 0 4px 14px rgba(59, 130, 246, 0.3);
        }

        .contact-btn.primary:hover {
          background: #2563eb;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(59, 130, 246, 0.4);
        }

        .contact-btn.secondary {
          background: transparent;
          border: 1px solid #2d3748;
          color: #ffffff;
        }

        .contact-btn.secondary:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
          background: rgba(59, 130, 246, 0.05);
        }

        .copy-toast {
          position: absolute;
          bottom: 1rem;
          right: 1rem;
          background: #1e2630;
          border: 1px solid #3b82f6;
          color: #ffffff;
          padding: 0.5rem 1rem;
          border-radius: 30px;
          font-size: 0.85rem;
          animation: slideIn 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .social-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          margin-top: 1.5rem;
        }

        .social-item {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          padding: 0.8rem 1rem;
          background: #1e2630;
          border: 1px solid #2d3748;
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .social-item:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
        }

        .social-icon {
          width: 28px;
          height: 28px;
          border-radius: 8px;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .social-item:hover .social-icon {
          transform: scale(1.1);
        }

        .social-item span {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
          flex: 1;
        }

        .social-hint {
          color: #3b82f6;
          font-size: 1.1rem;
          animation: fadeIn 0.3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(-5px); }
          to { opacity: 1; transform: translateX(0); }
        }

        .quick-response {
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 60px;
          padding: 1rem 2rem;
          margin-bottom: 2.5rem;
          backdrop-filter: blur(10px);
        }

        .response-badge {
          display: flex;
          align-items: center;
          gap: 0.8rem;
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .status-dot {
          width: 10px;
          height: 10px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s ease-in-out infinite;
          box-shadow: 0 0 10px #10b981;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.2); }
        }

        .availability {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .availability-label {
          color: #94a3b8;
          font-size: 0.9rem;
        }

        .availability-tags {
          display: flex;
          gap: 0.5rem;
        }

        .tag {
          background: #1e2630;
          border: 1px solid #2d3748;
          padding: 0.4rem 1.2rem;
          border-radius: 30px;
          font-size: 0.85rem;
          color: #94a3b8;
          transition: all 0.2s ease;
          cursor: default;
        }

        .tag:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.05);
          transform: translateY(-2px);
        }

        .contact-footer {
          text-align: center;
          color: #94a3b8;
          font-size: 0.95rem;
          padding-top: 2rem;
          border-top: 1px solid #2d3748;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .location, .remote {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .separator {
          color: #2d3748;
        }

        .footer-response-time {
          color: #94a3b8;
          font-size: 0.85rem;
          opacity: 0.8;
        }

        .response-time {
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
          background: #1e2630;
          padding: 0.2rem 1rem;
          border-radius: 30px;
          border: 1px solid #2d3748;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .section-title {
            font-size: 2.2rem;
          }
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 4rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .quick-response {
            flex-direction: column;
            gap: 1rem;
            border-radius: 30px;
            padding: 1.5rem;
          }

          .availability {
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }

          .availability-tags {
            flex-wrap: wrap;
            justify-content: center;
          }

          .card-actions {
            flex-direction: column;
          }

          .social-grid {
            grid-template-columns: 1fr;
          }

          .footer-content {
            flex-direction: column;
            gap: 0.5rem;
          }

          .separator {
            display: none;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 1.8rem;
          }

          .card-icon-wrapper {
            width: 60px;
            height: 60px;
          }

          .contact-card h3 {
            font-size: 1.5rem;
          }

          .contact-detail {
            font-size: 0.95rem;
          }

          .tag {
            padding: 0.3rem 1rem;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </section>
  )
}
