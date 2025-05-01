import { useRef, useState } from "react"
import { Header } from "../components/header"
import "./blog.css"

export const OT = () => {
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
                src={"https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkVXzMYftitSCoAZGYKFak2w5pOy4lbDuhvcr3W"}
                autoPlay
                loop
                muted
                playsInline
                >
                </video>
                <div id="video_header">
                    <h1 className="section_title blog_title long_title">Remaking OT's UI</h1>
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
                    Tech Stack: <span>HTML, CSS, JavaScript</span>
                </div>
                <p>I will always consider Octopath Traveler one of my favorite games. I love the "HD-2D" look, and to pay homage, 
                    I wanted to replicate the game's UI for the browser.
                </p>
                <p>I also strived to make it as responsive as possible. For a game designed to be played on monitors and TVs, 
                    it was fun trying to figure out how best to make it work for verticle mobile devices.
                    It made me really enjoy <span>CSS</span> and the sheer freedom you get from using it when not bound to the format of a typical website.</p>
                
                <h2><span>Future Work</span></h2>
                <p>I honestly don't want to touch this project. It's like a nice time capsule that I want to leave as it was.</p>
                <p>However, the idea of remaking Video Game UI on the web still strikes an interest for me. Especially with my 
                    recent growth with Three.js, remaking a room from Octopath with interactable UI is definitely possible. Maybe it'll be OT, or maybe some other game, but having a series of sites like this one would be pretty cool, and it'd be nice 
                    to reflect on this one as the first one.</p>
                
                <h2><span>Links</span></h2>
                <p>You can visit it yourself here: <a href="https://emorque.github.io/Octopath-Traveler-UI/">OT UI</a><br/>
                You can view the source code here: <a href="https://github.com/Emorque/Octopath-Traveler-UI">GitHub</a></p>
                <br/>
                <br/>
            </div>
        </div>
        
    )
}