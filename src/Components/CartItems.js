import React from 'react';

const CartItems = ({ProductImg, ProductName, id}) => {


    return ( 
        <tr>
           <td><img src={ProductImg}/></td>
           <td>{ProductName}</td>
           <td>{id}</td> 
        </tr>
     );
}
 
export default CartItems;