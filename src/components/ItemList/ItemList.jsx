import Item from '../../components/Item/Item';

const ItemList = ({data}) => {

    return (

        <>

        {
            data.map (item => (
            <Item
                key={item.id}
                id={item.id}
                img={item.img}
                title={item.title}
                description={item.description}
                price={item.price} 
                stock = {item.stock} 
                categoryId={item.categoryId}
                />
            ))
        }

        </>

    );
}

export default ItemList;