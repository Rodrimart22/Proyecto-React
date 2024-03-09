import React, { useContext, useState } from 'react'
import { db } from '../../firebase/config'
import { collection, addDoc, updateDoc, doc, getDoc } from 'firebase/firestore'
import { CartContext } from "../../context/CartContext"
import './Checkout.css'

const Checkout = () => {

  const {Carrito, totalCarrito, cantidadEnCarrito, vaciarCarrito} = useContext(CartContext)

  const [Nombre, setNombre] = useState("")
  const [Apellido, setApellido] = useState("")
  const [Telefono, setTelefono] = useState("")
  const [Email, setEmail] = useState("")
  const [EmailConfirmacion, setEmailConfirmacion] = useState("")
  const [Error, setError] = useState("")
  const [OrdenId, setOrdenId] = useState("")

  const manejadorFormulario = (event) => {

    event.preventDefault()

    if (!Nombre || !Apellido || !Telefono || !Email || !EmailConfirmacion) {
      setError("Completar los campos requeridos")
      return;      
    }

    if (Email !== EmailConfirmacion) {
      setError("El Email no coincide con su confirmacion")
      return;      
    }


    const orden = {

      bebidas: Carrito.map((bebida) => ({
        id: bebida.bebida.id,
        nombre: bebida.bebida.nombre,
        cantidad: bebida.cantidad

      })),

      total: totalCarrito(),
      fecha: new Date(),
      Nombre,
      Apellido,
      Telefono,
      Email

    }

    Promise.all(
      orden.bebidas.map(async (bebidaOrden) => {

        const bebidaRef = doc(db, "bebidas", bebidaOrden.id)
        const bebidaDoc = await getDoc(bebidaRef)
        const stockActual = bebidaDoc.data().stock

        await updateDoc(bebidaRef, {
          stock: stockActual - bebidaOrden.cantidad
        })
      })
    )

    .then(() => {

      addDoc(collection(db, "ordenes"), orden)
      .then((docRef) => {
        setError("")
        setOrdenId(docRef.id)
        vaciarCarrito()
      })
      .catch((error) =>{
      console.log(error)
      setError("Se produjo un error al crear la orden")
    })

    })
    .catch((error) => {
      console.log(error)
      setError("No se puede actualizar el stock")
    })

  }



  return (
    <div>
      <h1>Ingresa tus datos:</h1>
      <form onSubmit={manejadorFormulario}>

        {Carrito.map((bebida) => (
        
         <div key={bebida.bebida.id}>
         <p>

            {bebida.bebida.nombre} x {bebida.cantidad}

          </p>
          </div>

        ))}

        <div className='formulario'>

          <div >
            <label htmlFor='Nombre'>Nombre:</label>
            <input name='Nombre' type="text" onChange={(s) => setNombre(s.target.value)}/>
          </div>
          <div>
            <label htmlFor='Apellido'>Apellido:</label>
            <input name='Apellido' type="text" onChange={(s) => setApellido(s.target.value)}/>
          </div>
          <div>
            <label htmlFor='Telefono' >Telefono:</label>
            <input name='Telefono' type="text" onChange={(s) => setTelefono(s.target.value)}/>
          </div>
          <div>
            <label htmlFor='Email' >Email:</label>
            <input name='Email' type="email" onChange={(s) => setEmail(s.target.value)}/>
          </div>
          <div>
            <label htmlFor='Email de confirmacion' >Confirmar Email:</label>
            <input name='Email de confirmacion' type="email" onChange={(s) => setEmailConfirmacion(s.target.value)}/>
          </div>

          <button type='submit'>Finalizar compra</button>

          {Error && <p style={{color: 'red'}}>{Error}</p>}

          {OrdenId && (
            <strong>Gracias por tu compra! Tu numero de orden es: {OrdenId}</strong>
          )}

        </div>

      </form>
    </div>
  )
}

export default Checkout