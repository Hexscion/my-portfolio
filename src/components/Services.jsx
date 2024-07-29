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
import { FaCaretLeft } from "react-icons/fa";
import { FaCaretRight } from "react-icons/fa";
import FrontendImage from "../assets/frontend_development.jpg";
import UIImage from "../assets/ui_design.jpg";
import asset_01 from "/src/assets/asset_01.svg";
import asset_02 from "/src/assets/asset_02.svg";
import asset_03 from "/src/assets/asset_03.svg";
import asset_04 from "/src/assets/asset_04.svg";

const imagePreloadList = [
    FrontendImage,
    UIImage
];

export default function MyServices() {
    const [selectValue, setSelectValue] = useState('Frontend Development');

    useEffect(() => {
        imagePreloadList.forEach(image => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    useEffect(() => {
        document.activeElement.blur();
    }, [selectValue]);

    function updateSelection() {
        if (selectValue === 'Frontend Development') {
            setSelectValue('UI Design');
        } else {
            setSelectValue('Frontend Development');
        }
    }

    return (
        <section className="my-services">
            <h2 className="section__title">What I do</h2>
            <div className="service-select">
                <button className="service-select-button" onClick={() => updateSelection()}><FaCaretLeft /></button>
                <h1 className="service-select-title">{ selectValue }</h1>
                <button className="service-select-button" onClick={() => updateSelection()}><FaCaretRight /></button>
            </div>
            <div className="services">
                { selectValue === 'Frontend Development' ? <FrontendDevelopment /> : <UIDesign /> }
            </div>
            <Link to="/projects" className="link-btn">View Projects</Link>
            <div className='asset' style={{width: '128px', height: '128px', bottom: '12rem', left: '3rem'}}>
                <img src={asset_01} alt="Asset 01" className='asset-image left-right-custom-animation' />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', bottom: '12rem', left: '3rem'}}>
                <img src={asset_03} alt="Asset 03" className='asset-image left-right-custom-animation' />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', top: '12rem', right: '1rem'}}>
                <img src={asset_02} alt="Asset 02" className='asset-image rotate-counterclockwise-custom-animation' />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', top: '12rem', right: '1rem'}}>
                <img src={asset_04} alt="Asset 04" className='asset-image' style={{width: '70%', height: '70%'}} />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', top: '3rem', left: '1rem'}}>
                <img src={asset_04} alt="Asset 04" className='asset-image rotate-clockwise-custom-animation' />
            </div>
            <div className='asset' style={{width: '64px', height: '64px', top: '10rem', left: '6rem'}}>
                <img src={asset_04} alt="Asset 04" className='asset-image rotate-counterclockwise-custom-animation' />
            </div>
            <div className='asset' style={{width: '32px', height: '32px', top: '12rem', left: '3rem'}}>
                <img src={asset_04} alt="Asset 04" className='asset-image rotate-counterclockwise-custom-animation' />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', bottom: '3rem', right: '1rem'}}>
                <img src={asset_03} alt="Asset 03" className='asset-image up-down-custom-animation' />
            </div>
        </section>
    )
}

function FrontendDevelopment() {
    return (
        <div className="service">
            <div className="service-description-container">
                <img src={FrontendImage} alt="Frontend Development" className="service-frontend-image" />
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
                <img src={UIImage} alt="UI Design" className="service-ui-image" />
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