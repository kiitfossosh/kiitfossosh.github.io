import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import styled from 'styled-components'

const NavbarContainer = styled.div`
	font-family: 'Rubik', sans-serif;
`

const SiteNavbar = () => {
    return (
        <NavbarContainer>
            <Navbar expand="lg" style={{ backgroundColor: "#14213D" }} variant="dark">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home" active>Home</Nav.Link>
                        <Nav.Link href="#link" active>About Us</Nav.Link>
                        <Nav.Link href="#link" active>Contributors</Nav.Link>
                        <Nav.Link href="#link" active>Join Us</Nav.Link>
                        <Nav.Link href="#link" active>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </NavbarContainer>
    )
}

export default SiteNavbar
