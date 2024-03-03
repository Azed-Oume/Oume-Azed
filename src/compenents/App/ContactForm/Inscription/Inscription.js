import React, { useState } from 'react';

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    societe:'',
    pseudo: '',
    adresse_email: '',
    ConfirmerAdresseEmail: '',
    ConfirmerMotDePasse: '',
    mot_de_passe: '',
    rue:'',
    code_postal: '',
    ville: '',
    avatar: '',
    biographie: '',
    role: '',
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
    <>
    <div className="container graylogo col-md-10 mt-4 mb-4 rounded-4 pt-1">
    <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Formulaire d'Inscription :</h2>
      <form className="row mb-2 mt-4 mx-auto" method="POST" onSubmit={handleSubmit}>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="nom"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Nom</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="family-name"
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="prenom"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Prenom</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="societe"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Société</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="societe"
            value={formData.societe}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="pseudo"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Pseudo</label>
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
          <label 
          htmlFor="adresse_email"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Adresse Email</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="email"
            type="text"
            name="adress_email"
            value={formData.adresse_email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="ConfirmerAdresseEmail"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Confirmer Adresse Email</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="email"
            type="text"
            name="ConfirmerAdresseEmail"
            value={formData.ConfirmerAdresseEmail}
            onChange={handleInputChange}
            required
          />
        </div>
        {emailMatchError && (
          <div className="col-md-12 fs-4 fw-bold text-dark mb-2">
            Les adresses email ne correspondent pas.
          </div>
        )}
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="mot_de_passe"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Mot de Passe</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="new-password"
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="col-md-6 mx-auto">
          <label 
          htmlFor="ConfirmerMotDePasse"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Confirmer Mot de Passe</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="new-password"
            type="password"
            name="ConfirmerMotDePasse"
            value={formData.ConfirmerMotDePasse}
            onChange={handleInputChange}
            required
          />
        </div>
        {passwordMatchError && (
          <div className="col-md-12 fs-4 fw-bold text-dark mb-2">
            Les mots de passe ne correspondent pas.
          </div>
        )}
        <div className="col-md-4 mx-auto">
          <label 
          htmlFor="rue"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Rue</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="rue"
            value={formData.rue}
            onChange={handleInputChange}
          />
        </div><div className="col-md-4 mx-auto">
          <label 
          htmlFor="code_postal"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Code-postal</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="code_postal"
            value={formData.code_postal}
            onChange={handleInputChange}
          />
        </div><div className="col-md-4 mx-auto">
          <label 
          htmlFor="ville"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Ville</label>
          <input
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4 mx-auto">
          <label 
          htmlFor="avatar"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Avatar</label>
          <input
            className="form-control-file col-md-12 mb-2 mx-auto"
            type="file"
            name="avatar"
            onChange={handleFileInputChange}
            accept="image/*"
          />
        
        {formData.Avatar && (
          <div className="col-md-4 mx-auto">
            <img
              className="img-thumbnail mb-2 mx-auto"
              style={{ width: '100px', height: '100px', borderRadius:'50px' }}
              src={URL.createObjectURL(formData.avatar)}
              alt="Aperçu de l'avatar"
            />
          </div>
        )}
        </div>
        <div className="col-md-4 mx-auto">
          <label 
          htmlFor="biographie"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Biographie : dites nous quelques mots sur vous !</label>
          <textarea
            className="form-control mb-2 mx-auto"
            type="text"
            name="biographie"
            value={formData.biographie}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-4 mx-auto">
          <label
          htmlFor='role'
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Rôle</label>
          <select
            className="form-select mb-2 mx-auto"
            name="role"
            value={formData.role}
            onChange={handleInputChange}
            required
          >
            <option value="abonné">Abonné</option>
            <option value="éditeur">Éditeur</option>
            <option value="administrateur">Administrateur</option>
            <option value="client">Client</option>
            <option value="currieux">Curieux</option>
          </select>
        </div>
        <div className="col-md-12 mx-auto">
          <button className="btn btn-primary mb-2 mx-auto" type="submit" onClick={handleInscription}>
            S'inscrire
          </button>
        </div>
      </form>
    </div>
    </>
  );
  
  
  }


export default Inscription;
