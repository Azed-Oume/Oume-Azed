
const Footer = () => {
    return(
        <>
        <footer className="footer">
            <nav className="footer__links" aria-label="Navigation Secondaire">
                <a className="footer__link" href="/Cgu" aria-label="page des Conditions générales d'utilisation" >C-G-U</a>
                <a className="footer__link" href="/blog" aria-label="page du blog" >Blog</a>
                <a className="footer__link" href="https://www.facebook.com" rel="noopener noreferrer" target="_blank" aria-label="Page Facebook officielle"  >Facebook</a>
                <a className="footer__link" href="/links">Liens</a>
            </nav>
        </footer>

        </>
    )
}

export default Footer;