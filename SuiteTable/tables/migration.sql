-- Création de la base de données blogoume
CREATE DATABASE IF NOT EXISTS blogoume;

-- Création de l'utilisateur devoume avec le mot de passe devoume
CREATE USER 'devoume'@'localhost' IDENTIFIED BY 'devoume';

-- Attribution des privilèges à l'utilisateur devoume sur la base de données blogoume
GRANT ALL PRIVILEGES ON blogoume.* TO 'devoume'@'localhost';

-- Appliquer les modifications aux privilèges
FLUSH PRIVILEGES;

-- Utilisation de la base de données blogoume
USE blogoume;

-- Version: 1
BEGIN;

-- Suppression des tables existantes si elles existent
DROP TABLE IF EXISTS PostsTags;
DROP TABLE IF EXISTS Tags;
DROP TABLE IF EXISTS Comments;
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

-- Création de la table Catégories
CREATE TABLE Categories (
  categoryID INT AUTO_INCREMENT PRIMARY KEY,
  Nom VARCHAR(50),
  Description TEXT
);

-- Création de la table Commentaires
CREATE TABLE Comments (
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
