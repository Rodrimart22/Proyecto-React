import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';


const ItemDetailContainer = () => {

  const [bebida,setBebida] = useState([]);

  const {id} = useParams()

    useEffect(()=>{
        
      const fetchData = async () => {
          try {
              const response = await fetch("/bebidas.json");
              const data = await response.json()
              const bebida = data.find((bebida)=>bebida.id == id)
              setBebida(bebida)
          }catch(error){
              console.log("Error en el fetch "+error)
          }
      }

      fetchData()

  },[id])
    
  return (
    <Link className='text-decoration-none'>
    <div className='cards'>
      <ItemDetail bebida={bebida}/>
    </div>
    </Link>
  )
}

export default ItemDetailContainer