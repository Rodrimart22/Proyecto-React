import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

const Item = ({ bebida }) => {

    return (

        <Link className='text-decoration-none'to={`/detalle/${bebida.id}`}>
            <div key={bebida.id} className='card'>

                <img src={bebida.imagen} alt={bebida.nombre} />
                <p>{bebida.nombre}</p>
                <p>${bebida.precio}</p>
            

            </div>
            </Link>
            );
};

            export default Item;