import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import  Header  from "./compenents/App/Header/Header.js";
import  Footer  from "./compenents/App/Footer/Footer.js";
import { Acceuil, Conception, Blog, Cgu } from "./compenents/App/Router/Router.js";
import CardMaps from "./compenents/App/CardMaps/CardMaps.js";
import ScrollToTopButton  from "./compenents/App/ScrollToTopButton/ScrollToTopButton.js";
import App from './compenents/App/App';
import './styles/reset.css';
import './styles/headerFooter.css'
import './styles/formSearch.css';
import './styles/router.css';
import './styles/card.css';
import './styles/cardMaps.css';
import './styles/ScrollToTopButton.css';
import './styles/contactForm.css';
import ContactForm from "./compenents/App/ContactForm/ContactForm.js";
import Inscription from "./compenents/App/ContactForm/Inscription/Inscription.js";
import ArticleForm from "./compenents/App/ContactForm/ArticleForm.js";
import Connexion from "./compenents/App/ContactForm/Inscription/Connexion.js";




const container = document.getElementById('app');
const root = createRoot(container);
root.render(
<BrowserRouter>
    <Header />
    <CardMaps />
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




