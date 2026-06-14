import React, { useState } from 'react'

const projects = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    desc: "Gold Medal winner at KIST Fair. Automated traffic control using sensors and algorithms.",
    img: "/assets/traffic.png",
    link: "https://github.com/Safal-Shrestha/traffic-management",
    highlight: true,
    category: "IoT"
  },
  {
    id: 2,
    title: "CipherPayroll",
    desc: "Payroll management system for small businesses built in C.",
    img: "/assets/c_logo.png",
    link: "https://github.com/Prajjwal-dev/CipherPayroll",
    category: "C/C++"
  },
  {
    id: 3,
    title: "Hamrocanteen",
    desc: "Food ordering platform to streamline cafeteria services.",
    img: "/assets/canteen1.jpeg",
    link: "https://github.com/Andipstha/khukuri_coders",
    category: "Web App"
  },
  {
    id: 4,
    title: "Quiz Game",
    desc: "Flutter-based quiz game with timer, score tracking, and multiple categories.",
    img: "/assets/quiz_logo.png",
    link: "https://prajjwal-dev.itch.io/quiz-game",
    category: "Mobile"
  },
  {
    id: 5,
    title: "TicTacToe",
    desc: "Classic TicTacToe game built using HTML, CSS, and JavaScript.",
    img: "/assets/logo.jpeg",
    link: "https://prajjwal-dev.github.io/tic_tac_toe/",
    category: "Game"
  },
  {
    id: 6,
    title: "PM Kitchen Chaos",
    desc: "Unity-based game focused on chaotic kitchen management.",
    img: "/assets/game_logo.png",
    link: "https://prajjwal-dev.itch.io/pm-kitchen-chaos",
    category: "Game"
  },
  {
    id: 7,
    title: "Memory Match Game",
    desc: "A fun memory matching game built with HTML, CSS, and JavaScript.",
    img: "/assets/Logo1.jpeg",
    link: "https://prajjwal-dev.github.io/Memory_Match_Game/",
    category: "Game"
  },
  {
    id: 8,
    title: "Python AI & Apps",
    desc: "AI chatbot, QR generator, calendar, and weather apps built using Python.",
    img: "/assets/python.png",
    link: "https://github.com/Prajjwal-dev/Python_Projects",
    category: "Python"
  },
  {
    id: 9,
    title: "Bookmark Manager",
    desc: "Bookmark management tool with search and categorization features.",
    img: "/assets/Bookmark_Manager.png",
    link: "https://prajjwal-dev.github.io/Bookmark_Manager/",
    category: "Web App"
  },
  {
    id: 10,
    title: "PrajjwalGPT",
    desc: "Python-based personal AI assistant powered by OpenAI GPT models.",
    img: "/assets/PrajjwalGPT.jpeg",
    link: "https://github.com/Prajjwal-dev/PrajjwalGPT",
    category: "AI"
  },
  {
    id: 11,
    title: "FlappyVerse",
    desc: "Modern Flappy Bird with day/night cycles, shields, and smooth gameplay.",
    img: "/assets/flappybird.png",
    link: "https://flappy-verse-prajjwal.netlify.app/",
    category: "Game"
  },
  {
    id: 12,
    title: "Yatra-Z",
    desc: "All-in-one tourism platform with bookings, maps, itineraries, and local guides.",
    img: "/assets/Yatra-Z.png",
    link: "https://yatraz.infinityfreeapp.com/?i=1",
    category: "Web App"
  },
  {
    id: 13,
    title: "CineQuest",
    desc: "Movie discovery app using TMDB API with search, favorites, and dark/light mode.",
    img: "/assets/cinema.jpg",
    link: "https://cinequest432.netlify.app/",
    category: "Web App"
  },
    {
    id: 14,
    title: "BridgeGuard",
    desc: "BridgeGuard - An AI-powered bridge monitoring, disaster prediction, and evacuation management system that analyzes real-time sensor data to assess structural health, predict risks, and support emergency response decisions.",
    img: "/assets/bridgeguard.png",
    link: "https://github.com/Kodedristi-Software/national-ai-hackathon-2026-404-found",
    category: "AI/ML Project"
  },
  {
    id: 15,
    title: "GateGuard",
    desc: "GateGuard - A security system for monitoring and controlling gate access.",
    img: "/assets/RFID.PNG",
    link: "https://github.com/Prajjwal-dev/GateGuard",
    category: "IoT"
  },
  {
    id: 16,
    title: "QuickMart",
    desc: "QuickMart - An e-commerce platform for fast and easy grocery shopping built in Java.",
    img: "/assets/logo.png",
    link: "https://github.com/Prajjwal-dev/QuickMart",
    category: "Java"
  },
  {
    id: 17,
    title: "TransferMaster",
    desc: "Secure file transfer application with end-to-end encryption built in C++.",
    img: "/assets/Football.jpg",
    link: "https://github.com/Prajjwal-dev/TransferMaster",
    category: "C/C++"
  },
  {
    id: 18,
    title: "DesignSphere",
    desc: "Interactive web-based design tool with draggable canvas and color palette.",
    img: "/assets/DesignSphere.jpg",
    link: "https://github.com/Prajjwal-dev/DesignSphere",
    category: "Tool"
  },
  {
    id: 19,
    title: "DSA Visualizer Hub",
    desc: "Interactive tool for learning data structures and algorithms with real-time animations.",
    img: "/assets/DSA.png",
    link: "https://github.com/Prajjwal-dev/DSA_Visualizer_Hub",
    category: "Tool"
  },
  {
    id: 20,
    title: "Data Analytics with Python",
    desc: "Hands-on projects for data analysis, visualization, and insights using Python.",
    img: "/assets/python.png",
    link: "https://github.com/Prajjwal-dev/Data_Analytics_With_Python",
    category: "Python"
  }
];

// Category color mapping
const categoryColors = {
  "IoT": "#0ea5e9",
  "Web App": "#8b5cf6",
  "Mobile": "#10b981",
  "Game": "#f59e0b",
  "Python": "#3b82f6",
  "AI": "#ec4899",
  "Tool": "#64748b",
  "C/C++": "#64748b",
  "Java": "#f97316" 
};

export default function Projects(){
  const [filter, setFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);
  
  const categories = ["All", ...new Set(projects.map(p => p.category))];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="projects-section">
      {/* Background decoration */}
      <div className="projects-bg">
        <div className="gradient-sphere"></div>
        <div className="gradient-sphere second"></div>
        <div className="grid-pattern"></div>
      </div>

      <div className="projects-container">
        <div className="section-header">
          <span className="section-subtitle">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
          <div className="title-underline"></div>
          <p className="section-description">
            A collection of my work across web development, games, AI, and IoT
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              {cat !== "All" && (
                <span className="category-count">
                  {projects.filter(p => p.category === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(p => (
            <article 
              key={p.id} 
              className={`project-card ${p.highlight ? 'highlight' : ''}`}
              onMouseEnter={() => setHoveredId(p.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => window.open(p.link, '_blank')}
            >
              <div className="card-glow"></div>
              <div className="card-media-wrapper">
                <img 
                  src={p.img} 
                  alt={p.title} 
                  className="card-media"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/300x200?text=Project+Image";
                  }}
                />
                <div className="card-overlay">
                  <span className="view-project">
                    <span>View Project</span>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
                {p.highlight && (
                  <span className="highlight-badge">
                    <span>🏆</span> Gold Medal
                  </span>
                )}
                {p.category && (
                  <span 
                    className="category-badge"
                    style={{ backgroundColor: categoryColors[p.category] }}
                  >
                    {p.category}
                  </span>
                )}
              </div>
              
              <div className="card-body">
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                
                <div className="card-footer">
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="card-link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span>Repository</span>
                    <svg className="link-icon" viewBox="0 0 24 24" width="16" height="16">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  </a>
                  
                  {hoveredId === p.id && (
                    <span className="hover-indicator">Click to open project →</span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found in this category</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .projects-section {
          padding: 6rem 2rem;
          background: #0a0c0f;
          position: relative;
          overflow: hidden;
          min-height: 100vh;
        }

        /* Background decorations */
        .projects-bg {
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

        .projects-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 2;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3rem;
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
          line-height: 1.6;
        }

        /* Category Filter */
        .category-filter {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          justify-content: center;
          margin: 2rem 0 3rem;
        }

        .filter-btn {
          padding: 0.6rem 1.5rem;
          border: 1px solid #2d3748;
          background: #151a20;
          color: #94a3b8;
          border-radius: 30px;
          font-size: 0.9rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .filter-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .filter-btn.active {
          background: #3b82f6;
          color: white;
          border-color: #3b82f6;
        }

        .category-count {
          background: rgba(255,255,255,0.2);
          padding: 0.2rem 0.5rem;
          border-radius: 20px;
          font-size: 0.7rem;
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
          gap: 2rem;
          margin-top: 1rem;
        }

        /* Project Card */
        .project-card {
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 20px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          position: relative;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, #3b82f6, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        .project-card:hover {
          transform: translateY(-8px);
          border-color: #3b82f6;
          box-shadow: 0 20px 30px -10px rgba(59, 130, 246, 0.3);
        }

        .project-card:hover::before {
          opacity: 0.1;
        }

        .project-card.highlight {
          border: 2px solid #fbbf24;
        }

        .card-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 30% 30%, #3b82f6, transparent 70%);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
          z-index: 1;
        }

        .project-card:hover .card-glow {
          opacity: 0.15;
        }

        /* Card Media */
        .card-media-wrapper {
          position: relative;
          height: 200px;
          overflow: hidden;
          background: #1e2630;
        }

        .card-media {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .card-media {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(2px);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: 5;
        }

        .project-card:hover .card-overlay {
          opacity: 1;
        }

        .view-project {
          color: white;
          font-weight: 600;
          padding: 0.8rem 1.8rem;
          border: 2px solid white;
          border-radius: 40px;
          transform: translateY(20px);
          transition: transform 0.3s ease;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(59, 130, 246, 0.2);
          backdrop-filter: blur(5px);
        }

        .project-card:hover .view-project {
          transform: translateY(0);
        }

        .view-project svg {
          transition: transform 0.3s ease;
        }

        .view-project:hover svg {
          transform: translateX(4px);
        }

        /* Badges */
        .category-badge {
          position: absolute;
          top: 1rem;
          left: 1rem;
          padding: 0.4rem 1rem;
          border-radius: 30px;
          color: white;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 3;
          backdrop-filter: blur(4px);
        }

        .highlight-badge {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: linear-gradient(135deg, #fbbf24, #f59e0b);
          color: #0f172a;
          padding: 0.4rem 1rem;
          border-radius: 30px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.3rem;
          box-shadow: 0 4px 10px rgba(0,0,0,0.3);
          z-index: 3;
          backdrop-filter: blur(4px);
        }

        /* Card Body */
        .card-body {
          padding: 1.8rem 1.5rem 1.5rem;
          position: relative;
          z-index: 2;
        }

        .card-body h3 {
          font-size: 1.3rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.75rem;
          line-height: 1.4;
        }

        .card-body p {
          color: #94a3b8;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 1.5rem;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Card Footer */
        .card-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-top: 1px solid #2d3748;
          padding-top: 1.2rem;
        }

        .card-link {
          color: #3b82f6;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.2s ease;
          padding: 0.4rem 0;
        }

        .card-link:hover {
          color: #60a5fa;
          gap: 0.8rem;
        }

        .link-icon {
          transition: transform 0.2s ease;
        }

        .card-link:hover .link-icon {
          transform: translate(4px, -4px);
        }

        .hover-indicator {
          color: #94a3b8;
          font-size: 0.8rem;
          animation: fadeIn 0.3s ease;
          background: #1e2630;
          padding: 0.3rem 0.8rem;
          border-radius: 20px;
          border: 1px solid #2d3748;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateX(10px); }
          to { opacity: 1; transform: translateX(0); }
        }

        /* No Projects */
        .no-projects {
          text-align: center;
          padding: 4rem;
          color: #94a3b8;
          font-size: 1.1rem;
          background: #151a20;
          border: 1px solid #2d3748;
          border-radius: 20px;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 4rem 1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }

          .category-filter {
            gap: 0.5rem;
          }

          .filter-btn {
            padding: 0.5rem 1.2rem;
            font-size: 0.8rem;
          }

          .card-body h3 {
            font-size: 1.2rem;
          }
        }

        @media (max-width: 480px) {
          .category-filter {
            flex-direction: column;
            align-items: stretch;
          }

          .filter-btn {
            justify-content: center;
          }

          .card-footer {
            flex-direction: column;
            gap: 1rem;
            align-items: flex-start;
          }

          .hover-indicator {
            align-self: flex-end;
          }
        }
      `}</style>
    </section>
  )
}