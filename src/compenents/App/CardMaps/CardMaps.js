import imagesme from '../../images/me.jpg'
import images002 from '../../images/002.jpg'
import images003 from '../../images/003.jpg'

const CardMaps = () =>{
  
    return(
        <>
        <div className="google-map-container">
        <div className='image'>
        <img src={images003} alt="Description de l'image" className='image-custom-helico' />
        <img src={imagesme} alt="Description de l'image" className='image-custom' />
        <img src={images002} alt="Description de l'image" className='image-custom-helico' />
        </div>
        <h1 className="google__title">Ma ville d'Argenteuil est verte et la votre ?</h1>
        <iframe className="google-map-container"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20961.421154028983!2d2.2271986216548605!3d48.95010319945575!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66664dfcb055b%3A0x40b82c3688b36d0!2s95100%20Argenteuil!5e0!3m2!1sfr!2sfr!4v1692711987496!5m2!1sfr!2sfr"
          width="400"
          height="300"
          style={{ border: '0' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
        </>
    )
}

export default CardMaps;