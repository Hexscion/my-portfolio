import { Link } from "react-router-dom"

export default function MyServices() {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>UI/UX Design</h3>
                    <p>
                        I have experience in creating wireframes, prototypes, and mockups for applications using Figma and Adobe XD. 
                        I have a strong understanding of typography, color theory, and layout design, which helps me create visually 
                        appealing designs that are easy on the eyes.
                    </p>
                </div>
               
                <div className="service">
                    <h3>Frontend Development</h3>
                    <p>
                        I am skilled in Frontend development using React JS. I am proefficient in developing web applications that are 
                        user-friendly, responsive, and visually appealing. I have experience in creating reusable components, 
                        implementing state management, and integrating APIs.
                    </p>
                </div>

                <div className="service">
                    <h3>Backend Development</h3>
                    <p>
                        I have experience in Backend development using NextJS & Firebase. I have experience in creating APIs and 
                        implementing authentication and authorization. I am also skilled in database management 
                        using PostgreSQL and Firestore Database.
                    </p>
                </div>
            </div>
            <Link to="projects" className="link-btn">My Projects</Link>
        </section>
    )
}