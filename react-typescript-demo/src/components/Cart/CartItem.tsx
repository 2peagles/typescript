import React from 'react';
import PropTypes from 'prop-types';
import { CartItemContainer, CartItemDetailName, CartItemImg, CartItemRemove, CartQuantity, CartQuantityButton, CartQuantityButtonInner } from '../../styles/cart';

const CartItem = ({ item, onUpdateCartQty, onRemoveFromCart }) => {
const handleUpdateCartQty = (lineItemId, quantity) => {
  onUpdateCartQty(lineItemId, quantity);
}
const handleRemoveFromCart = () => {
    onRemoveFromCart(item.id);
}
    return (
        <CartItemContainer>
                    <CartItemImg src={item.image.url} alt={item.name} />
                    <div className="cart-item__details">
        <CartItemDetailName>{item.name}</CartItemDetailName>
        <CartQuantity>
            <CartQuantityButton onClick={() => item.quantity > 1 ? handleUpdateCartQty(item.id, item.quantity - 1) : handleRemoveFromCart()}>-</CartQuantityButton>
                <CartQuantityButtonInner>{item.quantity}</CartQuantityButtonInner>
                <CartQuantityButton onClick={() => handleUpdateCartQty(item.id, item.quantity + 1)}>+</CartQuantityButton>
        </CartQuantity>
                <div className="cart-item__details-price">{item.line_total.formatted_with_symbol}</div>
            </div>
            <CartItemRemove
                onClick={handleRemoveFromCart}
            >
                Remove
            </CartItemRemove>
        </CartItemContainer>
    );
};

CartItem.propTypes = {
    item: PropTypes.object,
};

export default CartItem;