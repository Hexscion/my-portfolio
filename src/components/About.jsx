import asset_05 from '/src/assets/asset_05.svg';
import asset_06 from '/src/assets/asset_06.svg';

export default function AboutMe() {
    return (
        <section className="about-me-container">
            <div className="about-me">
                <div className="about-me__body">
                    <p>
                        I’m a developer based in <strong>Mangalore, India</strong> 🌴. Whether it’s crafting responsive websites 💻, optimizing performance 🚀, 
                        or debugging those elusive bugs 🐛, I’m in my element.
                    </p>
                    <p>
                        I’m also the go-to person for all things computer-related in my circle. When friends, family, or colleagues encounter cryptic error messages 🖥️ 
                        or tangled cables 🔌, they know who to call.
                    </p>
                    <p>
                        I’m excited to share my work with you, and hope you enjoy browsing my portfolio. 😊
                    </p>
                </div>
            </div>
            <div className='asset' style={{width: '128px', height: '128px', bottom: '1rem', left: '3rem', opacity: '0.5'}}>
                <img src={asset_05} alt="Asset 05" className='asset-image left-right-custom-animation' />
            </div>
            <div className='asset' style={{width: '128px', height: '128px', top: '3rem', right: '1rem', opacity: '0.5'}}>
                <img src={asset_06} alt="Asset 06" className='asset-image up-down-custom-animation' />
            </div>
        </section>
    )
}