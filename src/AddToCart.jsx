import { useSelector } from "react-redux"


export default function AddToCart() {

const cartSelector= useSelector((state)=>state.cart.items)
// console.log(cartSelector);

  return (<>
        <div className="cart">
            <img  src="https://img.icons8.com/material-outlined/24/ffffff/shopping-cart.png" alt="cart"/>
            <span >{cartSelector.length ? cartSelector.length :0}</span>
        </div>

  </>
  )
}
