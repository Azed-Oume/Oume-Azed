
import React, { useEffect } from 'react';
// import imagesme from '../../images/me.jpg';
// import images002 from '../../images/002.jpg';
// import images003 from '../../images/003.jpg';
import mon_logo2 from '../../images/mon_logo2.png';
import Design from '../../images/Design.png';
import dev_oume1 from '../../images/dev_oume1.png';
import my_logo_sans_fond from '../../images/my_logo_sans_fond.png';
import my_logo_fondnoir from '../../images/my_logo_fondnoir.png';

import SquareAnimation from '../Animated/SquareAnimation.js';
import "../Animated/animated.css"

const CardMaps = () => {
  const timeEffect = 1000;
  useEffect(() => {
    const revealImages = () => {
      const imageContainers = document.querySelectorAll('.image-container');
      imageContainers.forEach(container => {
        const image = container.querySelector('img');
        image.classList.add('is-active');
      });
    };

    revealImages(); // Révélez les images après le rendu initial
  }, []);


  return (
    <>
      <section className="container row mx-auto mt-2">
        <article className="col-md-4 p-1 ">
          <div className="card linear-gradient p-2 image-container" style={{ background: "linear-gradient(to right, green, yellow)" }}>
            <img className='rounded-3 ' src={my_logo_sans_fond} alt="Moi en formation au SAMU descendant d'un hélicoptère" />
            <p className='text-center bg-secondary text-white fw-bold mt-2'>Pendant mon stage au SAMU</p>
          </div>
        </article>
        <article className="col-md-4 p-1 ">
          <div className="card radial-gradient p-2 image-container" style={{ background: "radial-gradient(circle, green, yellow)" }}>
            <img className='rounded-3 ' src={mon_logo2} alt="Moi en vacances en 2020 " />
            <p className='text-center bg-secondary text-white fw-bold mt-2'>Mes Dernières vacances vers l'ouest</p>
          </div>
        </article>
        <article className="col-md-4 p-1 ">
          <div className="card conic-gradient p-2 image-container" style={{ background: "conic-gradient(from 45deg, green, yellow)" }}>
            <img className='rounded-3 ' src={my_logo_fondnoir} alt="Moi en formation au SAMU descendant d'un hélicoptère" />
            <p className='text-center bg-secondary text-white fw-bold mt-2'>Pendant mon stage au SAMU</p>
          </div>
        </article>
        <div className="card-body">
          <h1 className="card-title mx-auto h1 m-3 p-3 bg-success border border-3 rounded-4 text-white text-center fw-bold animate__animated animate__slideInRight animate__slower ">
            Ma ville d'Argenteuil est verte et la votre ?
          </h1>
        </div>
        
        <SquareAnimation />
      </section>
    </>
  )
}

export default CardMaps;
