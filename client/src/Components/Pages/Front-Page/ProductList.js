import React, { useContext } from 'react'
import './ProductList.css'
import { ProductContext } from '../../../Context/ProductContext'
import ProductItem from './ProductItem';


const ProductList = () => {


    //TODO: figure out a way to make this simpler
    const [products,,,,,, handleProduct] = useContext(ProductContext)

    console.log(products == null)
    console.log(products)

    const list = products.map(item =>{
        return (
                <ProductItem
                className=''
                ProductImg={item.image}
                ProductName={item.productName}
                ProductPrice={item.price}
                ProductDescript={item.description}
                id={item.id}
                key={item.id}
                handleProduct={handleProduct}
                />
        )
    })

    return (

            <div className='ui centered grid'>
                 {list}
            </div>

     );
}
 
export default ProductList
