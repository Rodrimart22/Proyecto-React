import React from 'react'
import "./CartWidget.css"

const CartWidget = () => {
  return (
    <ul>
      <li>
        <img src="./assets/img/carrito-img.png" alt="Foto carrito de compras" />
      </li>
      <li>
        <p>0</p>
      </li>
    </ul>
  )
}

export default CartWidget