import { Link } from "react-router-dom"
import CartWidget from "../cartWidget/CartWidget.jsx"
import beFreeIcon  from './assets/beFreeIcon.png'
import { Navbar, Nav, Container } from "react-bootstrap"

const NavBar = () =>{
    return (
        <Navbar className="navBar">
            <Container>
            <Navbar.Brand as={Link} to="/"> {/* Si usas React Router */}
                <img
                src={beFreeIcon}
                className="d-inline-block align-top logo"
                alt="Logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
                <Nav className="mx-auto justify-content-center">
                    <Nav.Link as={Link} to="/category/mens-shirts" className="mx-3">Remeras</Nav.Link>
                    <Nav.Link as={Link} to="/category/mens-shoes" className="mx-3">Zapatos</Nav.Link>
                    <Nav.Link as={Link} to="/category/mens-watches" className="mx-3">Relojes</Nav.Link>
                    <Nav.Link as={Link} to="/category/sunglasses" className="mx-3">Lentes</Nav.Link>
                    <CartWidget />
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar