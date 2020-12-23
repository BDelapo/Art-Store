import React from 'react'

//TODO: Style button

const AddToCart = ({addToCart, productID}) => {

    return ( 
        <div className="ui vertical animated button" 
        tabIndex="0" 
        onClick={()=> addToCart(productID)}>
            <div className="hidden content">Add</div>
            <div className="visible content">
                <i className="shop icon" />
            </div>
        </div> 
    );
}
 
export default AddToCart;