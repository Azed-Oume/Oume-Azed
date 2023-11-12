import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    Nom: '',
    Prenom: '',
    Pseudo: '',
    AdresseEmail: '',
    ConfirmerAdresseEmail: '',
    MotDePasse: '',
    ConfirmerMotDePasse: '',
    Avatar: '',
    Biographie: '',
    Role: 'abonné',
  });

  const [emailMatchError, setEmailMatchError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });

    // Réinitialiser les erreurs correspondantes lorsque les champs sont modifiés
    if (name === 'AdresseEmail' || name === 'ConfirmerAdresseEmail') {
      setEmailMatchError(false);
    }
    if (name === 'MotDePasse' || name === 'ConfirmerMotDePasse') {
      setPasswordMatchError(false);
    }
  };

  const handleFileInputChange = async (event) => {
    setFormData({ ...formData, Avatar: event.target.files[0] });
    const file = event.target.files[0];
    if (file && file.size > 5 * 1024 * 1024) {
      alert("Le fichier est trop volumineux. Veuillez sélectionner un fichier de moins de 5 Mo.");
      // Utilisez setTimeout pour réinitialiser l'input de fichier de manière asynchrone
      setTimeout(() => {
        event.target.value = ''; // Réinitialise l'input de fichier
      }, 0);
    } else {
      // Fichier valide, effectuez le traitement ici
    }
  };
  

  const handleUpload = () => {
    // Gérer le téléchargement et l'envoi des données au backend
    // ...
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpload();
  };

  const handleInscription = () => {
    const { AdresseEmail, ConfirmerAdresseEmail, MotDePasse, ConfirmerMotDePasse } = formData;
    const emailMatchError = AdresseEmail !== ConfirmerAdresseEmail;
    const passwordMatchError = MotDePasse !== ConfirmerMotDePasse;

    setEmailMatchError(emailMatchError);
    setPasswordMatchError(passwordMatchError);

    if (emailMatchError || passwordMatchError) {
      return;
    }

    // Envoyer les données au backend
    // ...
  };

  
  return (
    <div className="container bg-secondary mt-4 pt-1">
      <form className="row mb-2 mt-4" method="POST" onSubmit={handleSubmit}>
        <div className="col-md-4">
          <label 
          htmlFor="Nom"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Nom</label>
          <input
            className="form-control mb-2"
            autoComplete="family-name"
            type="text"
            name="Nom"
            value={formData.Nom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label 
          htmlFor="Prenom"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Prenom</label>
          <input
            className="form-control mb-2"
            autoComplete="given-name"
            type="text"
            name="Prenom"
            value={formData.Prenom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-4">
          <label 
          htmlFor="Pseudo"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Pseudo</label>
          <input
            className="form-control mb-2"
            autoComplete="username"
            type="text"
            name="Pseudo"
            value={formData.Pseudo}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label 
          htmlFor="AdresseEmail"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Adresse Email</label>
          <input
            className="form-control mb-2"
            autoComplete="email"
            type="text"
            name="AdresseEmail"
            value={formData.AdresseEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label 
          htmlFor="ConfirmerAdresseEmail"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Confirmer Adresse Email</label>
          <input
            className="form-control mb-2"
            autoComplete="email"
            type="text"
            name="ConfirmerAdresseEmail"
            value={formData.ConfirmerAdresseEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        {emailMatchError && (
          <div className="col-md-12 text-danger mb-2">
            Les adresses email ne correspondent pas.
          </div>
        )}
        <div className="col-md-6">
          <label 
          htmlFor="MotDePasse"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Mot de Passe</label>
          <input
            className="form-control mb-2"
            autoComplete="new-password"
            type="password"
            name="MotDePasse"
            value={formData.MotDePasse}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6">
          <label 
          htmlFor="ConfirmerMotDePasse"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Confirmer Mot de Passe</label>
          <input
            className="form-control mb-2"
            autoComplete="new-password"
            type="password"
            name="ConfirmerMotDePasse"
            value={formData.ConfirmerMotDePasse}
            onChange={handleInputChange}
            required
          />
        </div>
        {passwordMatchError && (
          <div className="col-md-12 text-danger mb-2">
            Les mots de passe ne correspondent pas.
          </div>
        )}
        <div className="col-md-6">
          <label 
          htmlFor="Avatar"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Avatar</label>
          <input
            className="form-control-file mb-2"
            type="file"
            name="Avatar"
            onChange={handleFileInputChange}
            accept="image/*"
          />
        </div>
        {formData.Avatar && (
          <div className="col-md-6">
            <img
              className="img-thumbnail mb-2"
              style={{ width: '100px', height: '100px', borderRadius:'50px' }}
              src={URL.createObjectURL(formData.Avatar)}
              alt="Aperçu de l'avatar"
            />
          </div>
        )}
        <div className="col-md-6">
          <label 
          htmlFor="Biographie"
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Biographie</label>
          <textarea
            className="form-control mb-2"
            type="text"
            name="Biographie"
            value={formData.Biographie}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6">
          <label
          className="form-control bg-secondary text-white fw-bold mb-2"
          >Rôle</label>
          <select
            className="form-select mb-2"
            name="Role"
            value={formData.Role}
            onChange={handleInputChange}
            required
          >
            <option value="abonné">Abonné</option>
            <option value="éditeur">Éditeur</option>
            <option value="administrateur">Administrateur</option>
          </select>
        </div>
        <div className="col-md-12">
          <button className="btn btn-primary mb-2" type="submit" onClick={handleInscription}>
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
  
  
  }


export default Inscription;
