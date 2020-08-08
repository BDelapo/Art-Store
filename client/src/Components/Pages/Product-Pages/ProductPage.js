import React, { useContext } from 'react';
import './ProductPage.css'
import { ProductContext } from '../../../Context/ProductContext'
import AddToCart from '../../Buttons/AddToCart'

const ProductPage = () => {

    const [, , productInfo, , , , , addToCart] = useContext(ProductContext)

    return (
        <div className='ui container product-info-placement'>
            <div className='ui stackable grid'>
                <div className='eight wide column'>
                    <div className='ui items'>
                        <div className='item'>
                            <div className='content product-info'>
                                <div className='ui segment'>
                                    <img className='ui fluid image' src={productInfo.Product} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='eight wide column'>
                    <div className="ui items">
                        <div className="item">
                            <div className="content product-info">
                                <div className='ui segment'>
                                    <h3 className="ui center aligned header">{productInfo.first_name}</h3>
                                    <div className="description">
                                        <AddToCart addToCart={addToCart} product={productInfo} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;