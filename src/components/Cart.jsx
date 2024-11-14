import { useCart } from "../context/cartContext"
import { Container, Col, Row , Button} from "react-bootstrap"
import CartItem from "./CartItem"
import CheckoutForm from "./CheckoutForm"
import { useNavigate } from "react-router-dom"
import Swal from 'sweetalert2'

const Cart = () =>{
    const {cart,getTotal,getQuantity,deleteFromCart,clearCart} = useCart()
    const navigate = useNavigate()

    const handleClearCart = () => {
        Swal.fire({
            title: "Seguro desea vaciar su carrito?",
            text: "No se guardaran sus productos seleccionados",
            icon: "warning",
            confirmButtonColor: "#d33",
            confirmButtonText: "Vaciar"
          }).then((result) => {
            if (result.isConfirmed) {
              clearCart()
              navigate("/")
          }})
    }

    if(cart.length==0)
        return <h2 className='slogan'>Aún no tiene productos en el carrito :(</h2>
    else
        return(
            <div>
                <h2 className='slogan'>Tu carrito ({getQuantity()} producto/s)</h2>
                <Container>
                        <Row key="1234">
                            <Col>Item</Col>
                            <Col>     </Col>
                            <Col>Cantidad</Col>
                            <Col>     </Col>
                            <Col>Total</Col>
                        </Row>
                    {cart.map(element => <CartItem item={element} key={element.id} onDelete={deleteFromCart}/>)}
                </Container>
                <div className="totalContainer">
                    <Button variant="danger" onClick={handleClearCart}>
                        Vaciar Carrito
                    </Button>
                    <h4 className="totalTitle">Total: ${getTotal().toFixed(2)}</h4>
                </div>
                <h2 className='slogan'>Finalizar Compra</h2>
                <p>Complete el siguiente formulario para finalizar su compra</p>
                <CheckoutForm cart={cart} getTotal={getTotal} clearCart={clearCart}/>
            </div>
        )
}

export default Cart