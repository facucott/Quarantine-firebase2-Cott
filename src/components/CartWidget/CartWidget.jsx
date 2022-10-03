import { CartContext } from "../CartContext/CartContext";
import { useContext } from 'react';
import '../CartWidget/CartWidget.scss';

const CartWidget =  () => {

    const { items } = useContext(CartContext);
    let itemsInCart = 0;

        items.map((item) => {
            itemsInCart = itemsInCart + item.count;

        })

    return(

        <>
        <i className="bi bi-cart3"></i>
        <div className="contadorCarrito">
            {itemsInCart}
        </div>
        </>
    )
}

export default CartWidget