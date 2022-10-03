import '../NotFound/NotFound.scss';
import error from '../../assets/img/error.png';
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <>
        <div className="errorTitulo"><h4> Nada por acá!</h4></div>
        <div className="error">
            <img src = {error} alt="set alt value" />
        </div>
        <div className="divBotonDetalle">
            <Link to= {'/'}>
                <button className="botonDetalle">
                    VOLVER AL INICIO
                </button>
            </Link>
        </div>
        </>
    )
}

export default NotFound;