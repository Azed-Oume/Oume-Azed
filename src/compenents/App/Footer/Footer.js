import { Link } from 'react-router-dom';
const Footer = () => {
    return(
        <>
        <footer className="footer">
            <nav className="footer__nav" aria-label="Navigation Secondaire">
                <Link to="/Cgu" className="footer__nav__link link__one" aria-label="page des Conditions générales d'utilisation" >C-G-U</Link>
                <Link to="/Blog" className="footer__nav__link link__two" aria-label="page du blog" >Blog</Link>
                <Link to="https://www.facebook.com" className="footer__nav__link link__three"  rel="noopener noreferrer" target="_blank" aria-label="Page Facebook officielle"  >Facebook</Link>
                <Link to="/Contact" className="footer__nav__link link__four" >Laisser un Commentaire</Link>
            </nav>
            <div className="container">
                <p className="copyright">© Oumessaoud 2023. Tous droits réservés.</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;