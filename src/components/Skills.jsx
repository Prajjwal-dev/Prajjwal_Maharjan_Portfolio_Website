import React, {useRef, useEffect, useState} from 'react'

const techSkills = [
  {name:'React JS', pct:95},
  {name:'HTML / CSS / JS', pct:95},
  {name:'PHP', pct:80},
  {name:'Python', pct:88},
  {name:'Unity', pct:72},
  {name:'C#', pct:86},
  {name:'C++', pct:75},
  {name:'C', pct:70},
  {name:'Java', pct:82},
  {name:'DSA', pct:95},
  {name:'AI / Data Science', pct:60}
]

function Icon({name}){
  const k = name.toLowerCase()
  if(k.includes('react')) return (
    <svg width="18" height="18" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <g fill="none" stroke="#61dafb" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="128" cy="128" rx="88" ry="40" />
        <ellipse cx="128" cy="128" rx="88" ry="40" transform="rotate(60 128 128)" />
        <ellipse cx="128" cy="128" rx="88" ry="40" transform="rotate(120 128 128)" />
      </g>
      <circle cx="128" cy="128" r="12" fill="#61dafb" />
    </svg>
  )
  if(k.includes('html')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 3h18l-1.6 18L12 21 4.6 21 3 3z" fill="#e34f26"/>
      <path d="M7 8h10v2H7V8zm0 4h10v2H7v-2z" fill="#fff" opacity="0.9"/>
    </svg>
  )
  if(k.includes('php')) return (
    <svg width="18" height="18" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <ellipse cx="32" cy="32" rx="26" ry="14" fill="#8892bf" />
      <text x="32" y="37" fontSize="14" textAnchor="middle" fill="#fff" fontFamily="Arial" fontWeight="700">php</text>
    </svg>
  )
  if(k.includes('python')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 2c-2 0-4 1-4 3v2h6v1H8v2c0 2 2 3 4 3s4-1 4-3V5c0-2-2-3-4-3z" fill="#3776ab"/>
      <path d="M12 22c2 0 4-1 4-3v-2h-6v-1h6v-2c0-2-2-3-4-3s-4 1-4 3v6c0 2 2 3 4 3z" fill="#ffd43b"/>
    </svg>
  )
  if(k.includes('unity')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M2 7l10-5 10 5v10l-10 5L2 17V7z" fill="#000" opacity="0.85"/>
    </svg>
  )
  if(k === 'c#' || k==='c#') return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#9b4dca"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C#</text>
    </svg>
  )
  if(k.includes('c++')||k==='c++') return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="3" fill="#004482"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C++</text>
    </svg>
  )
  if(k==='c') return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#00599c"/>
      <text x="12" y="15" fontSize="9" textAnchor="middle" fill="#fff" fontFamily="Arial">C</text>
    </svg>
  )
  if(k.includes('java')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 7s3-3 6-1 6 1 6 1-1 2-5 2" stroke="#e34c26" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
      <circle cx="12" cy="17" r="3" fill="#e07a4d" />
    </svg>
  )
  if(k.includes('dsa')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M12 3v18M5 10l7-7 7 7" stroke="#7bd389" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
  if(k.includes('ai')||k.includes('data')) return (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 7h12v10H6z" fill="#6b8cff" opacity="0.95"/>
      <circle cx="9.5" cy="10.5" r="1.2" fill="#fff"/>
      <circle cx="14.5" cy="13.5" r="1.2" fill="#fff"/>
      <path d="M9.5 12.5c1 1 4 1 4 2" stroke="#fff" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  )
  return null
}

const profSkills = [
  {name:'Creativity', pct:90},
  {name:'Communication', pct:90},
  {name:'Problem Solving', pct:93},
  {name:'Teamwork', pct:98}
]

export default function Skills(){
  const rootRef = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(()=>{
    const el = rootRef.current
    if(!el) return
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => { if(en.isIntersecting) setInView(true) })
    },{threshold:0.25})
    obs.observe(el)
    return ()=> obs.disconnect()
  },[])

  return (
    <section className="skills-section" ref={rootRef}>
      <div className="skills-grid">
        <div className="skills-left">
          <h3>Technical Skills</h3>
          <p className="muted">Core technical stack and proficiencies. Animated on scroll.</p>
          <div className="skill-list">
            {techSkills.map(s => (
              <div className="skill-row" key={s.name}>
                <div className="skill-meta"><strong><span className="skill-icon"><Icon name={s.name} /></span> {s.name}</strong><span>{s.pct}%</span></div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{width: inView ? s.pct + '%' : '0%'}} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-right">
          <h3>Professional Skills</h3>
          <p className="muted">Soft skills with circular indicators.</p>
          <div className="radial-grid">
            {profSkills.map((s,i)=> (
              <div className="radial-item" key={s.name}>
                <svg className="radial" viewBox="0 0 36 36">
                  <circle className="radial-bg" cx="18" cy="18" r="15.5" strokeWidth="2" fill="none" />
                  <circle className="radial-fill" cx="18" cy="18" r="15.5" strokeWidth="2" fill="none"
                    style={{strokeDasharray: '97', strokeDashoffset: inView ? (97 - (97 * s.pct / 100)) : 97}} />
                  <text x="18" y="19.5" textAnchor="middle" className="radial-label" transform="rotate(90 18 18)">{inView? s.pct : 0}%</text>
                </svg>
                <div className="radial-name">{s.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
