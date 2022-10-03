import '../ItemDetail/ItemDetail.scss';
import { CartContext } from "../CartContext/CartContext";
import { useContext, useState } from 'react';
import "../Item/Item.scss";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({ data, item }) => {

    const [itemCount, setItemCount] = useState (false);

    const { addItem } = useContext(CartContext)

    const onAdd = (count) => {
        setItemCount (true);
        addItem (data, count);
        }

    return (

        <>

        {

            data && data.img
            ?

                <div className="col-12">

                <div className="item-container contenedor">

                <div className="item-image" key= {data.id}>
                    <img className="image" src={data.img} alt="Same alt value" />
                </div>

                <div className="item-info">
                    <h4>{data.title}</h4>
                    <p>{data.description}</p>
                    <h4>${data.price}</h4>
                </div>

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
                    <ItemCount stock ={data.stock} initial={0} onAdd={onAdd} />
                }


                </div>
                </div>

            :<h4 className='cargando'>CARGANDO...</h4>

        }

        </>

        );
}

export default ItemDetail;