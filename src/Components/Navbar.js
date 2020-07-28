import React from 'react';
import cactus from '../Cactus.png'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Cart from './Cart'
import App from '../App'


const Navbar = () => {
    return ( 
        <Router>
            <div className='ui top fixed menu'>
                <Link to='/'>
                    <div className='item'>
                        <img src={cactus} />
                    </div>
                </Link>
                <div className='right menu'>    
                    <Link to='/cart' className='item'>cart</Link>
                </div>
            <Switch>
                <Route path='/'>
                </Route>
                <Route path='/cart' component={Cart}>
                </Route>
            </Switch>
            </div>
        </Router>
    );
}
 
export default Navbar;