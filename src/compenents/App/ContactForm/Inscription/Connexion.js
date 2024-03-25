// import React, { useState } from 'react';
// import { Form, FormGroup, Button, FormLabel, FormControl } from 'react-bootstrap';

// import validator from 'validator';
// import bcrypt from 'bcryptjs'; // Utilisation de bcrypt pour hacher le mot de passe
// import { Link, useNavigate } from 'react-router-dom';

// // Composant pour la page de connexion
// const Connexion = () => {

//   const navigate = useNavigate();
// // État pour stocker les données du formulaire (email et mot de passe)
//   const [formData, setFormData] = useState({
//     email: '',
//     mot_de_passe: ''
//   })
//   // État pour stocker l'identifiant utilisateur
//   const [userId, setUserId] = useState(null);
//  // Fonction de soumission du formulaire
//   const handleSubmit = async (evt) => {
//     evt.preventDefault();

//     try {

//       // On fait une requête POST pour envoyer les informations d'authentification au backend
//       const response = await fetch(`http://localhost:3000/api/users/login`, {
//         method: 'POST', // Methode POST pour envoyer les données
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData), // On convertie l'objet en JSON et on l'envoye dans le corps de la requête
//       });

//       if (response.status === 200) {
//         // La connexion a réussi, on stocke le token et les informations de l'utilisateur
//         console.log('Connexion réussie');
//         const responseData = await response.json();
//         const token = responseData.token;
//         const id = responseData.id
//         const role = responseData.code_role
//         const statut = responseData.statut

//         // Stockage des informations dans le stockage local du navigateur
//         localStorage.setItem('token', token);
//         localStorage.setItem('id', id);
//         localStorage.setItem('role', role);
//         localStorage.setItem('statut', statut);
//         // Redirection en fonction du rôle de l'utilisateur
//         // if (role == 4 ) {
//         //   navigate("/DashboardAdmin");
//         // } else if ( role == 5){
//         //   navigate("/DashboardAdmin");
//         // } else if (role == 3) {
//         //   navigate("/DashboardRecruteur");
//         // } else if (role == 2) {
//         //   navigate("/DashboardCandidat");
//         // }

//         // On redirige l'utilisateur vers une autre page 
//        if (response.status === 401) {
//         // Identifiants incorrects
//         console.log('Erreur de connexion');
//         alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
        
//       } else {
//         // oû d'autres cas d'erreur
//         console.log('Identifiants incorrects');
//         alert("Erreur de l'identifiant ou du mot de passe. Veuillez réessayer.");
      
//     } catch (error) {
//       console.log('Fetch error: ', error);
//       alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
//     }
//   };

//   // Fonction pour mettre à jour les données du formulaire lors de la saisie
//   const handleInputChange = (e) => {
//     const fieldName = e.target.name;
//     const fieldValue = e.target.value;

//     // On copie l'objet formData actuel dans un nouvel objet pour éviter la mutation directe de l'état
//     const updatedFormData = { ...formData };

//     // On met à jour la valeur du champ approprié dans l'objet mis à jour
//     updatedFormData[fieldName] = fieldValue;
//     // On met à jour l'état avec le nouvel objet mis à jour
//     setFormData(updatedFormData);
//   }

//    // Définir state avec useState
//    const [state, setState] = useState({
//     email: '',
//     Mot_de_passe: '',
//     authError: false
//   });

// // const Connexion = () => {
// //   const [state, setState] = useState({
// //     pseudo: '',
// //     Mot_de_passe: '',
// //     authError: false,
// //   });

// //   const handleInputChange = (e) => {
// //     const name = e.target.name;
// //     const value = e.target.value;
// //     setState({ ...state, [name]: value });
// //   };

  
// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     const { pseudo, MotDePasse } = state;

// //     // Validation des données d'entrée avec `validator`
// //     if (!validator.isAlphanumeric(pseudo)) {
// //       // Pseudo non alphanumérique
// //       setState({ ...state, authError: true });
// //       return;
// //     }

// //     // Hachage du mot de passe avec bcrypt
// //     const saltRounds = 10;
// //     bcrypt.hash(MotDePasse, saltRounds, (err, hashedPassword) => {
// //       if (err) {
// //         // Erreur de hachage
// //         setState({ ...state, authError: true });
// //         return;
// //       }

// //       // Ici, vous pouvez envoyer le pseudo et le mot de passe haché au backend
// //       // Pour l'exemple, affichons simplement le mot de passe haché côté client
// //       console.log('Mot de passe haché :', hashedPassword);
// //     });
// //   };

//   const handleClick = (e) => {
//     navigate("/Inscription")
//   }

//   return (
//     <div className="container graylogo col-md-10 mt-4 mb-4 p-4 rounded-4 ">
//       <h2 className="h2 text-center bg-secondary text-white fw-bold mb-2">Connexion</h2>
//       <Form className="row mb-2 mx-auto" method="POST" onSubmit={handleSubmit}>
//         <FormGroup className="mb-3 col-md-6 ">
//           <FormLabel 
//           className="form-control bg-secondary text-white fw-bold mb-2"
//           htmlFor="email">
//             Email
//           </FormLabel>
//           <FormControl
//             className="form-control mx-auto" 
//             autoComplete="username"
//             type="text"
//             name="email"
//             value={state.email}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <FormGroup className="mb-3 col-md-6 mx-auto">
//           <FormLabel 
//           className="form-control bg-secondary text-white fw-bold mb-2"
//           htmlFor="MotDePasse">
//             Mot de Passe
//           </FormLabel>
//           <FormControl
//             className="form-control mx-auto"
//             autoComplete="current-password"
//             type="password"
//             name="MotDePasse"
//             value={state.Mot_de_passe}
//             onChange={handleInputChange}
//           />
//         </FormGroup>
//         <div className="mb-3">
//           {state.authError && (
//             <div className="text-danger">Pseudo ou mot de passe incorrect.</div>
//           )}
//         </div>
//         <div className="mb-3 mx-auto">
//           <Button className="btn btn-primary mx-auto" type="submit">
//             Se connecter
//           </Button>
//         </div>
//       </Form>
//       <div className="mb- mx-auto mb-3 col-md-6 ">
//           <p className="form-control bg-secondary text-white fw-bold mb-2 ">
//             Vous n'avez pas de Compte !
//           </p>
//           <Button
//           className="btn btn-primary mx-auto" 
//           type="submit"
//           onClick={handleClick}>
//             Créez un Compte
//           </Button>
//         </div>
//     </div>
//   );
// };

// export default Connexion;


import React, { useState } from 'react';
import { Form, FormGroup, Button, FormLabel, FormControl } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Connexion = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    mot_de_passe: ''
  });

  
  // État pour stocker l'identifiant utilisateur
  const [userId, setUserId] = useState(null);
 // Fonction de soumission du formulaire
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    try {

      // On fait une requête POST pour envoyer les informations d'authentification au backend
      const response = await fetch(`http://localhost:3000/api/users/login`, {
        method: 'POST', // Methode POST pour envoyer les données
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // On convertie l'objet en JSON et on l'envoye dans le corps de la requête
      });

      if (response.status === 200) {
        // La connexion a réussi, on stocke le token et les informations de l'utilisateur
        console.log('Connexion réussie');
        const responseData = await response.json();
        const token = responseData.token;
        const id = responseData.id
        const role = responseData.code_role
        const statut = responseData.statut

        // Stockage des informations dans le stockage local du navigateur
        localStorage.setItem('token', token);
        localStorage.setItem('id', id);
        localStorage.setItem('role', role);
        localStorage.setItem('statut', statut);
        // Redirection en fonction du rôle de l'utilisateur
        
          alert("Conexxion Reussie");
          navigate("/");

        // On redirige l'utilisateur vers une autre page 
      } else if (response.status === 401) {
        // Identifiants incorrects
        console.log('Erreur de connexion');
        alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
        
      } else {
        // oû d'autres cas d'erreur
        console.log('Identifiants incorrects');
        alert("Erreur de l'identifiant ou du mot de passe. Veuillez réessayer.");
      }
    } catch (error) {
      console.log('Fetch error: ', error);
      alert("Une erreur s'est produite lors de la connexion. Veuillez réessayer.");
    }
  };

  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    setFormData({ ...formData, [fieldName]: fieldValue });
  };

  const handleClick = () => {
    navigate("/Inscription");
  };

  return (
    <div className="container graylogo col-md-10 mt-4 mb-4 p-4 rounded-4">
      <h2 className="h2 text-center bg-secondary text-white fw-bold mb-2">Connexion</h2>
      <Form className="row mb-2 mx-auto" method="POST" onSubmit={handleSubmit}>
        <FormGroup className="mb-3 col-md-6">
          <FormLabel className="form-control bg-secondary text-white fw-bold mb-2" htmlFor="email">
            Email
          </FormLabel>
          <FormControl
            className="form-control mx-auto"
            autoComplete="username"
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </FormGroup>
        <FormGroup className="mb-3 col-md-6 mx-auto">
          <FormLabel className="form-control bg-secondary text-white fw-bold mb-2" htmlFor="mot_de_passe">
            Mot de Passe
          </FormLabel>
          <FormControl
            className="form-control mx-auto"
            autoComplete="current-password"
            type="password"
            name="mot_de_passe"
            value={formData.mot_de_passe}
            onChange={handleInputChange}
          />
        </FormGroup>
        <div className="mb-3">
          {/* Affichage des erreurs ici si besoin */}
        </div>
        <div className="mb-3 mx-auto">
          <Button className="btn btn-primary mx-auto" type="submit">
            Se connecter
          </Button>
        </div>
      </Form>
      <div className="mb-3 mx-auto col-md-6">
        <p className="form-control bg-secondary text-white fw-bold mb-2">
          Vous n'avez pas de Compte !
        </p>
        <Button className="btn btn-primary mx-auto" type="button" onClick={handleClick}>
          Créez un Compte
        </Button>
      </div>
    </div>
  );
};

export default Connexion;
