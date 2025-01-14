import { useContext } from "react"
import { ProductsContext } from '../../../contexts/products.context'
import ProductCard from "../../product-card/product-card.component"

import './shop.styles.scss'
const Shop = () => {
    const { products } = useContext(ProductsContext)
    return (
        <div className='products-container'>
            { products ? products.map((product) => 
                <ProductCard key={product.id} product={product} /> ) 
            : 
                'No products found'
            }
        </div>
    )
}

export default Shop