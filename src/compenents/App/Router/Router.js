import React from 'react';

const Acceuil = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Bienvenue sur le Site de ma Ville</h2>
      <div className="row">
        <div className="col-md-6">
          <p>
            Argenteuil, une ville rayonnante en plein cœur de la région parisienne, se distingue par son engagement en faveur d'un environnement plus vert et durable. Avec ses vastes espaces verts et ses initiatives écologiques, la ville offre un havre de tranquillité et de fraîcheur à ses habitants. Nichée entre les rives de la Seine et les collines boisées, Argenteuil dévoile une véritable oasis naturelle où il fait bon vivre. Les parcs soigneusement entretenus, tels que le Parc des Berges et le Parc de la Faisanderie, offrent des retraites paisibles pour se détendre en harmonie avec la nature. En se promenant dans les allées ombragées, on peut ressentir le souffle revigorant de l'air pur et profiter d'une parenthèse verte au sein de l'agitation urbaine.
          </p>
        </div>
        <div className="col-md-6">
          <p>
            Mais ce n'est pas tout : Argenteuil se distingue par sa vision avant-gardiste en matière de développement durable. La ville investit dans des projets innovants pour promouvoir les transports en commun, les pistes cyclables et les modes de déplacement doux. Elle encourage également la participation citoyenne à travers des actions de sensibilisation et de nettoyage de l'environnement. Grâce à son engagement en faveur de la préservation de la biodiversité et de la création d'espaces verts conviviaux, Argenteuil se profile comme un modèle inspirant pour les autres villes, montrant que l'équilibre entre urbanisme et nature est possible.
          </p>
        </div>
      </div>
    </div>
  );
};

const Conception = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Conception et réalisation du site</h2>
      <div className="row">
        <div className="col-md-12">
          <p>
            Dans l'univers du développement web, ce site se dresse en tant qu'œuvre accomplie, entièrement conçue en React. Chaque fonctionnalité, chaque détail est le fruit de l'engagement passionné d'un jeune titulaire dans ce projet. À travers ces lignes de code, s'expriment expertise et créativité, portant en elles le potentiel et la détermination d'un développeur en herbe. En toute modestie, cette réalisation est signée Oume-Azed.
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Bienvenue sur mon Blog</h2>
      <section className="row">
        <div className="col-md-12">
          <h3 className="text-center">Mon CV</h3>
          <div className="row">
            <div className="col-md-4">
              <article className="motivation">
                <a className="btn btn-primary btn-lg btn-block" href="https://1drv.ms/w/s!AleRy1V4c5HpomINf18YpxRI_TEO?e=dlQGS8" target="_blank">
                  Consulter la Formation professionnelle
                </a>
              </article>
            </div>
            <div className="col-md-4">
              <article className="motivation">
                <a className="btn btn-primary btn-lg btn-block" href="https://1drv.ms/w/s!AleRy1V4c5HpomHV4-hmVTwBJS8f?e=ymydLM" target="_blank">
                  Consulter l'expérience Professionnelle
                </a>
              </article>
            </div>
            <div className="col-md-4">
              <article className="motivation">
                <a className="btn btn-primary btn-lg btn-block" href="https://1drv.ms/w/s!AleRy1V4c5HpokokMkTCTUfMiSnM?e=vWURX2" target="_blank">
                  Lettre de motivation
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const Cgu = () => {
    return (
      <div className="container mt-4 pt-4 bg-white pb-4 mb-4">
        <h2 className="text-center border border-2 rounded-3 p-2">Conditions Générales d'Utilisation</h2>
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
            Dernière mise à jour : 27 août 2023.
          </p>
        </div>
      </div>
    );
};

export { Acceuil, Conception, Blog, Cgu };
