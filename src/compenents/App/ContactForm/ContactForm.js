import React, { useState } from 'react';
import AuthService from '../AuthService/AuthService.js';
import { useNavigate } from 'react-router-dom';

function ContactForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.checkUserRole()
    .then((userRole) => {
      if (userRole === 'abonné' || userRole === 'éditeur') {
        // L'utilisateur a le rôle approprié pour ajouter un commentaire
        // Envoie le commentaire au serveur
        submitComment(state)
          .then((response) => {
            console.log('Commentaire ajouté avec succès :', response);
            // Mettez à jour l'interface utilisateur pour afficher le commentaire
          })
          .catch((error) => {
            console.error('Erreur lors de l\'ajout du commentaire :', error);
            // Gérez l'erreur et informez l'utilisateur
          });
      } else {
         // Affichez un message d'erreur convivial à l'utilisateur
        alert("Vous devez vous inscrire pour laisser un commentaire.");
        // Redirigez l'utilisateur vers la page d'inscription s'il n'a pas le rôle approprié
        navigate('/Inscription');
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la vérification du rôle :', error);
      // Gérez l'erreur et informez l'utilisateur
    });
};

  const submitComment = (commentData) => {
    // Vous devez implémenter cette fonction pour envoyer les données au serveur
    // en utilisant des appels à une API côté serveur
    // et retourner une promesse pour gérer la réponse
    return fetch('/api/comment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Erreur lors de l\'ajout du commentaire');
        }
        return response.json();
      });
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
