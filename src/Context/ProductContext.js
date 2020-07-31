import React, { useState, createContext } from 'react';
import data from '../Data.json'

export const ProductContext = createContext()

export const ProductProvider = props => {
   
    const [products, setProducts] = useState(data)
    const [productInfo, setProductInfo] = useState({})
    const [cartItems, setCartItems] = useState([])

    const getProduct = (id) =>{
        const product = products.find(product => product.id===id)
        return product
    }
    
    const handleProduct = (id) =>{
        const product = getProduct(id)
        setProductInfo(product)
    }

    const addToCart = (product) =>{
        const updatedCart = cartItems
        updatedCart.push(product)
        setCartItems(updatedCart)
        console.log(cartItems)
    }
   
    return (
        <ProductContext.Provider value={[
        products, 
        setProducts, 
        productInfo, 
        setProductInfo,
        cartItems,
        setCartItems, 
        handleProduct,
        addToCart]}
        >
            {props.children}
        </ProductContext.Provider>
    )
}



