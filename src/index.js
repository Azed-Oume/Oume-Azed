
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
// import waveTextAnimation from "wave-text-animation";

// import des Fichiers bootstrap et des fichier reset 
import './styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css'; // Inclure le fichier CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'; // Inclure le fichier JavaScript de Bootstrap
import '../src/styles/styles_perso.css'; // Inclure le fichier


import './compenents/App/Animated/animated.css'; // Inclure le fichier
// envoie des composant en pérmanence //
import  Header  from "./compenents/App/Header/Header.js";
import CardMaps from "./compenents/App/CardMaps/CardMaps.js";
// import Star from "./compenents/App/Animated/Star.js";
import PrivateRoute from "./compenents/PrivateRoute/PrivateRoute.js";
// Envoie des routes "Dynamique"//
import Inscription from "./compenents/App/ContactForm/Inscription/Inscription.js";
import Connexion from "./compenents/App/ContactForm/Inscription/Connexion.js";
import ComentaireForm from "./compenents/App/ContactForm/Inscription/ComentaireForm.js";
import Contact from "./compenents/App/ContactForm/Inscription/Contact.js";
import { Acceuil, Conception, Blog, Cgu } from "./compenents/App/Router/Router.js";
import App from './compenents/App/App';
import ArticleForm from "./compenents/App/ContactForm/ArticleForm.js";
import Forbiden from './compenents/PrivateRoute/Forbiden.js';
// envoie des composant //
import ScrollToTopButton from "./compenents/App/ScrollToTopButton/ScrollToTopButton.js";
import WhatsAppButton from "./compenents/AuthSecure/WatsAppButton.js";
import Footer  from "./compenents/App/Footer/Footer.js";

function detectLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  return userLang.startsWith('fr') ? 'fr' : 'en';
}
const detectedLang = detectLanguage();


const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <Header />
    <CardMaps />
    {/* <Forbiden /> */}
    {/* <Star /> */}
        <Routes>
        <Route path="/Inscription" element={<Inscription/>}/>
        <Route path="/Connexion" element={<Connexion/>}/>
        <Route path="/Comentaire" element={<PrivateRoute><ComentaireForm /></PrivateRoute>} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<PrivateRoute><Acceuil /></PrivateRoute>} />
        <Route path="/Conception" element={<PrivateRoute><Conception /></PrivateRoute>} />
        <Route path="/Blog" element={<PrivateRoute><Blog /></PrivateRoute>} />
        <Route path="/Cgu" element={<PrivateRoute><Cgu /></PrivateRoute>} />
        <Route path="/Recherche" element={<PrivateRoute><App /></PrivateRoute>} />
        <Route path="/form" element={<PrivateRoute><ArticleForm/></PrivateRoute>} />
        {/* <Route path="/forbiden" element={<Forbiden/>} /> */}
        </Routes>
        <ScrollToTopButton />
        <WhatsAppButton phoneNumber="+33768221452" />
    <Footer />
</BrowserRouter> 
);
