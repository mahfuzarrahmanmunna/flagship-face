import React, { useEffect, useState } from 'react';
import { CartContext } from './Context';
import { getCart } from '../utils/LocalStorage';

const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    useEffect(() => {
        // check the local storage into cart data
        setCart(getCart())
    },
        [])
    return <CartContext.Provider value={{ cart, setCart }}>
        {children}
    </CartContext.Provider>
};

export default CartProvider;