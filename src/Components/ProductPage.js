import React, { useContext } from 'react';
import './ProductPage.css'
import { ProductContext } from '../Context/ProductContext'

const ProductPage = () => {

    const [products, setProducts, productInfo, setProductInfo, handleProduct] = useContext(ProductContext)
    console.log(productInfo.Product)
    return (
        <div>
            <div className='ui container product-list'>
                <div className='ui grid'>
                    <div className='eight wide column'>
                        <img className='ui fluid image' src={productInfo.Product} />
                    </div>
                    <div className='eight wide column'>
                        <div className="ui items">
                            <div className="item">
                              <div className="content product-info">
                                <div className='ui segment'>
                                    <h3 className="ui center aligned header">{productInfo.first_name}</h3>
                                    <div className="description">
                                    <p></p>
                                    <p></p>
                                    </div>
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