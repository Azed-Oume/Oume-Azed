import React, { useState } from 'react';
import AuthService from '../../AuthService/AuthService.js';
import { useNavigate } from 'react-router-dom';

function ComentaireForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pseudo: '',
    adresse_email: '',
    article_associe: '',
    titre: '',
    contenu: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    AuthService.checkUserRole()
    .then((userRole) => {
      if (userRole === 'abonné' || userRole === 'éditeur') {
        // L'utilisateur a le rôle approprié pour ajouter un commentaire
        // Envoie le commentaire au serveur
        submitComment(formData)
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
    <div className="container graylogo col-md-10 mt-4 mb-4 p-4 rounded-4">
      <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Rédiger votre commentaire</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label text-white" htmlFor="pseudo">
            Pseudo :
          </label>
          <input
            className="form-control"
            autoComplete="family-name"
            type="text"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white" htmlFor="adresse_email">
            Email :
          </label>
          <input
            className="form-control"
            autoComplete="email"
            type="email"
            name="adresse_email"
            value={formData.adresse_email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white" htmlFor="titre">
            Sujet :
          </label>
          <input
            className="form-control"
            type="text"
            id="titre"
            name="titre"
            value={formData.titre}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label text-white" htmlFor="contenu">
            Texte :
          </label>
          <textarea
            className="form-control"
            id="contenu"
            name="contenu"
            value={formData.contenu}
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  );
}

export default ComentaireForm;
