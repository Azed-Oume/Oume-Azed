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
      <div className='contact'>
        <h2 className='contact__title'>Inscription</h2>
        <form className='contact' method='POST' onSubmit={handleSubmit}>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Nom'>Nom</label>
            <input 
            className='contact__form__label' 
            autoComplete="family-name"  
            type="text" 
            name="Nom" 
            value={formData.Nom} 
            onChange={handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Prenom'>Prenom</label>
            <input 
            className='contact__form__label' 
            autoComplete="given-name" 
            type="text" 
            name="Prenom" 
            value={formData.Prenom} 
            onChange={handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Pseudo'>Pseudo</label>
            <input 
            className='contact__form__label' 
            autoComplete="username" 
            type="text" 
            name="Pseudo" 
            value={formData.Pseudo} 
            onChange={handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='AdresseEmail'>Adresse Email</label>
            <input 
            className='contact__form__label' 
            autoComplete="email" 
            type="text" 
            name="AdresseEmail" 
            value={formData.AdresseEmail} 
            onChange={handleInputChange} />
          </div>
          {emailMatchError && (
            <div className='contact__error comparaisontest'>Les adresses email ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='ConfirmerAdresseEmail'>Confirmer Adresse Email</label>
            <input 
            className='contact__form__label' 
            autoComplete="email" 
            type="text" 
            name="ConfirmerAdresseEmail" 
            value={formData.ConfirmerAdresseEmail} 
            onChange={handleInputChange} />
          </div>
          {emailMatchError && (
              <div className='contact__error  comparaisontest'>Les adresses email ne correspondent pas.</div>
            )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='MotDePasse'>Mot de Passe</label>
            <input 
            className='contact__form__label' 
            autoComplete="new-password" 
            type="password" 
            name="MotDePasse" 
            value={formData.MotDePasse} 
            onChange={handleInputChange} />
          </div>
          {passwordMatchError && (
            <div className='contact__error comparaisontest'>Les mots de passe ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='ConfirmerMotDePasse'>Confirmer Mot de Passe</label>
            <input 
            className='contact__form__label' 
            autoComplete="new-password" 
            type="password" 
            name="ConfirmerMotDePasse" 
            value={formData.ConfirmerMotDePasse} 
            onChange={handleInputChange} />
          </div>
          {passwordMatchError && (
            <div className='contact__error comparaisontest'>Les mots de passe ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Avatar'>Avatar</label>
            <input
              className='contact__form__label'
              type="file"
              name="Avatar"
              onChange={handleFileInputChange}
              accept="image/*" // Limiter l'acceptation aux fichiers image
            />
            {formData.Avatar && (
              <div className='contact__file-preview img'>
                <img className='img'  src={URL.createObjectURL(formData.Avatar)} alt="Aperçu de l'avatar" />
                <span>{formData.Avatar.name}</span>
              </div>
            )}
            <button className='contact__form__label width' onClick={handleUpload}>Télécharger</button>
          </div>

          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Biographie'>Biographie</label>
            <textarea 
            className='contact__form__label' 
            type='text'
            name="Biographie" 
            value={formData.Biographie} 
            onChange={handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label width'>Rôle</label>
            <select 
            className='contact__form__label width ' 
            name="Role" 
            value={formData.Role} 
            onChange={handleInputChange}>
              <option className='contact__form__label' value="abonné">Abonné</option>
              <option className='contact__form__label' value="éditeur">Éditeur</option>
              <option className='contact__form__label' value="administrateur">Administrateur</option>
            </select>
          </div>
          <button className='contact__form__label width' type='submit' onClick={handleInscription}>S'inscrire</button>
        </form>
      </div>
    );
  }


export default Inscription;
