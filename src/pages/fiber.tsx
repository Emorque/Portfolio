import { useRef, useState } from "react"
import { Header } from "../components/header"
import "./blog.css"

export const Fiber = () => {
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
                <video 
                ref={videoRef}
                src={"https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVkaEXbCNmEZLyIF903fGBSa178iohzWqAdpXY"}
                autoPlay
                loop
                muted
                playsInline
                >
                </video>
                <div id="video_header">
                    <h1 className="section_title blog_title">SteamFiber</h1>
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
                    Tech Stack: <span>Next.js, React.js, TypeScript, Three.js, PostgreSQL, GSAP</span>
                </div>
                <p>Steam Fiber was born from inspiration. Someone I had connected with at the time made an awesome 3D visualization site for a streaming service. Being inspired, I wanted to make my own 3D site, 
                    which led to me learning <span>Three.js</span> for the first time.</p>
                <p>Not only was I learning Three.js for the first time, but I was also learning <span>Next.js</span> for the first time. Considering my goals of improving as a Web developer and the need for a backend to communicate with 
                    Steam's Web <span>API</span>, leveling up and learning a framework was a reasonable choice. </p>
                <p>I got a recommendation to add some shareability to the site. This led me to Supabase's <span>PostgreSQL</span> service. The support for anonymous users was a great feature,
                    allowing any visitor to create a map, and generate a shareable link. 
                </p>
                <p>To give each particle (which represents a steam user in your network) some style, I used a color wheel to decide on a particle's color, and used some basic <span>GLSL</span> code to give them some life.</p>
                
                <h2><span>Future Work</span></h2>
                <p>I like the current state of SteamFiber and would most likely return to the project to ramp up the features. Something along the lines of:</p>
                <ul>
                    <li>Creating more GLSL Code & a basic editor for users to experiment and try to make some themselves.</li>
                    <li>Theatre Mode: A basic timeline editor where the camera would traverse on the user's timed coordinates.</li>
                    <li>A Vault for registered users to save maps.</li>
                    <li>Allow for dynamic placement of particles.</li>
                </ul>
                <br/>
                <h2><span>Links</span></h2>
                <p>You can try it yourself here: <a href="https://www.steamfiber.com/">SteamFiber</a><br/>
                You can view the source code here: <a href="https://github.com/Emorque/steamfiber">GitHub</a></p>
                <br/>
                <br/>
            </div>
        </div>
        
    )
}