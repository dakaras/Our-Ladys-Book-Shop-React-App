import React, { Component } from 'react'
import {ProductConsumer} from '../context'
import {Link} from 'react-router-dom'
import {ButtonContainer} from './Button'

export default class Details extends Component {
        render(){
    return (
            <ProductConsumer>
            {value => {
                const {id,manufacturer,img,info,price,name,inCart} = value.detailProduct //assigned variable stores detailProduct for later use
                return ( 
                   <div className='container py-5'>
                       {/* title */}
                       <div className='row'>
                           {/* <div className='col-10 mx-auto text-center text-slanted text-blue my-5'>
                                <h1>
                                {title}
                                </h1>
                           </div> */}
                       </div>
                       {/* end title */}
                       {/* product info */}
                       <div className='row'>
                           <div className='col-10 mx-auto col-md-6 my-3'>
                                <img src={img} className='img-fluid' alt='product'/>
                           </div>
                        {/* product text */}
                           <div className='col-10 mx-auto col-md-6 my-3 text-capitalize'>
                                <h2>Name: {name}</h2>
                                <h4 className='text-title text-uppercase text-muted mt-3 mb-2'>
                                    Manufacturer: <span className='text-uppercase'>{manufacturer}</span>
                                </h4>
                                <h4 className='text-blue'>
                                    <strong>
                                        price: <span>$</span>{price}
                                    </strong>
                                </h4>
                                <p className='text-capitalize font-weight-bold mt-3 mb-0'>
                                    about: 
                                </p>
                                <p className='text-muted lead'>{info}</p>
                                {/* buttons */}
                                <div> 
                                   <Link to='/'>
                                       <ButtonContainer>Back to Main Page</ButtonContainer>
                                   </Link>
                                   {/* boolean value for button decides if 'add to cart' or 'in cart' displays */}
                                   {/* ButtonContainer cart prop is passed to styled-component so color can change with status */}
                                   {/* similiar to Context Api, must use a function for conditional rendering in Button.js to switch color to yellow if button is 'Add to Cart' */}
                                   <ButtonContainer 
                                   cart 
                                   disabled={inCart? true : false} 
                                   onClick={() => {
                                       value.addToCart(id);
                                       value.openModal(id);
                                   }}
                                   > 
                                       {inCart?"inCart" : "add to cart"} 
                                   </ButtonContainer> 
                                </div>
                           </div>
                       </div>
                   </div> 
                )
               }}
           </ProductConsumer>
        )
        }
    }