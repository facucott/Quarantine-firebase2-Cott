import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Inicio from './components/Inicio/Inicio';
import NotFound from './components/NotFound/NotFound';
import Cart  from './components/Cart/Cart';
import CartProvider from './components/CartContext/CartContext';

function App (){
  return (
    
    <CartProvider>
    <BrowserRouter>
    <div className="App">
          <NavBar/>
          <div className="titulo">
            <br />
          <h2>¡Bienvenidos al sitio oficial de The Three Of Quarantine!</h2>
          <br />
          <p>
            <i>
                "... rock crudo y de alma góspel: interpretaciones minimalistas que dejan entreoír un lejano traqueteo, crujen en estrépito y se silencian..."
            </i>
          </p>
          <br />
          <hr />
          </div>
            {/* <ItemListContainer/> */}
            {/* <ItemDetailContainer/> */}
            <Routes>
              <Route path='/' element = {<Inicio/>} />
              <Route path='/shop' element = {<ItemListContainer/>} />
              <Route path='/category/:idCategory' element = {<ItemListContainer/>} />
              <Route path='/item/:idItem' element = {<ItemDetailContainer/>} />
              <Route path='*' element = {<NotFound/>} />
              <Route path='/cart' element = {<Cart/>} />
            </Routes>
        </div>
        </BrowserRouter>
        </CartProvider>
  )
}

export default App;
