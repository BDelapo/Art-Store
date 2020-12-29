import React, { useEffect } from 'react';
import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import './SlideShow.css'
import styled from 'styled-components'
import wheat from '../../../wheat.png'
import img1 from '../../../img1.jpg'
import img2 from '../../../img2.jpg'
import { useTransition, animated } from 'react-spring'
import { useState } from 'react';


const SlideShow = () => {


  const slideImages = [
    { item: wheat, key: 1 },
    { item: img2, key: 2 },
    { item: img1, key: 3 }
  ]

  const [slideIndex, setSlideIndex] = useState(0)
  // const increment = () => { slideIndex == 2 ? setSlideIndex(state => (0)) : setSlideIndex(state => (slideIndex + 1))}
  // const interval = setInterval(increment, 5000)
  // clearInterval(interval)

  useEffect(() => {
    const interval = setInterval(() => {
      slideIndex == 2 ? setSlideIndex(state => (0)) : setSlideIndex(state => (slideIndex + 1))
    }, 8000)

    return () => clearInterval(interval)

  }, [slideIndex])


  const transitions = useTransition(slideImages[slideIndex], item => item.key, {
    from: { opacity: 0, transform: 'scale(1.1)' },
    enter: { opacity: 1, transform: 'scale(1.1)' },
    leave: { opacity: 0, transform: 'scale(1.1)' },
  })

  return transitions.map(({ item, props, key }) =>
    <animated.div style={{ ...props }}>
      <StyledSlide
        key={key}
        image={item.item}
      >
      </StyledSlide>
      <StyledSlideReflection
        key={key}
        image={item.item}
      >
      </StyledSlideReflection>
    </animated.div>)

}

const StyledSlide = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  height: 100vh;
  position: absolute;
  right: 0;
  left: 0;
`
const StyledSlideReflection = styled.div`
 background-image: url(${props => props.image});
  background-size: cover;
  height: 100vh;
  position: absolute;
  right: 0;
  left: 0;
  bottom: -199vh;
  transform:scaleY(-1);
  mask-image: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,1));
`


export default SlideShow;