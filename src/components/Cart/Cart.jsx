import './Cart.scss';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import ItemCart from '../ItemCart/ItemCart';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, updateDoc, doc, increment } from 'firebase/firestore';

const Cart = () => {
    const { items, totalPrice, clearItems } = useContext(CartContext);

    const order = {
        buyer: {
            name: 'Facundo',
            email: 'facumcott@gmail.com',
            phone: '1161807627',
            adress: 'Sanchez de Loria 1139',
        },
        items: items.map (product => ({ id: product.id, title: product.title, description: product.description,price: product.price, count: product.count })),
        total: totalPrice (),
    }

    const handleClick   = () => {
        const db = getFirestore();
        const ordersCollection = collection(db, 'orders');
        addDoc(ordersCollection, order)
        .then (({id}) => console.log(order));
        alert('YOUR ORDER HAS BEEN CREATED!');
        clearItems();

        items.map (async (item) => {
            const itemRef = doc(db, 'productos', item.id);
            await updateDoc(itemRef, {
                stock: increment(-item.count)
            });
        })
    
    }

    if (items.length === 0) {

        return(
            <>
                <h5 className='carritovacio'>NO HAY ELEMENTOS EN EL CARRITO</h5>
                <br /><br />
                    
                    <div className='iracomprar'>
                    <Link to = '/shop'>
                        <button className='comprar'>IR A COMPRAR</button>
                    </Link>
                    </div>

            </>
            )
    }

    return(
        <>
            <div className="cart-container">
            <h1>CARRITO</h1>
            </div>

            {
            items.map(product => <ItemCart key={product.id} product={product} />)
            }

            <h4 className='carritovacio'>
                TOTAL: ${totalPrice()}
            </h4>
            <br /><br />

            <div className="cartcontainer">
                <button className="cartcontainer2" onClick={handleClick}>
                    EMITIR COMPRA
                </button>
            </div>

        </>
        )
}

export default Cart;