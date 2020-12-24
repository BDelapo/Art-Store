import React from 'react';
import './FrontPage.css'
import ProductList from './ProductList'
import SlideShow from './SlideShow';

const FrontPage = () => {
    return (
        <div>
            <div className='banner-container'>
                <div className='banner'>
                    <h1 className='slide-logo'>Magali Moth</h1>
                </div>
                <SlideShow />
            </div >
            {/* <div className='ui fluid container product-list-container'>
                <div className="ui horizontal divider">Products</div>
                <ProductList />
            </div> */}
            <div>
                <div className="ui horizontal divider">Products</div>
                <div className="">
                    <h1>Testing</h1>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;