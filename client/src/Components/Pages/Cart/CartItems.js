import React from 'react';
import RemoveFromCart from '../../Buttons/RemoveFromCart';


//TODO: Add functionality (remove/add items from cart, display price)

const CartItems = ({ProductImg, ProductName, id}) => {


    return ( 
        <tr>
           <td className='center aligned'><img src={ProductImg}/></td>
           <td className='center aligned'>{ProductName}</td>
           <td className='center aligned'><RemoveFromCart id={id}/></td> 
        </tr>
     );
}
 
export default CartItems;