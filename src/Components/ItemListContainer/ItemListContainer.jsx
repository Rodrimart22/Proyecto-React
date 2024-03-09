import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config'
import { collection, getDocs, query, where } from 'firebase/firestore'


const ItemListContainer = () => {

    const [bebidas, setBebidas] = useState([])

    const {idcategoria} = useParams()


    useEffect(() => {

        
        const misBebidas = 
        idcategoria ?
       
        query(collection(db, "bebidas"), where("categoria", "==", idcategoria))
        
        :

       collection(db, "bebidas")
       
       getDocs(misBebidas)
       .then((res) => {
        const nuevasBebidas = res.docs.map((doc) => {
            const data = doc.data()
            return{id: doc.id, ...data}
        })

        setBebidas(nuevasBebidas)

       })

    }, [idcategoria])


    return (
        <div>
            <div className='cards'>
                {bebidas.length == 0 ? <h2>Cargando...</h2> : <ItemList bebidas = {bebidas}/>}
            </div>
        </div>
    )
}

export default ItemListContainer