import { useRef, useState } from "react"
import { Header } from "../components/header"
import "./blog.css"
import { Link } from "react-router";

export const Tape = () => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const [videoPlaying, setVideoPlaying] = useState<boolean>(true)

    const toggleVideo = () => {
        if (!videoRef.current) return
        if (videoRef.current.paused) {
            videoRef.current.play()
            setVideoPlaying(true)
        }
        else {
            videoRef.current.pause()
            setVideoPlaying(false)
        }
    }

    return (
        <div id="blog_page">
            <Header/>
            <div id="blog_content">
                <div className="video_container">
                    <video 
                    ref={videoRef}
                    src={"https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVEchiOmt0gdx1pey4lHzZ7jkVb6fOYuFvKGh3"}
                    autoPlay
                    loop
                    muted
                    playsInline
                    >
                    </video>
                    <div className="loading">
                        <span>.</span>
                        <span>.</span>
                        <span>.</span>    
                    </div>    
                </div>

                <div id="video_header">
                    <h1 className="section_title blog_title">Project Tape</h1>
                    <button className="video_btn" onClick={toggleVideo}>
                        {videoPlaying? 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-pause-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M5 6.25a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0zm3.5 0a1.25 1.25 0 1 1 2.5 0v3.5a1.25 1.25 0 1 1-2.5 0z"/>
                        </svg>
                        :
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-play-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445"/>
                        </svg>
                        }
                    </button>
                </div>
                <div className="tech_stack">
                    Tech Stack: <span>Next.js, React.js, TypeScript, Three.js, PostgreSQL, Blender, GSAP</span>
                </div>
                <p>Project Tape was born out of wanting to make web app with user-created content. I've loved games like
                    Little Big Planet and the sentimenet behind <span>"Play Create Share"</span>. Plus, the idea of community-based rhythm games has been proven to be successful.
                </p>
                <p>When it came to deciding on a tech stack, I chose what I was already familar with: <span>Next.js</span>. I had already used the 
                framework for my <Link className="green" to={"/post/steam_fiber"}>previous project</Link>, and this seemed like a great way to get more experience with it, and <span>React</span> as a whole.</p>
                
                <p>For more experience with <span>Three.js</span>, I decided to make the main menu within a 3D room, where menu navigation was tied to where you placed in the room. 
                    It's not a new concept, but seeing it while playing Hi-Fi Rush made me want to try it as well. I liked the dynamic feel it provided.
                </p>

                <p>For the backend, I used Supabase with <span>PostgreSQL</span> for a previous project and it proved to be an great service. I'd used it before for its database, 
                but since the service offers storage, and user authentication, it fit my needs perfectly.</p>
                
                <p><span>Blender</span> was used for the 3D room. Since I have never used it before, I decided to go simple and achieve it with the wireframe look. It reduced the need for complex textures which helps with load times as well.
                Plus, it gives Vib-Ribbon vibes. </p>
                
                <h2><span>Future Work</span></h2>
                <p>There are endless amounts of features to add to the game, which is both a blessing and a curse. At the moment, I have a solid vertical slice of the game I wanted to make, and 
                    overall feedback has been good. Right now, anyone can jump in, play any song from the global list, and if registered, use the editor to create and upload their own beatmap. 
                </p>
                <p>There is a lot that can be added, but the major points of focus are:</p>
                <ul>
                    <li>Coming up with a name, "Project Tape" is a placeholder.</li>
                    <li>Rewriting the Game & Editor component in <span>Pixi.js</span>. Leverging WebGL would improve performance, as 
                    I've hit limitations with CSS Animations.</li>
                    <li>Map/Menu customizations.</li>
                    <li>Adjustable Mods (ex: 1 HP, Hidden notes).</li>
                    <li>More 3D models (and customizable).</li>
                </ul>
                <br/>
                <h2><span>Links</span></h2>
                <p>You can play it yourself here: <a href="https://project-tape.vercel.app/">Project Tape</a><br/>
                You can view the source code here: <a href="https://github.com/Emorque/project-tape">GitHub</a></p>
                <br/>
                <br/>
            </div>
        </div>
        
    )
}