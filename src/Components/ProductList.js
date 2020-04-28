import React, { Component } from 'react';
import Product from './Product'
import Title from './TItle';
import { ProductConsumer } from './context';

export default class ProductList extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="py-5">
               <div className="container">
                  <Title name="our" title="product" />
                  <div className="row">
                     <ProductConsumer>
                        {val => {
                           return val.storeProducts.map((product, index) => (
                              <Product key={index} product={product}  />
                           ))
                        }}
                     </ProductConsumer>
                  </div>
               </div>
            </div>
         </React.Fragment>
      )
   }
}


