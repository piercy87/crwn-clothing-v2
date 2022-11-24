import { createContext, useState } from "react";

export const CartContex = createContext({
    products: [],
    isActive: false
})

export const CartProvider = ({children}) => {

    const value = {

    }

    return (
        <CartContex.Provider >{children}</CartContex.Provider>
    )
}