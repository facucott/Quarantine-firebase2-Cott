import { useState } from 'react';
import "../ItemCount/ItemCount.scss";

const ItemCount = ({stock = 0, initial = 1, onAdd}) => {

    const [count, setCount] = useState (initial)

    const sumar = () => {
        if (stock > count){
            setCount (count + 1)
        }
    }

    const restar = () => {
        if (count > 0){
            setCount (count - 1)
        }
    }

    const agregar = () => {
        onAdd (count)
    }


    return (

        <>
            <div className="containerBoton">
                <div className="boton1"><button className='botones' onClick={restar}> - </button></div>
                <div><label className="count"> {count} </label></div>
                <div className="boton2"><button className='botones' onClick={sumar}> + </button></div>

            {
                count ? 
                <div className="agregar">
                <button className="botonAgregar" onClick={()=> onAdd(count)}>AGREGAR AL CARRITO</button>
                </div>
                : 
                <div>
                <button className="botonAgregar" disabled>AGREGAR AL CARRRITO</button>
                </div>
            }
            </div>

        </>

    )

}

export default ItemCount;