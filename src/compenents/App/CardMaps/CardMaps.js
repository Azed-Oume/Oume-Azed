import imagesme from '../../images/me.jpg'
import images002 from '../../images/002.jpg'
import images003 from '../../images/003.jpg'
import desertMaron from '../../images/la_feuille_2.jpg'

const CardMaps = () =>{
  
    return(
        <>
            <div className="container row mx-auto col-md-12 col-lg-12 col-12 mt-4">
                
                <div className="col-md-4 bg-secondary mb-4 p-1 rounded-3"
                style={{
                    backgroundImage: `url(${desertMaron})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    /* Autres styles si nécessaire */
                  }}>
                    <div className="card border border-1 ">
                    <img
                        src={images003}
                        alt="Description de l'image"
                        className="card-img-top rounded-3"
                        style={{ width: "auto", height: "20rem" }}
                    />
                    </div>
                </div>
                <div className="col-md-4 bg-secondary mb-4 p-1 rounded-3"
                style={{
                    backgroundImage: `url(${desertMaron})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    /* Autres styles si nécessaire */
                  }}>
                    <div className="card border border-1 ">
                    <img
                        src={imagesme}
                        alt="Description de l'image"
                        className="card-img-top rounded-3"
                        style={{ width: "auto", height: "auto" }}
                    />
                    </div>
                </div>
                <div className="col-md-4 bg-secondary mb-4 p-1 rounded-3"
                style={{
                    backgroundImage: `url(${desertMaron})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    /* Autres styles si nécessaire */
                  }}>
                    <div className="card border border-1 ">
                    <img
                        src={images002}
                        alt="Description de l'image"
                        className="card-img-top rounded-3"
                        style={{ width: "auto", height: "20rem" }}
                    />
                    </div>
                </div>
                <div className="col-md-12 card-body">
                    <h2 className="card-title col-md-12 mx-auto h2 m-3 p-3 bg-success border border-3 rounded-4 text-white text-center fw-bold">
                    Ma ville d'Argenteuil est verte et la votre ?
                    </h2>
                </div>
            </div>
        </>
    )
}

export default CardMaps;