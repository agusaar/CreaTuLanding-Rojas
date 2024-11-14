import ItemCount from './itemCount.jsx'
import { Carousel, Image } from 'react-bootstrap'
const ItemDetail = ({product}) => {
    return (
        <>
        <h1 className='prodTitle'>{product?.title}</h1>
        <Carousel>
            {product?.images.map(img => (
                <Carousel.Item key={img}>
                    <Image width="300px" src={img}/>
                </Carousel.Item>
            ))}
        </Carousel>
        <h4 className='price'>${product?.price}</h4>
        <p className='prodDescription'>{product?.description}</p>
        {(product.stock>0)?
        <ItemCount detail={product} />:
        <div className='noStock'>
            <h6>Momentáneamente no contamos con stock del producto</h6>
        </div>
        }
        </>
    )
}

export default ItemDetail