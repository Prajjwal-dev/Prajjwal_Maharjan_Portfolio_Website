import React from 'react'

export default function About(){
  return (
    <section className="section container" id="about">
      <div className="about-card card reveal">
        <div className="about-grid" style={{display:'flex',gap:20,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{flex:'0 0 160px'}}>
            <div style={{width:140,height:140,borderRadius:16,overflow:'hidden',boxShadow:'0 12px 40px rgba(2,6,23,0.4)'}}>
              <img src="/assets/prajjwal.jpg" alt="Prajjwal" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
            </div>
          </div>
          <div style={{flex:1,minWidth:220}}>
            <h3>About Me</h3>
            <p className="muted" style={{marginTop:8,lineHeight:1.5}}>
              I am a student pursuing a Bachelor's in Information Technology (BIT) in Nepal, passionate about building
              practical software and exploring AI-driven solutions. I enjoy creating full-stack applications, working
              on data-driven projects, and experimenting with UI/UX animations.
            </p>
            <div style={{marginTop:12}}>
              <a className="btn outline" href="#projects">See projects</a>
              <a className="btn" style={{marginLeft:12}} href="/assets/My_Resume-Prajjwal_Maharjan.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
