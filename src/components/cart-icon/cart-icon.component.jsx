import { ReactComponent as ShoppinIcon } from '../../assesets/shopping-bag.svg'

import './cart-icon.styles.scss'

const cartIcon = () => {

    return (
        <div className='cart-icon-container'>
            <ShoppinIcon className='shopping-icon' />
            <span className='item-count' >0</span>
        </div>
    )

}

export default cartIcon