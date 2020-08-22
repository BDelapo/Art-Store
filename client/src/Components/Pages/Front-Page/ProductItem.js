import React from 'react';
import { Link } from "react-router-dom";
import './ProductList.css'


const ProductItem = ({ProductImg, ProductName, ProductPrice, ProductDescript, id, handleProduct}) => {
    
    return ( 
            <div className='fourteen wide mobile eight wide tablet five wide computer column'
            style={{ marginTop: '5rem'}}>
                <Link to={`/product/${id}`} onClick={() => handleProduct(id)}>
                <div className='ui card centered'>
                    <div className='image'>
                        <img src={ProductImg} alt='hello' />
                    </div>
                    <div className='content product-item'>
                        <div className='header'>{ProductName}</div>
                        <div>{ProductPrice}</div>
                    </div>
                </div>
                </Link>
            </div>
     );
}
 
export default ProductItem;