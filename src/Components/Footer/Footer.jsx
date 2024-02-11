import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
   <footer> 
    
    <div className="rrss">
      <h4>Síguenos</h4>
      <Link to='/'><img src="/assets/img/twitter.svg" alt="Logo de Twitter"/></Link>
      <Link to='/'><img src="/assets/img/facebook.svg" alt="Logo de Facebook"/></Link>
      <Link to='/'><img src="/assets/img/instagram.svg" alt="Logo de instagram"/></Link>
    </div>
    <div className="copyright">
      <p>Copyright © 2024. Todos los derechos reservados.</p>
    </div>
    </footer>
  )
}

export default Footer