import ApiCardSearch from './ApiCardSearch/ApiCardSearch';
import formatPopulation from '../../Item/formatPopulation.js';
const ApiSearch = ({card}) => {
    // console.log(card);
    if (!card) {
        return null;
    }
    return(
        <>
        {card.map((listCard, index) => {
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
