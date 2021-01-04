import React, { useState } from 'react'
import styled from 'styled-components'
const NavBar = () => {

    const [toggle, setToggle] = useState(false)

    const navLinks = () => (
            <StyledNavList toggle={toggle}>
                <StyledNavLinks>Work</StyledNavLinks>
                <StyledNavLinks>Prints</StyledNavLinks>
            </StyledNavList>
    )

    console.log(toggle)

    return (
        <div>
            <StyledNav>
                <div>Mag</div>
                <div style={{width: '100%'}}>
                    <StyledNavButton onClick={() => setToggle(!toggle)}>Hello</StyledNavButton>
                        { navLinks() }
                </div>
            </StyledNav>
        </div>
    )

}

const StyledNav = styled.nav`
  min-height: 3%;
  height: auto;
  position: absolute;
  width: 100vw !important;
  right: 0 !important;
  left: 0 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  background-color: white;
  padding: 2rem;
  @media (max-width: 500px){
    flex-direction: column;
    align-items: flex-start;
  }

`

const StyledNavList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  @media (max-width: 500px){
    width: 100%;
    border-style: solid;
    flex-direction: column;
    display: ${props => props.toggle ? `flex` : `none`};
  }
`

const StyledNavLinks = styled.li`
  list-style: none;
  padding: .5rem;
  margin: .25 rem;
  display: block;
  @media (max-width: 500px){
      text-align: center;
  }
`

const StyledNavButton = styled.button`
  position: absolute;
  z-index: 100;
  top: 1.3rem;
  right: .5rem;
  display: none;
  padding: .5rem;
  margin: .25 rem;
  cursor: pointer;
  @media (max-width: 500px){
    display: flex;
  }
`

export default NavBar