import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);

    return (
        <header className={navOpen ? "nav-open" : ""}>
            <div className="logo">
                <h3>&lt;hexscion&gt;</h3>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setNavOpen((oldState) => !oldState)}>
                <span className="hamburger"></span>
            </button>
            <nav className="large-screen-nav">
                    <Link to="/" className="nav__large-screen-link">HOME</Link>
                    <Link to="projects" className="nav__large-screen-link">PROJECTS</Link>
            </nav>
            <nav className="nav" onClick={() => setNavOpen((oldState) => !oldState)}>
                <ul className="nav__list">
                    <li className="nav__item"><Link to="/" className="nav__link">HOME</Link></li>
                    <li className="nav__item"><Link to="projects" className="nav__link">PROJECTS</Link></li>
                </ul>
            </nav>
        </header>
    );
}