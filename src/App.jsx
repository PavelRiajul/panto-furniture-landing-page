import { Outlet } from "react-router"
import Navbar from "./components/Navbar"
import Routing from "./utils/routing"


const App = () => {
  return (
    <div>
      <Navbar/>
      <Routing/>
      <main className="min-h-screen">
        <Outlet/>
      </main>
      <footer>Footer</footer>
    </div>
  )
}

export default App