import { useShoppingCart } from "../context/ShoppingCartContext";
// import storeItems from '../data/items.json';
import { Button, Stack } from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';
import { Store }  from '../pages/Store';

type CartItemProps={
    id:number 
    quantity:number
}
export function CartItem({id, quantity}: CartItemProps){
        const {removeFromCart } = useShoppingCart()
        const product = Store.find(i => i.id === id)
        if(product == null) return null
    return (
        <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
            <img  src={product.image?.url} alt={product.name} style={{width: '125px', height:'75px', objectFit:'cover'}} />
                <div className='me-auto'>
                    <div>
                        {product.name} {quantity > 1 && 
                        <span className="text-muted" style={{fontSize:'.65rem'}}>{quantity}x</span>}
                    </div>
                    <div className='text-muted' style={{fontSize:'.75rem'}}>{formatCurrency(product.price)}</div>
                </div>
            <div>{formatCurrency(product.price * quantity)}</div>
            <Button onClick={()=> removeFromCart(product.id)} variant='outlined'> x </Button>
        </Stack>

    )
}