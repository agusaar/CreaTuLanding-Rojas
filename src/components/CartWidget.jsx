import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'
import { useCart } from '../context/cartContext'

const cartWidget = () =>{
    const {getQuantity} = useCart()
    
    return(
        <Badge 
            badgeContent={getQuantity()} 
            sx={{
                '& .MuiBadge-badge': {
                    backgroundColor: 'black',
                    color: 'white'
                }
            }}
        >
            <ShoppingCart />
        </Badge>
    )
}

export default cartWidget