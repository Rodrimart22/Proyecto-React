import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import "./Navbar.css"

const Navbar = () => {
    return (
        <>
            <header>
                <div>
                    <a href="#">
                        <img src="/logo-distribuidora.jpg" alt="Logo Dsitribuidora" />
                    </a>
                </div>

                <div>
                    <ul>
                        <li>
                            <a href="#">Tienda</a>
                        </li>
                        <li>
                            <a href="#"> Contacto </a>
                        </li>
                        <li>
                            <a href="#"> Ubicaciones </a>
                        </li>
                    </ul>
                </div>

                <CartWidget />
            </header>
                
            

        </>
    )
}

export default Navbar