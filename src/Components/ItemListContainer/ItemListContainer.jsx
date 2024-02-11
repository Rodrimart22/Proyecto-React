import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import "./ItemListContainer.css"
import { useParams } from 'react-router-dom'


const ItemListContainer = () => {

    const [bebidas, setBebidas] = useState([])

    const {idcategoria} = useParams()


    useEffect(() => {

        const fetchData = async () => {
            try {
                const response = await fetch("/bebidas.json");
                const data = await response.json()

if (idcategoria) {
    const bebidasFiltradas = data.filter((p) => p.categoria == idcategoria)
    setBebidas(bebidasFiltradas)
} else {
    setBebidas(data)
}

                
            } catch (error) {
                console.log("Error en el fetch " + error)
            }
        }

        fetchData();

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