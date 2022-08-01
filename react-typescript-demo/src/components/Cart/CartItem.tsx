import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap'

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
const handleUpdateCartQty = (lineItemId, quantity) => {
  onUpdateCartQty(lineItemId, quantity);
}
const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
}
    return (
        <div className="cart-item">
                    <img className="cart-item__image" src={item.image.url} alt={item.name} />
                    <div className="cart-item__details">
        <h4 className="cart-item__details-name">{item.name}</h4>
        <div className="cart-item__details-qty">
            <Button onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</Button>
                <p>{item.quantity}</p>
                <Button onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</Button>
        </div>
                <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
            </div>
            <Button
                className="cart-item__remove"
                onClick={handleRemoveFromCart}
            >
                Remove
            </Button>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;