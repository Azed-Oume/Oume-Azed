

import React, { useState, useEffect } from 'react';

const WhatsAppButton = ({ phoneNumber }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(window.scrollY > 50);   
    }

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const handleClick = () => {
        // Générer le lien profond WhatsApp avec le numéro de téléphone
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        // Ouvrir WhatsApp dans un nouvel onglet lorsque le bouton est cliqué
        window.open(whatsappLink, '_blank');
    };

    return (
        <div
            className={`position-fixed top-0 end-0 ${isVisible ? 'visible' : 'invisible'}`}
            style={{ opacity: isVisible ? '0.9' : '0', transition: 'opacity 0.6s', zIndex: '10' }}
        >
            <button 
                className='btn btn-secondary fw-bold scroll'
                onClick={handleClick}
                style={{
                    boxShadow: '5px 5px 5px 5px rgba(3, 100, 24, 0.5)',
                    background: 'rgba(3, 100, 24, 0.5)',
                    color: 'black',
                    transition: 'box-shadow 0.3s'
                }}
                onMouseOver={(e) => e.target.style.boxShadow = '5px 5px 5px 5px rgba(3, 100, 24, 0.9)'}
                onMouseOut={(e) => e.target.style.boxShadow = '5px 5px 5px 5px rgba(3, 100, 24, 0.3)'}
            >
                Bonjour, Comment je peux vous aider !
            </button>
        </div>
    );
}

export default WhatsAppButton;
