import { AiOutlineShoppingCart } from "react-icons/ai";
import './CartWidget.css'
const CartWidget = () => {
  return (
    <>
      <div className="d-flex align-items-center gap-2">
        <AiOutlineShoppingCart style={{ color: 'white', fontSize: '1.5rem' }} />
        <p>0</p>
        </div>
      
    </>
  )

  }


export default CartWidget