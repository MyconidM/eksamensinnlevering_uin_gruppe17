import { createContext, useContext, useState } from "react";

const AppContext = createContext(null);

export const useAppContext = () => {
    const context = useContext(AppContext)

    if(context === undefined) {
        throw new Error('Appcontect must be inn appConteectProvider!')
    }

    return context; 
}


export default function AppContextProvider ({children}) {
    const [favorties, setFavorties] = useState([]);


    const addToFavorites = (game) => {
        
            const oldFavorites = [...favorties];

            const newFavorites = oldFavorites.concat(game);

            setFavorties(newFavorites);
        
        
    }

    const removeFromFavorites = (id) => {
        const oldFavorites = [...favorties];

        const newFavorites = oldFavorites.filter((game) => game.id !== id);

        setFavorties(newFavorites)
    }


    return (
        <AppContext.Provider  value={{favorties, addToFavorites, removeFromFavorites}}>
            {children}
        </AppContext.Provider>
    )
}