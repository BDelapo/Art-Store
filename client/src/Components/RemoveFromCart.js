import React, { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const RemoveFromCart = ({id}) => {

const [,,,,,,,, removeFromCart] = useContext(ProductContext)

    return ( 
        <div>
            <div className="ui vertical animated button" 
            tabIndex="0" 
            onClick={()=> removeFromCart(id)}>
            <div className="hidden content">Remove</div>
            <div className="visible content">
                <i className="window close outline icon" />
            </div>
        </div> 
        </div>
     );
}
 
export default RemoveFromCart;