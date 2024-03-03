import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    pseudo: '',
    adresse_email: '',
    sujet: '',
    message: '',
    role: '', // Ajout de l'état pour le rôle
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const handleUpload = () => {
    // Gérer le téléchargement et l'envoi des données au backend
    // ...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload();
    // Réinitialiser le formulaire après la soumission si nécessaire
    // setFormData({
    //   pseudo: '',
    //   adresse_email: '',
    //   sujet: '',
    //   message: '',
    //   role: '',
    // });
  };

  const handleContact = () => {
    // Implémentez la logique pour gérer la soumission du formulaire de contact
    // Par exemple, vous pouvez appeler une fonction pour envoyer les données au backend ici
    console.log('Formulaire soumis avec succès !');
    // Réinitialiser le formulaire après la soumission
    setFormData({
      pseudo: '',
      adresse_email: '',
      sujet: '',
      message: '',
      role: '',
    });
  };

  return (
    <>
      <div className="container graylogo col-md-10 mt-4 mb-4 rounded-4 pt-1">
        <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Formulaire de Contact :</h2>
        <form className="row mb-2 mt-4 mx-auto" method="POST" onSubmit={handleSubmit}>
          <div className="col-md-6 mx-auto">
            <label htmlFor="pseudo" className="form-control bg-secondary mx-auto text-white fw-bold mb-2">Pseudo</label>
            <input
              className="form-control mb-2 mx-auto"
              autoComplete="username"
              type="text"
              name="pseudo"
              value={formData.pseudo}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6 mx-auto">
            <label htmlFor="adresse_email" className="form-control bg-secondary mx-auto text-white fw-bold mb-2">Adresse Email</label>
            <input
              className="form-control mb-2 mx-auto"
              autoComplete="email"
              type="text"
              name="adresse_email" 
              value={formData.adresse_email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="col-md-6 mx-auto">
            <label htmlFor='role' className="form-control bg-secondary mx-auto text-white fw-bold mb-2">Rôle</label>
            <select
              className="form-select mb-2 mx-auto"
              name="role"
              value={formData.role}
              onChange={handleInputChange}
              required
            >
              <option value="">Sélectionnez un rôle</option> {/* Ajout d'une option vide pour la sélection par défaut */}
              <option value="abonné">Création d'un Site</option>
              <option value="éditeur">Création d'une Base De Donnée</option>
              <option value="administrateur">Gestion de la Partie FRONT</option>
              <option value="client">Gestion de la partie BACK</option>
              <option value="curieux">Les Techno Utilisées</option> {/* Correction de la faute de frappe ici */}
            </select>
          </div>
          <div className="col-md-6 mx-auto">
            <label className="form-control bg-secondary mx-auto text-white fw-bold mb-2" htmlFor="contenu">Texte :</label>
            <textarea
              className="form-control"
              id="contenu"
              name="contenu"
              value={formData.contenu}
              onChange={handleInputChange}
              rows="4"
              required
            ></textarea>
          </div>
          <div className="col-md-12 mx-auto">
            <button className="btn btn-primary mb-2 mx-auto" type="submit">
              S'inscrire
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
