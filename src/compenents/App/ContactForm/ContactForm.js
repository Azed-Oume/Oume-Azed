import React, { useState } from 'react';
import AuthService from '../AuthService/AuthService.js'; // Assurez-vous de spécifier le bon chemin d'accès
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    redirectToInscription: false, // État pour gérer la redirection
  });

  const checkInscriptionInBDD = () => {
    // Effectuez ici votre vérification dans la BDD (abonné ou éditeur)
    // Si la vérification échoue, mettez à jour l'état redirectToInscription.

    // Par exemple, si vous avez un service d'authentification,
    // vous pouvez vérifier le rôle de l'utilisateur à partir de la BDD.

    AuthService.checkUserRole() // Exemple hypothétique
      .then((userRole) => {
        if (userRole !== 'abonné' && userRole !== 'éditeur') {
          console.log("Vous n'etes pas inscrit !")
          alert("Vous devez vous inscrire pour laisser un commentaire")
          navigate("/Inscription");
          
        }
      })
      .catch((error) => {
        console.error('Erreur de vérification : ', error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkInscriptionInBDD();
    // Vous pouvez ajouter votre logique de traitement du formulaire ici
    // Par exemple, envoyer les données au serveur ou effectuer une action spécifique.
    console.log(state);
  };

  return (
    <div className='contact'>
      <h2 className='contact__title'>Contactez-nous</h2>
      <form onSubmit={handleSubmit}>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="name" >Nom :</label>
          <input
            className='contact__form__label'
            autoComplete="family-name"
            type="text"
            id="name"
            name="name"
            value={state.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="email">Email :</label>
          <input
            className='contact__form__label'
            autoComplete='email'
            type="email"
            id="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="subject">Sujet :</label>
          <input
            className='contact__form__label'
            type="text"
            id="subject"
            name="subject"
            value={state.subject}
            onChange={handleChange}
            required
          />
        </div>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor="message">Message :</label>
          <textarea
            className='contact__form__label'
            id="message"
            name="message"
            value={state.message}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className='contact__form'>
          <button className='contact__form__label' type="submit">Envoyer</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
