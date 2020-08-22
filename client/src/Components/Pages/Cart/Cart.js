import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Cart.css'
import { ProductContext } from '../../../Context/ProductContext'
import CartItems from './CartItems';


//TODO: Style cart, link to checkout, display total price

const Cart = () => {

    const [products, setProducts, , , cartItems] = useContext(ProductContext)

    const cartList = cartItems.map(item => {
        console.log(item.id)
        return <CartItems ProductImg={item.product_image} ProductName={item.product_title} ProductPrice={item.price} id={item.id} key={item.id} />
    })

    const totalPrice = () => {
        if (cartList.length !== 0) {
            return cartItems.map(item => item.price).reduce((itemPrice, totalPrice) => itemPrice + totalPrice)
        }
    }

    return (
        <div>
            <div className='cart-banner'>
                <h1>hello</h1>
            </div>
            <div className='ui container cart-container'>
                <div className='ui stackable centered grid'>
                    <div className='twelve wide column'>
                        <div className='ui segment'>
                            <table className="ui selectable celled table">
                                <thead>
                                </thead>
                                <tbody>
                                    {cartList}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className='four wide column'>
                        <div className='ui segment'>
                            <h4> Total: {totalPrice()}</h4>
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