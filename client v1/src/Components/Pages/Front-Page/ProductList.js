import React, { useContext } from 'react'
import './ProductList.css'
import { ProductContext } from '../../../Context/ProductContext'
import ProductItem from './ProductItem';


const ProductList = () => {


    //TODO: figure out a way to make this simpler
    const [products, , , , , , handleProduct] = useContext(ProductContext)

    const list = () => {
        if (!products) {
            console.log(products)
            return (
                <div className="ui segment">
                    <p></p>
                    <div className="ui active dimmer">
                        <div className="ui loader"></div>
                    </div>
                </div>
            )
        }
        else {
            return products.map(item => {
                console.log("hello")
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
        }
    }

    return (

        <div className='ui centered grid'>
            {list()}
        </div>

    );
}

export default ProductList
