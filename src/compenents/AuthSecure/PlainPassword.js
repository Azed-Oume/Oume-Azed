import React from 'react';
import { hashPassword, verifyPassword } from './passwordUtils'; // Assurez-vous d'importer correctement le fichier

class MonComposant extends React.Component {
  async handleInscription() {
    const plainPassword = 'motdepasse'; // Récupérez le mot de passe de votre formulaire
    const hashedPassword = await hashPassword(plainPassword);

    // Enregistrez le hachage dans la base de données
    // Ici, vous pouvez envoyer le hachage au backend pour l'enregistrement
  }

  async handleConnexion() {
    const storedHashedPassword = '...'; // Récupérez le hachage stocké dans la base de données
    const loginPassword = 'motdepasse'; // Mot de passe entré par l'utilisateur

    const isPasswordCorrect = await verifyPassword(loginPassword, storedHashedPassword);

    if (isPasswordCorrect) {
      // Mot de passe correct, connectez l'utilisateur
    } else {
      // Mot de passe incorrect, affichez un message d'erreur
    }
  }

  render() {
    return ( // Votre composant et formulaire ici
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
            <div className='contact__error text-red'>Les adresses email ne correspondent pas.</div>
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

export default MonComposant;
