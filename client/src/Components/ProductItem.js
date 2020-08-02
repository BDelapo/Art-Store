import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductPage from './ProductPage';


const ProductItem = ({ProductImg, id, ProductName, handleProduct}) => {
    
    return ( 
        <Link to={`/product/${id}`} onClick={() => handleProduct(id)}>
            <div className='eight wide column'>
                <div className='product-item ui card'>
                    <div className='image'>
                        <img src={ProductImg} alt='hello' />
                    </div>
                    <div className='content'>
                        <a className='header'>{ProductName}</a>
                    </div>
                </div>
            </div>
        </Link>
     );
}
 
export default ProductItem;