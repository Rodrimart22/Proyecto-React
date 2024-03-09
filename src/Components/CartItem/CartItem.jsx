import React, { useContext } from "react"
import { CartContext } from "../../context/CartContext"



const CartItem = (bebida) => {

    const { eliminarDeCarrito } = useContext(CartContext)


    return (
        <div className='card'>
            <img src= {bebida.bebida.bebida.imagen}/>
            <p>Cantidad: {bebida.bebida.cantidad}</p>
            <p>{bebida.bebida.bebida.nombre}</p>
            <p>Valor: ${bebida.bebida.bebida.precio * bebida.bebida.cantidad}</p>
            <button onClick={() => eliminarDeCarrito(bebida.bebida.bebida.id)}>Eliminar bebida</button>
        </div>
    )
}

export default CartItem