import React from "react"
import ProductList from "./ProductList"


const SalePage = () =>{

    return(
        <div>
            <div className='ui fluid container product-list-container'>
                <div className="ui horizontal divider">Products</div>
                <ProductList />
            </div>
        </div>
    )

}

export default SalePage