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
    <div className="container bg-secondary mb-4 p-4 rounded">
      <h2 className="h2 text-center bg-secondary text-white fw-bold mb-2">Connexion</h2>
      <form className="row mb-2" method="POST" onSubmit={handleSubmit}>
        <div className="mb-3 col-md-6">
          <label 
          className="form-control bg-secondary text-white fw-bold mb-2"
          htmlFor="Pseudo">
            Pseudo
          </label>
          <input
            className="form-control"
            autoComplete="username"
            type="text"
            name="Pseudo"
            value={state.Pseudo}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3 col-md-6">
          <label 
          className="form-control bg-secondary text-white fw-bold mb-2"
          htmlFor="MotDePasse">
            Mot de Passe
          </label>
          <input
            className="form-control"
            autoComplete="current-password"
            type="password"
            name="MotDePasse"
            value={state.MotDePasse}
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-3">
          {state.authError && (
            <div className="text-danger">Pseudo ou mot de passe incorrect.</div>
          )}
        </div>
        <div className="mb-3">
          <button className="btn btn-primary" type="submit">
            Se connecter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Connexion;
