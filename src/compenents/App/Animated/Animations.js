

import React, { useEffect } from 'react';

const Animations = () => {
    useEffect(() => {
            // Définir les @keyframes dans le même fichier
const keyframesStyles = `
@keyframes moveRight {
    0% { left: 0; }
    100% { left: calc(100% - 100px)
}`;

    // Injection des @keyframes dans le style global de l'application
    const style = document.createElement('style');
    style.innerHTML = keyframesStyles;
    document.head.appendChild(style);

        // Utilisation de useEffect pour s'assurer que le code est exécuté après le rendu du composant
        const tunnelElement = document.getElementById("tunnel");
        const squareElement = document.getElementById("square");
        const aliceElement = document.getElementById("alice");

        if (tunnelElement && squareElement && aliceElement) {
            tunnelElement.animate([
                { transform: 'translate3D(0, 0, 0)' }, 
                { transform: 'translate3D(0, 300px, 0)' }
            ], {
                duration: 5000,
                iterations: Infinity
            });

            const aliceTumbling = [
                { transform: 'rotate(0) translate3D(-50%, -50%, 0)', color: '#000' }, 
                { color: '#431236', offset: 0.3 },
                { transform: 'rotate(360deg) translate3D(-50%, -50%, 0)', color: '#431236' }
            ];
            
            const aliceTiming = {
                duration: 3000,
                iterations: Infinity
            };
            
            aliceElement.animate(
                aliceTumbling, 
                aliceTiming
            );

            squareElement.animate([
                // {transform: "translateX(0)" , offset: 0},
                // {transform: "translateX(200px)" , offset: 0.2, delay: 2000},
                // {transform: "translateX(400px)" , offset: 0.4, delay: 2000},
                // {transform: "translateX(600px)" , offset: 0.6, delay: 2000},
                // {transform: "translateX(800px)" , offset: 0.8, delay: 2000},
                // {transform: "translateX(0)" , offset: 1}
                {transform: "translateX(0)"}, // Départ
    {transform: "translateX(10%)"}, // 1ère étape
    {transform: "translateX(10%)"}, // Pause après la 1ère étape
    {transform: "translateX(20%)"}, // 2ème étape
    {transform: "translateX(20%)"}, // Pause après la 2ème étape
    {transform: "translateX(30%)"}, // 3ème étape
    {transform: "translateX(30%)"}, // Pause après la 3ème étape
    {transform: "translateX(40%)"}, // 4ème étape
    {transform: "translateX(40%)"}, // Pause après la 4ème étape
    {transform: "translateX(50%)"}, // Pause après la 4ème étape
    {transform: "translateX(50%)"}, // Pause après la 4ème étape
    {transform: "translateX(60%)"}, // Pause après la 4ème étape
    {transform: "translateX(60%)"}, // Pause après la 4ème étape
    {transform: "translateX(70%)"}, // Pause après la 4ème étape
    {transform: "translateX(70%)"}, // Pause après la 4ème étape
    {transform: "translateX(80%)"}, // Pause après la 4ème étape
    {transform: "translateX(80%)"}, // Pause après la 4ème étape
    {transform: "translateX(0)"}, // Retour à la position initiale
            ], {
                duration: 8000,
                iterations: Infinity
            });

            // squareElement.style.animation = 'moveRight 10s linear infinite';
        }
    }, []);

    return (
        <div className="position-relative">
            <div className=" position-absolute top-10 start-0 square" id='square' style={{width: "100px", heidth: "100px", background: "yellow"}}>
                <p className='bg-white'>COMMENT FAIRE</p>
            </div>
            <div className="wrapper">
                <div id="tunnel" style={{width: "100px", height: "100px", background: "yellow"}}> LE TUNNEL</div>
                <div id="alice" style={{width: "300px", heidth: "300px", background: "green"}}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"><path d="M110.1 2.7h8.9c3.4.4 6.7.8 10.1 1.3 9.8 1.5 17.8 6.4 24.5 13.7.4.5 1.9.6 2.5.3 6.8-4.4 13.9-8.2 21.9-9.9 1.3-.3 3.4-1.2 3.7 1.5.6 4.9 1.4 9.9 1.7 14.8.3 4.4.1 8.7.1 12.2 2.1 1.5 4.6 2.3 5.5 4 4.2 8.4 3.2 17.6 3.1 26.6 0 1.2-.4 3.3.1 3.6 10.3 4.9 20.7 9.6 31.1 14.4 2.5-4.9-2.3-16-15.8-14.4.6-.5 1.4-1.1 2.2-1.1 2.5.1 4.9.4 7.4.7 6 .8 10.9 3.7 14.6 8.4 1.2 1.5 1.6 4.2 1.1 6.1-.7 3.2-3.7 4-7.1 4.1 4.5 3.5 6.5 8.1 6.8 13.3.6 9.4-1.1 18.6-4.8 27.1-3.9 8.8-5.2 17.5-3.3 26.8.6 3.2 1.2 7 .2 9.9-2 6.2-7.8 8.6-13.4 10.9-3 1.2-7.4 1.2-6.3 6.3.8 3.7-.4 4 .2 4.5 5.8 5.8 11.8 11.5 17.6 17.3 1.7 1.7 3 3.8 4.3 5.5-1.1.4-1.8.7-2.4 1 7.5 5.8 14.9 11.6 22.4 17.4 4.3-4.3 8.6-9 13.3-13.2 8.1-7.3 16.7-14 24.5-21.7 3.3-3.3 4.9-8.2 7.4-12.3.3-.4 1.3-.9 1.6-.7 4.6 2.7 6.8 7.2 7.9 12.1 1.3 5.7 1.6 11.6 2.3 17.1 4.2-.2 8.8-.8 13.4-.4 2 .1 4.6 1.8 5.5 3.5 2.2 4.3 3.8 8.9 5.3 13.5 3.7 11.5 6.9 23.2 10.7 34.7 1.7 5.1 3.4 10.4 8.6 13.4.5.3.5 2.7 0 3.1-3.3 2.5-6.9 4.6-10.5 7 2 5.8 4.3 12.6 6.7 19.6.7-.8 1.4-1.6 2.1-2.3 1.9-1.9 3.5-1.6 4.2 1.2.7 3 1.3 6.2 1.5 9.3.3 7.3.4 14.6.6 21.9 0 .4.2.8.5 1.2 3.6 4.7 7.1 9.3 10.7 14 1.7 2.3 3 5.4 5.3 6.6 5.5 2.7 11.5 4.4 17.3 6.6v.7c-.4.3-.7.8-1.2 1-5.8 2.1-11.6 4.3-17.5 6.2-4.2 1.3-8.4 2-12.4-1.2-1.8-1.5-3.9-2.6-5.8-3.8 0 2.3.1 4.4-.1 6.4-.1.8-.7 2.2-1.2 2.2-2.6.2-5.3.1-7.9.1-1.1 0-2.7.3-3.2-.3-1-1.2-2.1-2.9-2.1-4.4-.1-5.2.1-10.4.3-15.6.1-1.8 1.5-3.9.9-5.4-1.7-4.3-4-8.4-6.1-12.5-2.4-4.6-6.4-9.1-1.2-14.3.3-.3.3-1.3 0-1.7-4.7-6.5-9.5-13.1-14.4-19.5-1.2-1.5-2.9-3.7-4.4-3.7-6.7.1-13.4.8-20.1 1.3-.7.1-1.6.2-1.9.6-7.1 9.1-14 18.3-21.1 27.4-1.3 1.7-2.9 3.4-4.3 5 1.7.6 3.3 1.1 4.8 1.7.6.2 1.3.5 1.6 1 .2.3-.1 1.1-.4 1.5-2 2.6-4.1 5.2-6.1 7.8-4.3 5.3-8.7 10.5-13 15.9-.8 1-1.5 2.4-1.6 3.6-.2 5.4-.1 10.7-.1 16.1 0 1.5-.7 3.6 .1 4.5 2.4 3 5.3 5.5 7.9 8.2 1.6 1.7 3 3.5 4.6 5.5-2.6.2-4.5.3-6.4.4h-3.7c-4.8-1.4-9.8-2.5-14.5-4.3-3.5-1.4-7.8-2.5-8-7.7-.1-2.1-.2-4.3-.4-6.7-1 1.1-1.7 2.1-2.6 2.9-.3.3-1 .4-1.3.2-1.9-1.1-3.7-2.2-5.5-3.4-1.7-1.1-4.5-1.6-3.5-4.5 2.3-6.5 6.4-11.6 12.7-14.9.6-.3 1.3-.9 1.6-1.5 3.9-8.2 7.8-16.4 11.8-24.6 .7-1.5 .4-4.5 3.8-3.8 .2.1 1.2-3.1 1.8-4.9-2.8 1.5-5 2.9-7.4 3.9-7.4 3-14.7 6.4-23.1 5.6-8.5-.7-16.2-3.4-23.2-8-9.9-6.7-14.2-17-17.5-27.9-.5-1.7-.5-5.1-3.5-1.6-.1.2-.4.2-.6.3-2.5 1.7-5.4 3-6 6.5-.4 2.3-1 4.6-1.5 7-2.9 13.2-4.2 26.4-2.5 39.9 1.7 13.1 9.2 21.3 21 26.3 2.4 1 4.9 1.9 7.5 2.9-2.1 .9-3.9 1.9-5.8 2.3-10.2 2.5-20.5 4.9-30.8 7.1-1.9 .4-4.9 .7-5.9-.3-6.4-6.5-8.9-14.8-8.3-23.7 .7-9.6 2.1-19.2 3.9-28.6 2.2-11.5 6.1-22.5 11.7-32.9 .7-1.3 2-3.1 1.6-4.1-1.8-4.6-4.5-8.9-6.2-13.6-2-5.7-4.2-11.6-1.2-17.8 .1-.1-.3-.5-.5-.8 7.6 .7 12.8 5.3 17.7 10.2-1.3-8.5-2.6-17.2-3.9-25.8 0-.3 -.2-.7 -.4-.9-6.7-5.5-13.3-11.2-17-19.2-2.6-5.7-4.3-11.8-6.3-17.7-.6-1.6 .2-3.4-2.2-4.8-5.9-3.5-10.3-8.6-10.3-16 0-1.8 1.2-5 2.2-5.1 8.3-1.2 16.4-.1 23.8 4.2 2.4 1.4 4.9 2.7 8.1 4.4-.4-8.8-.8-16.2-1.2-23.6-4.2 .9-8.6 .9-11.5-2 -3.3-3.3-5.4-7.8-7.9-11.8-1.1-1.7-2-3.6-3.5-6.4-3.8 10.3-7.4 19.9-10.8 29.1-.3-.6-1.1-1.7-1.5-2.9-3.5-10-2.8-20.2-1.1-30.3 1.2-7.4 4.3-14.6 3.1-22.4 -.2-1.1 .2-2.3 .3-3.4-22.1 17.6-38.8 38.4-42.9 67.4-4 28-2.8 54.8 13.5 79.1-36.3-13.8-53-48.6-58.3-84.1-3 8-15 16.3-22.4 16.6v-.2c2.1-2.9 11.1-10.6 7-30.2-1.3-10.7-4.1-21.2-5.1-31.9-1-10.9-1-21.9-.5-32.9.3-11.6 3.8-22.7 8.6-33.2 5.7-12.5 13.5-23.8 23-33.6 5.6-5.8 11.9-11 18.2-16.1 8.6-6.8 17.7-12.9 28.2-16.5 5.1-1.9 10.4-3 15.7-4.5zm96.4 221.9c-.4 .9-1.2 2-1.1 3 .5 7.6 1.2 15.2 2 22.7 .2 2.1 0 4.8 3.3 5.5 3.3 .7 6.6 1.8 9.9 2.6 .3 .1 .9-.1 1.1-.4 3.8-4.8 7.5-9.6 10.9-14 -8.4-6.1-17.1-12.6-26.1-19.4zm-23.1-42.5v6.3c1.9-2 3.6-3.9 5.3-5.7-1.7-.2-3.5-.4-5.3-.6z"/></svg>
                </div>
            </div>
        </div>
    );
}

export default Animations;
