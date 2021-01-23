import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import lotus from '../icons8-lotus-100.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { animated, useTransition, useSpring } from 'react-spring';
import { useMediaQuery } from 'react-responsive'

const NavBar = () => {

    const [toggle, setToggle] = useState(false)



    const navLinks = () => {
        return (
            <StyledNavList style={{...propsTopNavContent}}>
                <Link to=''>
                    <StyledNavLinks>Work</StyledNavLinks>
                </Link>
                <Link to='/Prints'>
                    <StyledNavLinks>Prints</StyledNavLinks>
                </Link>
            </StyledNavList>
        )
    }

    const foldable = useMediaQuery({query: '(max-width: 500px)'})


    const props = useSpring({
     to: {height: toggle && foldable ? '20h' : '5vh', flexDirection: foldable ?'column' : 'row',  alignItems: 'flex-start' }
    })


    const propsTopNavContent = useSpring({
        to: {
          flexDirection: 'column',
          margin: toggle||!foldable ? '0 0 0 0' : '-10rem 0 0 0',
          opacity: toggle&&foldable ? 1 : 0,
          display: toggle||!foldable ? 'flex' : 'none'
        }
      })

    return (

        <StyledNav>
            <animated.div style={{ ...props, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <StyledNavLogo >
                    <Link to='/' style={{ height: '100%', marginTop: '.1rem' }}>
                        <img src={lotus} alt='Moth' style={{ width: '2.4rem', height: '100%' }} />
                    </Link>
                    <div>
                        <h3 style={{ padding: '0rem 0 .2rem .5rem', fontFamily: 'Darker Grotesque', fontSize: '2rem' }}>Magali M. Demers</h3>
                    </div>
                </StyledNavLogo>
                <StyledNavContainer>
                    <StyledNavButton onClick={() => setToggle(!toggle)}><i class="bars icon"></i></StyledNavButton>
                    {navLinks()}
                </StyledNavContainer>
            </animated.div>
        </StyledNav>
    )

}

const StyledNavLogo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0rem;
`

const StyledNav = styled.nav`
  /* min-height: 3%;
  height: auto; */
  position: fixed;
  width: 100vw !important;
  right: 0 !important;
  left: 0 !important;
  //display: flex;
  /*justify-content: space-between;
  align-items: center; */
  z-index: 10;
  background-color: white;
  box-shadow: 0px 0px .5rem .1rem black!important; 
  padding: .75rem .4rem .5rem .9rem;
  font-family: Darker Grotesque !important;
  font-size: 1.9rem;
  @media (max-width: 500px){
    /* flex-direction: column;
    align-items: flex-start; */
  }
`

const StyledNavContainer = styled.div`
    @media(max-width: 500px){
        width: 100%;
    }
`

const StyledNavList = styled(animated.ul)`
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 500px){
    /* width: 100%;
    flex-direction: column;
    display: ${props => props.toggle ? `flex` : `none`};
    margin: 0rem 0rem 0rem 0rem;
    justify-content: flex-end; */
  }
`

const StyledNavLinks = styled.li`
  list-style: none;
  padding: .5rem;
  margin: .0rem 2rem 0rem 0rem;
  display: block;
  @media (max-width: 500px){
      text-align: center;
      padding: 1rem;
  }
`

const StyledNavButton = styled.button`
  position: absolute;
  z-index: 100;
  top: .35rem;
  right: 1.25rem;
  display: none;
  padding: .5rem;
  margin: .25 rem;
  cursor: pointer;
  background-color: transparent;
  border-style: none;
  @media (max-width: 500px){
    display: flex;
  }
`

export default NavBar