import { Button, Card } from 'react-bootstrap';
import PropTypes from 'prop-types';

const StoreItem = ({product, onAddToCart}) => {
    const handleAddToCart = () => {
        onAddToCart(product.id, 1);
    }

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
                    <span className='ms-2 text-muted'>{product.price.formatted_with_symbol}</span>
            </Card.Title>
            <Button
                name='Add to cart'
                className='product_btn'
                onClick={handleAddToCart}
            > Quick Add
             </Button>
        </Card.Body>
    </Card>
    )
}
StoreItem.propTypes = {
    product: PropTypes.object,
    handleAddToCart:PropTypes.func,
    onAddToCart:()=> {},
};
export default StoreItem;