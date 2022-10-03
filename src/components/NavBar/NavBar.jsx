import CartWidget from "../CartWidget/CartWidget";
import { Link, NavLink } from 'react-router-dom';
import '../NavBar/NavBar.scss';

export default function NavBar (){
    return(
        <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="#">T3OQ</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="link" to='/shop'><a className="nav-link active" aria-current="page" href="#">Shop</a></Link>
        </li>
        <li className="nav-item">
        <Link className="link" to='/category/1'><a className="nav-link" href="#">Discos</a></Link>
        </li>
        <li className="nav-item">
        <Link className="link" to='/category/2'><a className="nav-link" href="#">Remeras</a></Link>
        </li>
        <li className="nav-item">
        <Link className="link" to='/category/3'><a className="nav-link" href="#">Accesorios</a></Link>
        </li>
        <li className="nav-item">
        <Link className="link" to='/category/4'><a className="nav-link" href="#">Posters</a></Link>
        </li>
        <Link to='/cart'>
        <li className="nav-item"><a className="nav-link" href="#"><CartWidget/></a></li>
        </Link>
      </ul>
    </div>
    <form className="d-flex" role="search">
      <a className="navbar-brand">T3OQ</a>
      </form>
  </div>
</nav>
    );
}