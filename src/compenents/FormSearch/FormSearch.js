import React, { useState } from 'react';
import ApiSearch from '../App/ApiSearch/ApiSearch';

const FormSearch = ({ items }) => {
    const [showFormSearch, setShowFormSearch] = useState(false);
    const [placeHolder, setPlaceHolder] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleOptionClick = (newPlaceholder) => {
        setShowFormSearch(true);
        setPlaceHolder(newPlaceholder);
    };

    const removeAccents = str =>
    str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (search.length  && items) {
            const filteredResults = items.filter(item =>
                removeAccents(item.nom.toLowerCase().replace(/-/g,' ')) === removeAccents(search.toLowerCase().replace(/-/g,' ')) ||
                item.codesPostaux.includes(search) ||
                item.codeDepartement === search
            );

            setSearchResults(filteredResults);

            setSearch('');
        }
    };

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    return (
        <div className="country__form">
            <h2 className="country__form__title">Ma commune ...</h2>
            <div className="country__form__search">
                <p className="country__form__content option" onClick={() => handleOptionClick('Recherche par ville:')}>Recherche par ville :</p>
                <p className="country__form__content option" onClick={() => handleOptionClick('Recherche par code-postal :')}>Recherche par code-postal :</p>
                <p className="country__form__content option" onClick={() => handleOptionClick('Recherche par departement :')}>Recherche par departement :</p>
            </div>
            {showFormSearch && (
                <form className="country__form__search" onSubmit={handleSubmit}>
                    <div className="country__form__content">
                        <input
                            type="search"
                            placeholder={placeHolder}
                            onChange={handleChange}
                            value={search}
                        />
                        <button type="submit">Lancer Votre Recherche</button>
                    </div>
                </form>
            )}


            {searchResults.length > 0 && (
                <div className="search-results country__form__search__result">
                    <h3 className='country__form__search__result result'>Résultats de la recherche :</h3>
                    <div className='country__form__search'>
                    <ApiSearch card={searchResults} />
                    </div>
                    {/* <div >
                        {searchResults.map((result, index) => (
                            <ul className="country__form__search__result result__country" key={index}>
                                <li> Ville : {result.nom}</li>
                                <li> Code Postal : {result.codesPostaux.join(", ")}</li>
                                <li> Département : {result.codeDepartement}</li>
                                <li> Population : {formatPopulation(result.population)}</li>
                                <li>
                                    ok
                                </li>
                            </ul>
                        ))}
                    </div> */}
                </div>
            )}
        </div>
    );
}

export default FormSearch;
