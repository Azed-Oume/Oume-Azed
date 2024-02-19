import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logofondblanc from "../../images/logofondblanc.png";
import { useState } from 'react';

const Footer = () => {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => {
        setExpanded(false);
    };

    return (
        <>
        <footer className="footer mt-5  bg-white ">
            <Navbar  variant="black" expand="lg" expanded={expanded}>
                <div className="container">
                    <Navbar.Brand as={Link} to="/">
                        <img src={logofondblanc} alt="Mon Logo" className="logo-img" style={{ width: "5rem" }} />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        onClick={() => setExpanded(!expanded)}
                        aria-controls="navbarNav"
                    />
                    <Navbar.Collapse id="navbarNav">
                        <Nav className="ml-auto fw-bold" onClick={closeMenu}>
                            <Nav.Link as={Link} to="/Cgu" className="text-right" aria-label="Page des Conditions générales d'utilisation">C-G-U</Nav.Link>
                            <Nav.Link as={Link} to="/Blog" className="text-right" aria-label="Page du blog">Blog</Nav.Link>
                            <Nav.Link href="https://www.facebook.com" className="text-right" rel="noopener noreferrer" target="_blank" aria-label="Page Facebook officielle">Facebook</Nav.Link>
                            <Nav.Link as={Link} to="/Contact" className="text-right" aria-label="Page de contact">Laisser un Commentaire</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
            <div className="container ">
                <p className="text-center text-black  mb-3">© Oumessaoud 2023. Tous droits réservés.</p>
            </div>
        </footer>
        </>
    );
}

export default Footer;
