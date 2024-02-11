import './App.css'
import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Error from './Components/Error/Error'
import Footer from './Components/Footer/Footer'
function App() {

  return (


    <BrowserRouter>
      <NavBar/>
      
      <Routes>

        <Route path='/' element={<ItemListContainer/>}/>

        <Route path='/categoria/:idcategoria' element={<ItemListContainer/>} />

        <Route path='/detalle/:id' element={<ItemDetailContainer/>} />        

        <Route path='*' element={<Error/>} />
        

      </Routes>

      <Footer/>

    </BrowserRouter>


  )
}

export default App
