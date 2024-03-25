import { DataTypes } from 'sequelize';
import sequelize from '../database/database.js';
import bcrypt from 'bcrypt';
import Role from './role.js';

const User = sequelize.define('User', {
    nom: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prenom: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    societe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    pseudo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: 'Adresse e-mail invalide'
            }
        }
    },
    mot_de_passe: {
        type: DataTypes.STRING,
        allowNull: false
    },
    rue: {
        type: DataTypes.STRING,
    },
    ville: {
        type: DataTypes.STRING,
    },
    code_postal: {
        type: DataTypes.STRING,
    },
    avatar: {
        type: DataTypes.STRING,
    },
    statut: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
    },
    biographie: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'utilisateurs',
    timestamps: true,
    createdAt: false,
    updatedAt: false,
});

// Ajout de l'association avec le modèle de rôle
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

// Définition de la méthode `authenticate` pour l'authentification de l'utilisateur
User.authenticate = async (email, motDePasse) => {
    try {
        const user = await User.findOne({
            where: { email: email }
        });

        if (!user) {
            throw new Error("Identifiants incorrects");
        }

        const passwordMatch = await bcrypt.compare(motDePasse, user.mot_de_passe);

        if (!passwordMatch) {
            throw new Error("Identifiants incorrects");
        }

        return user;
    } catch (error) {
        throw error;
    }
};

export default User;







































// import { DataTypes } from 'sequelize';
// import sequelize from '../database/database.js';
// import validator from 'validator';
// import bcrypt from 'bcrypt';
// import Role from './role.js';

// const User = sequelize.define('User', {
    
//     nom: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     prenom: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     societe: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     pseudo: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//         validate: {
//             isEmail: {
//                 msg: 'Adresse e-mail invalide'
//             }
//         }
//     },
//     mot_de_passe: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     code_role: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
    
//     rue: {
//         type: DataTypes.STRING,
//     },
//     ville: {
//         type: DataTypes.STRING,
//     },
//     code_postal: {
//         type: DataTypes.INTEGER,
//     },
//     avatar: {
//         type: DataTypes.STRING,
//     },
//     statut: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//         defaultValue: 1
//     },
//     biographie: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
// }, {
//     tableName: 'utilisateurs',
//     timestamps: false,
//     createdAt: true,
//     updatedAt: false,
// });

// User.belongsTo(Role, { foreignKey: 'role_id' });
// Role.hasMany(User, { foreignKey: 'role_id' });


// // Définissions la méthode `authenticate` en dehors de la configuration du modèle
// User.authenticate = async (email, motDePasse) => {
//     try {
//         const user = await User.findOne({
//             where: {
//                 email: email,
//             },
//         });

//         if (!user) {
//             throw new Error("Identifiants incorrects"); // Utilisateur non trouvé
//         }

//         // Utilisez Bcrypt pour comparer le mot de passe entré avec le mot de passe haché enregistré dans la base de données
//         const passwordMatch = await bcrypt.compare(motDePasse, user.mot_de_passe);
//         /* 
//         -- motDePasse : mot de passe saisi par l'utilisateur qui souhaite se connecter -> mot de passe NON HACHE
//         -- user.mot_de_passe : mot de passe HACHE de l'utilisateur déjà inscrit
//         */

//         if (!passwordMatch) {
//             throw new Error("Identifiants incorrects"); // Mot de passe incorrect
//         }

//         return user; // Utilisateur trouvé et authentifié
//     } catch (error) {
//         throw error;
//     }
// };


// // `sequelize.define` also returns the model
// //console.log(User === sequelize.models.User); // true

// export default User;