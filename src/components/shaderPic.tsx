import { useRef, useState } from "react";
import { Link } from "react-router";

export const ShaderPic = () => {
    const [seen, setSeen] = useState<boolean>(false);
    const [videoPlaying, setVideoPlaying] = useState<boolean>(true)
    const [videoReady, setVideoReady] = useState<boolean>(false)
    const videoRef = useRef<HTMLVideoElement>(null)
    
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
        <Link to={`/shader/${1}`}>
            <div className='shader_pic_wrapper' 
            onMouseEnter={() => {toggleVideo(); setSeen(true)}} //Temp setTimeout, use base image as loading component
            onMouseLeave={() => toggleVideo()}
            >
            {seen && 
            <video
                style={{opacity: videoReady? 1: 0}}
                className="shader_video" 
                ref={videoRef}
                src={"https://2rhmsj9j95.ufs.sh/f/fgk4iGRrXmkV41oNzEV5cgmnIL8wVSWyx9hiRzFa0UPsQbvZ"}
                autoPlay
                loop
                muted
                playsInline
                onCanPlay={() => setVideoReady(true)}
                >
            </video>
            }
            <img className='shader_pic' src='/shaders/shader1.webp'></img>
            <h2>{(videoPlaying && videoReady)? "View Shader" : "No.1"}</h2>
            </div>
        </Link>

    )
}