{/*  OUMESSAOUD Azzedine: oumessaoud@hotmail.fr */ }

import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import Forbiden from './Forbiden';

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const statut = localStorage.getItem('statut');
    const userRole = localStorage.getItem('role');
    console.log("voici le statut: " + statut);
    console.log("voici le Role: " + userRole);

    if (token) {
        if (userRole) {
            return children;
        } else {
            return  <>
                        <Forbiden />
                    </>;
        }
    } else {
        return  <>
                    <Forbiden />
                </>;
    }
};

export default PrivateRoute;

// const PrivateRoute = ({ children }) => {
//     const token = localStorage.getItem('token');
//     console.log("voici le token: " + token);
//     if (token) {
//         // Si le jeton existe, autorisez l'accès au composant passé en tant qu'élément
//         return children;
//     } else {
//         // Si le jeton n'existe pas, redirigez l'utilisateur vers la page de connexion
//         return <Navigate to="/" />;
//     }
// };

// export default PrivateRoute;
