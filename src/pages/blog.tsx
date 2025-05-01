import { Header } from "../components/header"
import "./blog.css"

export const Blog = () => {

    return (
        <div id="blog_page">
            <Header/>
            {/* <div id="blog_content">
                {main_projects.map((item, index) => (
                    item.blog === true ? (
                    <a href="/blog/project_tape" key={`Post for ${item.name}`}>
                        <div className="post" key={`Project: ${index}`}>
                        <p>Timeline of {item.name}</p>
                        </div>
                    </a>

                    )
                    : 
                    null
                ))}
            </div> */}
        </div>
    )
}