import React from 'react';
import './ProductPage.css'
import AddToCart from '../../Buttons/AddToCart'

const ProductDetails = ({ productInfo, addToCart }) => {
    return (
            <div className="content">
                <div className='ui segment info'>
                    <div className='ui grid'>
                        <div className="eight wide column">
                            <h2>{productInfo.product_title}</h2>
                        </div>
                        <div className="eight wide column">
                            <h3 className='ui right aligned header'>{productInfo.price}</h3>
                        </div>
                    </div>
                    <div className="description product-info-segment">
                        {productInfo.description}
                    </div>
                    <div className='product-info-segment'>
                    <AddToCart addToCart={addToCart} productID={productInfo.id} />
                    </div>
                </div>
            </div>
    );
}

export default ProductDetails;