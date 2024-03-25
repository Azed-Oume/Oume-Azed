import { Link, useNavigate } from 'react-router-dom';
import  Navbar  from 'react-bootstrap/Navbar';
import logofondnoir from "../../images/logofondnoir.png";
import { useState } from 'react';
import { Nav, Button } from 'react-bootstrap';


const Header = () => {
    const [expanded, setExpanded] = useState(false);
    // Hook pour naviguer programmatically entre les pages
    const navigate = useNavigate();    
    // Utilisation de l'état pour gérer le bouton sélectionné
    const [selectedButton, setSelectedButton] = useState(null);

    const closeMenu = () => {
        setExpanded(false);
    };

      // Fonction pour gérer la déconnexion
  const handleLogout = () => {
    // Supprimez les informations d'authentification de localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("statut");
    // Redirigez l'utilisateur vers la page de connexion 
    navigate("/Connexion");
  };

  const role = localStorage.getItem("role");
  console.log("LE ROLE DE L'ADMIN EST :", role, "LIGNE 31 HEADER.JS" );

    return (
    <>
        <Navbar bg="black" variant="dark" expand="lg" expanded={expanded}>
            <div className="container">
                <Navbar.Brand as={Link} to="/">
                    <img src={logofondnoir} alt="Mon Logo" className="logo-img" style={{ width: "5rem" }} />
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
                        <Nav.Link className='text-rigth' as={Link} to="/Inscription">Inscription</Nav.Link>
                        <Nav.Link className='text-rigth' as={Link} to="/Connexion">Connexion</Nav.Link>
                        <Button
                            variant="danger"
                            className={`m-1 text-white fw-bold ${selectedButton === "Déconnexion" ? "active" : ""}`}
                            block="true"
                            aria-label="Déconnexion"
                            onClick={handleLogout}
                            aria-current={selectedButton === "Déconnexion" ? "page" : null}
                            >
                            Déconnexion
                        </Button>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
           
    </>
    
    );
}

export default Header;
