import { useContext, useEffect, useState } from "react"
import { FaTimes } from "react-icons/fa"
import { FaBagShopping, FaBars } from "react-icons/fa6"
import { Link, NavLink } from "react-router"
import { CartContext } from "../context/CartContext"

const navObj =[
    {path:"/",label:"Furniture"},
    {path:"/shop",label:"Shop"},
    {path:"/about",label:"About us"},
    {path:"/contact",label:"Contact"},
]
const NavItems = ({toggleMenu}) =>{
    return(
        <ul className="flex flex-col md:flex-row items-center md:space-x-8 gap-8">
            {
                navObj.map((item,index)=>(
                    <li key={index} onClick={toggleMenu}>
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
   const [isMenuOpen,setIsMenuOpen] = useState(false);
   const [isScrolled,setIsScrolled] = useState(false);
   const toggleMenu = () =>{
    setIsMenuOpen(prevState => !prevState)
   }
   //when scroll apply bg color to navbar
    useEffect(()=>{
        const handleScroll =()=>{
            if(window.scrollY > 50){
                setIsScrolled(true)
            }else{
                setIsScrolled(false)
            }
        }
        window.addEventListener('scroll',handleScroll);
        return () => {
            window.addEventListener('scroll',handleScroll);
        }
    },[])
    // cart items from context
    const {cartCount} = useContext(CartContext)
  return (
    <header className={`fixed top-0 left-0 right-0 z-10 dark:text-black transition duration-300 ease-in-out ${isScrolled ? "bg-white shadow-sm" : "bg-transparent text-white"}`}>
      <nav className="container mx-auto max-w-screen-2xl flex justify-between items-center px-4 py-6">
        {/* logo */}
        <Link to={"/"} className="font-bold">Panto</Link>
        {/* hamburger menu for mobile */}
        <div onClick={toggleMenu} className="md:hidden text-xl cursor-pointer hover:text-primary ">
            {
                isMenuOpen ? null :  <FaBars/>
            }
        </div>
        {/* desktop menu items */}
        <div className="hidden md:flex">
            <NavItems/>
        </div>
        {/* mobile menu items */}
         <div className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-80 flex flex-col justify-center items-center space-y-8 text-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} md:hidden`}>
            <div className=" absolute top-4 right-4 text-xl  cursor-pointer" onClick={toggleMenu}>
                <FaTimes/>
            </div>
            <NavItems toggleMenu={toggleMenu}/>
         </div>
        {/* cart icon */}
        <div className="hidden md:block cursor-pointer relative">
            <FaBagShopping className="text-xl"/>
            <sup className="absolute top-0 -right-3 bg-primary text-white w-5 h-5 rounded-full flex justify-center items-center text-xs">
                {cartCount}
            </sup>
        </div>
      </nav>
    </header>
  )
}
export default Navbar