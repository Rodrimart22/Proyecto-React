import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ bebida }) => {

    const {id} = useParams()


    return (
        
        <div key= {bebida.id} className='card'>

            <img src={bebida.imagen} alt={bebida.nombre} />
            <p>{bebida.nombre}</p>
            <p>${bebida.precio}</p>
            <ItemCount inicio={1} stock={bebida.stock} />

        </div>


    );
};

export default ItemDetail;