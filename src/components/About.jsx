import { Link } from "react-router-dom";
import img from "/src/assets/aldrick_anime.png";

export default function AboutMe() {
    return (
        <section className="about-me-container">
            <div className="about-me">
                <h2 className="section__title section__title--about">Who I am</h2>
                <p className="section__subtitle section__subtitle--about">Front-End Developer and Tech Enthusiast</p>
                
                <div className="about-me__body">
                    <p>
                        I’m a developer based in Mangalore, India. I specialize in creating user-friendly interfaces and experiences. 
                        I’m passionate about Frontend Development, and in my free time, I enjoy learning about the latest PC hardware and how it performs.
                    </p>
                    
                    <p>I’m excited to share my work with you, and hope you enjoy browsing my portfolio.</p>
                </div>
                
                <img src={img} alt="Aldrick's Animefied Image" className="about-me__img" />
            </div>

            <Link to="projects" className="link-btn">My Projects</Link>
        </section>
    )
}