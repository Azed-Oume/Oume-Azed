import React, { useState } from 'react';
import validator from 'validator';
import bcrypt from 'bcryptjs'; // Utilisation de bcrypt pour hacher le mot de passe

const Connexion = () => {
  const [state, setState] = useState({
    Pseudo: '',
    MotDePasse: '',
    authError: false,
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { Pseudo, MotDePasse } = state;

    // Validation des données d'entrée avec `validator`
    if (!validator.isAlphanumeric(Pseudo)) {
      // Pseudo non alphanumérique
      setState({ ...state, authError: true });
      return;
    }

    // Hachage du mot de passe avec bcrypt
    const saltRounds = 10;
    bcrypt.hash(MotDePasse, saltRounds, (err, hashedPassword) => {
      if (err) {
        // Erreur de hachage
        setState({ ...state, authError: true });
        return;
      }

      // Ici, vous pouvez envoyer le pseudo et le mot de passe haché au backend
      // Pour l'exemple, affichons simplement le mot de passe haché côté client
      console.log('Mot de passe haché :', hashedPassword);
    });
  };

  return (
    <div className='connexion'>
      <h2 className='connexion__title'>Connexion</h2>
      <form className='contact' method='POST' onSubmit={handleSubmit}>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor='Pseudo'>Pseudo</label>
          <input
            className='contact__form__label'
            autoComplete="username"
            type="text"
            name="Pseudo"
            value={state.Pseudo}
            onChange={handleInputChange}
          />
        </div>
        <div className='contact__form'>
          <label className='contact__form__label' htmlFor='MotDePasse'>Mot de Passe</label>
          <input
            className='contact__form__label'
            autoComplete="current-password"
            type="password"
            name="MotDePasse"
            value={state.MotDePasse}
            onChange={handleInputChange}
          />
        </div>
        <div className='contact__form'>
            {state.authError && (
            <div className='connexion__error comparaisontest'>Pseudo ou mot de passe incorrect.</div>
            )}
        </div>
        <div className='contact__form'>
            <button className='contact__form__label width' type='submit'>Se connecter</button>
        </div>
      </form>
    </div>
  );
};

export default Connexion;
