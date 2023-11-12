import imagesme from '../../images/me.jpg'
import images002 from '../../images/002.jpg'
import images003 from '../../images/003.jpg'

const CardMaps = () =>{
  
    return(
        <>
        <div className="container col-md-12  mt-4">
            <div className="row mx-auto border-3 rounded-4 col-md-12 mb-4 p-3 ">
                <div className="col-md-4  bg-secondary border border-3 mb-4 p-3 rounded-4 ">
                    <div className="card border border-3 ">
                        <img
                            src={images003}
                            alt="Description de l'image"
                            className="card-img-top"
                            style={{width: "auto", height: "auto"}}
                        />
                    </div>
                </div>
                <div className="col-md-4  bg-secondary border border-3 mb-4 p-3 rounded-4 ">
                    <div className="card border border-3 ">
                        <img
                            src={imagesme}
                            alt="Description de l'image"
                            className="card-img-top"
                            style={{width: "auto", height: "auto"}}
                        />
                    </div>
                </div>
                <div className="col-md-4  bg-secondary border border-3 mb-4 p-3 rounded-4 ">
                    <div className="card border border-3 ">
                        <img
                            src={images002}
                            alt="Description de l'image"
                            className="card-img-top"
                            style={{width: "auto", height: "auto"}}
                        />
                    </div>
                </div>
            </div>
            <div className="card-body">
                  <h2 className="card-title col-md-12 mx-auto h2 m-3 p-3 bg-success border border-3 rounded-4 text-white text-center fw-bold">Ma ville d'Argenteuil est verte et la votre ?</h2>
            </div>
        </div>
        </>
    )
}

export default CardMaps;