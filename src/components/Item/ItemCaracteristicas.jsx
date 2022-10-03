import "../Item/Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from "../CartContext/CartContext";
import { useContext, useState } from 'react';
//import Cart from "../Cart/Cart";


const ItemCaracteristicas = ({img, title, description, price, stock, item}) => {

    const [itemCount, setItemCount] = useState (false);

    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
        setItemCount (true);
        addItem (img, title, description, price, item, stock, count);
        }

    // const onAdd = (cantidad) => {
    //     alert(`Se agregó ${cantidad}`);
    //     setItemCount (!itemCount);
    //     addItem(img, title, description, price, stock);
    // }

    return (


        <>

        {

        <div className="col-12">

        <div className="item-container contenedor">

            <div className="item-image">
                <img className="image" src={img} alt="Same alt value" />
            </div>

            <div className="item-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price}</h4>
            </div>

            {/* <div className="divBotonDetalle">
                <button className="botonDetalle">DETALLES</button>
            </div> */}

            {/* <ItemCount stock = {stock} initial = {0} onAdd = {onAdd} /> */}

            {
                itemCount ?
                <>
                <div className="añadido">
                <h6 className="productoañadido">PRODUCTO AÑADIDO!</h6><br />
                    <Link to= '/cart'>
                        <button className="botonAgregar">IR AL CARRITO</button>
                    </Link>
                </div>
                </>
                :
                <ItemCount item= {item} stock ={stock} initial={0} onAdd={onAdd} />
            }


            </div>
        </div>

        }

        </>

        );
}

export default ItemCaracteristicas;