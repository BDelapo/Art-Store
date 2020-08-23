import React, { useState, createContext, useEffect } from 'react';
import data from '../Data.json'

export const ProductContext = createContext()

export const ProductProvider = props => {

    //Product List
    const [products, setProducts] = useState(data)

    //Product Page
    const [productInfo, setProductInfo] = useState({})

    //items in cart
    const [cartItems, setCartItems] = useState([])




    useEffect(()=>{
        async function fetchData(){
            await fetch(`http://localhost:5000/graphql`, {
                method: 'POST',
                headers: {'Content-Type' :'application/json'},
                body: JSON.stringify({
                    query: `{getAllProducts{value}}`
                })
            }).then((response) => response.json().then((data) => console.log(data)))
        }
        fetchData()
    },[])





    //functions for product page

    const getProduct = (id) => {
        const product = products.find(product => product.id === id)
        return product
    }

    const handleProduct = (id) => {
        const product = getProduct(id)
        setProductInfo(product)
    }

    //functions for cart

    const addToCart = (id) => {
        const updatedCart = cartItems
        const duplicate = updatedCart.find(item => item.id === id)
        if (!duplicate) {
            const addedItem = products.find(product => {
                return product.id === id
            })
            updatedCart.push(addedItem)
            setCartItems(updatedCart)
        }
    }



    const removeFromCart = (id) => {
        const updatedCart = cartItems
        const removed = updatedCart.filter((product) => {
            return product.id !== id
        })
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



