import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from "react-router";
import { getFirestore, doc, getDoc } from 'firebase/firestore';

const ItemDetailContainer = () => {
    const [dato, setDato] = useState([]);
    const { idItem } = useParams()

    useEffect (() => {
        const querydb =  getFirestore();
        const queryDoc = doc(querydb, 'productos', idItem);
        getDoc(queryDoc)
            .then(res => setDato({id: res.id, ...res.data()}))
    }, [idItem])

    return (
        <div className="container">
        <div className="row">
        <ItemDetail data= {dato} />
        </div>
        </div>

    );
    
}


export default ItemDetailContainer;