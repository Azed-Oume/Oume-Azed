# Table "Utilisateurs" (Users) :

* userID (Clé primaire)
* Nom
* Prénom
* Pseudo
* Adresse e-mail
* Confirmer Adresse e-mail
* Mot de passe (haché)
* Confirmer Mot de passe (haché)
* Date d'inscription
* Avatar (lien vers l'image de profil)
* Biographie
* Rôle de l'utilisateur (administrateur, éditeur, abonné, etc.)

# Table "Articles" (Posts) :

* postID (Clé primaire)
* Titre de l'article
* Contenu de l'article (texte ou HTML)
* Date de publication
* Auteur (Clé étrangère faisant référence à la table Utilisateurs)
* Catégorie de l'article (Clé étrangère faisant référence à la table * Catégories)
* Statut de publication (brouillon, publié, en attente de révision, etc.)
* Nombre de vues
* Nombre de partages sociaux
* Image de couverture de l'article

# Table "Catégories" (Categories) :

* categoryID (Clé primaire)
* Nom de la catégorie
* Description de la catégorie

# Table "Commentaires" (Comments) :

* commentID (Clé primaire)
* Contenu du commentaire
* Date du commentaire
* Auteur du commentaire (Clé étrangère faisant référence à la table Utilisateurs)
* Article associé (Clé étrangère faisant référence à la table Articles)
* Statut du commentaire (approuvé, en attente de modération, signalé comme * spam, etc.)
# Table "Tags" (Tags) :

* tagID (Clé primaire)
* Nom du tag

# Table "Articles-Tags" (Posts-Tags) :

* postID (Clé étrangère faisant référence à la table Articles)
* tagID (Clé étrangère faisant référence à la table Tags)