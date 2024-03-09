import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import CartItem from '../CartItem/CartItem'
import './Cart.css'

const Cart = () => {

    const { Carrito, vaciarCarrito, eliminarDeCarrito, totalCarrito, finalizarCompra } = useContext(CartContext)


    return (
        <div className='carrito'>
            {Carrito.length == 0 ?

                <div>
                    <h3>Carrito Vacio</h3>
                    <Link to='/'>Inicio</Link>
                </div>
                :

                <div>

                    <div>
                        <h2>Lista del carrito</h2>
                    </div>
                    <div className='cards'>
                        {Carrito.map((bebida) => (
                            <CartItem key={bebida.bebida.id} bebida={bebida} eliminarDeCarrito={eliminarDeCarrito} />
                        ))}
                    </div>
                    <div className='card'>
                        <p>Total: ${totalCarrito()}</p>
                        <button onClick={vaciarCarrito}>Vaciar Carrito</button>
                        <button><Link to={'/Checkout'}>Completar Compra</Link></button>
                    </div>
                </div>
            }

        </div>

    )
}

export default Cart