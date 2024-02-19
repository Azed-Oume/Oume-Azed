import React from 'react';
import { Link } from 'react-router-dom';

const Acceuil = ()=> {
  return (
    <section className="container mt-4 col-md-10">
  <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Bienvenue sur mon site</h2>
  <h3 className="h3 text-center graylogo rounded-4 text-white mx-auto p-2">Développeur Full-Stack Indépendant</h3>
  <article className="mx-auto graylogo rounded-4 text-white fs-5 fw-bold mb-4">
    <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
      Vous souhaitez augmenter vos ventes en développant un site web performant, moderne et à votre image ? Vous êtes au bon endroit ! En tant que développeur full-stack indépendant, je suis spécialisé dans les technologies web les plus demandées sur le marché. 
    </p>
    <ul className="border border-2 rounded-3 p-2 mb-3 text-white fs-5 ">
      <li className="text-center bi bi-check-circle">Je vous propose un service complet pour concrétiser votre projet :</li>
      <li className= "mb-2 bi bi-check-circle" > <strong className="highlight">Assistance au design : </strong> création d'une pré-maquette  pour définir l'apparence générale de votre projet.</li>
      <li className= "mb-2 bi bi-check-circle" > <strong className="highlight">Développement en "Post-Production" : </strong> réalisation professionnelle de votre projet en suivant les meilleures pratiques de l'industrie.</li>
      <li className= "mb-2 bi bi-check-circle" > <strong className="highlight">Intégration de vos modifications : </strong> prise en compte de vos retours et ajustements tout au long du processus de développement.</li>
      <li className= "mb-2 bi bi-check-circle" > <strong className="highlight"> Déploiement et maintenance : </strong> lancement du projet avec suivi et assistance pour toute maintenance future ou évolution nécessaire.</li>
    </ul>
    
    <ul className="border border-2 rounded-3 p-2 mb-3 text-white fs-5 ">
      <li className="mb-2 text-center bi bi-check-circle">Mais ce n’est pas tout ! J'apporte également mon expertise dans les domaines suivants :</li>
      <li className= "mb-2 bi bi-check-circle" >Optimisation du référencement naturel (SEO) pour une meilleure visibilité sur les moteurs de recherche.</li>
      <li className= "mb-2 bi bi-check-circle" >Conseils personnalisés sur les mots-clés, les balises, les liens, etc., avec des rapports de performance pour suivre l’évolution du trafic.</li>
    </ul>
    </article>

    <article className="mx-auto graylogo rounded-4 text-white fs-5 fw-bold mb-4">
    <h4 className="h4 text-center text-white mx-auto p-2">Mes compétences techniques :</h4>
    <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
      Front-end : création d'interfaces web dynamiques et réactives avec JavaScript, React.js et Bootstrap.
    </p>
    <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
    Back-end : développement de la partie serveur avec Node.js et MySQL pour gérer les données, l’authentification, la sécurité, etc.
    </p>
    <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
    Déploiement : mise en ligne sur la plateforme d’hébergement O2switch pour des services de qualité, de sécurité et de performance.
    </p>
    </article>

    <article className="mx-auto graylogo rounded-4 text-white fs-5 fw-bold mb-4">
    <h4 className="h4 text-center text-white mx-auto p-2">Mes atouts professionnels :</h4>
    <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
      Indépendance : je travaille en tant qu’indépendant, ce qui me permet de gérer mon temps et mes clients avec flexibilité et écoute.
      Qualité : je vous garantis un travail respectant les normes et les bonnes pratiques du développement web, pour des produits fonctionnels, fiables et faciles à maintenir.
    </p>
    </article>

    <article className="mx-auto graylogo rounded-4 text-white fs-5 fw-bold mb-4">
    <aside className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
    <h4 className="h4 text-center text-white mx-auto p-2"> Une question :</h4>
      <p className='border border-2 rounded-3 p-2 mb-3 text-white fs-5'>
      Si vous êtes intéressé par mes services, n’hésitez pas à me contacter. Je vous répondrai dans les plus brefs délais pour discuter de votre projet, de vos besoins, de votre budget et de vos délais. Vous pouvez me joindre par e-mail ou via le formulaire de contact.
      </p>
      <p className='border border-2 rounded-3 p-2 mb-3 text-white fs-5'>Vous pouvez me joindre par e-mail à : 
          <a href="mailto:azed92390@hotmail.fr" className='btn btn-primary mx-2' aria-label="Envoyer un mail">ENVOYEZ UN MAIL</a>
            ou via le formulaire de contact :
            <Link to="/Contact" className='btn btn-success mx-2' aria-label="Accéder au formulaire de contact">REMPLIR UN FORMULAIRE</Link>.
          </p>
          <br/>
          <p className='border border-2 rounded-3 p-2 mb-3 text-white fs-5'>
          Avec mon expertise, vous pouvez être sûr d'obtenir un service de qualité, adapté à vos besoins et vos objectifs. Contactez-moi dès aujourd'hui pour discuter de votre projet !"
          </p>
          </aside>
  </article>
</section>

  )
}

const RechercheMaVille = () => {
  return (
    <section className="container mt-4 mb-4 col-md-10 ">
      <h2 className="h2 text-center graylogo rounded-4 text-white  mx-auto p-2">Bienvenue sur la page de ma Ville</h2>
      <article className="row col-12 mx-auto graylogo rounded-4 text-white fs-4 fw-bold p-3">
          <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
            Argenteuil, une ville rayonnante en plein cœur de la région parisienne, se distingue par son engagement en faveur d'un environnement plus vert et durable. Avec ses vastes espaces verts et ses initiatives écologiques, la ville offre un havre de tranquillité et de fraîcheur à ses habitants. Nichée entre les rives de la Seine et les collines boisées, Argenteuil dévoile une véritable oasis naturelle où il fait bon vivre. Les parcs soigneusement entretenus, tels que le Parc des Berges et le Parc de la Faisanderie, offrent des retraites paisibles pour se détendre en harmonie avec la nature. En se promenant dans les allées ombragées, on peut ressentir le souffle revigorant de l'air pur et profiter d'une parenthèse verte au sein de l'agitation urbaine.
          </p>
        
          <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
            Mais ce n'est pas tout : Argenteuil se distingue par sa vision avant-gardiste en matière de développement durable. La ville investit dans des projets innovants pour promouvoir les transports en commun, les pistes cyclables et les modes de déplacement doux. Elle encourage également la participation citoyenne à travers des actions de sensibilisation et de nettoyage de l'environnement. Grâce à son engagement en faveur de la préservation de la biodiversité et de la création d'espaces verts conviviaux, Argenteuil se profile comme un modèle inspirant pour les autres villes, montrant que l'équilibre entre urbanisme et nature est possible.
          </p>        
          <h3 className="h3 text-center graylogo rounded-4 text-white  mx-auto p-2">Vous pouvez aussi affichez les infos de votre ville :</h3>
      </article>
    </section>
  );
};

const Conception = () => {
  return (
    <div className="container graylogo p-4 col-md-10 rounded-4 mt-4 mb-4  mx-auto">
      <h2 className="text-center text-white col-12 mx-auto">Conception et réalisation du site :</h2>
      <div className="row">
        <div className="col-md-12">
          <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
            Dans l'univers du développement web, ce site se dresse en tant qu'œuvre accomplie, entièrement conçue en React. Chaque fonctionnalité, chaque détail est le fruit de l'engagement passionné d'un jeune titulaire dans ce projet. À travers ces lignes de code, s'expriment expertise et créativité, portant en elles le potentiel et la détermination d'un développeur en herbe. En toute modestie, cette réalisation ( inachever pour le moment ), est signée Oume-Azed.
          </p>
          <p className="border border-2 rounded-3 p-2 mb-3 text-white fs-5">
            Disons revenez de temps en temps comme ça vous assisterez a l'evolution du site .
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
        <div className="container graylogo col-md-10 rounded-4 mt-4 mb-4 pb-4 mx-auto">
          <h2 className="h2 text-center  text-white p-2 ">Bienvenue sur mon Blog</h2>
          {/* <section className="row col-12 mx-auto"> */}
            <div className="row mx-auto border border-2">
              <h3 className="h3 text-center text-white mx-auto">Mon CV</h3>
              <div className="row pb-3 text-center mx-auto">
                <div className="pb-3">
                  <article className="motivation">
                    <a className="btn btn-primary" href="https://1drv.ms/w/s!AleRy1V4c5HpomINf18YpxRI_TEO?e=dlQGS8" target="_blank">
                      Consulter la Formation professionnelle
                    </a>
                  </article>
                </div>
                <div className=" ">
                  <article className="motivation">
                    <a className="btn btn-primary" href="https://1drv.ms/w/s!AleRy1V4c5HpomHV4-hmVTwBJS8f?e=ymydLM" target="_blank">
                      Consulter l'expérience Professionnelle
                    </a>
                  </article>
                </div>
                
              </div>
            </div>
            <div className='mt-3 row  mx-auto border border-2'>
            <h3 className="h3 text-center text-white col-12 mx-auto">Lettre de motivation</h3>
            <div className="text-center mx-auto pb-3 ">
                  <article className="motivation">
                    <a className="btn btn-primary" href="https://1drv.ms/w/s!AleRy1V4c5HpokokMkTCTUfMiSnM?e=vWURX2" target="_blank">
                      Lettre de motivation
                    </a>
                  </article>
                </div>
            </div>
          {/* </section> */}
        </div>
  );
};

const Cgu = () => {
    return (
      <div className="container col-md-10 rounded-4 graylogo mt-4 pt-4 text-white pb-4 mb-4">
        <h2 className="h2 text-center border border-2 rounded-3 p-2">Conditions Générales d'Utilisation</h2>
        <div className="container border border-3 rounded-3 mt-4 ">
          <h5 className="fw-bold">Article 1: CGU</h5>
          <p className="border border-2 rounded-3 p-2">
            Les présentes Conditions Générales d'Utilisation, ci-après dénommées "CGU" régissent l'utilisation du blog exploité par Oume Azed, ci-après dénommé "le Blog". En utilisant le Blog, vous acceptez pleinement et sans réserve les présentes CGU. Si vous n'acceptez pas ces conditions, veuillez cesser d'utiliser le Blog.
          </p>
          <h5 className="fw-bold">Article 2: Propriété Intellectuelle</h5>
          <p className="border border-2 rounded-3 p-2">
            L'ensemble des éléments présents sur le Blog, tels que les articles, images, vidéos et autres contenus, sont protégés par les droits d'auteur et les droits de propriété intellectuelle. Toute reproduction, distribution ou utilisation non autorisée de ces éléments est strictement interdite.
          </p>
          <h5 className="fw-bold">Article 3: Utilisation Autorisée</h5>
          <p className="border border-2 rounded-3 p-2">
            L'utilisation du Blog est autorisée dans le cadre d'une consultation personnelle et non commerciale. Vous pouvez lire les articles, laisser des commentaires et partager le contenu avec attribution adéquate à Oume Azed.
          </p>
          <h5 className="fw-bold">Article 4: Comportement de l'Utilisateur</h5>
          <p className="border border-2 rounded-3 p-2">
            En utilisant le Blog, vous vous engagez à respecter les autres utilisateurs et à ne pas publier de contenu illégal, diffamatoire, offensant, discriminatoire ou violant les droits de tiers. Les commentaires doivent être respectueux et pertinents.
          </p>
          <h5 className="fw-bold">Article 5: Protection des Données Personnelles</h5>
          <p className="border border-2 rounded-3 p-2">
            Nous collectons et traitons vos données personnelles conformément à notre Politique de Confidentialité. En utilisant le Blog, vous consentez au traitement de vos données personnelles conformément à cette politique.
          </p>
          <h5 className="fw-bold">Article 6: Modifications des CGU</h5>
          <p className="border border-2 rounded-3 p-2">
            Nous nous réservons le droit de modifier les présentes CGU à tout moment. Toute modification sera notifiée aux utilisateurs par le biais d'une annonce sur le Blog. En continuant à utiliser le Blog après la notification, vous acceptez les CGU modifiées.
          </p>
          <h5 className="fw-bold">Article 7: Résiliation</h5>
          <p className="border border-2 rounded-3 p-2">
            Nous nous réservons le droit de suspendre ou de résilier votre accès au Blog en cas de non-respect des CGU ou de comportement inapproprié. Vous pouvez également résilier votre utilisation du Blog à tout moment.
          </p>
          <h5 className="fw-bold">Article 8: Limitation de Responsabilité</h5>
          <p className="border border-2 rounded-3 p-2">
            Nous mettons tout en œuvre pour fournir des informations précises et à jour sur le Blog, mais nous ne pouvons pas garantir l'exactitude ni l'exhaustivité du contenu. Nous déclinons toute responsabilité pour les dommages directs ou indirects résultant de l'utilisation du Blog.
          </p>
          <h5 className="fw-bold">Article 9: Juridiction</h5>
          <p className="border border-2 rounded-3 p-2">
            Les présentes CGU sont régies par les lois françaises. Tout litige relatif à l'utilisation du Blog sera soumis à la juridiction exclusive des tribunaux français.
          </p>
          <h5 className="fw-bold">Article 10: Contact</h5>
          <p className="border border-2 rounded-3 p-2">
            Pour toute question concernant les présentes CGU, veuillez nous contacter à azed92390@hotmail.fr.
          </p>
          <p className="border border-2 rounded-3 p-2 mb-4">
            Dernière mise à jour : 01 Janvier 2024.
          </p>
        </div>
      </div>
    );
};

export { Acceuil, RechercheMaVille, Conception, Blog, Cgu };
