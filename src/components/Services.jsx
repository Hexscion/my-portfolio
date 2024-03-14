import { Link } from "react-router-dom"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { SiKrita } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";

export default function MyServices() {
    return (
        <section className="my-services">
            <h2 className="section__title">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Web Development</h3>
                    <div className="service-tech">
                        <div><FaHtml5 size='64px' /><p>HTML</p></div>
                        <div><FaCss3Alt size='64px' /><p>CSS</p></div>
                        <div><IoLogoJavascript size='64px' /><p>JavaScript</p></div>
                        <div><FaReact size='64px' /><p>React</p></div>
                        <div><IoLogoFirebase size='64px' /><p>Firebase</p></div>
                        <div><BiLogoPostgresql size='64px' /><p>PostgreSQL</p></div>
                    </div>
                </div>
               
                <div className="service">
                    <h3>UI Design</h3>
                    <div className="service-tech">
                        <div><IoLogoFigma size='64px' /><p>Figma</p></div>
                        <div><SiAdobexd size='64px' /><p>AdobeXD</p></div>
                        <div><SiKrita size='64px' /><p>Krita</p></div>
                        <div><GiArtificialIntelligence size='64px' /><p>Generative AI</p></div>
                    </div>
                </div>
            </div>
            <Link to="/projects" className="link-btn">View Projects</Link>
        </section>
    )
}