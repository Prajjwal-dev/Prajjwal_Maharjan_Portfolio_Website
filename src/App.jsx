import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import CertificatesPage from './components/CertificatesPage'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App(){
  const path = typeof window !== 'undefined' ? window.location.pathname : '/'

  if(path === '/certificates'){
    return (
      <div>
        <Header />
        <CertificatesPage />
        <Footer />
      </div>
    )
  }

  return (
    <div>
      <Header />
      <main>
        <Hero />
        <About />
        <section className="section container">
          <Certificates limit={6} />
        </section>
        <section className="section container" id="skills">
          <Skills />
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
