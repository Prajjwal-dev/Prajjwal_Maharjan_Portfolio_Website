import React from 'react'

export default function Contact(){
  return (
    <section id="contact" className="section container contact-section">
      <h2>Contact</h2>
      <p className="muted">Reach out via email: <a className="link" href="mailto:prajjwal.maharjan2013@gmail.com">prajjwal.maharjan2013@gmail.com</a></p>
      <div className="social-icons">
        <a href="https://github.com/Prajjwal-dev" target="_blank" rel="noreferrer"><img src="/assets/github.png" alt="GitHub"/></a>
        <a href="https://www.linkedin.com/in/prajjwal-maharjan-5592a0281/" target="_blank" rel="noreferrer"><img src="/assets/linked_in.png" alt="LinkedIn"/></a>
        <a href="https://www.facebook.com/profile.php?id=100054117796669" target="_blank" rel="noreferrer"><img src="/assets/facebook.png" alt="Facebook" /></a>
        <a href="https://www.instagram.com/prajjwalmaharjan/" target="_blank" rel="noreferrer"><img src="/assets/instagram.jpeg" alt="Instagram"/></a>
      </div>
    </section>
  )
}
