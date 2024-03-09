import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error/Error'
import Footer from './Components/Footer/Footer'
import Cart from './Components/Cart/Cart'
import CartProvider from './context/CartContext'
import Checkout from './Components/Checkout/Checkout'


function App() {

  return (


    <BrowserRouter>

      <CartProvider>

        <NavBar />

        <Routes>

          <Route path='/' element={<ItemListContainer />} />

          <Route path='/categoria/:idcategoria' element={<ItemListContainer />} />

          <Route path='/detalle/:id' element={<ItemDetailContainer />} />

          <Route path='*' element={<Error />} />

          <Route path='/Carrito' element={<Cart />} />

          <Route path='/Checkout' element={<Checkout />} />


        </Routes>

        <Footer />

        </CartProvider>


    </BrowserRouter>


  )
}

export default App
