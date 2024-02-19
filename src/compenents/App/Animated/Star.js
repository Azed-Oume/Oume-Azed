import  React from 'react';


const Star = () => {
        const genererEtoile = () => {
            const etoile = document.createElement('span');
            etoile.className = 'etincelle';
            let bingo = '⭐️'; // Utilisation de l'emoji d'étoile
            // etoile.style.color = "linear-gradient(90deg, #c0c0c0, #fff)";
            // etoile.style.color = "rgba(232, 236, 139, 0.904)";
            etoile.innerHTML = bingo
            etoile.style.fontSize = `${Math.random() * 1 + 0.1}em`; // Taille aléatoire entre 0.5 et 2.5 em
            const top = Math.random() * window.innerHeight;
            const left = Math.random() * window.innerWidth;
            etoile.style.top = `${top}px`;
            etoile.style.left = `${left}px`;
            document.body.appendChild(etoile);
          
            setTimeout(() => {
              etoile.remove(); // Supprimer l'étoile après un certain délai
            }, 2000); // Supprimer l'étoile après 2 secondes
        }
          
          function genererEtoilesAleatoires(nombreEtoiles) {
            for (let i = 0; i < nombreEtoiles; i++) {
                genererEtoile();
            }
          }
          
           // Générer 10 étoiles aléatoires au chargement de la page
    React.useEffect(() => {
        genererEtoilesAleatoires(80);
        // Générer de nouvelles étoiles toutes les 3 secondes
        const intervalId = setInterval(() => {
            genererEtoilesAleatoires(10); // Générer 10 nouvelles étoiles
        }, 3000);

        // Nettoyer l'intervalle lorsque le composant est démonté
        return () => clearInterval(intervalId);
    }, []);

    return null; // Le composant ne rend rien directement

          }
          
export default Star;