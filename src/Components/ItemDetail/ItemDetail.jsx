import React, { useState, useContext } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import './ItemDetail.css'


const ItemDetail = ({ bebida }) => {

    const [Cart, setCart] = useState(false)

    const { agregarCarrito } = useContext(CartContext)

    const Agregar = (cantidad) => {

        setCart(true)

        agregarCarrito(bebida, cantidad)


    }


    return (

        <div key={bebida.id} className='card'>

            <img src={bebida.imagen} alt={bebida.nombre} />
            <p>{bebida.nombre}</p>
            <p>${bebida.precio}</p>
            {bebida.stock == 0 ?
                <h2>Sin Stock</h2>
                :
                Cart ? <Link to='/Carrito'>Ir al carrito</Link> : <ItemCount inicio={1} stock={bebida.stock} Agregar={Agregar} />
            }

        </div>


    );
};

export default ItemDetail;