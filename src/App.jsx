import { useState, useEffect } from "react"
import { Routes, Route } from "react-router-dom"
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import CertificatesPage from './components/CertificatesPage'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import { preloadAllAssets } from './utils/preloadAssets'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [contentVisible, setContentVisible] = useState(false)

  useEffect(() => {
    // Preload all assets when the app starts
    const loadAssets = async () => {
      await preloadAllAssets()
      // Add a small delay for smoother transition
      setTimeout(() => {
        setIsLoading(false)
        // Fade in content after loading screen fades out
        setTimeout(() => {
          setContentVisible(true)
        }, 100)
      }, 500)
    }

    loadAssets()
  }, [])

  return (
    <>
      {/* Loading Screen */}
      {isLoading && <LoadingScreen onLoadingComplete={() => {}} />}
      
      {/* Main Content - Fade in after loading */}
      <div className={`app-content ${contentVisible ? 'visible' : ''}`}>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
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
            }
          />

          <Route path="/certificates" element={<CertificatesPage />} />
        </Routes>

        <Footer />
      </div>

      <style jsx global>{`
        /* Initial content state - hidden */
        .app-content {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        /* Content visible after loading */
        .app-content.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Prevent scrolling while loading */
        body {
          overflow-x: hidden;
        }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
        
        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        
        ::-webkit-scrollbar-track {
          background: #151a20;
        }
        
        ::-webkit-scrollbar-thumb {
          background: #3b82f6;
          border-radius: 4px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: #2563eb;
        }
      `}</style>
    </>
  )
}