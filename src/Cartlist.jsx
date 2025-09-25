
import { useDispatch, useSelector } from "react-redux"
import { clearAllItems, removeItem , updateQuantity } from "./redux/slice"
import { useNavigate } from "react-router"

export default function Cartlist() {

  const cartSelector = useSelector((state) => state.cart.items)
  // console.log(cartSelector);

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handlePlaceOrder = () => {
    localStorage.clear()
    dispatch(clearAllItems())
    alert("Your Order has been placed and will be delivered within 7 days.")
    navigate("/")
    
  }

  return (
    <>
      <div className="heading">
        <div>Your Cart Items</div>
        <div> Total : {cartSelector.length} Items</div>
      </div>
      <hr style={{ border: "none", height: "0.12rem", background: "black" }} />
      <div className="flex">
        {
          cartSelector.length > 0 ? cartSelector.map((item, index) => (
            <div key={index} className="card">
              <img className="img" style={{ width: "7rem" }} src={item.thumbnail} alt="" />
              <div className="content">
                <div className="price">$ {(item.quantity ? item.quantity*item.price : item.price).toFixed(2)}</div>
                <div className="label">
                  <label htmlFor="">Increase Product Quantity </label>
                  <input type="number" min="1" value={item.quantity ? item.quantity : 1} className="input" onChange={(e) =>dispatch(updateQuantity({ id: item.id, quantity: Number(e.target.value) }))} 
                  placeholder="Enter Quantity" />
                </div>
                <div className="title">{item.title}</div>
                <div className="brand"> Brand : {item.brand}</div>
                <div className="rating">{item.rating} / 5</div>
                <button className="cart-btn btn-bg" onClick={() => dispatch(removeItem(item))}>Remove</button>
              </div>
            </div>
          )) : null
        }

      </div>
      <hr style={{ border: "none", height: "0.12rem", background: "black" }} />
      <div className="footer">
        <button className="clear-btn" disabled={cartSelector.length == 0} onClick={handlePlaceOrder}>Place Order</button>
        <div className="f-price"> Total : ${(cartSelector.reduce((sum, item) => item.quantity ? sum+item.price *item.quantity : sum+item.price, 0)).toFixed(2)}</div>
      </div>
      <hr style={{ border: "none", height: "0.12rem", background: "black" }} />

    </>
  )
}
