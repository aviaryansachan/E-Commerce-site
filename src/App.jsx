import {Routes , Route} from "react-router"
import './App.css'
import Header from "./Header";
import Cartlist from "./Cartlist";
import Product from "./Product";

function App() {


  return (
    <>
  
      <Routes>
         <Route element={<Header />}>
        <Route path="/" element={<Product />}/>
        <Route path="/cart" element={<Cartlist />} />
        </Route>
      </Routes>
    </>
  )
}

export default App;
