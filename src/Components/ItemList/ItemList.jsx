import React from 'react'
import Item from '../Item/Item'
import './ItemList.css'

const ItemList = ({ bebidas }) => {

  return (
    <div className='cards'>
      {
        bebidas.map((bebida) => {
          return (
            <Item bebida = {bebida}/>
          )}
        )}
    </div>
  )}


export default ItemList



