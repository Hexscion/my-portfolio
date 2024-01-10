export default function MyWork() {
    return (
        <section className="my-work" id="projects">
            <h2 className="section__title section__title--work">My projects</h2>
            <p className="section__subtitle section__subtitle--work">A selection of my range of work</p>
            
            <div className="portfolio">
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/oldagram-square.png" alt="" className="portfolio__img" />
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/tenzies.jpg" alt="" className="portfolio__img" />
                </a>
    
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/password-generator.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/meme-generator.jpg" alt="" className="portfolio__img" />
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/personal-dashboard.png" alt="" className="portfolio__img" />
                </a>
                
                <a href="portfolio-item.html" className="portfolio__item">
                    <img src="img/experiences.png" alt="" className="portfolio__img" />
                </a>
            </div>
        </section>
    )
}