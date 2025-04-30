import './App.css'
import { Header } from './components/header'
import { main_projects } from './db/projects'
import { Project } from './project'

function App() {
  return (
    <div id='main_page'>
      <Header/>
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
