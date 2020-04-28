import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './Components/NavBar'
import ProductList from './Components/ProductList'
import Detail from './Components/Detail'
import Cart from './Components/Cart/Cart'
import Default from './Components/Default'
import Modal from './Components/Modal'

function App() {
   return (
      <React.Fragment>
         <NavBar/>
         <Switch>
            <Route path="/" exact component={ProductList} />
            <Route path="/details" component={Detail} />
            <Route path="/Cart" component={Cart} />
            <Route  component={Default} />
         </Switch>
         <Modal></Modal>
      </React.Fragment>
   );
}

export default App;
