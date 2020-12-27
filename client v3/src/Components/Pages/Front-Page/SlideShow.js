import React from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import styled from 'styled-components'
import wheat from '../../../wheat.png'
import img1 from '../../../img1.jpg'
import img2 from '../../../img2.jpg'


const SlideShow = () => {

    const slideImages = [
        wheat,
        img2,
        img1
    ];

    const properties = {
      duration: 5000,
      transitionDuration: 1500,
      infinite: true,
      prevArrow: <div style={{width: "30px", marginRight: "-30px", marginTop: "-100vh"}}><i className="angle double left icon arrows"></i></div>,
      nextArrow: <div style={{width: "30px", marginLeft: "-40px", marginTop: "-100vh"}}><i className="angle double right icon arrows"></i></div>
    };
  

    return (
      <StyledSlideShow>
        <Slide {...properties}>
          <div>
          <StyledSlide slideImage = {slideImages[0]} />
          <StyledReflection slideImage = {slideImages[0]}></StyledReflection>
          </div>
          <div>
          <StyledSlide slideImage = {slideImages[1]} />
          <StyledReflection slideImage = {slideImages[1]}> </StyledReflection>
          </div>
          <div>
          <StyledSlide slideImage = {slideImages[2]} />
          <StyledReflection slideImage = {slideImages[2]}> HELLO </StyledReflection>
          </div>
        </Slide>
      </StyledSlideShow>

    );
}

const StyledSlideShow = styled.div `
    width:inherit;
    height:100vh;
    bottom:-100vh;
    overflow-y: visible;
`;

const StyledSlide = styled.div `
    background-image: url(${props => props.slideImage}) ;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;
    height: 100vh;
`;

const StyledReflection = styled.div `
  border-style: hidden;
  border-width: 100px;
  background-image: url(${props => props.slideImage}) ;
  background-size: cover;
  align-self: flex-end;
  height:100vh;
  transform:scaleY(-1);
  width: 100%;
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
`;


export default SlideShow;