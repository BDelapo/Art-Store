import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext'
import CartItems from './CartItems';

const Cart = () => {

    const [products, setProducts,,,cartItems] = useContext(ProductContext)
    
    const cartList = cartItems.map(item => { 
        return <CartItems ProductImg={item.Product} ProductName={item.first_name} id={item.id} key={item.id}/> 
    })
    

    return ( 
        <div>
            <div className='ui container product-list'>
                <div className='ui centered grid'>
                    <div className='twelve wide column'>
                        <div className='ui segment'>
                            <table class="ui selectable celled table">
                                <thead>
                                    <tr>
                                     <th>Name</th>
                                     <th>Status</th>
                                     <th>Notes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default Cart