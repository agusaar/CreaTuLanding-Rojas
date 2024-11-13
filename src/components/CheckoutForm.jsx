import { Form, Button } from "react-bootstrap"
import { createOrder } from "../firebase/db"
import { serverTimestamp } from "firebase/firestore"
import Swal from 'sweetalert2'
import { useNavigate } from "react-router-dom"

const CheckoutForm = ({cart,getTotal,clearCart}) => {
    const navigate = useNavigate()
    
    const handleSubmit = (e) =>{
        e.preventDefault()
        const [name,mail,numero] = e.target
        

        const order = {
            buyer: {name: name.value, mail: mail.value, phone: numero.value},
            items: cart,
            date: serverTimestamp(),
            total: getTotal()
        }

        let id = createOrder(order)
        Swal.fire({
            title: "Compra exitosa!",
            text: `Le llegaran al mail detalles de su compra con id: ${id}`,
            icon: "success"
          });
        e.target[0].value=""
        e.target[1].value=""
        e.target[2].value=""
        clearCart()
        navigate("/")
    }

    return (
        <Form className="col-md-4 finalForm mb-3" onSubmit={handleSubmit}>
            <Form.Control type="text" placeholder="Nombre" required className="mb-3"/>
            <Form.Control type="email" placeholder="Email" required className="mb-3"/>
            <Form.Control type="text" placeholder="Celular" required className="mb-3"/>
            <Button variant="primary" type="submit" className="mb-3">
                Comprar
            </Button>
        </Form>
    )

}

export default CheckoutForm