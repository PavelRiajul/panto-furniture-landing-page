import { Route, Routes } from "react-router"
import Home from "../pages/home/Home"
import Shop from "../pages/shop/Shop"
import About from "../pages/about/About"
import Contact from "../pages/contact/Contact"
const Routing = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shop" element={<Shop/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
        </Routes>
    </div>
  )
}
export default Routing