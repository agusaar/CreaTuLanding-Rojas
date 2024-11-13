import Item from "./Item"
import { Col, Container, Row } from "react-bootstrap"

const ItemList = ({prods}) => {
    
    return(
        <Container>
            <Row className="justify-content-center g-4">
                {prods?.map( prod => (
                        <Item  producto={prod} key={prod.id}/>
                ))}
            </Row>
        </Container>
    )

}

export default ItemList