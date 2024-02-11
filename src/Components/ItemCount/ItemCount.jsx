import React, { useState } from 'react'
import './ItemCount.css'

const ItemCount = ({inicio, stock}) => {

  const [contador, setContador] = useState(1)

  const Resta = () => {
    if (contador > inicio) {
      setContador(contador - 1)
    }
  }

  const Suma = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }

  const AgregarAlCarrito = () => {
    alert("Agregaste " + contador + " productos al carrito!")
  }

  return (
    <div className='ItemCount'>

      <p>Cantidad:{contador}</p>
      <div>
        <button onClick={Resta}>-</button>

        <button onClick={Suma}>+</button>
      </div>

      <button onClick={AgregarAlCarrito}>Agregar al Carrito</button>

    </div>
  )
}

export default ItemCount