import React, { useContext } from 'react';
import './ProductPage.css'
import { ProductContext } from '../../../Context/ProductContext'
import ProductDetails from './ProductDetails';

const ProductPage = () => {

    const [, , productInfo, , , , , addToCart] = useContext(ProductContext)

    return (
        <div className='ui container product-info-placement'>
            <div className='ui stackable grid'>
                <div className='eight wide column'>
                    <div className='ui items'>
                        <div className='item'>
                            <div className='content'>
                                <div className='ui segment'>
                                    <img className='ui fluid image' src={productInfo.product_image} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='eight wide column'>
                    <div className="ui items">
                        <div className="item">
                            <ProductDetails productInfo={productInfo} addToCart={addToCart}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;