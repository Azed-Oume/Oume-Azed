import '../../../styles/headerfooter.css'

const Header = () => {
    return(
        <>
        <header className="header">
            <nav className="header__nav">
                <a className="header__nav__link" href="/" aria-label="Page d'accueil">Accueil</a>
                <a className="header__nav__link" href="/recherche" aria-label="Page de recherche">Recherche Votre Ville</a>
                <a className="header__nav__link" href="/conception" aria-label="Page de conception">Conception</a>
            </nav>
        </header>
        </>
    )
}

export default Header;