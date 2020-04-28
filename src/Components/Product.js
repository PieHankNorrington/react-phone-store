import React, { Component } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import {ProductConsumer} from './context';

export default class Product extends Component {
  state = {
    inCart: this.props.product.inCart
  }
  
  render() {
    let {id, title, img, price, company, info, inCart} = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">


          <ProductConsumer>
            {value => {return (
            <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
              <Link to="details">
                <img src={img} alt="product" className="card-img-top"/>
              </Link>
              <button className="cart-btn" disabled={inCart? true: false} 
                onClick={() => {value.handleAddToCart(id);
                  value.openModal(id);
                }}>
                {inCart? <p className="text-capitalize mb-0" >
                
                in cart</p>: <i className="fa fa-shopping-cart"></i>}
              </button>
            </div>)}
            }
          </ProductConsumer>


          
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center ">
             {title}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">${price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    )
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool,
    company: PropTypes.string,
    info: PropTypes.string,
  }).isRequired
}

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  :hover {
    .card {
      border: 2px solid rgba(0,0,0,0.2);
      box-shadow: 2px 2px 5px 0px rgba(0,0,0,0,2);
    }
    .card-footer {
      background: rgba(200,200,200)
    }
  }
  .card-img-top {
    transition: all 1s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;

  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }
  .cart-btn {
    position: absolute;
    bottom:0;
    right:0;
    background: var(--lightBlue);
    padding: 8px 15px;
    border: none;
    color: var(--mainWhite);
    font-size: 20px;
    border-radius: 10px 0 0 0;
    transform: translate(100%,100%);
    transition: all 0.5s linear;
    cursor: pointer;
    &:hover {
      color: var(--mainBlue)
    }
  }
  .img-container:hover .cart-btn {
    transform: translate(0,0);
  }
`


