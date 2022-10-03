import { useContext } from "react";
import "../Item/Item.scss";
import { CartContext } from "../CartContext/CartContext";


const ItemCart = ({product}) => {

    const { removeItem, clearItems } = useContext (CartContext);

    return (

        
        <>
        
        <div className="col-12">

        <div className="item-container contenedor">

            <div className="item-image">
                <img className="image" src={product.img} alt="Same alt value" />
            </div>

            <div className="item-info">
                <h4>{product.title}</h4>
                <h5>{product.description}</h5>
                <h6>Precio: ${product.price}</h6>
                <h6>Cantidad: {product.count}</h6>
                <h6>Subtotal: ${product.count * product.price}</h6>
                <br /><br />
                <button onClick={() =>removeItem(product.id)} className='remove'>ELIMINAR</button>
                <button onClick={() =>clearItems(product.id)} className='remove'>VACIAR CARRITO</button>
            </div>
            </div>
            </div>

        </>
        
        )
}

export default ItemCart;