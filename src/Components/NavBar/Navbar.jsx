import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import { Link } from 'react-router-dom';


const NavBar = () => {
    return (
        <>

            <Navbar expand="lg">
                <Link to='/'>
                    <img src="./assets/img/logo-distribuidora.jpg" alt="Logo empresa" />
                </Link>
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className='mx-auto'>
                            <Nav.Link as={Link} to='/categoria/Licores'>Licores</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/Ron'>Ron</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/Whisky'>Whisky</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/Vodka'>Vodka</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/Gin'>Gin</Nav.Link>
                            <Nav.Link as={Link} to='/categoria/Tequila'>Tequila</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <CartWidget />
            </Navbar>
        </>
    )
}

export default NavBar