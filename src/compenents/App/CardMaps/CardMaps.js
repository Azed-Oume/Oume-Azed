
import React, { useEffect } from 'react';
import logofondblanc from '../../images/logofondblanc.png';
import logofondnoir from '../../images/logofondnoir.png';

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
  <section className="container col-md-10 mx-auto mt-2" style={{ background: "radial-gradient(circle, green, gray)" }}>
    <div className="row justify-content-around">
      {/* <div className="col-lg-4 col-md-6 col-sm-12 p-2">
        <img className='rounded-3 img-fluid' src={logofondblanc} alt="MON LOGO" />
      </div> */}
      <div className="col-lg-4 col-md-6 col-sm-12 p-2">
        <img className='rounded-3 img-fluid' src={logofondnoir} alt="MON LOGO " />
      </div>
    </div>
  </section>
</>

  )
}

export default CardMaps;
