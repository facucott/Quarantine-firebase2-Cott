import { useState, useEffect } from 'react';
import { useParams } from "react-router";
import ItemList from '../ItemList/ItemList';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {

    const [dato, setDato] = useState([]);

    const { idCategory } = useParams()

    useEffect (() => {
        const querydb =  getFirestore();
        const queryCollection = collection(querydb, 'productos');
        if(idCategory) {
            const queryFilter = query(queryCollection, where('categoryId', '==', idCategory))
            getDocs(queryFilter)
                .then(res => setDato(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        } else {
            getDocs(queryCollection)
                .then(res => setDato(res.docs.map(product => ({ id: product.id, ...product.data() }))))
        }
    }, [idCategory]);

    return (
        <div className="container">
        <div className="row">
        <ItemList data= {dato} />
        </div>
        </div>

    );
    
}


export default ItemListContainer