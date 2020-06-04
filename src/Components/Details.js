import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button'

export default class Details extends Component{
    render(){
        return(
            <ProductConsumer>
                {value =>{
                    const { id, first_name, pic, inCart } = value.DetailProducts;
                   
                    return (
                       <div className='container py-5'>
                           {/*Title*/}
                           <div className='row'>
                               <div className='col-10 mx-auto text-center text-slanted text-blue my-5 border'>
                                    <h1>{first_name}</h1>
                               </div>
                           </div>
                             {/*Product info*/}
                           <div className='row border'>
                               <div className="col-10 mx-auto col-md-6 my-3 border">
                                    <img src={pic} className="img-fluid w-75 mx-auto d-block" alt="product" />
                               </div>
                                {/*Product text*/}
                               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize border">
                                    <h1>ID: {id}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        dummy text dummy text dummy text
                                    </h4>
                                    {/*Add to cart*/}
                                    <ButtonContainer className="mt-4" cart disabled={inCart? true : false} onClick={()=>{
                                        value.addToCart(id)
                                    }}>
                                       {inCart? "In Cart" : "Add To Cart"}
                                   </ButtonContainer>
                               </div>
                               
                           </div>
                       </div>
                    )
                }}
            </ProductConsumer>
        )
    }
}