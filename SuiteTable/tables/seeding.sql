-- Insérer des catégories
INSERT INTO Categories (Nom, Description)
VALUES
  ('Technologie', 'Les dernières avancées technologiques.'),
  ('Voyages', 'Découvrez les destinations du monde entier.'),
  ('Cuisine', 'Recettes délicieuses de cuisine du monde.'),
  ('Actualités', 'Les dernières actualités du monde.'),
  ('Santé', 'Conseils et informations sur la santé.'),
  ('Sport', 'Actualités sportives et performances.'),
  ('Musique', 'Découvrez les dernières tendances musicales.');

-- Insérer des utilisateurs
INSERT INTO Users (Nom, Prenom, Pseudo, AdresseEmail, MotDePasse, DateInscription, Role)
VALUES
  ('Admin', 'Admin', 'admin', 'admin@example.com', 'motdepasseadmin', NOW(), 'administrateur'),
  ('Abonné', 'Abonné', 'abonne', 'abonne@example.com', 'motdepasseabonne', NOW(), 'abonné'),
  ('Éditeur', 'Éditeur', 'editeur', 'editeur@example.com', 'motdepasseediteur', NOW(), 'éditeur'),
  ('Utilisateur1', 'Nom1', 'Pseudo1', 'user1@example.com', 'motdepasse1', NOW(), 'abonné'),
  ('Utilisateur2', 'Nom2', 'Pseudo2', 'user2@example.com', 'motdepasse2', NOW(), 'abonné');

-- Insérer des articles
INSERT INTO Posts (Titre, Contenu, DatePublication, Auteur, Categorie, StatutPublication, Vues, PartagesSociaux, ImageCouverture)
VALUES
  ('Nouvelles technologies', 'Les dernières avancées technologiques dans le monde.', NOW(), 1, 1, 'publié', 1000, 500, 'technologie.jpg'),
  ('Voyage à Paris', 'Découvrez la magnifique ville de Paris.', NOW(), 2, 2, 'publié', 800, 300, 'paris.jpg'),
  ('Recette de pizza', 'Une délicieuse recette de pizza maison.', NOW(), 3, 3, 'publié', 1200, 600, 'pizza.jpg'),
  ('Nouvelles sur la santé', 'Dernières actualités sur la santé mondiale.', NOW(), 4, 4, 'publié', 600, 200, 'sante.jpg'),
  ('Match de football', 'Résumé du match de football d\'hier soir.', NOW(), 5, 6, 'publié', 2500, 800, 'football.jpg'),
  ('Nouveaux artistes', 'Découvrez les talents musicaux émergents.', NOW(), 3, 7, 'publié', 450, 150, 'musique.jpg');

-- Insérer des tags
INSERT INTO Tags (Nom)
VALUES
  ('Techno'),
  ('Voyage'),
  ('Cuisine'),
  ('Santé'),
  ('Football'),
  ('Musique'),
  ('Innovation'),
  ('Recette');

-- Associer des tags aux articles
INSERT INTO PostsTags (postID, tagID)
VALUES
  (1, 1),
  (2, 2),
  (3, 3),
  (4, 4),
  (5, 5),
  (6, 6);

-- Insérer des commentaires
INSERT INTO Commentaires (Contenu, DateCommentaire, Auteur, ArticleAssocie, StatutCommentaire)
VALUES
  ('Super article sur la technologie!', NOW(), 2, 1, 'approuvé'),
  ('J\'adore Paris, j\'aimerais y aller un jour.', NOW(), 1, 2, 'approuvé'),
  ('Cette recette de pizza à l\'air délicieuse!', NOW(), 3, 3, 'approuvé'),
  ('Très informatif, merci pour cet article.', NOW(), 4, 4, 'approuvé'),
  ('Le match était incroyable, quelle performance!', NOW(), 5, 5, 'approuvé'),
  ('J\'aime beaucoup cette chanson!', NOW(), 1, 6, 'approuvé');
