import React from 'react';


const ProductItem = ({ProductImg, ID, ProductName}) => {
    return ( 
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
     );
}
 
export default ProductItem;