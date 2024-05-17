/* eslint-disable react/prop-types */
import {  createContext, useContext, useState } from "react";

 const MyContext = createContext();
export const useMyContect = () =>{
    return useContext(MyContext)
}

export const MyContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);

    const allObj = {
        cart, setCart
    }

    return <MyContext.Provider value={allObj}>{children}</MyContext.Provider>
    
}
