import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import cactus from './Cactus.png'
import { ProductProvider } from './Context/ProductContext'
import ProductList from './Components/ProductList';
import Cart from './Components/Cart'
import ProductPage from './Components/ProductPage'

function App() {
  return (
    <ProductProvider>
      <Router>
            <div className='ui top fixed menu'>
                <Link to='/'>
                    <div className='item'>
                        <img src={cactus} />
                    </div>
                </Link>
                <div className='right menu'>    
                    <Link to='/cart' className='item'>
                      <i class="cart arrow down icon"></i>
                    </Link>
                </div>
            </div>
            <Switch>
                <Route exact path='/' component={ProductList} />
                <Route path='/cart' component={Cart} />
                <Route path={`/product`} component={ProductPage}/>
            </Switch>
        </Router>
    </ProductProvider>
  );
}

export default App;
