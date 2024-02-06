import './App.css'
import Navbar from './Components/NavBar/Navbar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'

function App() {

  return (
    <div>
     <Navbar/>
     <ItemListContainer greeting={"Bienvenidos a mi E-commerce"}/>
    </div>
  )
}

export default App
