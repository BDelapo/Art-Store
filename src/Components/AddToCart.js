import React from 'react'



const AddToCart = ({addToCart, product}) => {

    return ( 
        <div className="ui vertical animated button" 
        tabIndex="0" 
        onClick={()=> addToCart(product)}>
            <div className="hidden content">Shop</div>
            <div className="visible content">
                <i className="shop icon" />
            </div>
        </div> 
    );
}
 
export default AddToCart;