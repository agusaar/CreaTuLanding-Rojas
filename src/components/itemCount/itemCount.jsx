import { useState } from "react"
import { Button } from "react-bootstrap"

const ItemCount = ({initial, stock, onAdd}) => {
    const [cantidad, setCantidad] = useState(initial)

    const increment = () => {
        if(cantidad + 1 <= stock)
            setCantidad(cantidad+1)
    }

    const decrement = () => {
        if(cantidad - 1 >= initial)
            setCantidad(cantidad-1)
    }

    return (
    <div>
        <div className="itemCountButtons">
            <Button onClick={increment}>+</Button>
            <p>{cantidad}</p>
            <Button onClick={decrement}>-</Button>
        </div>
        <Button onClick={() => onAdd(cantidad)} disabled={!stock}>Add to cart</Button>
    </div>
  )  
}

export default ItemCount