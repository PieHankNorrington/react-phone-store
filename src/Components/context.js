import React, { Component } from 'react'
import { storeProducts, detailProduct } from './../setup-filese-react-phone-e-commerce-project-master/data';

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
    state = {
        storeProducts: [],
        detailProduct,
        cart: [],
        modalOpen: false,
        modalProduct: detailProduct,
        cartTotal: 0,
        cartTax: 0,
        cartSubTotal: 0
    }
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let products = [];
        storeProducts.forEach((product) => {
            let single = { ...product };
            products = [...products, single];
        });
        this.setState({
            storeProducts: products
        })
    }

    getProductByID = (id) => {
        let result = this.state.storeProducts.findIndex(product => product.id === id)
        return result;
    }

    handleAddToCart = (id) => {
        let index = this.getProductByID(id);
        let temp = this.state.storeProducts[index];
        temp.inCart = true;
        let price = temp.price
        temp.total = price;
        temp.count = 1;
        // change the icon on the product
        let products = this.state.storeProducts
        products.splice(index, 1, temp);
        // add to cart
        let cart = this.state.cart;
        cart.push(temp);
        console.log(temp)
        // let detail = this.state.detailProduct;
        // detail.inCart = true;
        this.setState({
            storeProducts: products,
            cart
        }, () => this.addTotal());
    };
    handleDetail = (id) => {
        let index = this.getProductByID(id);
        this.setState({
            detailProduct: this.state.storeProducts[index]
        })
    };
    openModal = (id) => {
        let index = this.getProductByID(id);
        let product = this.state.storeProducts[index];
        this.setState({
            modalOpen: true,
            modalProduct: product
        });

    }
    closeModal = () => {
        this.setState({
            modalOpen: false
        })
    }

    increment = id => {
        let index = this.state.cart.findIndex(product => product.id === id)
        let item = this.state.cart[index];
        let cart = this.state.cart;
        item.count += 1;
        item.total = item.price * item.count;
        cart.splice(index,1,item);
        this.setState({
            cart
        }, this.addTotal())
    }
    decrement = id => {
        let index = this.state.cart.findIndex(product => product.id === id)
        let item = this.state.cart[index];
        let cart = this.state.cart;
        if (item.count > 1 ) {
            item.count -= 1;
            item.total = item.price * item.count;
            cart.splice(index,1,item);
        }
        this.setState({
            cart
        }, this.addTotal())
    }
    remove = id => {
        let index = this.state.cart.findIndex(product => product.id === id)
        let cart = this.state.cart;
        cart.splice(index,1);

        let store = this.state.storeProducts;
        let indexInstore = this.getProductByID(id);
        store[indexInstore].inCart = false;
        this.setState({
            cart,
            storeProducts: store
        }, () => {
            this.addTotal()
        })
    }
    clearCart = () => {
        this.setState({
            cart: []
        }, () => {
            this.setProducts();
        })
    }
    addTotal = () => {
        let subTotal = 0;
        this.state.cart.map(item => { subTotal += item.total });
        let tempTax = subTotal * 0.1;
        let tax = parseFloat(tempTax.toFixed(2));
        let total = subTotal + tax;
        this.setState({
            cartTotal: total,
            cartTax: tax,
            cartSubTotal: subTotal
        });
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleAddToCart: this.handleAddToCart,
                handleDetail: this.handleDetail,
                openModal: this.openModal,
                closeModal: this.closeModal,
                increment: this.increment,
                decrement: this.decrement,
                remove: this.remove,
                clearCart: this.clearCart,
                addTotal: this.addTotal,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        )
    }
}

const ProductConsumer = ProductContext.Consumer;


export { ProductProvider, ProductConsumer };


