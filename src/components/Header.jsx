import React, {useEffect, useState} from 'react'

export default function Header(){
  const [light, setLight] = useState(false)
  const [navOpen, setNavOpen] = useState(false)

  useEffect(()=>{
    // initialize from prefers-color-scheme if available
    try{
      const saved = localStorage.getItem('theme')
      if(saved === 'light') setLight(true)
      else if(saved === 'dark') setLight(false)
      else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) setLight(true)
    }catch(e){}
  },[])

  useEffect(()=>{
    const root = document.documentElement
    if(light) root.classList.add('light')
    else root.classList.remove('light')
    try{ localStorage.setItem('theme', light ? 'light' : 'dark') }catch(e){}
  },[light])

  useEffect(()=>{
    function onResize(){ if(window.innerWidth > 720) setNavOpen(false) }
    window.addEventListener('resize', onResize)
    return ()=> window.removeEventListener('resize', onResize)
  },[])

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#">
          <img src="/assets/prajjwal.jpg" alt="Prajjwal" className="logo" />
          <span className="brand-name">Prajjwal Maharjan</span>
        </a>
        <div className="nav-actions">
          <button id="theme-toggle" className="icon-btn" aria-label="Toggle theme" title={light? 'Switch to dark theme':'Switch to light theme'} aria-pressed={light} onClick={()=>setLight(l=>!l)}>{light? '☀️':'🌙'}</button>
          <button id="nav-toggle" className={"nav-toggle" + (navOpen ? ' open' : '')} aria-label="Toggle navigation" aria-expanded={navOpen} onClick={()=>setNavOpen(v=>!v)}><span></span><span></span><span></span></button>
        </div>
        <nav id="nav" className={"nav" + (navOpen ? ' open' : '')} aria-label="Main navigation">
          <ul>
            <li><a href="/#about" onClick={()=>setNavOpen(false)}>About</a></li>
            <li><a href="/certificates" onClick={()=>setNavOpen(false)}>Certificates</a></li>
            <li><a href="/#skills" onClick={()=>setNavOpen(false)}>Skills</a></li>
            <li><a href="/#projects" onClick={()=>setNavOpen(false)}>Projects</a></li>
            <li><a href="/#contact" onClick={()=>setNavOpen(false)}>Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
