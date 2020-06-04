import React, { Component } from 'react'
import { StoreProducts, DetailProducts } from './data'

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state={
        products: [],
        DetailProducts: DetailProducts,
        cart: []
    }
    componentDidMount(){
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        StoreProducts.forEach(item =>{
            const singleItem = {...item};
            tempProducts = [...tempProducts, singleItem];
        })
        this.setState(()=>{
            return{products: tempProducts}
        })
    }

    getItem = (id) => {
        const product = this.state.products.find(item => item.id === id);
        return product
    }

    handleDetail = (id) =>{
        const product = this.getItem(id);
        this.setState(()=> {
            return {DetailProducts: product}
        })
    }
    addToCart = id =>{
        let tempProducts = [...this.state.products];
        const index = tempProducts.indexOf(this.getItem(id));
        const product = tempProducts[index];
        product.inCart = true;
        this.setState(()=>{
            return { products: tempProducts, cart: [...this.state.cart, product] };
        }, () => {console.log(this.state)})
    }
    render(){
        return(
            <ProductContext.Provider value={{
            ...this.state,
            handleDetail: this.handleDetail,
            addToCart: this.addToCart
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;

export {ProductProvider, ProductConsumer}