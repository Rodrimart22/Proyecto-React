import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ bebidas }) => {

  return (
    <div className='cards'>
      {
        bebidas.map((bebida) => {
          return (
            <Item key={bebida.id} bebida = {bebida}/>
          )}
        )}
    </div>
  )}


export default ItemList



