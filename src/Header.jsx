import { NavLink, Outlet } from "react-router"
import AddToCart from "./AddToCart"


export default function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">R SHOP</div>
        <nav>
          <ul>
              <NavLink className="link" to="/">Home</NavLink>
            </ul>
           <NavLink to="/cart">  <AddToCart /> </NavLink> 
        </nav>
      </div>
      <Outlet/>
    </>
  )
}
