import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {

    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={producto.images[0]}  alt={producto.alt}/>
        <Card.Body>
          <Card.Title>{producto.title}</Card.Title>
          <Card.Text>
          {producto.description}
          </Card.Text>
          <Button variant="primary" as={Link} to={`/item/${producto.id}`} >Ver Detalle</Button>
        </Card.Body>
      </Card>
    )
}
export default Item