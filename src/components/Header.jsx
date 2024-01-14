import { useState } from 'react';
import { NavLink } from 'react-router-dom';

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
                    <NavLink to="/" className="nav__large-screen-link">HOME</NavLink>
                    <NavLink to="projects" className="nav__large-screen-link">PROJECTS</NavLink>
            </nav>
            <nav className="nav" onClick={() => setNavOpen((oldState) => !oldState)}>
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/" className="nav__link">HOME</NavLink></li>
                    <li className="nav__item"><NavLink to="projects" className="nav__link">PROJECTS</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}