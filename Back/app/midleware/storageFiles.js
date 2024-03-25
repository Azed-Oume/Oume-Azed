

import multer from 'multer'

// C:\COUR\TOUT-MES-REPO\Oume-Azed\Back\app\public\fileAvatar
const storageImage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "C:/COUR/TOUT-MES-REPO/Oume-Azed/Back/app/public/fileAvatar"); // Le dossier où les fichiers seront stockés
    },
    filename: function (req, file, cb) {
        // Utilisation d'un préfixe pour différencier les fichiers des Utilisateurs.
        const uniquePrefix = 'utilisateur-';
        // Générez un nom de fichier unique, par exemple, en ajoutant une horodatage
        cb(null, uniquePrefix + Date.now() + '-' + file.originalname);
    },
});

export const uploadImage = multer({ storage: storageImage });



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//         cb(null, 'C:/COUR/MES-REPOS-GITHUB/PROJET-TUTORET/STAGE SIGMA-VISION/handi-vision.fr/back/app/public/uploads'); // Le dossier où les fichiers seront stockés
//     },
//     filename: function (req, file, cb) {
//         // Utilisation d'un prefix pour différencier les fichiers des RQTH.
//         const uniquePrefix = 'rqth-';
//         // Générez un nom de fichier unique, par exemple, en ajoutant une horodatage
//         cb(null, uniquePrefix + Date.now() + '-' + file.originalname);
//     },
// });

// export const upload = multer({ storage: storage });

// const storageFileCandidature = multer.diskStorage({
//     destination: function (req, file, cb) {
//         // Modifier la destination pour chaque type de fichier
//         if (file.fieldname === 'cv') {
//             cb(null, 'C:/COUR/MES-REPOS-GITHUB/PROJET-TUTORET/STAGE SIGMA-VISION/handi-vision.fr/back/app/public/fileCandidature');
//         } else if (file.fieldname === 'lettreMotivation') {
//             cb(null, 'C:/COUR/MES-REPOS-GITHUB/PROJET-TUTORET/STAGE SIGMA-VISION/handi-vision.fr/back/app/public/fileCandidature');
//         } else {
//             // Gérer d'autres types de fichiers si nécessaire
//             cb(new Error('Invalid fieldname'));
//         }
//     },
//     filename: function (req, file, cb) {
//         // Utiliser un préfixe distinct pour chaque type de fichier
//         let uniquePrefix = '';
//         if (file.fieldname === 'cv') {
//             uniquePrefix = 'cv-';
//         } else if (file.fieldname === 'lettreMotivation') {
//             uniquePrefix = 'lettreMotivation-';
//         }
//         // Générer un nom de fichier unique
//         cb(null, uniquePrefix + Date.now() + '-' + file.originalname);
//     },
// });

// export const file = multer({ storage: storageFileCandidature });



// const storageImageEntreprise = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "C:/COUR/MES-REPOS-GITHUB/PROJET-TUTORET/STAGE SIGMA-VISION/handi-vision.fr/back/app/public/fileAvatarEntreprise"); // Le dossier où les fichiers seront stockés
//     },          
//     // 
//     filename: function (req, file, cb) {
//         // Utilisation d'un préfixe pour différencier les fichiers d'entreprise.
//         const uniquePrefix = 'entreprise-';
//         // Générez un nom de fichier unique, par exemple, en ajoutant une horodatage
//         cb(null, uniquePrefix + Date.now() + '-' + file.originalname);
//     }
//   });
  
//  export const uploadImageEntreprise = multer({ storage: storageImageEntreprise });
  
//  cb(null, file.fieldname + '-' + Date.now() + '.' + file.originalname.split('.').pop()); // Génère un nom de fichier unique