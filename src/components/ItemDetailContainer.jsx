import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemDetail from "./ItemDetail"
import Loader from "./Loader"
import { getProductById } from "../firebase/db"

const ItemDetailContainer = () => {
    const [product,setProduct] = useState(null)
    const {id} = useParams()

    useEffect(()=>{
        getProductById(id)
            .then(res => setProduct(res))
    },[id])

    return (
        <div className={product!=null ? '' :'detailContainer'}>
            {product!=null ? <ItemDetail product={product}/> : <Loader className="loaderDetailCont"/>}
        </div>
        
    )
}

export default ItemDetailContainer