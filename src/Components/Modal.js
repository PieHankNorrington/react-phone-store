import React from 'react';
import styled from 'styled-components';
import {ProductConsumer} from './context';
import {ButtonContainer} from './Button';
import {Link} from 'react-router-dom';


export default function componentName() {
  return (
    <ProductConsumer>
        {value => {
            let {modalOpen, closeModal} = value;
            let {img, price, title} = value.modalProduct;
            if (!modalOpen) {
                return null;
            }
            else {
                return (
                <ModalContainer>
                    <div className="container">
                        <div className="row">
                            <div id="modal" className="p-5 col-8 mx-auto col-md-6 col-lg-6 text-center text-capitalize">
                                <h3>item added to cart</h3>
                                <img src={img} alt="product" className="img-fluid"/>
                                <h5>{title}</h5>
                                <h5 className="text-muted">price : ${price}</h5>
                                <Link to="/" >
                                    <ButtonContainer onClick={() => {value.closeModal()}}>
                                        BACK
                                    </ButtonContainer>
                                
                                </Link>
                                <Link to="/cart" className="mt-5">
                                    <ButtonContainer cart onClick={() => {value.closeModal()}}>
                                       GO TO CART 
                                    </ButtonContainer>
                                </Link>

                            </div>
                        </div>
                    </div>
                </ModalContainer>
                )
            }
        }}
    </ProductConsumer>
  );
}
const ModalContainer =styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    #modal {
        background: var(--mainWhite);
    }
`