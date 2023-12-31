import React, { useState, useEffect, useRef } from 'react';
import ApiSearch from '../App/ApiSearch/ApiSearch';
import formatPopulation from '../Item/formatPopulation';

const FormSearch = ({ items }) => {
    const [showFormSearch, setShowFormSearch] = useState(false);
    const [placeHolder, setPlaceHolder] = useState('');
    const [search, setSearch] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const inputRef = useRef(null); // Ajout de la référence à l'élément input

    const handleOptionClick = (newPlaceholder) => {
        setShowFormSearch(true);
        setPlaceHolder(newPlaceholder);
    };

         // Utilisation de useEffect pour définir le focus sur l'élément input
    useEffect(() => {
        if (showFormSearch && inputRef.current) {
            inputRef.current.focus();
            inputRef.current.select(); // Sélectionner tout le texte dans l'input
        }
    }, [showFormSearch]);


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
        <div className="container bg-secondary mb-4 p-4 rounded">
            <h2 className="h2 text-center bg-secondary text-white fw-bold mb-2">Ma commune ...</h2>
            <div className="container text-center ">
                <button className="btn btn-primary text-center m-2" onClick={() => handleOptionClick('Recherche par ville:')}>Recherche par ville :</button>
                <button className="btn btn-primary text-center m-2" onClick={() => handleOptionClick('Recherche par code-postal :')}>Recherche par code-postal :</button>
                <button className="btn btn-primary text-center m-2" onClick={() => handleOptionClick('Recherche par departement :')}>Recherche par departement :</button>
            </div>
            {showFormSearch && (
                <form className="form-control bg-secondary text-white fw-bold mb-2 text-center" onSubmit={handleSubmit}>
                    <div className="m-1 col-4 mx-auto">
                        <input 
                            className="form-control "
                            id='search-input' 
                            ref={inputRef} // Associer la référence à l'élément input
                            type="search"
                            placeholder={placeHolder}
                            onChange={handleChange}
                            value={search}
                        />
                        <button className='btn btn-success m-2' type="submit">Lancer Votre Recherche</button>
                    </div>
                </form>
            )}

            {searchResults.length > 0 && (
                <div className='p-2 bg-white '>
                    <h3 className='h3 text-center bg-secondary text-white fw-bold mb-2 rounded '>Résultats de la recherche :</h3>
                        <div className='bg-info col-12'>
                            
                            <div className='row mx-auto rounded-5 bg-white col-4 text-white fw-bold mb-2'>
                                <ApiSearch searchCard={searchResults} />
                            </div>
                        </div>
                </div>
            )}
        </div>
    );
}

export default FormSearch;
