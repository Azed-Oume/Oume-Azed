{/*  OUMESSAOUD Azzedine: oumessaoud@hotmail.fr */ }

import User from '../models/user.js';
import validator from 'validator'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv'

const authController = {

    login: async function (req, res) {
        const { email, mot_de_passe } = req.body;
        const secretKey = process.env.SECRET_KEY
        console.log(req.body.mot_de_pass)

        try {
            const user = await User.authenticate(email, mot_de_passe);

            if (user) {
                console.log('Connexion réussie');

                const token = jwt.sign(
                    {
                        userId: user.id, // Utilise un identifiant unique de l'utilisateur ici "id"
                            role: user.code_role, // Incluez le rôle de l'utilisateur */
                    },
                    secretKey, // Remplacez par votre propre clé secrète
                    {
                        expiresIn: '10h', // Durée de validité du token (10 heure dans cet exemple)
                    }
                );
                const { id, code_role, statut } = user
                console.log("id:" + id)
                console.log("role" + code_role)
                console.log("statut:" + statut)
                //avant de transmettre le user au front lui retire des information
                res.status(200).json({ message: 'Connexion réussie', token, id, code_role, statut });
            } else {
                console.log('Identifiants incorrects');
                res.status(401).json({ message: 'Identifiants incorrects' }); // Réponse JSON en cas d'échec
            }
        } catch (error) {
            console.error('Erreur lors de l\'authentification :', error);
            res.status(500).json({ message: 'Erreur de serveur' }); // Réponse JSON en cas d'erreur serveur
        }
    },

    me: async function  (req, res) {
       
        try {
            const { id, code_role, statut } = req.user;
            const user = await User.findByPk(id)
            const {mot_de_passe, rqth, cv, lettre_motivation, ...infoUser} =  user ;
            res.json(
                infoUser.dataValues
            )
        } catch (error) {
        res.json( error.message );

        /* console.log(req.user); */
        // res.json(req.user)
    }
}
}


export default authController;