import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import AuthButton from './AuthButton'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Trackr</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <AuthButton/>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navigation
