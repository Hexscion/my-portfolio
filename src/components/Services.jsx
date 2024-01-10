export default function MyServices() {
    return (
        <section className="my-services">
            <h2 className="section__title section__title--services">What I do</h2>
            <div className="services">
                <div className="service">
                    <h3>Design</h3>
                    <p>I strive to create beautiful and intuitive web apps, meaning I design with both aestetics and usability in mind. You will get your designs delivered as Figma files, as websites or both.</p>
                </div>
                
               
                <div className="service">
                    <h3>Development</h3>
                    <p>I am a versatile frontend developer with a speciality in React JS and Tailwind CSS. I also have a solid grip of the fundamentals of web development using HTML, CSS, and JavaScript.</p>
                </div>
            </div>
            
            <a href="#work" className="btn">My Projects</a>
        </section>
    )
}