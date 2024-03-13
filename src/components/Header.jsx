import { useContext, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { RootContext } from '../pages/Root';

export default function Header() {
    const {headerHeight, setHeaderHeight} = useContext(RootContext);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const height = document.getElementsByTagName("header")[0].offsetHeight;
        setHeaderHeight(height);
    }, []);

    return (
        <header className={navOpen ? "nav-open" : ""}>
            <div>
                <Link to="/" className="logo__link">&lt;hexscion&gt;</Link>
            </div>
            <button className="nav-toggle" aria-label="toggle navigation" onClick={() => setNavOpen((oldState) => !oldState)}>
                <span className="hamburger"></span>
            </button>
            <nav className="large-screen-nav">
                    <NavLink to="/" className="nav__large-screen-link">HOME</NavLink>
                    <NavLink to="projects" className="nav__large-screen-link">PROJECTS</NavLink>
                    <NavLink to="certificates" className="nav__large-screen-link">CERTIFICATES</NavLink>
            </nav>
            <nav className="nav" onClick={() => setNavOpen((oldState) => !oldState)}>
                <ul className="nav__list">
                    <li className="nav__item"><NavLink to="/" className="nav__link">HOME</NavLink></li>
                    <li className="nav__item"><NavLink to="projects" className="nav__link">PROJECTS</NavLink></li>
                    <li className="nav__item"><NavLink to="certificates" className="nav__link">CERTIFICATES</NavLink></li>
                </ul>
            </nav>
        </header>
    );
}