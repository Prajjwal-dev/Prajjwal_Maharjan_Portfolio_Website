import React from 'react'

const projects = [
  {
    id: 1,
    title: "Smart Traffic Management System",
    desc: "Gold Medal winner at KIST Fair. Automated traffic control using sensors and algorithms.",
    img: "/assets/traffic.png",
    link: "https://github.com/Safal-Shrestha/traffic-management",
    highlight: true
  },
  {
    id: 2,
    title: "CipherPayroll",
    desc: "Payroll management system for small businesses.",
    img: "/assets/c_logo.png",
    link: "https://github.com/Prajjwal-dev/CipherPayroll"
  },
  {
    id: 3,
    title: "Hamrocanteen",
    desc: "Food ordering platform to streamline cafeteria services.",
    img: "/assets/canteen1.jpeg",
    link: "https://github.com/Andipstha/khukuri_coders"
  },
  {
    id: 4,
    title: "Quiz Game",
    desc: "Flutter-based quiz game with timer, score tracking, and multiple categories.",
    img: "/assets/quiz_logo.png",
    link: "https://prajjwal-dev.itch.io/quiz-game"
  },
  {
    id: 5,
    title: "TicTacToe",
    desc: "Classic TicTacToe game built using HTML, CSS, and JavaScript.",
    img: "/assets/logo.jpeg",
    link: "https://prajjwal-dev.github.io/tic_tac_toe/"
  },
  {
    id: 6,
    title: "PM Kitchen Chaos",
    desc: "Unity-based game focused on chaotic kitchen management.",
    img: "/assets/game_logo.png",
    link: "https://prajjwal-dev.itch.io/pm-kitchen-chaos"
  },
  {
    id: 7,
    title: "Memory Match Game",
    desc: "A fun memory matching game built with HTML, CSS, and JavaScript.",
    img: "/assets/Logo1.jpeg",
    link: "https://prajjwal-dev.github.io/Memory_Match_Game/"
  },
  {
    id: 8,
    title: "Python AI & Apps",
    desc: "AI chatbot, QR generator, calendar, and weather apps built using Python.",
    img: "/assets/python.png",
    link: "https://github.com/Prajjwal-dev/Python_Projects"
  },
  {
    id: 9,
    title: "Bookmark Manager",
    desc: "Bookmark management tool with search and categorization features.",
    img: "/assets/Bookmark_Manager.png",
    link: "https://prajjwal-dev.github.io/Bookmark_Manager/"
  },
  {
    id: 10,
    title: "PrajjwalGPT",
    desc: "Python-based personal AI assistant powered by OpenAI GPT models.",
    img: "/assets/PrajjwalGPT.jpeg",
    link: "https://github.com/Prajjwal-dev/PrajjwalGPT"
  },
  {
    id: 11,
    title: "FlappyVerse",
    desc: "Modern Flappy Bird with day/night cycles, shields, and smooth gameplay.",
    img: "/assets/flappybird.png",
    link: "https://flappy-verse-prajjwal.netlify.app/"
  },
  {
    id: 12,
    title: "Yatra-Z",
    desc: "All-in-one tourism platform with bookings, maps, itineraries, and local guides.",
    img: "/assets/Yatra-Z.png",
    link: "https://yatraz.infinityfreeapp.com/?i=1"
  },
  {
    id: 13,
    title: "CineQuest",
    desc: "Movie discovery app using TMDB API with search, favorites, and dark/light mode.",
    img: "/assets/cinema.jpg",
    link: "https://cinequest432.netlify.app/"
  }
];


export default function Projects(){
  return (
    <section id="projects" className="section container">
      <div className="section-head"><h2>Projects</h2></div>
      <div className="projects-grid">
        {projects.map(p=> (
          <article key={p.id} className="card project-card" onClick={()=>window.open(p.link,'_blank')}>
            <img src={p.img} alt={p.title} className="card-media" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="card-link">View on GitHub</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
