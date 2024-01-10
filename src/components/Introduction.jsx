import reactLogo from '../assets/react.svg';
export default function Introduction() {
    return (
        <section className="intro">
            <h1 className="section__title section__title--intro">
                Hello, I am <strong>Aldrick Rasquinha</strong>
            </h1>
            <p className="section__subtitle section__subtitle--intro">Front-End Developer</p>
            <img src={reactLogo} alt="React Logo" className="intro__img" />
        </section>
    )
}