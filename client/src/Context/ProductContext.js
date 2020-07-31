import React, { useState, createContext } from 'react';
import data from '../Data.json'

export const ProductContext = createContext()

export const ProductProvider = props => {
   
    const [products, setProducts] = useState(data)
    const [productInfo, setProductInfo] = useState({})

    const getProduct = (id) =>{
        const product = products.find(product => product.id===id)
        return product
    }
    
    const handleProduct = (id) =>{
        const product = getProduct(id)
        setProductInfo(product)
    }
   
    return (
        <ProductContext.Provider value={[products, setProducts, productInfo, setProductInfo, handleProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}



