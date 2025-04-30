import { project } from "./helperTypes"

interface ProjectInterface {
    info : project
}

export const Project = ({info} : ProjectInterface) => {
    return(
        <div className='main_project'>
            <div className='main_project_info'>
                <h2 className="title">{info.name}</h2>
                <h2>{info.oneliner}</h2>
                <div className='pStack'>
                    {info.stack.map((item, index) => (
                        <>
                            <p key={index}>{item}</p>
                        </>
                    ))}
                </div>
                <div className='plinks'>
                    <a href={info.link}>Visit</a>
                    <a href={info.github}>GitHub</a>
                    {info.blog && <a href="">Read More</a>}
                    {/* <button>Video</button> */}
                </div>
            </div>
            {/* <video 
            src={info.video}
            autoPlay
            loop
            muted
            playsInline
            >
            </video> */}
            <br/>
        </div>
    )
}