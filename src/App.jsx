import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Routing from "./utils/routing"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"
import { CartProvider } from "./context/CartContext"


const App = () => {
  return (
    <ThemeProvider>
      <CartProvider>
      <Navbar/>
      <Routing/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
      </CartProvider>
    </ThemeProvider>
    
  )
}

export default App