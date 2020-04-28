import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {
  let {cart} = value;
  return (
    <div className="container-fluid">
      {cart.map((element,index) => {
        return (
          <CartItem item={element} key={index} value={value}/>
        )
      })}
    </div>
  );
}
