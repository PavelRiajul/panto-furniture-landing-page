import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Routing from "./utils/routing"
import Footer from "./components/Footer"
import { ThemeProvider } from "./context/ThemeContext"


const App = () => {
  return (
    <ThemeProvider>
  <Navbar/>
      <Routing/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </ThemeProvider>
    
  )
}

export default App