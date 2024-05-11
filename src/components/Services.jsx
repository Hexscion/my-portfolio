import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { IoLogoFigma } from "react-icons/io5";
import { SiAdobexd } from "react-icons/si";
import { SiKrita } from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import FrontendImage from "../assets/frontend_development.jpg";
import UIImage from "../assets/ui_design.jpg";

export default function MyServices() {
    const [selectValue, setSelectValue] = useState('Frontend Development');

    useEffect(() => {
        document.activeElement.blur();
    }, [selectValue]);

    return (
        <section className="my-services">
            <h2 className="section__title">What I do</h2>
            <div className="service-select">
                <select name="service-select" id="service-select" onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="Frontend Development">Frontend Development</option>
                    <option value="UI Design">UI Design</option>
                </select>
            </div>
            <div className="services">
                { selectValue === 'Frontend Development' ? <FrontendDevelopment /> : <UIDesign /> }
            </div>
            <Link to="/projects" className="link-btn">View Projects</Link>
        </section>
    )
}

function FrontendDevelopment() {
    return (
        <div className="service">
            <div className="service-description-container">
                <img src={FrontendImage} alt="Frontend Development" />
                <p className="service-description">As a front-end developer, I create user-friendly web pages. I collaborate with back-end developers and designers to ensure seamless integration, design mobile-friendly features, and stay up-to-date on emerging technologies. My work contributes to the overall user experience, making websites functional, visually appealing, and efficient! 🚀</p>
            </div>
            <div className="service-tech">
                <div><FaHtml5 size='64px' /><p>HTML</p></div>
                <div><FaCss3Alt size='64px' /><p>CSS</p></div>
                <div><BiLogoTypescript size='64px' /><p>TypeScript</p></div>
                <div><FaReact size='64px' /><p>React</p></div>
                <div><SiNextdotjs size='64px' /><p>Next.js</p></div>
                <div><IoLogoFirebase size='64px' /><p>Firebase</p></div>
            </div>
        </div>
    )
}

function UIDesign() {
    return (
        <div className="service">
            <div className="service-description-container">
                <img src={UIImage} alt="UI Design" />
                <p className="service-description">As a UI designer, I create user interface elements, including layout, color schemes, typography, and interactive elements. I develop visually appealing and intuitive user interfaces for digital products, websites, or applications. Additionally, I produce wireframes and prototypes to illustrate the structure and functions of these user interfaces. 🎨🌟</p>
            </div>
            <div className="service-tech">
                <div><IoLogoFigma size='64px' /><p>Figma</p></div>
                <div><SiAdobexd size='64px' /><p>AdobeXD</p></div>
                <div><SiKrita size='64px' /><p>Krita</p></div>
                <div><GiArtificialIntelligence size='64px' /><p>Generative AI</p></div>
            </div>
        </div>
    )
}