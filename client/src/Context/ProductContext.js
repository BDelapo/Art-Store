import React, { useState, createContext } from 'react';
import data from '../Data.json'

export const ProductContext = createContext()

export const ProductProvider = props => {
   
    //Product List
    const [products, setProducts] = useState(data)

    //Product Page
    const [productInfo, setProductInfo] = useState({})

    //items in cart
    const [cartItems, setCartItems] = useState([])

    //functions for product page

    const getProduct = (id) =>{
        const product = products.find(product => product.id===id)
        return product
    }
    
    const handleProduct = (id) =>{
        const product = getProduct(id)
        setProductInfo(product)
    }

    //functions for cart

    const addToCart = (product) =>{
        const updatedCart = cartItems
        updatedCart.push(product)
        setCartItems(updatedCart)
    }

    const removeFromCart = (id) =>{
        const updatedCart = cartItems
        const removed = updatedCart.filter((product) => {
            return product.id !== id
        })
       console.log(removed)
       setCartItems(removed)
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
        addToCart,
        removeFromCart
        ]}
        >
            {props.children}
        </ProductContext.Provider>
    )
}



