import React, { useEffect, useState } from 'react'

export default function About() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    const element = document.getElementById('about')
    if (element) observer.observe(element)

    return () => {
      observer.disconnect()
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const interests = [
    'Full Stack Development',
    'Artificial Intelligence',
    'UI/UX Design',
    'Open Source',
    'Problem Solving',
    'Data Visualization'
  ]

  return (
    <section id="about" style={{ padding: isMobile ? '60px 15px' : '80px 20px', background: '#0a0c0f' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '30px' : '40px' }}>
          <h2 style={{ fontSize: isMobile ? '2rem' : '2.5rem', color: '#ffffff', marginBottom: '10px' }}>About Me</h2>
          <div style={{ width: '60px', height: '4px', background: '#3b82f6', margin: '0 auto', borderRadius: '2px' }}></div>
        </div>

        {/* Card */}
        <div style={{
          background: '#151a20',
          border: '1px solid #2d3748',
          borderRadius: '20px',
          padding: isMobile ? '20px' : '40px',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          transition: 'all 0.6s ease'
        }}>
          
          {/* Description */}
          <p style={{ color: '#94a3b8', fontSize: isMobile ? '0.95rem' : '1.1rem', lineHeight: '1.7', marginBottom: '25px' }}>
            I am a passionate <span style={{ color: '#3b82f6', fontWeight: '500' }}>Bachelor's in Information Technology (BIT)</span> student 
            in Nepal, driven by a curiosity for building practical software and exploring 
            AI-driven solutions. I thrive on creating full-stack applications, diving into 
            data-driven projects, and experimenting with UI/UX animations to craft 
            engaging digital experiences.
          </p>

          {/* Quote */}
          <div style={{
            background: '#1e2630',
            borderLeft: '4px solid #3b82f6',
            padding: isMobile ? '15px' : '20px',
            borderRadius: '8px',
            marginBottom: '25px'
          }}>
            <p style={{ color: '#94a3b8', fontStyle: 'italic', margin: 0, fontSize: isMobile ? '0.9rem' : '1rem' }}>
              "The only way to do great work is to love what you do. I love turning ideas into reality through code."
            </p>
          </div>

          {/* Interests */}
          <div style={{ marginBottom: '25px' }}>
            <h3 style={{ color: '#ffffff', fontSize: isMobile ? '1.1rem' : '1.2rem', marginBottom: '15px' }}>Areas of Interest</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {interests.map((item, i) => (
                <span key={i} style={{
                  background: '#1e2630',
                  border: '1px solid #2d3748',
                  padding: isMobile ? '6px 12px' : '8px 16px',
                  borderRadius: '30px',
                  fontSize: isMobile ? '0.8rem' : '0.9rem',
                  color: '#94a3b8'
                }}>
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Buttons */}
          <div style={{ 
            display: 'flex', 
            flexDirection: isMobile ? 'column' : 'row',
            gap: '15px', 
            marginBottom: '40px'
          }}>
            <a href="#projects" style={{
              background: '#3b82f6',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              View Projects
            </a>
            <a href="/assets/MyResume-Prajjwal_Maharjan.pdf" target="_blank" rel="noopener noreferrer" style={{
              background: 'transparent',
              border: '1px solid #2d3748',
              color: '#ffffff',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '500',
              textAlign: 'center',
              transition: 'all 0.3s ease'
            }}>
              Download Resume
            </a>
          </div>

          {/* Stats - FIXED: Now properly contained */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(4, 1fr)',
            gap: '12px',
            paddingTop: '30px',
            borderTop: '1px solid #2d3748'
          }}>
            {/* Stat 1 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '8px',
              background: '#1e2630',
              padding: '12px 8px',
              borderRadius: '12px',
              border: '1px solid #2d3748'
            }}>
              <span style={{ fontSize: '1.8rem', color: '#3b82f6' }}>📊</span>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>20+</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Projects</div>
              </div>
            </div>

            {/* Stat 2 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '8px',
              background: '#1e2630',
              padding: '12px 8px',
              borderRadius: '12px',
              border: '1px solid #2d3748'
            }}>
              <span style={{ fontSize: '1.8rem', color: '#3b82f6' }}>💻</span>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>15+</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Technologies</div>
              </div>
            </div>

            {/* Stat 3 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '8px',
              background: '#1e2630',
              padding: '12px 8px',
              borderRadius: '12px',
              border: '1px solid #2d3748'
            }}>
              <span style={{ fontSize: '1.8rem', color: '#3b82f6' }}>⚡</span>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>1000+</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Hours of Code</div>
              </div>
            </div>

            {/* Stat 4 */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              gap: '8px',
              background: '#1e2630',
              padding: '12px 8px',
              borderRadius: '12px',
              border: '1px solid #2d3748'
            }}>
              <span style={{ fontSize: '1.8rem', color: '#3b82f6' }}>☕</span>
              <div>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#3b82f6' }}>∞</div>
                <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Coffee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}