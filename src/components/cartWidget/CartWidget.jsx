import { Badge } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material'

const cartWidget = () =>{
    return(
        <Badge badgeContent={4} color="primary">
            <ShoppingCart />
        </Badge>
    )
}

export default cartWidget