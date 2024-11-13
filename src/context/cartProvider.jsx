import { cartContext } from "./cartContext"
import { useState } from "react"

const CartProvider = ({children}) => {
    const [cart,setCart] = useState([])

    const addToCart = (item) => {
        let i=0
        const updatedCart = [...cart]

        while( i<updatedCart.length && updatedCart[i].id!==item.id )
            i++

        if(i<cart.length)
            updatedCart[i].quantity+=item.quantity
        else
            updatedCart.push(item)
        
        setCart(updatedCart)
    }
    const deleteFromCart = (id) =>{
        let i=0
        const updatedCart = [...cart]

        while( i<updatedCart.length && updatedCart[i].id!==id )
            i++

        if(i<cart.length)
            if(updatedCart[i].quantity===1)
                updatedCart.splice(i,1)
            else
                updatedCart[i].quantity--
        else
            console.log("Error. The item you want to delete is not in your cart.")
        
        setCart(updatedCart)
    }

    const getTotal = () => {
        const prices = cart.map(item => item.quantity * item.price)
        return prices.reduce((acc, curr) => acc+curr,0)
    }

    const clearCart = () => setCart([])

    const getQuantity = () => {
        const qty = cart.map(item => item.quantity)
        return qty.reduce((acc, curr) => acc+curr,0)
    }

    return(
    <cartContext.Provider value={{cart,addToCart,clearCart,getQuantity,getTotal,deleteFromCart}}>
        {children}
    </cartContext.Provider>
    )
}

export default CartProvider