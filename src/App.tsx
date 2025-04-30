import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { project } from './helperTypes'
import { Project } from './project'

function App() {

  const main_projects : project[] = [
    {
      name: "Project Tape",
      video: "https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVEchiOmt0gdx1pey4lHzZ7jkVb6fOYuFvKGh3",
      stack: ["Next.js", "React.js", "TypeScript", "Three.js", "PostgreSQL", "Blender", "GSAP"],
      oneliner: "Browser Rhythm Game",
      github: "https://github.com/Emorque/project-tape",
      link: "https://project-tape.vercel.app/",
      blog: true
    },
    {
      name: "Steam Fiber",
      video: "https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVkaEXbCNmEZLyIF903fGBSa178iohzWqAdpXY",
      stack: ["Next.js", "React.js", "TypeScript", "Three.js", "PostgreSQL", "GSAP"],
      oneliner: "Your 3D Steam Network",
      github: "https://github.com/Emorque/steamfiber",
      link: "https://www.steamfiber.com/",
      blog: false
    },  
    {
      name: "Octopath Traveler UI",
      video: "https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVXzMYftitSCoAZGYKFak2w5pOy4lbDuhvcr3W",
      stack: ["HTML", "CSS", "JS"],
      oneliner: "Remaking OT's UI",
      github: "https://github.com/Emorque/Octopath-Traveler-UI",
      link: "https://emorque.github.io/Octopath-Traveler-UI/",
      blog: false
    },    
  ]

  return (
    <div id='main_page'>
      <header id='header'>
        <nav id='nav_bar'>
          <img id='logo' src='logo.svg'/>
          <div id='links'>
            <a href=''>BLOG</a>
            <a href='https://github.com/Emorque'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
              </svg>
            </a>
            <a href='https://www.linkedin.com/in/emorque/'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
              </svg>
            </a>

            <a href='mailto:ericrodriguez.ecr@gmail.com'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
              </svg>
            </a>

            <a href='https://x.com/zhal_o'>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-twitter-x" viewBox="0 0 16 16">
                <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
              </svg>
            </a>

            <a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"/>
              </svg>
            </a>

          </div>
        </nav>
      </header>

      <div id='main_content'>
        <h1>Eric Rodriguez</h1>
        <br/>
        <h2>Hey! I'm Eric, a Developer based in New York City, specializing in React & Typescript.</h2>
        <h2>I'm also familar with:</h2>
        <div className='stack'>
          <p>Next.js</p>
          <div className='circle'></div>
          <p>Three.js</p>
          <div className='circle'></div>
          <p>JavaScript</p>
          <div className='circle'></div>
          <p>HTML</p>
          <div className='circle'></div>
          <p>CSS</p>            
          <div className='circle'></div>
          <p>GSAP</p>            
          <div className='circle'></div>
          <p>Python</p>
          <div className='circle'></div>
          <p>PostgreSQL</p>
          <div className='circle'></div>
          <p>Inkscape</p>
          <div className='circle'></div>
          <p>Blender</p>
          <div className='circle'></div>
          <p>Unity</p>
        </div>
        <br/>

        <section id='main_projects' className='abstract_bg'>
          <h1 className='section_title'>PROJECTS</h1>
          <br/>
            {main_projects.map((item, index) => (
              <Project info={item} key={`Project: ${index}`}/>
            ))}
        </section>

        <br/>
        <section id='experience' className='abstract_bg'>
          <h1 className='section_title'>EXPERIENCE</h1>
          <br/>
          <div id='experience_content'>
            <div className='exp'>
              <div className='role'>
                <h3>Technical Fellow Manager</h3>
                <h3>CodePath</h3>
              </div>
              <div className='bar'></div>
              <h3 className='date'>Mar. 2025 - Present</h3>
            </div>

            <div className='exp'>
              <div className='role'>
                <h3>Technical Fellow</h3>
                <h3>CodePath</h3>
              </div>
              <div className='bar'></div>
              <h3 className='date'>Sep. 2023 - Mar. 2025</h3>
            </div>

            <div className='exp'>
              <div className='role'>
                <h3>Research Experience Intern</h3>
                <h3>Syracuse University</h3>
              </div>
              <div className='bar'></div>
              <h3 className='date'>Jun. 2023 - May 2024</h3>
            </div>
          </div>
        </section>

        <br/>
        <section id='education' className='abstract_bg'>
          <h1 className='section_title'>EDUCATION</h1>
          <br/>
          <div id='education_content'>
            <div>
              <h2>Syracuse Unviersity</h2>
              <h3>Syracuse, NY</h3>
            </div>
            <div>
              <h3>Bachlor of Science (BS), <span>Major in Computer Science</span></h3>
              <h2>2020 - 2024</h2>
            </div>
          </div>
        </section>
        <br/>
        <br/>
        <br/>
      </div>
    </div>
  )
}

export default App
