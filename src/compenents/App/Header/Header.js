import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import monLogo2 from '../../images/my_logo_fondnoir.png';
import { useState } from 'react';

const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => {
        setExpanded(false);
    };

    return (
        <Navbar bg="dark" variant="dark" expand="lg" expanded={expanded}>
            <div className="container">
                <Navbar.Brand as={Link} to="/">
                    <img src={monLogo2} alt="Mon Logo" className="logo-img" style={{ width: "5rem" }} />
                </Navbar.Brand>
                <Navbar.Toggle
                    onClick={() => setExpanded(!expanded)}
                    aria-controls="navbarNav"
                />
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto fw-bold " onClick={closeMenu}>
                        <Nav.Link className='text-rigth' as={Link} to="/">Accueil</Nav.Link>
                        <Nav.Link className='text-rigth' as={Link} to="/Recherche">Rechercher Votre Ville</Nav.Link>
                        <Nav.Link className='text-rigth' as={Link} to="/Conception">Conception</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
                <Navbar.Collapse id="navbarNav">
                    <Nav className="ml-auto fw-bold text-center" onClick={closeMenu}>
                        <Nav.Link className='text-rigth' as={Link} to="/Connexion">Connexion</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
