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
      </div>
        </>
    )
}

export default CardMaps;