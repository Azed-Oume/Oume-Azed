import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap';

// Fonction de validation du mot de passe
const validatePassword = (password, options) => {
  // Vérifier si le mot de passe est défini et est une chaîne de caractères
  if (typeof password !== 'string' || !password.length) return false;
  // Vérification de la longueur minimale
  if (password.length < options.minLength) return false;

  // Vérification du nombre minimum de caractères minuscules
  const lowercaseRegex = /[a-z]/;
  if (!lowercaseRegex.test(password)) return false;

  // Vérification du nombre minimum de caractères majuscules
  const uppercaseRegex = /[A-Z]/;
  if (!uppercaseRegex.test(password)) return false;

  // Vérification du nombre minimum de chiffres
  const numbersRegex = /[0-9]/;
  if (!numbersRegex.test(password)) return false;

  // Vérification du nombre minimum de symboles
  const symbolsRegex = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  if (!symbolsRegex.test(password)) return false;

  return true;
};

const Inscription = () => {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    societe:'',
    pseudo: '',
    email: '',
    ConfirmerEmail: '',
    mot_de_passe: '',
    ConfirmerMot_dePasse: '',
    code_role: '',
    rue:'',
    ville: '',
    code_postal: '',
    // avatar: '',
    biographie: '',

  });

  const [emailMatchError, setEmailMatchError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);

  const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({ ...formData, [name]: value });
    if (name === 'role') {
      // Mapper la valeur sélectionnée vers le champ code_role
      setFormData({ ...formData, code_role: value });
    } else {
      // Pour les autres champs, mettre à jour normalement
      setFormData({ ...formData, [name]: value });
    }

    // Réinitialiser les erreurs correspondantes lorsque les champs sont modifiés
    if (name === 'AdresseEmail' || name === 'ConfirmerAdresseEmail') {
      setEmailMatchError(false);
    }
    if (name === 'MotDePasse' || name === 'ConfirmerMotDePasse') {
      setPasswordMatchError(false);
    }
  };

  const handleFileInputChange = async (event) => {
    setFormData({ ...formData, avatar: event.target.files[0] });
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

  const handleInscription = async () => {
    const { email, ConfirmerEmail, mot_de_passe, ConfirmerMot_dePasse } = formData;
  const emailMatchError = email !== ConfirmerEmail;
  const passwordMatchError = mot_de_passe !== ConfirmerMot_dePasse;

  setEmailMatchError(emailMatchError);
  setPasswordMatchError(passwordMatchError);

  if (emailMatchError || passwordMatchError) {
    return;
  }

  // Vérification côté client du mot de passe
  const isPasswordValid = validatePassword(mot_de_passe, options);
  if (!isPasswordValid) {
    alert("Le mot de passe ne respecte pas les exigences minimales.");
    return;
  }

    // Envoyer les données au backend
    try {
      const response = await fetch('http://localhost:3000/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Une erreur est survenue lors de la requête au serveur.');
      }
      alert('Inscription réussie !');

      // Redirection vers la page de Connexion
        window.location.href = '/Connexion'; // Redirection vers la page d'accueil
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handleInscription();
  };
  
  return (
    <>
    <section className="container graylogo col-md-10 mt-4 mb-4 rounded-4 pt-1">
    <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Formulaire d'Inscription :</h2>
      <Form className="row mb-2 mt-4 mx-auto" method="POST" onSubmit={handleSubmit}>
        <fieldset className="row col-md-12 mx-auto">
          <FormGroup className='col-md-6'>
          <FormLabel
          htmlFor="nom"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Nom</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="family-name"
            type="text"
            name="nom"
            value={formData.nom}
            onChange={handleInputChange}
            required
          />
          </FormGroup>
      
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="prenom"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Prenom</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="prenom"
            value={formData.prenom}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="societe"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Société</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="societe"
            value={formData.societe}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="pseudo"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Pseudo</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="username"
            type="text"
            name="pseudo"
            value={formData.pseudo}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="email"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Adresse Email</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="email"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="ConfirmerEmail"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Confirmer Adresse Email</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="email"
            type="text"
            name="ConfirmerEmail"
            value={formData.ConfirmerEmail}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        {emailMatchError && (
          <p className="col-md-12 fs-4 fw-bold text-dark mb-2">
            Les adresses email ne correspondent pas.
          </p>
        )}
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="mot_de_passe"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Mot de Passe</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="new-password"
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        <FormGroup className="col-md-6 mx-auto">
          <FormLabel
          htmlFor="ConfirmerMot_dePasse"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Confirmer Mot de Passe</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="new-password"
            type="password"
            name="ConfirmerMot_dePasse"
            value={formData.ConfirmerMot_dePasse}
            onChange={handleInputChange}
            required
          />
        </FormGroup>
        {passwordMatchError && (
          <p className="col-md-12 fs-4 fw-bold text-dark mb-2">
            Les mots de passe ne correspondent pas.
          </p>
        )}
        <FormGroup className="col-md-4 mx-auto">
          <FormLabel
          htmlFor="rue"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Rue</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="rue"
            value={formData.rue}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="col-md-4 mx-auto">
          <FormLabel
          htmlFor="code_postal"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Code-postal</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="code_postal"
            value={formData.code_postal}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="col-md-4 mx-auto">
          <FormLabel
          htmlFor="ville"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Ville</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            autoComplete="given-name"
            type="text"
            name="ville"
            value={formData.ville}
            onChange={handleInputChange}
          />
        </FormGroup>
        {/* <FormGroup className="col-md-4 mx-auto">
          <FormLabel
          htmlFor="avatar"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Avatar</FormLabel>
          <FormControl
            className="form-control-file col-md-12 mb-2 mx-auto"
            type="file"
            name="avatar"
            onChange={handleFileInputChange}
            accept="image/*"
          />
        
        {formData.avatar && (
          <div className="col-md-4 mx-auto">
            <img
              className="img-thumbnail mb-2 mx-auto"
              style={{ width: '100px', height: '100px', borderRadius:'50px' }}
              src={URL.createObjectURL(formData.avatar)}
              alt="Aperçu de l'avatar"
            />
          </div>
        )}
        </FormGroup> */}
        <FormGroup className="col-md-4 mx-auto">
          <FormLabel
          htmlFor="biographie"
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Biographie : dites nous quelques mots sur vous !</FormLabel>
          <FormControl
            className="form-control mb-2 mx-auto"
            type="text"
            name="biographie"
            value={formData.biographie}
            onChange={handleInputChange}
          />
        </FormGroup>
        <div className="col-md-4 mx-auto">
          <label
          htmlFor='code_role'
          className="form-control bg-secondary mx-auto text-white fw-bold mb-2"
          >Rôle</label>
          <select
            className="form-select mb-2 mx-auto"
            name="code_role"
            value={formData.code_role}
            onChange={handleInputChange}
            required
          >
            <option value="abonné">Abonné</option>
            <option value="éditeur">Éditeur</option>
            <option value="administrateur">Administrateur</option>
            <option value="client">Client</option>
          </select>
        </div>
        <div className="col-md-12 mx-auto">
          <Button className="btn btn-primary mb-2 mx-auto" type="submit" onClick={handleInscription}>
            S'inscrire
          </Button>
        </div>
        </fieldset>
      </Form>
    </section>
    </>
  );
  
  
  }


export default Inscription;
