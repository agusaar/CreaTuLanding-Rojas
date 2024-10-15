import CartWidget from "../cartWidget/CartWidget.jsx"
import beFreeIcon  from './assets/beFreeIcon.png'
import Button from 'react-bootstrap/Button'

const NavBar = () =>{
    return (
        <nav className="navBar">
            <img className="logo" src={beFreeIcon} alt="BeFree - Icon"/>
            <Button>Remeras</Button>
            <Button>Buzos</Button>
            <Button>Pantalones</Button>
            <Button>Camperas</Button>
            <CartWidget />
        </nav>
    )
}

export default NavBar