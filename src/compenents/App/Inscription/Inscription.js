import React, { Component } from 'react';

class Inscription extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Nom: '',
      Prenom: '',
      Pseudo: '',
      AdresseEmail: '',
      ConfirmerAdresseEmail: '',
      MotDePasse: '',
      ConfirmerMotDePasse: '',
      Avatar: '',
      Biographie: '',
      Role: 'abonné', // Par défaut, le rôle est défini sur "abonné"
      emailMatchError: false, // Ajouter des indicateurs d'erreur
      passwordMatchError: false,
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  
    // Réinitialiser les erreurs correspondantes lorsque les champs sont modifiés
    if (name === 'AdresseEmail' || name === 'ConfirmerAdresseEmail') {
      this.setState({ emailMatchError: false });
    }
    if (name === 'MotDePasse' || name === 'ConfirmerMotDePasse') {
      this.setState({ passwordMatchError: false });
    }
  
    this.setState({ [name]: value });
  }
  

  handleFileInputChange = (event) => {
    this.setState({ avatar: event.target.files[0] });
  };


  handleUpload = () => {
    // Vous pouvez envoyer les données d'inscription au backend ici
    // Par exemple, via une requête HTTP POST vers votre API d'inscription
    const formData = new FormData();
    formData.append('Nom', this.state.Nom); // Changer "formData" en "Nom" et faites de même pour d'autres champs
    formData.append('Prenom', this.state.Prenom);
    formData.append('Pseudo', this.state.Pseudo);
    formData.append('AdresseEmail', this.state.AdresseEmail);
    formData.append('ConfirmerAdresseEmail', this.state.ConfirmerAdresseEmail);
    formData.append('MotDePasse', this.state.MotDePasse);
    formData.append('ConfirmerMotDePasse', this.state.ConfirmerMotDePasse);
    formData.append('Avatar', this.state.Avatar);
    formData.append('Biographie', this.state.Biographie);
    formData.append('Role', this.state.Role);

    // Envoyer formData au backend

    // Réinitialiser le champ de fichier après le téléchargement
    this.setState({ Avatar: null });
  };

  handleSubmit = (e) => {
    e.preventDefault(); // Empêcher la soumission du formulaire par défaut
    // Appeler handleUpload pour gérer le téléchargement et l'envoi des données au backend
    this.handleUpload();
  }

  handleInscription = () => {
    let emailMatchError = false;
    let passwordMatchError = false;
  
    // Comparaison des adresses email
    if (this.state.AdresseEmail !== this.state.ConfirmerAdresseEmail) {
      // Les adresses email ne correspondent pas, définir l'erreur à true
      emailMatchError = true;
    }
  
    // Comparaison des mots de passe
    if (this.state.MotDePasse !== this.state.ConfirmerMotDePasse) {
      // Les mots de passe ne correspondent pas, définir l'erreur à true
      passwordMatchError = true;
    }
  
    // Mettre à jour l'état pour refléter les erreurs
    this.setState({
      emailMatchError,
      passwordMatchError,
    });
  
    // Si des erreurs existent, ne pas envoyer les données
    if (emailMatchError || passwordMatchError) {
      return;
    }
  
    // Si les vérifications passent, vous pouvez envoyer les données au backend
    // Effectuez l'envoi des données au serveur ici, par exemple via une requête HTTP POST
  };
  ;
  


  render() {
    return (
      <div className='contact'>
        <h2 className='contact__title'>Inscription</h2>
        <form className='contact' method='POST' onSubmit={this.handleSubmit}>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Nom'>Nom</label>
            <input 
            className='contact__form__label' 
            autoComplete="family-name"  
            type="text" 
            name="Nom" 
            value={this.state.Nom} 
            onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Prenom'>Prenom</label>
            <input 
            className='contact__form__label' 
            autoComplete="given-name" 
            type="text" 
            name="Prenom" 
            value={this.state.Prenom} 
            onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Pseudo'>Pseudo</label>
            <input 
            className='contact__form__label' 
            autoComplete="username" 
            type="text" 
            name="Pseudo" 
            value={this.state.Pseudo} 
            onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='AdresseEmail'>Adresse Email</label>
            <input 
            className='contact__form__label' 
            autoComplete="email" 
            type="text" 
            name="AdresseEmail" 
            value={this.state.AdresseEmail} 
            onChange={this.handleInputChange} />
          </div>
          {this.state.emailMatchError && (
            <div className='contact__error'>Les adresses email ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='ConfirmerAdresseEmail'>Confirmer Adresse Email</label>
            <input 
            className='contact__form__label' 
            autoComplete="email" 
            type="text" 
            name="ConfirmerAdresseEmail" 
            value={this.state.ConfirmerAdresseEmail} 
            onChange={this.handleInputChange} />
          </div>
          {this.state.emailMatchError && (
              <div className='contact__error'>Les adresses email ne correspondent pas.</div>
            )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='MotDePasse'>Mot de Passe</label>
            <input 
            className='contact__form__label' 
            autoComplete="new-password" 
            type="password" 
            name="MotDePasse" 
            value={this.state.MotDePasse} 
            onChange={this.handleInputChange} />
          </div>
          {this.state.passwordMatchError && (
            <div className='contact__error'>Les mots de passe ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='ConfirmerMotDePasse'>Confirmer Mot de Passe</label>
            <input 
            className='contact__form__label' 
            autoComplete="new-password" 
            type="password" 
            name="ConfirmerMotDePasse" 
            value={this.state.ConfirmerMotDePasse} 
            onChange={this.handleInputChange} />
          </div>
          {this.state.passwordMatchError && (
            <div className='contact__error'>Les mots de passe ne correspondent pas.</div>
          )}
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Avatar'>Avatar</label>
            <input
              className='contact__form__label'
              type="file"
              name="Avatar"
              onChange={this.handleFileInputChange}
            />
            <button className='contact__form__label width' onClick={this.handleUpload}>Télécharger</button>
          </div>
          <div className='contact__form'>
            <label className='contact__form__label' htmlFor='Biographie'>Biographie</label>
            <textarea 
            className='contact__form__label' 
            type='text'
            name="Biographie" 
            value={this.state.Biographie} 
            onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label width'>Rôle</label>
            <select 
            className='contact__form__label width ' 
            name="Role" 
            value={this.state.Role} 
            onChange={this.handleInputChange}>
              <option className='contact__form__label' value="abonné">Abonné</option>
              <option className='contact__form__label' value="éditeur">Éditeur</option>
              <option className='contact__form__label' value="administrateur">Administrateur</option>
            </select>
          </div>
          <button className='contact__form__label width' type='submit' onClick={this.handleInscription}>S'inscrire</button>
        </form>
      </div>
    );
  }
}

export default Inscription;
