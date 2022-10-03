import "../Item/Item.scss";
// import ItemCount from "../ItemCount/ItemCount";
import { Link } from 'react-router-dom'


const Item = ({id, img, title, description, price, stock}) => {

    // const onAdd = (cantidad) => {
    //     alert(`Se agregó ${cantidad}`);
    // }

    return (

        
        <>

        <div className="col-lg-4 col-md-6 col-sm-12">

        <div className="item-container">

            <div className="item-image">
                <img className="image" src={img} alt="Same alt value" />
            </div>

            {/* <div className="item-info">
                <h4>{title}</h4>
                <p>{description}</p>
                <h4>{price}</h4>
            </div> */}
            
            <div className="divBotonDetalle">
                <Link to= {`/item/${id}`}><button className="botonDetalle">DETALLES</button></Link>
            </div>
            {/* <ItemCount stock = {stock} initial = {1} onAdd = {onAdd} /> */}
            </div>

        </div>

        </>
        
        );
}

export default Item;