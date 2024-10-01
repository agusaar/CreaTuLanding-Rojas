import CartWidget from "../cartWidget/CartWidget"
import beFreeIcon  from './assets/beFreeIcon.png'

const NavBar = () =>{
    return (
        <nav className="navBar">
            <img className="logo" src={beFreeIcon} alt="BeFree - Icon"/>
            <button>Remeras</button>
            <button>Buzos</button>
            <button>Pantalones</button>
            <button>Camperas</button>
            <CartWidget />
        </nav>
    )
}

export default NavBar