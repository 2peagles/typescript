import { Button, Card } from 'react-bootstrap';
import { useShoppingCart } from '../context/ShoppingCartContext';
import { formatCurrency } from '../utilities/formatCurrency';
import PropTypes from 'prop-types';
// import { Products } from '@chec/commerce.js/features/products';

// type StoreItemProps = {
//     id:number
//     name:string
//     price:number 
//     imgUrl:string
// }
// type Product = {
//  product?:string
// }[]
// type StoreItemProps ={
//     product:string
// }
// export function StoreItem({ id, name, price, imgUrl} : StoreItemProps){
const StoreItem = ({product}) => {
    const {getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart} = useShoppingCart()
    const quantity = getItemQuantity(product.id)

    return(
    <Card className='h-100'>
        <Card.Img 
        variant='top' 
        src={product.image?.url} alt={product.name} 
        height='300px'
        style={{ objectFit:'cover' }} />
        <Card.Body className='d-flex flex-column'>
            <Card.Title className='d-flex justify-content-between align-items-basline mb-4'>
                <span className='fs-2'>{product.name}</span>
                    <span className='ms-2 text-muted'>{formatCurrency (product.price)}</span>
            </Card.Title>
                <div className='mt-auto'>
                    {quantity === 0 ? (
                        <Button className='w-100' onClick={()=> increaseCartQuantity(product.id)}> + Add To Cart </Button>
                    ) : <div className='d-flex align-items-center flex-column'
                            style={{ gap: '.5rem' }}>
                        <div className='d-flex align-items-center justify-content-center'
                                style={{ gap: '.5rem' }}>
                                <Button onClick={() => decreaseCartQuantity(product.id)}>-</Button>
                                <div>
                                    <span className='fs-3'>{quantity}</span>
                                </div>
                                <Button onClick={() => increaseCartQuantity(product.id)}>+</Button>
                    </div>
                            <Button variant='danger' size='sm' onClick={() => removeFromCart(product.id)}> Remove </Button>
                </div>
             }
        </div>
        </Card.Body>
    </Card>
    )
}
StoreItem.propTypes = {
    product: PropTypes.object,
};
export default StoreItem;