import ItemList from '../ItemList/ItemList.jsx'
import { useEffect, useState } from "react"
import { useParams } from 'react-router-dom'

const ItemListContainer = () => {
   const [productos, setProductos] = useState([])
   const { cat } = useParams()

    useEffect(() => {
         const url = 'https://dummyjson.com/products'
         const urlCat = `https://dummyjson.com/products/category/${cat}`

         fetch(cat? urlCat : url)
         .then(res => res.json())
         .then(res => setProductos(res.products))
    },[cat])

   return (
      <div className='listContainer'>
         <h2 className='slogan'>BeFree. Ponete lo que quieras.</h2>
         <ItemList prods={productos}/>  
      </div>
   ) 
}

export default ItemListContainer