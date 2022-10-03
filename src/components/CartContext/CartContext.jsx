import { createContext, useState } from 'react';

export const CartContext  = createContext([])

    const CartProvider = ({ children })  => {
    const [items, setItems] = useState([]);

    const isInCart = (id) => {
        return items.find(product => product.id === id) ? true : false;
    }

    const addItem = (item, count) => {
        if (isInCart(item.id)) {  
            setItems(items.map(product => {
                return product.id === item.id ? { ...product, count: product.count + count } : product 
            }));
        }else {
            setItems([...items, {...item, count}]);
        }
    }

    const totalPrice = () => {
        return items.reduce((prev, act) => prev + act.count * act.price, 0)
    }

    const totalProducts = () => {
        items.reduce((acumulador, productoActual) => acumulador + productoActual.count, 0)
    }


    const removeItem = (id) => {
        setItems(items.filter(product => product.id !== id));
    }

    const clearItems = () => {
        setItems ([]);
    }

    return (
        <CartContext.Provider value= {{ items, isInCart, addItem, removeItem, clearItems, totalPrice, totalProducts }} >
            {children}
        </CartContext.Provider>
        )

}

export default CartProvider