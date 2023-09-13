import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <>
        <header className="header">
            <nav className="header__nav">
                <Link to="/" className="header__nav__link link__one" aria-label="Page d'accueil">Accueil</Link>
                <Link to="/Recherche" className="header__nav__link link__two" aria-label="Page de recherche">Recherche Votre Ville</Link>
                <Link to="/Conception" className="header__nav__link link__three"  aria-label="Page de conception">Conception</Link>
            </nav>
        </header>
        </>
    )
}

export default Header;