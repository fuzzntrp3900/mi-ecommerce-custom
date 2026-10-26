import "./Item.css";
import react_image from "../assets/react.svg";
import { useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
export default function Item(props) {
  const [cantidad, setCantidad] = useState(1);
  const [favorito, setFavorito] = useState(false);
  const { title, price } = props;

  function handleSumar() {
    setCantidad(cantidad + 1);
  }
  function handleRestar() {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  }
  function toggleFavorito() {
    setFavorito(!favorito);
  }

  return (
    <div className="item">
      <div className="card">
        <div className="card-header">
          <div className="card-title">{title}</div>
          <div className="card-icon">
            <button className="btn btn-favorite" onClick={toggleFavorito}>
              {favorito ? (
                // Ícono relleno con color dorado si es verdadero
                <FaStar color="#ff0707" />
              ) : (
                // Ícono vacío con color gris si es falso
                <FaRegStar color="#6c757d" />
              )}
            </button>
          </div>
        </div>
        <div className="card-body d-flex flex-column align-items-center">
          {/* title centre */}
          <div className="card-image my-3">
            <img src={react_image} alt="item" />
          </div>
          <div className="card-price my-3">
            price: <span>${price.toFixed(2)}</span>
          </div>
          <div className="card-buttons">
            {/* button increase and decrease */}
            <button
              className="btn btn-danger"
              onClick={handleRestar}
              disabled={cantidad <= 1}
            >
              -
            </button>
            <span className="card-quantity">{cantidad}</span>
            <button className="btn btn-danger" onClick={handleSumar}>
              +
            </button>
          </div>
          <button className="btn btn-primary w-100 my-3 hover-change">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
