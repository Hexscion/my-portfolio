import { FaLinkedin } from "react-icons/fa";
import { FaCodepen } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="footer">
            <a href="mailto:aldrickrasquinha@gmail.com" className="footer__link">aldrickrasquinha@gmail.com</a>
            <ul className="social-list">
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" href="https://www.linkedin.com/in/aldrickrasquinha/">
                        <FaLinkedin />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" href="https://codepen.io/Hexscion">
                        <FaCodepen />
                    </a>
                </li>
                <li className="social-list__item">
                    <a className="social-list__link" target="_blank" href="https://github.com/Hexscion">
                        <FaGithub />
                    </a>
                </li>
            </ul>
        </footer>
    )
}