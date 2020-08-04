import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cactus from './Cactus.png'
import './App.css'
import { ProductProvider } from './Context/ProductContext'
import ProductList from './Components/Pages/Front-Page/ProductList';
import Cart from './Components/Pages/Cart/Cart'
import ProductPage from './Components/Pages/Product-Pages/ProductPage'
import Checkout from './Components/Pages/Checkout/Checkout';

function App() {
  return (
    <div className='bg'>
    <ProductProvider>
      <Router>
            <div className='ui top fixed menu nav'>
                <Link to='/'>
                    <div className='item'>
                        <img src={cactus} />
                    </div>
                </Link>
                <div className='right menu'>    
                    <Link to='/cart' className='item'>
                      <i className="cart arrow down icon"></i>
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={ProductList} />
                <Route path='/cart' component={Cart} />
                <Route path={`/product`} component={ProductPage}/>
                <Route path='/checkout' component={Checkout} />
            </Switch>
        </Router>
    </ProductProvider>
    </div>
  );
}

export default App;
