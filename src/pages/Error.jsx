import { Link } from "react-router-dom"

export default function Error() {
    return (
        <div className="error-page">
            <h1>Oh no!!</h1>
            <p className="zoom-area">You’re either misspelling the URL or requesting a page that's no longer here.</p>
            <section className="error-container">
                <span className="four"><span className="screen-reader-text">4</span></span>
                <span className="zero"><span className="screen-reader-text">0</span></span>
                <span className="four"><span className="screen-reader-text">4</span></span>
            </section>
            <div className="link-container">
                <Link to="/" className="more-link"> Go to homepage</Link>
            </div>
        </div>
    )
}