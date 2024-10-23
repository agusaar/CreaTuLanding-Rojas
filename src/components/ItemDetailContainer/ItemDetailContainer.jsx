import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        const url = `https://dummyjson.com/products/${id}`

        fetch(url)
        .then(res => res.json())
        .then(res => setProduct(res))
    },[id])

    return (
        <ItemDetail product={product}/>
    )
}

export default ItemDetailContainer