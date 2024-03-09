import React, {useState,useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { Link, useParams } from 'react-router-dom';
import { db } from '../../firebase/config';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {

  const [bebida,setBebida] = useState([]);

  const {id} = useParams()

    useEffect(()=>{

      const nuevoDoc = doc(db, "bebidas", id)

      getDoc(nuevoDoc)
      .then(res => {
        const data = res.data()
        const bebidaNueva = {id: res.id,...data}
        setBebida(bebidaNueva)
      })

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