import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext'

const Cart = () => {

    const [products, setProducts] = useContext(ProductContext)

    return ( 
        <div>
            <div className='ui container product-list'>
                <div className='ui centered grid'>
                    Cart
                </div>
            </div>
        </div>
     )
}
 
export default Cart;