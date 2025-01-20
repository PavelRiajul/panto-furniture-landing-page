import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Routing from "./utils/routing"
import Footer from "./components/Footer"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routing/>
      <main>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default App