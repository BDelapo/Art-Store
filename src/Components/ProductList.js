import React, { useContext } from 'react';
import Data from '../Data.json'
import ProductItem from './ProductItem';
import './ProductList.css'
import { ProductContext } from '../Context/ProductContext'

const ProductList = () => {

    const [products, setProducts] = useContext(ProductContext)

    const list = products.map(item =>{
        return (
            <div>
                <ProductItem ProductImg={item.Product} ProductName={item.first_name} ID={item.id}/>
            </div>
        )
    })

    return (
        <div className='ui container product-list'>
            <div className='ui centered grid'>
                {list}
            </div>
        </div>
     );
}
 
export default ProductList
