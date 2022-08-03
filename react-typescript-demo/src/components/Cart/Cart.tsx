import React from "react";
import CartItem from './CartItem';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CartContainer, CartHeading, CartFooter, CartEmpty, CartCheckout, CartTotal, CartTotalTitle, CartNone } from '../../styles/cart';

const Cart = ({ cart, onEmptyCart, onRemoveFromCart, onUpdateCartQty})=> {

    const handleEmptyCart = () => {
        onEmptyCart();
    }

    const renderEmptyMessage = () => {
        if (cart.total_unique_items > 0) {
            return;
        }

        return (
            <CartNone>
                You have no items in your shopping cart, start adding some!
            </CartNone>
        );
    }

    const renderItems = () => (
        cart.line_items.map((lineItem) => (
            <CartItem
                item={lineItem}
                key={lineItem.id}
                onRemoveFromCart={onRemoveFromCart}
                onUpdateCartQty={onUpdateCartQty}
                // className="cart__inner"
            />
        ))
    );
    const renderTotal = () => (
        <CartTotal>
            <CartTotalTitle>Subtotal:</CartTotalTitle>
            <p className="cart__total-price">{cart.subtotal.formatted_with_symbol}</p>
        </CartTotal>
    );

    return (
        <CartContainer>
            <CartHeading>Your Shopping Cart</CartHeading>
            {renderEmptyMessage()}
            {renderItems()}
            {renderTotal()}
            <CartFooter>
                <CartEmpty onClick={handleEmptyCart}>Empty cart</CartEmpty>
                <Link to='/checkout'><CartCheckout> Checkout </CartCheckout></Link>
            </CartFooter>
        </CartContainer>
    );
};

Cart.propTypes = {
    cart: PropTypes.object,
    onEmptyCart: () => { },
    onUpdateFromCart: () => {},
    onRemoveFromCart: () => {},
};

export default Cart;
