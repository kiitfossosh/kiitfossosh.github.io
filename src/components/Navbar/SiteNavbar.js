import React from "react"
import { Navbar, Nav } from "react-bootstrap"
import styled from "styled-components"
import scrollTo from 'gatsby-plugin-smoothscroll'

const NavbarContainer = styled.div`
	font-family: "Rubik", sans-serif;
`

const SiteNavbar = () => {
	return (
		<NavbarContainer>
			<Navbar
				expand="lg"
				style={{ backgroundColor: "#14213D" }}
				variant="dark"
				fixed="top"
			>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link active onClick={() => scrollTo("#home")}>
							Home
						</Nav.Link>
						<Nav.Link active onClick={() => scrollTo("#aboutus")}>
							About Us
						</Nav.Link>
						<Nav.Link active onClick={() => scrollTo("#contributors")}>
							Contributors
						</Nav.Link>
						<Nav.Link active onClick={() => scrollTo("#joinus")}>
							Join Us
						</Nav.Link>
						<Nav.Link active onClick={() => scrollTo("#footer")}>
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</NavbarContainer>
	)
}

export default SiteNavbar
