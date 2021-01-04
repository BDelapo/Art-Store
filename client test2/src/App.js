import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { FaInstagram } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa'
import lotus from './icons8-lotus-100.png'
import './App.css'
import { ProductProvider } from './Context/ProductContext'
import Cart from './Components/Pages/Cart/Cart'
import ProductPage from './Components/Pages/Product-Pages/ProductPage'
import Checkout from './Components/Pages/Checkout/Checkout';
import FrontPage from './Components/Pages/Front-Page/FrontPage';
import Admin from './Components/Pages/Admin/admin'
import SalePage from './Components/Pages/Display-Pages/SalePage'
import styled from "styled-components"
import { icons } from 'react-icons/lib';
import NavBar from './Components/Pages/Front-Page/NavBar';

function App() {
  return (
    <div className='bg' style ={{width: '100%', border: '', borderColor: 'red', height: '100%', display : 'inherit', position: '', height: '100%'}}>
      <ProductProvider>
        <Router>

        <NavBar />

          {/* <StyledNav className='ui borderless top fixed large menu navi'>
            <Link to='/'>
              <div className='item navi-logo navi-links'>
                <img src={lotus} alt='Moth' />
              </div>
            </Link>
            <div className="item navi-links">
              <h1>Magali M. Demers</h1>
            </div>
            <StyledNavRight className='right menu'>
              <Link to='/'>
                <div className="item navi-links">
                  <h2>Work</h2>
                </div>
              </Link>
              <Link to='/Prints'>
                <div className="item navi-links">
                  <h2>Prints</h2>
                </div>
              </Link>
              <Link to='/cart' className='item'>
                <i className="cart arrow down icon navi-icon"></i>
              </Link>
            </StyledNavRight>
          </StyledNav> */}
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/cart' component={Cart} />
            <Route path={`/product`} component={ProductPage} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/admin' component={Admin} />
            <Route path='/Prints' component={SalePage} />
          </Switch>


          {/* Footer - Need to refactor and organize soon as i get more comfortable with styled components */}


          <StyledGrid className="ui two column centered grid">
            <div className="one column centered row">
              <StyledColumn className="column">
                <h3 style={{ "text-align": "center" }}>Contact</h3>
                <h5 style={{ "text-align": "center" }}>Magmoth@moth.com</h5>
              </StyledColumn>
            </div>
            <div className="four column centered row">
              <StyledColumn className="column">
                <a style={{ "text-align": "center" }} href='https://www.instagram.com/magalimdemers/' >
                  <FaInstagram className="footer-icon" size='2em' style={{ margin: '0em -22em -.35em 0em' }} />
                </a>
              </StyledColumn>
              <StyledColumn className="column">
                <a href='https://www.facebook.com/Magali-Moth-1121660184676639/?hc_ref=ARSNDlA8XeY2SEv_y3LoYaSIWVBcyPPLtJq31T9Ex-8Ey3N_h7W-Ao1fkqa9u_ks3JQ&fref=nf&__xts__[0]=68.ARBdsrumkto_ueHtwio3N0mRdR95ITrtURdpiUPjRUq4l67QPI2hNoBPxf9Z1545vENuc7fGxGu-fFxc3thKi96W3YLnI9peq96VK1tpT5ax-MXTEIbp8YpfnSXfEgIiXIsCl1FBA4_i9kmSahL0VrRoOs8HUkK8s7wreQsDJudj3vgtDsjknvMgQnEYTYJ99dzcgpaM0SHvhtOuRjvmWNXqIRdw9NX53ZQGqAQF_XEDYVFiIQDVWSfWfIUjk7CFKnDt4w_jMfi17iftP9NVvuqiaR-I2kRmuBoZWmIXCPhpWC9qgsJ80LEhBgmdRaHkir5VoHhCUiTl_Kc3h6EJbK_aaK9njhsT8tHk_qga&__tn__=kC-R'>
                  <FaFacebook className="footer-icon" size='2em' style={{ margin: '0em 0em -.15em -22em', }} />
                </a>
              </StyledColumn>
            </div>
          </StyledGrid>

        </Router>
      </ProductProvider>
    </div>
  );
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
    flex-direction: column;
  }
`

const StyledNavLinks = styled.li`
  list-style: none;
  padding: .5rem;
  margin: .25 rem;
  display: block;
  @media (max-width: 500px){
   // display: none;
  }
`

const StyledNavButton = styled.a`
  position: absolute;
  top: 1.3rem;
  right: .5rem;
  display: none;
  padding: .5rem;
  margin: .25 rem;
  @media (max-width: 500px){
    display: flex;
  }
`

const StyledNavRight = styled.div`
  margin: 0 !important;
`


const StyledColumn = styled.div`
  margin: 1em 0 1em 0;
  text-align: center !important;
  /* color: #9e85c7 !important; */
  /*Style Guide*/
  /* color: #e94c64;
  color: #f0c456;
  color: #499097; */
  color: #d2d1d6;
  /* color: #c5bccf;
  color: #dac7bc;
  color: #232119;
  color: #786b66; */
`


const StyledGrid = styled.div`
  background-image: linear-gradient(to bottom, rgb(0, 0, 0, .75), rgb(0, 0, 0, 1)) !important;
  padding: 1.5em 0 1.5em 0 !important;
  box-shadow: 0px 0px .7rem .1rem black!important;
  width: 100% !important;
  position: absolute;
  margin: 0 !important;
  bottom: 0;
  `

const StyledFooterItem = styled.div`
  justify-content: ${props => props.iconPlacement == "right" ? "flex-end" : "flex-start"} !important;
  margin: 25px !important;
`


export default App
