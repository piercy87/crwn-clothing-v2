import { createContext, useState } from "react";

export const CartContex = createContext({
    isActive: false,
    setIsActive: () => false,
})

export const CartProvider = ({children}) => {
    const [isActive, setIsActive] = useState(false)

    const value = {
        isActive, 
        setIsActive
    }

    return (
        <CartContex.Provider value={value} >{children}</CartContex.Provider>
    )
}