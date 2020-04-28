import React, { Component } from 'react';
import Title from './../TItle'
import CartColumn from './CartColumn';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';
import { ProductConsumer } from './../context';
export default class Cart extends Component {
  render() {
    return (
      <section>
        <ProductConsumer>
          {value => {
            let { cart } = value;
            if (cart.length > 0) {
              return (
                <React.Fragment>
                  <Title name="Your" title="cart" />
                  <CartColumn />
                  <CartList value={value}/>
                  <CartTotal value={value}/>
                </React.Fragment>
                )
            }
            else {
              return (
                <EmptyCart />
              )
            }
          }}


        </ProductConsumer>

      </section>
    )
  }
}

