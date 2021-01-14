import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css'
import { ProductProvider } from '../Context/ProductContext'
import Cart from '../Components/Pages/Cart/Cart'
import ProductPage from '../Components/Pages/Product-Pages/ProductPage'
import Checkout from '../Components/Pages/Checkout/Checkout';
import FrontPage from '../Components/Pages/Front-Page/FrontPage';
import Admin from '../Components/Pages/Admin/admin'
import SalePage from '../Components/Pages/Display-Pages/SalePage'
import styled from "styled-components"
import { icons } from 'react-icons/lib';
import NavBar from './NavBar';
import Footer from './Footer';

function App() {
  return (
    <div className='bg' style ={{width: '100%', border: '', borderColor: 'red', height: '100%', display : 'inherit', position: '', height: '100%'}}>
      <ProductProvider>
        <Router>

        <NavBar />

          <Switch>
            <Route exact path='/' component={FrontPage} />
            <Route path='/cart' component={Cart} />
            <Route path={`/product`} component={ProductPage} />
            <Route path='/checkout' component={Checkout} />
            <Route path='/admin' component={Admin} />
            <Route path='/Prints' component={SalePage} />
          </Switch>


          {/* Footer - Need to refactor and organize soon as i get more comfortable with styled components */}

          <Footer />

        </Router>
      </ProductProvider>
    </div>
  );
}



export default App
