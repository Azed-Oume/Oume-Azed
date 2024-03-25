import User from '../models/user.js';
import Role from '../models/role.js'; // Importez le modèle de rôle
import validator from 'validator';
import bcrypt from 'bcrypt';

const usersController = {
    setUser: async function (req, res) {
        console.log("Requête d'inscription reçue avec les données suivantes :");
        console.log(req.body);
    
        const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
    
        if (!validator.isStrongPassword(req.body.mot_de_passe, options)) {
            throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
        }
    
        bcrypt.hash(req.body.mot_de_passe, 10, async function (err, hash) {
            if (err) {
                console.error("Erreur lors du hachage du mot de passe :", err.message);
                return res.status(500).json({ error: err.message });
            }
    
            req.body.mot_de_passe = hash;
            const data = req.body;
    
            try {
                // Récupérer le rôle correspondant au nom fourni dans les données de la requête
                const role = await Role.findOne({ where: { nom: data.code_role } });
    
                if (!role) {
                    throw new Error('Le rôle spécifié n\'existe pas');
                }
    
                // Utiliser l'ID du rôle récupéré pour insérer les données dans la table `utilisateurs`
                const user = await User.create({
                    nom: data.nom,
                    prenom: data.prenom,
                    societe: data.societe,
                    pseudo: data.pseudo,
                    email: data.email,
                    mot_de_passe: data.mot_de_passe,
                    role_id: role.role_id, // Utiliser l'ID du rôle
                    rue: data.rue,
                    ville: data.ville,
                    codePostal: data.codePostal, // Assurez-vous que le nom de la clé correspond au nom de la colonne dans la base de données
                    avatar: data.avatar,
                    statut: data.statut,
                    biographie: data.biographie
                });
    
                console.log("Données correctement envoyées à la base de données :");
                console.log(user);
                res.json(user);
            } catch (error) {
                console.error("Erreur lors de l'enregistrement des données :", error.message);
                displayError(error, res);
            }
        });
    },
    













//     setUser: async function (req, res) {
//         console.log("Requête d'inscription reçue avec les données suivantes :");
//         console.log(req.body);

//         const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };

//         try {
//             if (!validator.isStrongPassword(req.body.mot_de_passe, options)) {
//                 throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
//             }

//             const hashedPassword = await bcrypt.hash(req.body.mot_de_passe, 10);
//             req.body.mot_de_passe = hashedPassword;

//             // Vérifiez si le rôle existe déjà
//             let role = await Role.findOne({ where: { nom: req.body.code_role } });

//             if (!role) {
//                 // Si le rôle n'existe pas, le créer
//                 role = await Role.create({ nom: req.body.code_role });
//             }

//             // Insérer l'utilisateur avec le rôle approprié
//             const user = await User.create({
//                 nom: req.body.nom,
//                 prenom: req.body.prenom,
//                 societe: req.body.societe,
//                 pseudo: req.body.pseudo,
//                 email: req.body.email,
//                 mot_de_passe: req.body.mot_de_passe,
//                 code_role: role.role_id, // Utiliser le role_id obtenu
//                 rue: req.body.rue,
//                 ville: req.body.ville,
//                 codePostal: req.body.codePostal,
//                 avatar: req.body.avatar,
//                 statut: req.body.statut,
//                 biographie: req.body.biographie
//             });

//             console.log("Données correctement envoyées à la base de données :");
//             console.log(user);
//             res.json(user);
//         } catch (error) {
//             console.error("Erreur lors de l'enregistrement des données :", error.message);
//             displayError(error, res);
//         }
//     },

//     getUsers: async function (req, res) {
//         try {
//             const users = await User.findAll();
//             res.json(users);
//         } catch (error) {
//             res.status(500).json({ error: error.message });
//         }
//     }
};

function displayError(err, res) {
    if (err.name === 'SequelizeUniqueConstraintError') {
        res.status(409).json({
            error: `'${err.errors[0].value}' existe déjà`,
            champ: err.errors[0].path
        });
    } else {
        res.status(500).json({ error: err.message });
    }
}

export default usersController;



























// import User from '../models/user.js';
// import validator from 'validator'
// import bcrypt from 'bcrypt'
// import jwt from 'jsonwebtoken';
// import * as dotenv from 'dotenv'


// const usersController = {



//     setUser: function (req, res) {
//         console.log("Requête d'inscription reçue avec les données suivantes :");
//         console.log(req.body);
    
//         const options = { minLength: 12, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 };
    
//         if (!validator.isStrongPassword(req.body.mot_de_passe, options)) {
//             throw new Error('Le mot de passe doit comporter au moins 12 caractères et au moins 1 majuscule, 1 minuscule, 1 chiffre et 1 caractère spécial');
//         }
    
//         bcrypt.hash(req.body.mot_de_passe, 10, async function (err, hash) {
//             if (err) {
//                 console.error("Erreur lors du hachage du mot de passe :", err.message);
//                 return res.status(500).json({ error: err.message });
//             }
    
//             req.body.mot_de_passe = hash;
//             const data = req.body;
    
//             // if (data.code_role === 'candidat') {
//             //     data.code_role = 2;
//             // }
//             // if (data.code_role === 'recruteur') {
//             //     data.code_role = 3;
//             // }
//             // if (data.code_role === 'moderateur') {
//             //     data.code_role = 5;
//             // } 
    
//             console.log("Données après traitement :");
//             console.log(data);
    
//             try {
//                 const users = await User.create({
//                     nom: data.nom,
//                     prenom: data.prenom,
//                     societe: data.societe,
//                     pseudo: data.pseudo,
//                     email: data.email,
//                     mot_de_passe: data.mot_de_passe,
//                     code_role: data.code_role,
//                     rue: data.rue,
//                     ville: data.ville,
//                     codePostal: data.codePostal,
//                     avatar: data.avatar,
//                     statut: data.statut,
//                     biographie: data.biographie
//                 });
    
//                 console.log("Données correctement envoyées à la base de données :");
//                 console.log(users);
//                 res.json(users);
//             } catch (error) {
//                 console.error("Erreur lors de l'enregistrement des données :", error.message);
//                 displayError(error, res);
//             }
//         });
//     },
    


//     getUsers: async function (req, res) {

//         try {
//             const users = await User.findAll();
//             res.json(users);
//         } catch (e) {
//             res.status(500).json(e.message)
//         }

//     },

// }

// function displayError(err, res) {

//     if (err.message === 'Validation error') {
//         const ValidationErrorItem = err.errors[0];

//         res.status(409).json({
//             error: `'${ValidationErrorItem.value}' existe déjà`,
//             champs: ValidationErrorItem.path
//         });
//     }
//     else
//         res.status(500).json({ error: err.message });

// }



// export default usersController;