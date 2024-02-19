import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import  Header  from "./compenents/App/Header/Header.js";
import  Footer  from "./compenents/App/Footer/Footer.js";
import { Acceuil, RechecheMaVille, Conception, Blog, Cgu } from "./compenents/App/Router/Router.js";
import CardMaps from "./compenents/App/CardMaps/CardMaps.js";
import ScrollToTopButton from "./compenents/App/ScrollToTopButton/ScrollToTopButton.js";
import App from './compenents/App/App';
// import waveTextAnimation from "wave-text-animation";


import 'bootstrap/dist/css/bootstrap.min.css'; // Inclure le fichier CSS de Bootstrap
import 'bootstrap/dist/js/bootstrap.min.js'; // Inclure le fichier JavaScript de Bootstrap
import '../src/styles/styles_perso.css'; // Inclure le fichier


import './styles/reset.css';
import './compenents/App/Animated/animated.css'; // Inclure le fichier

import ContactForm from "./compenents/App/ContactForm/Inscription/ContactForm.js";
import Inscription from "./compenents/App/ContactForm/Inscription/Inscription.js";
import ArticleForm from "./compenents/App/ContactForm/ArticleForm.js";
import Connexion from "./compenents/App/ContactForm/Inscription/Connexion.js";
import Star from "./compenents/App/Animated/Star.js";




const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <Header />
    <CardMaps />
    <Star />
        <Routes>
            <Route path="/Inscription" element={<Inscription/>}/>
            <Route path="/Connexion" element={<Connexion/>}/>
            <Route path="/Contact" element={<ContactForm />} />
            <Route path="/" element={<Acceuil />} />
            <Route path="/Recherche" element={<App />} />
            <Route path="/Conception" element={<Conception />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Cgu" element={<Cgu />} />
            <Route path="/form" element={<ArticleForm/>} />
        </Routes>
        <ScrollToTopButton />
    <Footer />
</BrowserRouter> 
);




