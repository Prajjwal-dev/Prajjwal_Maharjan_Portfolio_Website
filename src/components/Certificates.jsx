import React, {useState, useMemo, useRef, useEffect} from 'react'
import { Link } from "react-router-dom"
import { certificates as certificateData } from '../data/certificates'

const resolveAssetPath = (path) => encodeURI(path)

const getFallbackLabel = (title) =>
  title
    .split(' ')
    .filter(Boolean)
    .slice(0, 3)
    .map(word => word[0])
    .join('')
    .toUpperCase()

export default function Certificates({limit = 9, showAll = false}) {
  const [query, setQuery] = useState('')
  const [preview, setPreview] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [isMobile, setIsMobile] = useState(false)
  const inputRef = useRef(null)
  const containerRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Extract unique categories
  const categories = useMemo(() => {
    const cats = certificateData.map(c => {
      const title = c.title.toLowerCase()
      if (title.includes('google') || title.includes('gemini')) return 'Google'
      if (title.includes('azure')) return 'Azure'
      if (title.includes('aws')) return 'AWS'
      if (title.includes('python')) return 'Python'
      if (title.includes('react') || title.includes('angular') || title.includes('full stack')) return 'Web Dev'
      if (title.includes('ai') || title.includes('generative') || title.includes('machine learning')) return 'AI/ML'
      if (title.includes('data') || title.includes('power bi')) return 'Data'
      if (title.includes('security') || title.includes('cryptography') || title.includes('kali')) return 'Security'
      if (title.includes('agile') || title.includes('scrum')) return 'Agile'
      if (title.includes('iot')) return 'IoT'
      return 'Other'
    })
    return ['All', ...new Set(cats)]
  }, [])

  const getCategory = (title) => {
    const t = title.toLowerCase()
    if (t.includes('google') || t.includes('gemini')) return 'Google'
    if (t.includes('azure')) return 'Azure'
    if (t.includes('aws')) return 'AWS'
    if (t.includes('python')) return 'Python'
    if (t.includes('react') || t.includes('angular') || t.includes('full stack')) return 'Web Dev'
    if (t.includes('ai') || t.includes('generative') || t.includes('machine learning')) return 'AI/ML'
    if (t.includes('data') || t.includes('power bi')) return 'Data'
    if (t.includes('security') || t.includes('cryptography') || t.includes('kali')) return 'Security'
    if (t.includes('agile') || t.includes('scrum')) return 'Agile'
    if (t.includes('iot')) return 'IoT'
    return 'Other'
  }

  const filtered = useMemo(() => {
    let filtered = certificateData
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(c => getCategory(c.title) === selectedCategory)
    }
    if (query) {
      filtered = filtered.filter(c => c.title.toLowerCase().includes(query.toLowerCase()))
    }
    return filtered
  }, [query, selectedCategory])

  const list = showAll ? filtered : filtered.slice(0, limit)

  // IntersectionObserver for reveal animations
  useEffect(()=>{
    const root = containerRef.current
    if(!root) return
    const items = Array.from(root.querySelectorAll('.reveal'))
    const obs = new IntersectionObserver((entries)=>{
      entries.forEach(en=>{ if(en.isIntersecting) en.target.classList.add('in-view') })
    },{threshold: 0.1})
    items.forEach(i=>obs.observe(i))
    return ()=> obs.disconnect()
  },[list])

  // Category color mapping
  const categoryColors = {
    'Google': '#4285F4',
    'Azure': '#0078D4',
    'AWS': '#FF9900',
    'Python': '#3776AB',
    'Web Dev': '#E34F26',
    'AI/ML': '#10A37F',
    'Data': '#8B5CF6',
    'Security': '#DC2626',
    'Agile': '#F59E0B',
    'IoT': '#0EA5E9',
    'Other': '#64748B'
  }

  // Full page view
  const FullPageView = () => (
    <div style={fullPageStyles.container}>
      <div style={fullPageStyles.header}>
        <h1 style={fullPageStyles.title}>All Certificates</h1>
        <p style={fullPageStyles.subtitle}>Browse my complete collection of professional certifications</p>
        <Link to="/" style={fullPageStyles.backBtn}>← Back to Home</Link>
      </div>

      <div style={fullPageStyles.controls}>
        <input
          type="text"
          placeholder="Search certificates..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={fullPageStyles.searchInput}
        />
        <select 
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={fullPageStyles.select}
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div style={fullPageStyles.stats}>{filtered.length} certificates found</div>

      <div ref={containerRef} style={fullPageStyles.grid}>
        {filtered.length === 0 && (
          <div style={{gridColumn: '1/-1', padding: '2rem', textAlign: 'center', color:'#94a3b8'}}>No certificates match your search or selected category.</div>
        )}
        {filtered.map((c, idx) => (
          <div key={idx} className="reveal in-view" style={fullPageStyles.card} onClick={() => setPreview(c)}>
            <img
              src={resolveAssetPath(c.img)}
              alt={c.title}
              style={fullPageStyles.cardImage}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement.querySelector('.img-fallback')
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="img-fallback" style={{display:'none',height:'160px',alignItems:'center',justifyContent:'center',background:'#0f1720',color:'#94a3b8',flexDirection:'column',gap:'0.4rem'}}>
              <span style={{fontSize:'1.2rem',fontWeight:700,color:'#6ea8fe'}}>{getFallbackLabel(c.title)}</span>
              <span style={{fontSize:'0.75rem'}}>Preview not available</span>
            </div>
            <div style={fullPageStyles.cardContent}>
              <h3 style={fullPageStyles.cardTitle}>{c.title}</h3>
              <p style={fullPageStyles.cardMeta}>Certificate preview</p>
              <div style={fullPageStyles.cardButtons}>
                <a href={resolveAssetPath(c.file)} target="_blank" rel="noreferrer" style={fullPageStyles.openBtn} onClick={(e) => e.stopPropagation()}>Open</a>
                <a href={resolveAssetPath(c.file)} download style={fullPageStyles.downloadBtn} onClick={(e) => e.stopPropagation()}>Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div style={fullPageStyles.modal} onClick={() => setPreview(null)}>
          <div style={fullPageStyles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={fullPageStyles.modalHeader}>
              <h3>{preview.title}</h3>
              <button onClick={() => setPreview(null)} style={fullPageStyles.closeBtn}>X</button>
            </div>
            <iframe src={resolveAssetPath(preview.file)} style={fullPageStyles.iframe} title={preview.title} />
            <div style={fullPageStyles.modalFooter}>
              <a href={resolveAssetPath(preview.file)} target="_blank" style={fullPageStyles.openBtn}>Open</a>
              <a href={resolveAssetPath(preview.file)} download style={fullPageStyles.downloadBtn}>Download</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  // Compact view for home page
  const CompactView = () => (
    <div style={compactStyles.wrapper}>
      <div style={compactStyles.header}>
        <div>
          <h2 style={compactStyles.title}>Certifications</h2>
          <p style={compactStyles.subtitle}>Explore verified certificates, open or download any item.</p>
        </div>
        {!showAll && (
          <Link to="/certificates" style={compactStyles.viewAllBtn}>
            {'View All Certificates ->'}
          </Link>
        )}
      </div>

      <div style={compactStyles.searchWrapper}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Search certificates..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          style={compactStyles.searchInput}
        />
      </div>

      <div ref={containerRef} style={compactStyles.grid}>
        {list.length === 0 && (
          <div style={{gridColumn: '1/-1', padding: '1.5rem', textAlign: 'center', color:'#94a3b8'}}>No certificates to show here.</div>
        )}
        {list.map((c, idx) => (
          <div key={idx} className="reveal" style={compactStyles.card} onClick={() => setPreview(c)}>
            <img
              src={resolveAssetPath(c.img)}
              alt={c.title}
              style={compactStyles.cardImage}
              loading="lazy"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                const fallback = e.currentTarget.parentElement.querySelector('.img-fallback')
                if (fallback) fallback.style.display = 'flex'
              }}
            />
            <div className="img-fallback" style={{display:'none',height:'160px',alignItems:'center',justifyContent:'center',background:'#0f1720',color:'#94a3b8',flexDirection:'column',gap:'0.4rem'}}>
              <span style={{fontSize:'1.2rem',fontWeight:700,color:'#6ea8fe'}}>{getFallbackLabel(c.title)}</span>
              <span style={{fontSize:'0.75rem'}}>Preview not available</span>
            </div>
            <div style={compactStyles.cardContent}>
              <h3 style={compactStyles.cardTitle}>{c.title}</h3>
              <p style={compactStyles.cardMeta}>Certificate preview</p>
              <div style={compactStyles.cardButtons}>
                <a href={resolveAssetPath(c.file)} target="_blank" rel="noreferrer" style={compactStyles.openBtn} onClick={(e) => e.stopPropagation()}>Open</a>
                <a href={resolveAssetPath(c.file)} download style={compactStyles.downloadBtn} onClick={(e) => e.stopPropagation()}>Download</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {preview && (
        <div style={compactStyles.modal} onClick={() => setPreview(null)}>
          <div style={compactStyles.modalContent} onClick={e => e.stopPropagation()}>
            <div style={compactStyles.modalHeader}>
              <h3>{preview.title}</h3>
              <button onClick={() => setPreview(null)} style={compactStyles.closeBtn}>X</button>
            </div>
            <iframe src={resolveAssetPath(preview.file)} style={compactStyles.iframe} title={preview.title} />
            <div style={compactStyles.modalFooter}>
              <a href={resolveAssetPath(preview.file)} target="_blank" style={compactStyles.openBtn}>Open</a>
              <a href={resolveAssetPath(preview.file)} download style={compactStyles.downloadBtn}>Download</a>
            </div>
          </div>
        </div>
      )}
    </div>
  )

  const compactStyles = {
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
    },
    header: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: isMobile ? 'flex-start' : 'center',
      marginBottom: '1.5rem',
      gap: '1rem',
    },
    title: {
      fontSize: isMobile ? '1.8rem' : '2.5rem',
      fontWeight: 700,
      color: '#ffffff',
      marginBottom: '0.25rem',
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: isMobile ? '0.85rem' : '1rem',
    },
    viewAllBtn: {
      display: 'inline-block',
      padding: '0.6rem 1.2rem',
      background: '#3b82f6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '30px',
      fontSize: '0.9rem',
      fontWeight: 500,
      whiteSpace: 'nowrap',
    },
    searchWrapper: {
      marginBottom: '2rem',
      width: '100%',
    },
    searchInput: {
      width: '100%',
      padding: '0.8rem 1rem',
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '30px',
      color: '#ffffff',
      fontSize: '0.95rem',
      outline: 'none',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
      transition: 'transform 0.3s ease',
    },
    cardImage: {
      width: '100%',
      height: '160px',
      objectFit: 'contain',
      background: '#1e2630',
    },
    cardContent: {
      padding: '1rem',
    },
    cardTitle: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#ffffff',
      marginBottom: '0.35rem',
    },
    cardMeta: {
      color: '#94a3b8',
      fontSize: '0.78rem',
      marginBottom: '1rem',
    },
    cardButtons: {
      display: 'flex',
      gap: '0.5rem',
    },
    openBtn: {
      flex: 1,
      padding: '0.5rem',
      background: '#3b82f6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '0.85rem',
    },
    downloadBtn: {
      flex: 1,
      padding: '0.5rem',
      background: 'transparent',
      border: '1px solid #3b82f6',
      color: '#3b82f6',
      textDecoration: 'none',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '0.85rem',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    modalContent: {
      background: '#151a20',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '900px',
      maxHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      borderBottom: '1px solid #2d3748',
    },
    closeBtn: {
      background: '#1e2630',
      border: 'none',
      color: '#94a3b8',
      fontSize: '1.2rem',
      cursor: 'pointer',
      width: '32px',
      height: '32px',
      borderRadius: '8px',
    },
    iframe: {
      width: '100%',
      height: '400px',
      border: 'none',
    },
    modalFooter: {
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      borderTop: '1px solid #2d3748',
    },
  }

  const fullPageStyles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isMobile ? '1rem' : '2rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: isMobile ? '2rem' : '3rem',
      fontWeight: 700,
      color: '#ffffff',
      marginBottom: '0.5rem',
    },
    subtitle: {
      color: '#94a3b8',
      fontSize: isMobile ? '0.9rem' : '1.2rem',
      marginBottom: '1rem',
    },
    backBtn: {
      display: 'inline-block',
      padding: '0.5rem 1rem',
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '30px',
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '0.9rem',
    },
    controls: {
      display: 'flex',
      flexDirection: isMobile ? 'column' : 'row',
      gap: '1rem',
      marginBottom: '1.5rem',
    },
    searchInput: {
      flex: 1,
      padding: '0.8rem 1rem',
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '30px',
      color: '#ffffff',
      fontSize: '0.95rem',
      outline: 'none',
    },
    select: {
      padding: '0.8rem 1rem',
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '30px',
      color: '#ffffff',
      fontSize: '0.95rem',
      cursor: 'pointer',
    },
    stats: {
      display: 'inline-block',
      padding: '0.3rem 1rem',
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '30px',
      color: '#94a3b8',
      fontSize: '0.9rem',
      marginBottom: '1.5rem',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '1.5rem',
    },
    card: {
      background: '#151a20',
      border: '1px solid #2d3748',
      borderRadius: '16px',
      overflow: 'hidden',
      cursor: 'pointer',
    },
    cardImage: {
      width: '100%',
      height: '160px',
      objectFit: 'contain',
      background: '#1e2630',
    },
    cardContent: {
      padding: '1rem',
    },
    cardTitle: {
      fontSize: '1rem',
      fontWeight: 600,
      color: '#ffffff',
      marginBottom: '0.35rem',
    },
    cardMeta: {
      color: '#94a3b8',
      fontSize: '0.78rem',
      marginBottom: '1rem',
    },
    cardButtons: {
      display: 'flex',
      gap: '0.5rem',
    },
    openBtn: {
      flex: 1,
      padding: '0.5rem',
      background: '#3b82f6',
      color: 'white',
      textDecoration: 'none',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '0.85rem',
    },
    downloadBtn: {
      flex: 1,
      padding: '0.5rem',
      background: 'transparent',
      border: '1px solid #3b82f6',
      color: '#3b82f6',
      textDecoration: 'none',
      borderRadius: '8px',
      textAlign: 'center',
      fontSize: '0.85rem',
    },
    modal: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: 'rgba(0,0,0,0.9)',
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
    },
    modalContent: {
      background: '#151a20',
      borderRadius: '16px',
      width: '100%',
      maxWidth: '900px',
      maxHeight: '80vh',
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
    },
    modalHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      borderBottom: '1px solid #2d3748',
    },
    closeBtn: {
      background: '#1e2630',
      border: 'none',
      color: '#94a3b8',
      fontSize: '1.2rem',
      cursor: 'pointer',
      width: '32px',
      height: '32px',
      borderRadius: '8px',
    },
    iframe: {
      width: '100%',
      height: '400px',
      border: 'none',
    },
    modalFooter: {
      display: 'flex',
      gap: '1rem',
      padding: '1rem',
      borderTop: '1px solid #2d3748',
    },
  }

  return showAll ? <FullPageView /> : <CompactView />
}

// Add global animation style
const styleSheet = document.createElement("style")
styleSheet.textContent = `
  .reveal {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .reveal.in-view {
    opacity: 1;
    transform: translateY(0);
  }
`
document.head.appendChild(styleSheet)
