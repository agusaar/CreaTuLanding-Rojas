import { useState } from "react"
import { Button } from "react-bootstrap"
import { useCart } from '../context/cartContext'

const ItemCount = ({detail}) => {
    const [cantidad, setCantidad] = useState(1)
    const {cart, addToCart} = useCart()

    const increment = () => {
        if(cantidad + 1 <= detail?.stock)
            setCantidad(cantidad+1)
    }

    const decrement = () => {
        if(cantidad - 1 >= 1)
            setCantidad(cantidad-1)
    }

    const handleAddToCart = () => addToCart({...detail,quantity:cantidad})

    return (
    <div>
        <div className="itemCountButtons">
            <Button onClick={increment}>+</Button>
            <p>{cantidad}</p>
            <Button onClick={decrement}>-</Button>
        </div>
        <Button onClick={handleAddToCart} disabled={!detail?.stock}>Add to cart</Button>
    </div>
  )  
}

export default ItemCount