import Item from './Item';
import './ItemListContainer.css'




function ItemListContainer(props) {
    const {greeting} = props;
  return (
    <div className="item-list-container d-flex flex-column align-items-center">
      <h1>{greeting}</h1>
     <div className="container row mb-3">
        <div className="col-md-4">
          <Item title="Item 1" price={19.99} />
        </div>
        <div className="col-md-4">
          <Item title="Item 2" price={29.99} />
        </div>
        <div className="col-md-4">
          <Item title="Item 3" price={39.99} />
        </div>
      </div>
      <div className="container row">
        <div className="col-md-4">
          <Item title="Item 4" price={49.99} />
        </div>
        <div className="col-md-4">
          <Item title="Item 5" price={59.99} />
        </div>
        <div className="col-md-4">
          <Item title="Item 6" price={69.99} />
        </div>
      </div>

    </div>
  )
}

export default ItemListContainer