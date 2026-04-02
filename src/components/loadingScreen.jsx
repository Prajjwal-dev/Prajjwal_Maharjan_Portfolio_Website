import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => {
              onLoadingComplete()
            }, 500)
          }, 200)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  // Loading tips array
  const loadingTips = [
    "Loading your experience...",
    "Compiling code...",
    "Designing UI...",
    "Optimizing performance...",
    "Almost there...",
    "Setting up components...",
    "Fetching data...",
    "Building portfolio..."
  ]

  const [currentTip, setCurrentTip] = useState(0)

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length)
    }, 2000)
    return () => clearInterval(tipInterval)
  }, [])

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      {/* Animated Background */}
      <div className="loading-bg">
        <div className="gradient-orb"></div>
        <div className="gradient-orb second"></div>
        <div className="grid-overlay"></div>
      </div>

      {/* Loading Content - Positioned at Top Left on Mobile, Centered on Desktop */}
      <div className={`loading-content ${isMobile ? 'mobile-top-left' : 'centered'}`}>
        {/* Animated Logo */}
        <div className="logo-animation">
          <div className="logo-ring">
            <div className="logo-inner">
              <span className="logo-text">PM</span>
            </div>
          </div>
          <div className="pulse-ring"></div>
        </div>

        {/* Loading Text */}
        <div className="loading-text">
          <h2>Prajjwal Maharjan</h2>
          <p className="loading-subtitle">Building innovative solutions with code</p>
        </div>

        {/* Progress Bar */}
        <div className="progress-container">
          <div className="progress-bar">
            <div 
              className="progress-fill" 
              style={{ width: `${Math.min(progress, 100)}%` }}
            >
              <div className="progress-shine"></div>
            </div>
          </div>
          <div className="progress-percentage">
            <span className="percentage-number">{Math.floor(Math.min(progress, 100))}</span>
            <span className="percentage-symbol">%</span>
          </div>
        </div>

        {/* Loading Tips */}
        <div className="loading-tips">
          <div className="tip-icon">💡</div>
          <p className="tip-text">{loadingTips[currentTip]}</p>
        </div>

        {/* Animated Dots */}
        <div className="loading-dots">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: #0a0c0f;
          z-index: 9999;
          transition: opacity 0.5s ease;
          opacity: 1;
        }

        .loading-screen.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        /* Animated Background */
        .loading-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .gradient-orb {
          position: absolute;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%);
          opacity: 0.1;
          border-radius: 50%;
          top: -200px;
          right: -200px;
          filter: blur(80px);
          animation: floatOrb 20s ease-in-out infinite;
        }

        .gradient-orb.second {
          width: 500px;
          height: 500px;
          background: radial-gradient(circle at 70% 70%, #8b5cf6, transparent 70%);
          bottom: -200px;
          left: -200px;
          top: auto;
          right: auto;
          animation: floatOrb 25s ease-in-out infinite reverse;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image: 
            linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 20s linear infinite;
        }

        @keyframes floatOrb {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Loading Content - Desktop Centered */
        .loading-content {
          position: absolute;
          z-index: 10;
          text-align: center;
          max-width: 400px;
          width: 85%;
          padding: 2rem;
          background: rgba(10, 12, 15, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 32px;
          border: 1px solid rgba(59, 130, 246, 0.2);
          animation: fadeInUp 0.6s ease;
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          transition: all 0.3s ease;
        }

        /* Desktop: Centered */
        .loading-content.centered {
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }

        /* Mobile: Top Left */
        .loading-content.mobile-top-left {
          top: 20px;
          left: 20px;
          right: 20px;
          transform: none;
          width: auto;
          max-width: none;
          padding: 1.2rem;
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

        /* Mobile specific animation override */
        .loading-content.mobile-top-left {
          animation: fadeInLeft 0.6s ease;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Logo Animation */
        .logo-animation {
          position: relative;
          width: clamp(60px, 12vw, 80px);
          height: clamp(60px, 12vw, 80px);
          margin: 0 auto 1rem;
        }

        .logo-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          animation: rotateRing 3s linear infinite;
        }

        .logo-inner {
          position: absolute;
          inset: 5px;
          border-radius: 50%;
          background: #0a0c0f;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo-text {
          font-size: clamp(1rem, 3.5vw, 1.3rem);
          font-weight: 700;
          background: linear-gradient(135deg, #3b82f6, #8b5cf6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: pulse 2s ease-in-out infinite;
        }

        .pulse-ring {
          position: absolute;
          inset: -12px;
          border-radius: 50%;
          border: 2px solid rgba(59, 130, 246, 0.3);
          animation: pulseRing 2s ease-out infinite;
        }

        @keyframes rotateRing {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseRing {
          0% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        /* Loading Text */
        .loading-text {
          margin-bottom: 1rem;
        }

        .loading-text h2 {
          font-size: clamp(1rem, 3.5vw, 1.2rem);
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.25rem;
          letter-spacing: -0.02em;
        }

        .loading-subtitle {
          color: #94a3b8;
          font-size: clamp(0.65rem, 2.5vw, 0.75rem);
        }

        /* Progress Bar */
        .progress-container {
          margin: 1rem 0;
        }

        .progress-bar {
          height: 3px;
          background: rgba(45, 55, 72, 0.5);
          border-radius: 4px;
          overflow: hidden;
          margin-bottom: 0.5rem;
          position: relative;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 4px;
          transition: width 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .progress-shine {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          animation: shine 1.5s ease-in-out infinite;
        }

        @keyframes shine {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .progress-percentage {
          font-size: clamp(0.8rem, 3vw, 0.9rem);
          font-weight: 600;
        }

        .percentage-number {
          color: #3b82f6;
        }

        .percentage-symbol {
          color: #94a3b8;
          font-size: clamp(0.65rem, 2.5vw, 0.75rem);
          margin-left: 2px;
        }

        /* Loading Tips */
        .loading-tips {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 1rem;
          padding: 0.5rem 0.8rem;
          background: rgba(21, 26, 32, 0.8);
          border-radius: 40px;
          border: 1px solid rgba(59, 130, 246, 0.2);
        }

        .tip-icon {
          font-size: clamp(0.8rem, 3vw, 0.9rem);
          animation: bounce 1s ease-in-out infinite;
        }

        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-3px); }
        }

        .tip-text {
          color: #94a3b8;
          font-size: clamp(0.65rem, 2.5vw, 0.75rem);
          margin: 0;
        }

        /* Animated Dots */
        .loading-dots {
          display: flex;
          justify-content: center;
          gap: 0.4rem;
          margin-top: 1rem;
        }

        .loading-dots span {
          width: clamp(5px, 1.8vw, 6px);
          height: clamp(5px, 1.8vw, 6px);
          background: #3b82f6;
          border-radius: 50%;
          animation: dotPulse 1.4s ease-in-out infinite;
        }

        .loading-dots span:nth-child(1) { animation-delay: 0s; }
        .loading-dots span:nth-child(2) { animation-delay: 0.2s; }
        .loading-dots span:nth-child(3) { animation-delay: 0.4s; }
        .loading-dots span:nth-child(4) { animation-delay: 0.6s; }
        .loading-dots span:nth-child(5) { animation-delay: 0.8s; }

        @keyframes dotPulse {
          0%, 100% {
            transform: scale(0.8);
            opacity: 0.5;
          }
          50% {
            transform: scale(1.2);
            opacity: 1;
          }
        }

        /* Mobile specific adjustments */
        @media (max-width: 768px) {
          .loading-content.mobile-top-left {
            top: 15px;
            left: 15px;
            right: 15px;
            padding: 1rem;
          }
          
          .logo-animation {
            margin-bottom: 0.8rem;
          }
          
          .loading-text {
            margin-bottom: 0.8rem;
          }
          
          .progress-container {
            margin: 0.8rem 0;
          }
          
          .loading-tips {
            margin-top: 0.8rem;
          }
          
          .loading-dots {
            margin-top: 0.8rem;
          }
        }

        /* Very small phones */
        @media (max-width: 480px) {
          .loading-content.mobile-top-left {
            top: 10px;
            left: 10px;
            right: 10px;
            padding: 0.8rem;
          }
          
          .logo-animation {
            width: 55px;
            height: 55px;
          }
        }
      `}</style>
    </div>
  )
}