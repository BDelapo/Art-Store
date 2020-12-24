import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import wheat from '../../../wheat.png'
import img1 from '../../../img1.jpg'
import img2 from '../../../img2.jpg'


const SlideShow = () => {

    const slideImages = [
        wheat,
        img2,
        img1
    ];

    return (
        <div>
        <Slide>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
            </div>
          </div>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
            </div>
          </div>
        </Slide>
      </div>

    );
}

export default SlideShow;