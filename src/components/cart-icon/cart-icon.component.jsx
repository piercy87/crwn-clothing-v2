import { useContext } from 'react'
import { ReactComponent as ShoppinIcon } from '../../assesets/shopping-bag.svg'
import { CartContex } from '../../contexts/cart.contex'

import './cart-icon.styles.scss'

const CartIcon = () => {

    const { setIsActive, isActive } = useContext(CartContex)

    const toggle = () => setIsActive(!isActive)

    return (
        <div className='cart-icon-container'>
            <ShoppinIcon onClick={toggle} className='shopping-icon' />
            <span className='item-count' >0</span>
        </div>
    )

}

export default CartIcon