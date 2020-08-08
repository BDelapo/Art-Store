import React from 'react';
import { Link } from "react-router-dom";
import './ProductList.css'


const ProductItem = ({ProductImg, id, ProductName, handleProduct}) => {
    
    return ( 
            <div className='fourteen wide mobile eight wide tablet five wide computer column'
            style={{ marginTop: '5rem'}}>
                <Link to={`/product/${id}`} onClick={() => handleProduct(id)}>
                <div className='ui card centered'>
                    <div className='image'>
                        <img src={ProductImg} alt='hello' />
                    </div>
                    <div className='content product-item'>
                        <a className='header'>{ProductName}</a>
                    </div>
                </div>
                </Link>
            </div>
     );
}
 
export default ProductItem;