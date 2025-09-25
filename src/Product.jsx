import { useEffect, useState } from "react"
import {useDispatch, useSelector} from "react-redux"
import { fetchProducts } from "./redux/productSlice"
import { addItem, removeItem } from "./redux/slice"

export default function Product() {

const [search,setSearch]= useState("")
const dispatch = useDispatch()


useEffect(()=>{
  dispatch(fetchProducts())
}, [dispatch, search])

const cartSelector= useSelector((state)=>state.cart.items)
// console.log(cartSelector);

const productSelector= useSelector((state)=>state.products.items)
  //  console.log(productSelector)

  return (
    <>
    <div className="flex search  sticky">
      <input className="input" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder="Enter Product Name"/>
      <button className="btn" onClick={()=>dispatch(fetchProducts(search))}>Search</button>
    </div>
    <hr style={{border:"none", height:"0.12rem",background:"black"}} />

    <div className="flex">
   {
     productSelector.length && productSelector.map((item,index)=>(
      <div key={index} className="card">
        <img className="img" src={item.thumbnail} alt="" />
        <div className="content">
         <div className="price">$ {item.price}</div>
         <div className="title"> {item.title}</div>
         <div className="brand"> Brand : {item.brand}</div>
         <div className="warranty"> {item.warrantyInformation}</div>
         {
          cartSelector.find(cartItem =>cartItem.id == item.id) ? <button onClick={()=>dispatch(removeItem(item))} className="btn-red">Remove From Cart</button> : 
         <button onClick={()=>dispatch(addItem(item))} className="cart-btn">Add To Cart</button> 
         }
        </div>
      </div>
     ))
   }
    </div>
    </>
  )
}
