import { useEffect, useState } from 'react';
import Item from './Item';
import './ItemListContainer.css'




function ItemListContainer(props) {
  const { greeting } = props;
    // Simulated data for items
    const datos = [
        { id: 1, name: 'Item 1', price: 19.99 },
        { id: 2, name: 'Item 2', price: 29.99 },
        { id: 3, name: 'Item 3', price: 39.99 }, 
        { id: 4, name: 'Item 4', price: 49.99 },
        { id: 5, name: 'Item 5', price: 59.99 },
        { id: 6, name: 'Item 6', price: 69.99 },
    ];

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const getProducts = () =>  datos;
   

    useEffect(() => {
        console.log('useEffect(montado) === componentDidMount -> ItemContainerListHooks')
        //simulamos una llamada a un API con un setTimeout
        setTimeout(() => {
            const products = getProducts();
            setItems(products);
            setLoading(false);  
        }, 2000); // delay 2 segundos
    }, []);// el array vacío [] indica que se ejecuta solo una vez al montar el componente. Si no lo pongo trae el array cada vez que se renderiza el componente, generando un bucle infinito.



  return (
    <div className="item-container-list">
      <h1>{greeting}</h1>
      <br/>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center"><span className=" fw-bold text-primary">Cargando productos...</span></div>
      ) : (
        /* vienen 3 elementos por fila */
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-5">
            {items.map((item, key) => (
                <div className="col" key={key}>
                    <Item title={item.name} price={item.price} />
                </div>
            ))}
        </div>
      )}
    </div>
  );
}

export default ItemListContainer;