import React, {useEffect, useState} from 'react'

export default function Hero(){
  const full = "Hi, I'm Prajjwal — Aspiring Software Engineer"
  const [text, setText] = useState('')

  useEffect(()=>{
    let i = 0
    setText('')
    const t = setInterval(()=>{
      i++
      setText(full.slice(0,i))
      if(i >= full.length) clearInterval(t)
    }, 40)
    return ()=> clearInterval(t)
  },[])

  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-content">
          <h1 className="cursor-text">{text}<span className="caret" aria-hidden="true"></span></h1>

          <div className="hero-ctas">
            <a className="btn primary" href="/assets/My_Resume-Prajjwal_Maharjan.pdf" target="_blank" rel="noopener noreferrer">Download Resume</a>
            <a className="btn outline" href="/certificates">View Certificates</a>
            <a className="btn outline" href="#projects">View Projects</a>
          </div>

          <div className="focus-areas">
            <h3>My Focus Areas</h3>
            <div className="focus-grid">
              <div className="focus-card">
                <div className="focus-icon">{/* code brackets icon */}<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M8 17L3 12l5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 17l5-5-5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h4>Full Stack Development</h4>
                <p className="muted">Building responsive web apps with modern stacks, APIs, and deployments.</p>
                <a className="btn ghost" href="#projects">Learn more</a>
              </div>

              <div className="focus-card">
                <div className="focus-icon">{/* AI icon */}
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="1.2" fill="none"/>
                    <path d="M9 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <path d="M15 8v8" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                    <circle cx="12" cy="12" r="1.8" fill="currentColor"/>
                    <path d="M12 4v2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                    <path d="M12 20v0.01" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                </div>
                <h4>Artificial Intelligence</h4>
                <p className="muted">Modeling and prototyping ML systems and AI integrations.</p>
                <a className="btn ghost" href="#projects">Learn more</a>
              </div>

              <div className="focus-card">
                <div className="focus-icon">{/* chart icon */}<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M18 9v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 12v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/><path d="M6 15v0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h4>Data Science</h4>
                <p className="muted">Analytics, visualization, and data-driven solutions.</p>
                <a className="btn ghost" href="#projects">Learn more</a>
              </div>
            </div>
          </div>

          <br />
          <div className="hero-stats">
            <div className="stat"><strong>50+ </strong><span>Certificates</span></div>
            <br />
            <div className="stat"><strong>10+ </strong><span>Projects</span></div>
            <br />
            <div className="stat"><strong>Open </strong><span>to collaborate</span></div>
          </div>
        </div>
        <div className="hero-media">
          <div className="profile-frame">
            <img src="/assets/prajjwal.jpg" alt="Prajjwal" className="profile-large" />
          </div>
        </div>
      </div>
    </section>
  )
}
