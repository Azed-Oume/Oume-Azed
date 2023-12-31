const ApiCardSearch = ({ ville, code_postal, departement, population}) =>{
    return(
        <>
            <div className="form-control bg-secondary rounded-4 fw-bold text-white  ">
            <ul >
                <li className="">  Ville : {ville}</li> 
                <li className="">  Code Postal : {code_postal}  </li> 
                <li className="">  Département : {departement}</li>
                <li className="">  Population :  {population}</li>
            
            </ul>
            </div>
        </>
    )
}


export default ApiCardSearch;