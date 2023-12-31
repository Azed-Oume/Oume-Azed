import ApiCardSearch from './ApiCardSearch/ApiCardSearch';
import formatPopulation from '../../Item/formatPopulation.js';
const ApiSearch = ({searchCard}) => {
    // console.log(card);
    if (!searchCard || !Array.isArray(searchCard) ) {
        return null;
    }
    return(
        <>
        {searchCard.map((listCard, index) => {
            console.log(listCard);
            return(
                        <ApiCardSearch
                        key={index}
                        ville={listCard.nom}
                        code_postal={listCard.code}
                        departement={listCard.codeDepartement}
                        population={formatPopulation(listCard.population)} 
                        />
            )
        })}
        </>
    )
  
};

export default ApiSearch;
