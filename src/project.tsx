import { useState } from "react";
import { project } from "./helperTypes"
import { Link } from "react-router";

interface ProjectInterface {
    info : project
}

export const Project = ({info} : ProjectInterface) => {
    const [viewPhotos, setViewPhotos] = useState<boolean>(true)

    const togglePhotos = () => {
        setViewPhotos(!viewPhotos)
    }
    
    return(
        <div className='main_project'>
            <div className='main_project_info'>
                <div className="project_title">
                    <h2 className="title">{info.name}</h2>
                    <button className="project_photo_btn" onClick={togglePhotos}>
                        {
                            viewPhotos?
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-camera-fill" viewBox="0 0 16 16">
                                <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                                <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4zm.5 2a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m9 2.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0"/>
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-camera" viewBox="0 0 16 16">
                                <path d="M15 12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h1.172a3 3 0 0 0 2.12-.879l.83-.828A1 1 0 0 1 6.827 3h2.344a1 1 0 0 1 .707.293l.828.828A3 3 0 0 0 12.828 5H14a1 1 0 0 1 1 1zM2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-1.172a2 2 0 0 1-1.414-.586l-.828-.828A2 2 0 0 0 9.172 2H6.828a2 2 0 0 0-1.414.586l-.828.828A2 2 0 0 1 3.172 4z"/>
                                <path d="M8 11a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0 1a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7M3 6.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0"/>
                            </svg>
                        }
                    </button>
                </div>
                <h2>{info.oneliner}</h2>
                <div className='pStack'>
                    {info.stack.map((item, index) => (
                        <p key={`${info.name}-uses-${index}`}>{item}</p>
                    ))}
                </div>
                <div className='plinks'>
                    <a href={info.link}>Visit</a>
                    {info.demo !== "" && <a href={info.demo}>Demo</a>}
                    <a href={info.github}>GitHub</a>
                    {info.blog && <Link to={`/post/${info.blogname}`}>Read More</Link>}
                </div>
                <div className={viewPhotos? "project_photos show_photos": "project_photos no_photos"}  >
                    {info.photos.map((item, index) => (
                        <img src={item} key={`Photo ${index} for ${info.name}`}></img>
                    ))}
                </div>
            </div>
            {viewPhotos && <br/>}
        </div>
    )
}