import axios from "axios";
import { useState, useEffect, createContext } from "react";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    
    const CheckDrink = async DrinkData => {
        try {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${DrinkData.name}&c=${DrinkData.category}`

            const {data} = await axios(url)
            setDrinks(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    const handleModalClick = () => {
        setModal(!modal)
    }

    return(
        <DrinksContext.Provider
            value={{
                CheckDrink,
                drinks,
                handleModalClick,
                modal
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}

export default DrinksContext