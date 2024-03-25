{/*  OUMESSAOUD Azzedine: oumessaoud@hotmail.fr */ }

import express from 'express';
// import {upload, file,  uploadImage, uploadImageEntreprise } from './midleware/storageFiles.js';
import usersController from './controllers/usersController.js';
import authController from './controllers/authController.js';
import { uploadImage } from './midleware/storageFiles.js';

const router = express.Router();

/* 
code_role 1 => Abonné
code_role 2 => Éditeur
code_role 3 => Cient
code_role 4 => Administarteur 
code_role 4 => Curieux
*/
// Utilisation de roleCheck dans le routeur



router.post('/api/user/register', usersController.setUser);//Permet l'enregistrement d'un nouvel utilisateur. 
router.post('/api/users/login', authController.login);// Gère l'authentification des utilisateurs  //


export default router;

