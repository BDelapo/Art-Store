import React, { useContext } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductItem from './ProductItem';
import './ProductList.css'
import { ProductContext } from '../Context/ProductContext'
import ProductPage from './ProductPage';

const ProductList = () => {

    const [products, setProducts, productInfo, setProductInfo, handleProduct] = useContext(ProductContext)

    const list = products.map(item =>{
        return (
                <ProductItem ProductImg={item.Product} ProductName={item.first_name} id={item.id} key={item.id} handleProduct={handleProduct}/>
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
