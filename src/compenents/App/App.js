import { useEffect, useState } from "react";
import FormSearch from "../FormSearch/FormSearch";


const App = () => {

    const [card, setCard] = useState(null)

    const getCard = async () => {
      try {
        const response = await fetch('https://geo.api.gouv.fr/communes?');
        const listCard = await response.json();
        setCard(listCard);
  
      } catch (error) {
        console.error(error.message);
        alert('A priori, il n\'y a rien ici !');
      }
    };
  
    useEffect(() => {
      getCard();
    }, []);

    return (
      <div className="country">
          {card && <FormSearch items={card} />}
      </div>
  );
};

export default App;
