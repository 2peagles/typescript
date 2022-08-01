import React, {useState } from 'react';
import Cart from './Cart';
import { BsBag } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
const CartNav = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) => {
    const [isCartVisible, setCartVisible] = useState(false);
    const renderOpenButton = () => (
        <button className="nav__cart-btn--open">
            <BsBag />
            {cart !== null ? <span>{cart.total_items}</span> : ''}
        </button>
    );

    const renderCloseButton = () => (
        <button className="nav__cart-btn--close">
            <FaTimes size="1x" color="white" />
        </button>
    );

    return (
        <div className="nav">
            <div className="nav__cart" onClick={() => setCartVisible(!isCartVisible)}>
                {!isCartVisible ? renderOpenButton() : renderCloseButton()}
            </div>
            {isCartVisible &&
                <Cart
                    cart={cart}
                    onUpdateCartQty={onUpdateCartQty}
                    onRemoveFromCart={onRemoveFromCart}
                    onEmptyCart={onEmptyCart}
                />
            }
        </div>
    );
};

export default CartNav;