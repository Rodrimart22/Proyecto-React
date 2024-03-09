import React, {useContext} from 'react'
import "./CartWidget.css"
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'


const CartWidget = () => {


  const {cantidadEnCarrito} = useContext(CartContext)


  return (
    <ul>
      <Link to={'/Carrito'}>
        <img src="./assets/img/carrito-img.png" alt="Foto carrito de compras" />
      </Link>
      <li>
        <p>{cantidadEnCarrito() == 0 ? null : cantidadEnCarrito()}</p>
      </li>
    </ul>
  )
}

export default CartWidget