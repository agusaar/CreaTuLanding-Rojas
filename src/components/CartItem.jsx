import { Button, Col, Row, Image } from "react-bootstrap"
import DeleteIcon from '@mui/icons-material/Delete';


const cartItem = ({item, onDelete}) => {
    return (
        <>
        <hr></hr>
        <Row key={item.id} className="d-flex align-items-center">
            <Col><Image src={item.thumbnail} className="cartProductImage"/></Col>
            <Col>{item.title}</Col>
            <Col>{item.quantity}</Col>
            <Col><Button variant="danger" onClick={() => {onDelete(item.id)}}><DeleteIcon /></Button></Col>
            <Col>{"$"+(item.price * item.quantity).toFixed(2)}</Col>
        </Row>
        </>
    )
}

export default cartItem