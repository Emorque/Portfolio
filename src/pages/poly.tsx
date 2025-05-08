import { useRef, useState } from "react"
import { Header } from "../components/header"
import "./blog.css"
import { Link } from "react-router";

export const Poly = () => {
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
                    src={"https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkV6sCgBLkBIvuNfD0cR27sSZaJMkyxwYQnHUEW"}
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
                    <h1 className="section_title blog_title">Poly-Gen</h1>
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
                    Tech Stack: <span>React.js, TypeScript</span>
                </div>
                <p>Poly-Gen was born out of viewing this <a className="green" href="https://www.youtube.com/watch?v=Kt3DavtVGVE" target="blank">video</a> by HyperPlexed.
                I decided to not only follow its guidance but also to implement it with customizability within React.</p>
                <p>Handling Canvas animations in React presents different challenges compared to vanilla JavaScript. And if done poorly, it can quickly spiral and cause a rendering nightmare. Through trial and error, and understanding key parts of the animation loop, I achieved  performant animations while still being customizable by the user.</p>

                <p>Another area of focus was audio. The original code's use of audio elements meant audio files would get fetched from the server multiple times.</p>

                <p>While not ideal, I thought that if I could improve upon this, I could translate the code to work in my <Link className="green" to={"/post/project_tape"}>rhythm game</Link>. 
                By creating an audio manager that fetches each audio file once and stores each one in a buffer, I could play these files as many times as I wanted, and it would never fetch from the server again.</p>
                
                <p>For a small project, just solving these problems has already got me drumming up some ideas for my game.</p>
                
                <h2><span>Future Work</span></h2>
                <p>Only a few things I'd like to add:</p>
                <ul>
                    <li>Allow users to upload their own short audio file, and create multiple pitches from it to play for each note.</li>
                    <li>Making edits more dyanmic (ex: When changing the color, the color updates in real time).</li>
                    <li>Adding unique animations.</li>
                </ul>
                <br/>
                <h2><span>Links</span></h2>
                <p>You can play it yourself here: <a href="https://poly-gen.vercel.app/">Poly-Gen</a><br/>
                You can view the source code here: <a href="https://github.com/Emorque/poly-generator">GitHub</a></p>
                <br/>
                <br/>
            </div>
        </div>
        
    )
}