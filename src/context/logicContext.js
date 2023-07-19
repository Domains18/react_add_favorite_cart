import { Children, createContext, useContext, useState } from "react";


import { useStorage } from "../hooks/storage";
import Cart from "../components/Cart";


const logicContext = createContext();


export function shoppingCartProvider() {
    const [cartItems, setCartItems] = useStorage("cartItems", []);
    const cartQuantity = cartItems.reduce((quantity, item) => quantity + item.quantity, 0);
    const [cartOpen, setCartOpen] = useState(false);

    function getQuantity(id) {
        return cartItems.find((item) => item.id === id)?.quantity || 0;
    }
    const openCart = () => setCartOpen(true);
    const closeCart = () => setCartOpen(false);

    //TODO: add item quantity
    function addItemQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id) === null) {
                return [...currentItems, { id, quantity: 1 }]
            } else {
                return currentItems.map(item => {
                    if (item?.id === id) {
                        return { ...item, quantity: item.quantity + 1 }
                    } else {
                        return item;
                    }
                });
            }
        });
    }
    function removeItemQuantity(id) {
        setCartItems(currentItems => {
            if (currentItems.find(item => item.id === id)?.quantity === 1) {
                return currentItems.filter(item => item.id !== id)
            } else {
                return currentItems.map(item => {
                    if (item.id === id) {
                        return { ...item, quantity: item.quantity - 1 }
                    } else {
                        return item;
                    }
                });
            }
        });
    };

    function clearCart(id) {
        setCartItems(currentItems => {
            return currentItems.filter(item => item.id !== id);
        });
    }

    return (
        <logicContext.Provider value={{
            getQuantity,
            removeItemQuantity,
            removeItemQuantity,
            clearCart,
            openCart,
            closeCart,
            cartItems,
            cartQuantity
        }}>{Children}
            <Cart setCartOpen={setCartOpen} />
        </logicContext.Provider>
    )
};

