import ItemList from './ItemList.jsx'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'
import Loader from './Loader.jsx'
import {getProducts, getProductsByCat} from '../firebase/db.js'
const ItemListContainer = () => {
   const [productos, setProductos] = useState([])
   const { cat } = useParams()

    useEffect(() => {
         if(cat)
            getProductsByCat(cat).then(res=>setProductos(res))
         else
            getProducts().then(res => setProductos(res))
    },[cat])

   return (
      <div className='listContainer'>
         <h2 className='slogan'>BeFree. Ponete lo que quieras.</h2>
         {productos.length>0 ? <ItemList prods={productos}/> : <Loader />}  
      </div>
   ) 
}

export default ItemListContainer