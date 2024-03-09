import React, {useState, createContext } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {

const [Carrito, setCarrito] = useState([])



const agregarCarrito = (bebida, cantidad) => {

const productoExistente = Carrito.findIndex(b => b.bebida.id == bebida.id) 

if (productoExistente == -1) {
    setCarrito([...Carrito, {bebida, cantidad}])    
} else {
    const nuevoCarrito = [...Carrito]
    nuevoCarrito[productoExistente].cantidad += cantidad
    setCarrito(nuevoCarrito)    
}}

const eliminarDeCarrito = (bebidaId) => {

    const nuevoCarrito = Carrito.filter(b => b.bebida.id !== bebidaId);
    setCarrito(nuevoCarrito) 
}

const vaciarCarrito = () => {
    setCarrito([])
}

const cantidadEnCarrito = () => {
  
const cantidadTotal = Carrito.reduce((total, bebida) => total + bebida.cantidad,0)
return cantidadTotal

}

const totalCarrito = () => {

    const precioTotal = Carrito.reduce((total, bebida) => total + (bebida.bebida.precio * bebida.cantidad),0)
    return precioTotal
    
}


console.log(Carrito)

    
    return (<CartContext.Provider value={{Carrito, agregarCarrito, eliminarDeCarrito, vaciarCarrito, cantidadEnCarrito, totalCarrito}}>

            {children}

    </CartContext.Provider>
    )
}

export default CartProvider