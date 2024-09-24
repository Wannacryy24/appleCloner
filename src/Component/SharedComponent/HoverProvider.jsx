import { createContext, useState } from "react";

export const HoverContext =  createContext();

export const HoverContextProvider = ({children}) => {
    const [showLiDetails, setShowLiDetails] = useState(false);
    return (
        <HoverContext.Provider value={{showLiDetails , setShowLiDetails}}>
        {children}
        </HoverContext.Provider>
    )
}