import React, { Component } from 'react';
import { ProductConsumer } from './context';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';

export default class Details extends Component {
   render() {
      return (
         <ProductConsumer>
            {(value) => {
               let { id, company, img, info, price, inCart, title } = value.detailProduct;
               return (
                  <div className="container">
                     <div className="row">
                        <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                           <h1>{title}</h1>
                        </div>
                     </div>
                     <div className="row">
                        <div className="col-8 mx-auto col-md-6 my-3 text-capitalize">
                           <img src={img} alt="prduct" className="img-fluid" />
                        </div>
                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                           <h2>model: {title}</h2>
                           <h4 className="text-title text-uppercase text-muter mt-3 mb-2">
                              made by: <span className="text-uppercase">{company}</span>
                           </h4>
                           <h4 className="text-blue">
                              <strong>price: ${price}</strong>
                           </h4>
                           <p className="text-capitalize font-weight-bold mt-3 mb-0">
                              some info about product
                           </p>
                           <p className="text-muted lead">{info}</p>
                           <div>
                              <Link to="/"><ButtonContainer className="mr-5" >Back to Shop</ButtonContainer></Link>
                              <ButtonContainer cart
                              onClick={() => {value.handleAddToCart(id)
                                 value.openModal(id);
                              }}
                              disabled={inCart ? true : false}>
                              {inCart ? "In cart" : "Add to cart"}
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

