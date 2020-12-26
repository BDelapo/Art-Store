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
import Styled from "styled-components"

function App() {
  return (
    <div className='bg'>
      <ProductProvider>
        <Router>
          <div className='ui borderless top fixed large menu navi'>
            <Link to='/'>
              <div className='item navi-logo'>
                <img src={lotus} alt='Moth' />
              </div>
            </Link>
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
            <div className='right menu'>
              <Link to='/cart' className='item'>
                <i className="cart arrow down icon navi-icon"></i>
              </Link>
            </div>
          </div>
          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/cart' component={Cart} />
            <Route path={`/product`} component={ProductPage} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/admin' component={Admin} />
            <Route path='/Prints' component={SalePage} />
          </Switch>
          <div class="ui borderless two item menu footer">
              <div className='item'>
                <a href='https://www.instagram.com/magalimdemers/'>
                  <FaInstagram size='2em' style={{ color: '#976ED7', marginBottom: '-.35em' }} />
                </a>
              </div>
              <div className='item'>
                <a href='https://www.facebook.com/Magali-Moth-1121660184676639/?hc_ref=ARSNDlA8XeY2SEv_y3LoYaSIWVBcyPPLtJq31T9Ex-8Ey3N_h7W-Ao1fkqa9u_ks3JQ&fref=nf&__xts__[0]=68.ARBdsrumkto_ueHtwio3N0mRdR95ITrtURdpiUPjRUq4l67QPI2hNoBPxf9Z1545vENuc7fGxGu-fFxc3thKi96W3YLnI9peq96VK1tpT5ax-MXTEIbp8YpfnSXfEgIiXIsCl1FBA4_i9kmSahL0VrRoOs8HUkK8s7wreQsDJudj3vgtDsjknvMgQnEYTYJ99dzcgpaM0SHvhtOuRjvmWNXqIRdw9NX53ZQGqAQF_XEDYVFiIQDVWSfWfIUjk7CFKnDt4w_jMfi17iftP9NVvuqiaR-I2kRmuBoZWmIXCPhpWC9qgsJ80LEhBgmdRaHkir5VoHhCUiTl_Kc3h6EJbK_aaK9njhsT8tHk_qga&__tn__=kC-R'>
                  <FaFacebook size='2em' style={{ color: '#976ED7', marginBottom: '-.15em' }} />
                </a>
              </div>
          </div>
        </Router>
      </ProductProvider>
    </div>
  );
}


export default App;
