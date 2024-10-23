import ItemCount from '../itemCount/itemCount.jsx'
import { Carousel, Image } from 'react-bootstrap'
const ItemDetail = ({product}) => {
    return (
        <>
        <h1 className='prodTitle'>{product?.title}</h1>
        <Carousel>
            {product?.images.map(img => (
                <Carousel.Item key={img.index}>
                    <Image width="300px" src={img}/>
                </Carousel.Item>
            ))}
        </Carousel>
        <h4 className='price'>${product?.price}</h4>
        <p className='prodDescription'>{product?.description}</p>
        <ItemCount initial={1} stock={product?.stock} onAdd={(cant) => {console.log('Se agrego: '+cant)}} />
        </>
    )
}

export default ItemDetail