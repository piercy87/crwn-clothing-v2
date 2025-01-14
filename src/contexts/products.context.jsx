import { useEffect } from "react";
import { createContext, useState } from "react";
import PRODUCT_DATA from '../shop-data/shop-data.json'

export const ProductsContext = createContext({
    products: [],
    setCurrentUser: () => [],
})

export const ProductsProvider = ({ children }) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        console.log('From product context' ,PRODUCT_DATA)
        setProducts(PRODUCT_DATA)
    },[])

    const value = {
        products, setProducts
    }
    return (
        <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
    )
}