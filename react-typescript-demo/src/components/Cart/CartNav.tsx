import React, {useState } from 'react';
import Cart from './Cart';
import { BsBag } from 'react-icons/bs';
import { FaTimes } from 'react-icons/fa';
import { CartNavCloseButton, CartNavContainer, CartNavOpenButton } from '../../styles/cart';

const CartNav = ({ cart, onRemoveFromCart, onEmptyCart, onUpdateCartQty}) => {
    const [isCartVisible, setCartVisible] = useState(false);
    const renderOpenButton = () => (
        <CartNavOpenButton>
            <BsBag />
            {cart !== null ? <span>{cart.total_items}</span> : ''}
        </CartNavOpenButton>
    );

    const renderCloseButton = () => (
        <CartNavCloseButton>
            <FaTimes />
        </CartNavCloseButton>
    );

    return (
        <CartNavContainer>
            <div onClick={() => setCartVisible(!isCartVisible)}>
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
        </CartNavContainer>
    );
};

export default CartNav;