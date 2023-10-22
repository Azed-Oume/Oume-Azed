-- Version: 1
BEGIN;

-- Suppression des tables existantes si elles existent
DROP TABLE IF EXISTS PostsTags;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS Commentaires;
DROP TABLE IF EXISTS Posts;
DROP TABLE IF EXISTS Categories;
DROP TABLE IF EXISTS Users;

-- Création de la table Utilisateurs
CREATE TABLE Users (
  userID INT AUTO_INCREMENT PRIMARY KEY,
  Nom VARCHAR(50),
  Prenom VARCHAR(50),
  Pseudo VARCHAR(50),
  AdresseEmail VARCHAR(100),
  MotDePasse VARCHAR(255),
  DateInscription TIMESTAMP,
  Avatar VARCHAR(255),
  Biographie TEXT,
  Role ENUM('administrateur', 'éditeur', 'abonné')
);

-- Création de la table Catégories
CREATE TABLE Categories (
  categoryID INT AUTO_INCREMENT PRIMARY KEY,
  Nom VARCHAR(50),
  Description TEXT
);

-- Création de la table Articles
CREATE TABLE Posts (
  postID INT AUTO_INCREMENT PRIMARY KEY,
  Titre VARCHAR(255),
  Contenu TEXT,
  DatePublication TIMESTAMP,
  Auteur INT,
  Categorie INT,
  StatutPublication ENUM('brouillon', 'publié', 'en attente de révision'),
  Vues INT,
  PartagesSociaux INT,
  ImageCouverture VARCHAR(255),
  FOREIGN KEY (Auteur) REFERENCES Users(userID),
  FOREIGN KEY (Categorie) REFERENCES Categories(categoryID)
);

-- Création de la table Commentaires
CREATE TABLE Commentaires (
  commentID INT AUTO_INCREMENT PRIMARY KEY,
  Contenu TEXT,
  DateCommentaire TIMESTAMP,
  Auteur INT,
  ArticleAssocie INT,
  StatutCommentaire ENUM('approuvé', 'en attente de modération', 'signalé comme spam'),
  FOREIGN KEY (Auteur) REFERENCES Users(userID),
  FOREIGN KEY (ArticleAssocie) REFERENCES Posts(postID)
);

-- Création de la table Tags
CREATE TABLE Tags (
  tagID INT AUTO_INCREMENT PRIMARY KEY,
  Nom VARCHAR(50)
);

-- Création de la table Articles-Tags
CREATE TABLE PostsTags (
  postID INT,
  tagID INT,
  FOREIGN KEY (postID) REFERENCES Posts(postID),
  FOREIGN KEY (tagID) REFERENCES Tags(tagID)
);

COMMIT;



-- Insérer un administrateur
INSERT INTO Users (Nom, Prenom, Pseudo, AdresseEmail, MotDePasse, DateInscription, Role)
VALUES ('NomAdmin', 'PrenomAdmin', 'Admin', 'admin@example.com', 'motdepasseadmin', NOW(), 'administrateur');

-- Insérer un abonné
INSERT INTO Users (Nom, Prenom, Pseudo, AdresseEmail, MotDePasse, DateInscription, Role)
VALUES ('NomAbonne', 'PrenomAbonne', 'Abonne', 'abonne@example.com', 'motdepasseabonne', NOW(), 'abonné');

-- Insérer un éditeur
INSERT INTO Users (Nom, Prenom, Pseudo, AdresseEmail, MotDePasse, DateInscription, Role)
VALUES ('NomEditeur', 'PrenomEditeur', 'Editeur', 'editeur@example.com', 'motdepasseediteur', NOW(), 'éditeur');
