import { FaBagShopping, FaBars } from "react-icons/fa6"
import { Link, NavLink } from "react-router"

const navObj =[
    {path:"/",label:"Furniture"},
    {path:"/shop",label:"Shop"},
    {path:"/about",label:"About us"},
    {path:"/contact",label:"Contact"},
]
const NavItems = () =>{
    return(
        <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
            {
                navObj.map((item,index)=>(
                    <li key={index}>
                        <NavLink to={item.path}
                        className={({isActive})=>
                            isActive ? "text-primary font-bold" : "hover:text-primary"
                        }
                        >{item.label}</NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {
  return (
    <header>
      <nav className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 py-6">
        {/* logo */}
        <Link to={"/"} className="font-bold">Logo</Link>
        {/* hamburger menu for mobile */}
        <div className="md:hidden text-xl cursor-pointer hover:text-primary ">
            <FaBars/>
        </div>
        {/* desktop menu items */}
        <div className="hidden md:flex">
            <NavItems/>
        </div>
        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
            <FaBagShopping className="text-xl"/>
            <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">
                0
            </sup>
        </div>
      </nav>
    </header>
  )
}
export default Navbar