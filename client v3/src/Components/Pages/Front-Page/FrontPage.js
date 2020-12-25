import React from 'react';
import './FrontPage.css'
import ProductList from './ProductList'
import SlideShow from './SlideShow';

const FrontPage = () => {
    return (
        <div style={{'height': `200vh`}}>
            <div className='banner-container'>
                <div className='banner'>
                    <h1 className='slide-logo'>Magali Moth</h1>
                </div>
                <SlideShow />
        </div >
             <div>
                <div className="about-container">
                    <h1>About</h1>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;