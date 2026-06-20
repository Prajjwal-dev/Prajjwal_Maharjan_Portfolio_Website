import React, { useEffect, useState } from 'react'

export default function LoadingScreen({ onLoadingComplete }) {
  const [progress, setProgress] = useState(0)
  const [fadeOut, setFadeOut] = useState(false)
  const [currentTip, setCurrentTip] = useState(0)

  const loadingTips = [
    'Preparing selected projects',
    'Arranging certificates',
    'Warming up interactions',
    'Almost ready'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setFadeOut(true)
            setTimeout(() => onLoadingComplete(), 500)
          }, 200)
          return 100
        }
        return prev + Math.random() * 14
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  useEffect(() => {
    const tipInterval = setInterval(() => {
      setCurrentTip(prev => (prev + 1) % loadingTips.length)
    }, 1800)
    return () => clearInterval(tipInterval)
  }, [])

  const displayProgress = Math.floor(Math.min(progress, 100))

  return (
    <div className={`loading-screen ${fadeOut ? 'fade-out' : ''}`}>
      <div className="loading-bg">
        <div className="grid-overlay"></div>
        <div className="loading-accent-line"></div>
      </div>

      <div className="loading-content">
        <div className="logo-mark">
          <span>PM</span>
        </div>

        <div className="loading-text">
          <p className="loading-kicker">Portfolio preview</p>
          <h2>Prajjwal Maharjan</h2>
          <p className="loading-subtitle">
            Opening a focused portfolio built around projects, learning, and internship readiness.
          </p>
        </div>

        <div className="progress-container">
          <div className="progress-topline">
            <span>{loadingTips[currentTip]}</span>
            <span>{displayProgress}%</span>
          </div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${displayProgress}%` }}>
              <div className="progress-shine"></div>
            </div>
          </div>
        </div>

        <div className="loading-meta">
          <span>React</span>
          <span>Projects</span>
          <span>Certificates</span>
        </div>
      </div>

      <style jsx>{`
        .loading-screen {
          position: fixed;
          inset: 0;
          background: #0b0f14;
          z-index: 9999;
          opacity: 1;
          transition: opacity 0.5s ease;
        }

        .loading-screen.fade-out {
          opacity: 0;
          pointer-events: none;
        }

        .loading-bg {
          position: absolute;
          inset: 0;
          overflow: hidden;
          pointer-events: none;
        }

        .grid-overlay {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(110, 168, 254, 0.07) 1px, transparent 1px),
            linear-gradient(90deg, rgba(245, 180, 97, 0.04) 1px, transparent 1px);
          background-size: 58px 58px;
          mask-image: linear-gradient(180deg, black, transparent 76%);
        }

        .loading-accent-line {
          position: absolute;
          left: 12vw;
          right: 12vw;
          top: 22vh;
          height: 1px;
          background: linear-gradient(90deg, transparent, #f5b461, #6ea8fe, transparent);
          opacity: 0.8;
        }

        .loading-content {
          position: absolute;
          top: 50%;
          left: 50%;
          z-index: 10;
          width: min(88vw, 470px);
          transform: translate(-50%, -50%);
          padding: 2rem;
          text-align: center;
          background: rgba(18, 24, 32, 0.9);
          border: 1px solid rgba(237, 242, 247, 0.1);
          border-radius: 8px;
          box-shadow: 0 24px 70px rgba(0, 0, 0, 0.36);
          backdrop-filter: blur(18px);
          animation: fadeInUp 0.55s ease both;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate(-50%, calc(-50% + 18px));
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%);
          }
        }

        .logo-mark {
          width: 70px;
          height: 70px;
          margin: 0 auto 1rem;
          display: grid;
          place-items: center;
          border-radius: 8px;
          background: linear-gradient(135deg, rgba(110, 168, 254, 0.18), rgba(245, 180, 97, 0.16));
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .logo-mark span {
          color: #ffffff;
          font-size: 1.25rem;
          font-weight: 800;
        }

        .loading-kicker {
          color: #f5b461;
          font-size: 0.74rem;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 0.45rem;
        }

        .loading-text h2 {
          color: #ffffff;
          font-size: 1.45rem;
          font-weight: 700;
          margin-bottom: 0.45rem;
        }

        .loading-subtitle {
          color: #94a3b8;
          font-size: 0.9rem;
          line-height: 1.6;
          margin: 0;
        }

        .progress-container {
          margin: 1.25rem 0;
        }

        .progress-topline {
          display: flex;
          justify-content: space-between;
          gap: 1rem;
          color: #cbd5e1;
          font-size: 0.78rem;
          margin-bottom: 0.65rem;
        }

        .progress-bar {
          height: 6px;
          background: rgba(45, 55, 72, 0.55);
          border-radius: 999px;
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: linear-gradient(90deg, #f5b461, #6ea8fe);
          border-radius: 999px;
          transition: width 0.28s ease;
          position: relative;
          overflow: hidden;
        }

        .progress-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.34), transparent);
          animation: shine 1.5s ease-in-out infinite;
        }

        @keyframes shine {
          from { transform: translateX(-100%); }
          to { transform: translateX(100%); }
        }

        .loading-meta {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .loading-meta span {
          color: #94a3b8;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 8px;
          padding: 0.35rem 0.55rem;
          font-size: 0.72rem;
        }

        @media (max-width: 520px) {
          .loading-content {
            padding: 1.25rem;
          }

          .logo-mark {
            width: 58px;
            height: 58px;
          }

          .loading-text h2 {
            font-size: 1.2rem;
          }

          .progress-topline {
            font-size: 0.72rem;
          }
        }
      `}</style>
    </div>
  )
}
