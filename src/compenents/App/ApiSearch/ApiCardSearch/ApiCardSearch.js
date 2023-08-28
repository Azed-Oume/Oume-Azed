const ApiCardSearch = ({ ville, code_postal, departement, population}) =>{
    return(
        <>
            <ul className="card__search">
                <li className="card__search__text">  Ville : {ville}</li> 
                <li className="card__search__text">  Code Postal : {code_postal}  </li> 
                <li className="card__search__text">  Département : {departement}</li>
                <li className="card__search__text">  Population :  {population}</li>
            
            </ul>
        </>
    )
}


export default ApiCardSearch;