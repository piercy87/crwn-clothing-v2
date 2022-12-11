import './cart-dropdown.styles.scss'
import Button from '../Lib/Button/Button.component'
import { useContext } from 'react'
import { CartContex } from '../../contexts/cart.contex'

const CartDropdown = () => {

    const { isActive } = useContext(CartContex)
    
    if (isActive) {
        return (
            <div className='cart-dropdown-container' >
                <div className='cart-items'>
                    <Button >GO TO CHECKOUT</Button>
                </div>
    
            </div>
        ) 
    } else {
        return (
            null
        )
    }
    
}

export default CartDropdown