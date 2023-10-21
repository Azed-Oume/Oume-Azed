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
      ConfirmerAdresseEmail: '',
      Avatar: '',
      Biographie: '',
      Role: 'abonné', // Par défaut, le rôle est défini sur "abonné"
    };
  }

  handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value });
  }

  handleInscription = () => {
    // Vous pouvez envoyer les données d'inscription au backend ici
    // Par exemple, via une requête HTTP POST vers votre API d'inscription
    const formData = {
      Nom: this.state.Nom,
      Prenom: this.state.Prenom,
      Pseudo: this.state.Pseudo,
      AdresseEmail: this.state.AdresseEmail,
      ConfirmerAdresseEmail: this.state.ConfirmerAdresseEmail,
      MotDePasse: this.state.MotDePasse,
      ConfirmerMotDePasse: this.state.ConfirmerMotDePasse,
      Avatar: this.state.Avatar,
      Biographie: this.state.Biographie,
      Role: this.state.Role,
    };
    // Envoyer formData au backend
  }

  render() {
    return (
      <div className='contact'>
        <h2 className='contact__title'>Inscription</h2>
        <form method='POST' onSubmit={this.handleSubmit}>
          <div className='contact__form'>
            <label className='contact__form__label'>Nom</label>
            <input className='contact__form__label' type="text" name="Nom" value={this.state.Nom} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Prenom</label>
            <input className='contact__form__label' type="text" name="Prenom" value={this.state.Prenom} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Pseudo</label>
            <input className='contact__form__label' type="text" name="Pseudo" value={this.state.Pseudo} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Adresse Email</label>
            <input className='contact__form__label' type="text" name="AdresseEmail" value={this.state.AdresseEmail} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Confirmer Adresse Email</label>
            <input className='contact__form__label' type="text" name="ConfirmerAdresseEmail" value={this.state.ConfirmerAdresseEmail} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Mot de Passe</label>
            <input className='contact__form__label' type="password" name="MotDePasse" value={this.state.MotDePasse} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Confirmer Mot de Passe</label>
            <input className='contact__form__label' type="password" name="MotDePasse" value={this.state.ConfirmerMotDePasse} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Avatar</label>
            <input className='contact__form__label' type="text" name="Avatar" value={this.state.Avatar} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Biographie</label>
            <textarea className='contact__form__label' name="Biographie" value={this.state.Biographie} onChange={this.handleInputChange} />
          </div>
          <div className='contact__form'>
            <label className='contact__form__label'>Rôle</label>
            <select className='contact__form__label' name="Role" value={this.state.Role} onChange={this.handleInputChange}>
              <option value="abonné">Abonné</option>
              <option value="éditeur">Éditeur</option>
              <option value="administrateur">Administrateur</option>
            </select>
          </div>
          <button className='contact__form__label' onClick={this.handleInscription}>S'inscrire</button>
        </form>
      </div>
    );
  }
}

export default Inscription;
