import axios from "axios";
import { useState, useEffect, createContext } from "react";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {

    const [drinks, setDrinks] = useState([])
    const [modal, setModal] = useState(false)
    const [drinkId, setDrinkId] = useState(null)
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        const obtainRecipe = async () => {
            if(!drinkId) return
            try {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`
                
                const {data} = await axios(url)
                setRecipe(data.drinks[0])
            } catch (error) {
                console.log(error)
            }
        }
        obtainRecipe()
    }, [drinkId])
    
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

    const handleDrinkIdClick = id => {
        setDrinkId(id)
    }

    return(
        <DrinksContext.Provider
            value={{
                CheckDrink,
                drinks,
                handleModalClick,
                modal,
                handleDrinkIdClick,
                recipe
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}

export default DrinksContext