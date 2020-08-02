import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css'
import { ProductContext } from '../Context/ProductContext'
import CartItems from './CartItems';


//TODO: Style cart, link to checkout, display total price

const Cart = () => {

    const [products, setProducts,,,cartItems] = useContext(ProductContext)
    
    const cartList = cartItems.map(item => { 
        return <CartItems ProductImg={item.Product} ProductName={item.first_name} id={item.id} key={item.id}/> 
    })
    

    return ( 
        <div>
            <div className='ui container cart-container'>
                <div className='ui centered grid'>
                    <div className='twelve wide column'>
                        <div className='ui segment'>
                            <table className="ui selectable celled table">
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
                            <Link to='/checkout'>
                            <button className="ui button"> Checkout </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
}
 
export default Cart