import axios from "axios";
import { useState, useEffect, createContext } from "react";

const DrinksContext = createContext()

const DrinksProvider = ({children}) => {
    

    return(
        <DrinksContext.Provider
            value={{
                
            }}
        >
            {children}
        </DrinksContext.Provider>
    )
}

export {DrinksProvider}

export default DrinksContext