import { FaSearch } from "react-icons/fa"
import bannerImg from "../../assets/banner.png"
import TooltipButton from "../../components/TooltipButton"
import { BsMoon, BsSun } from "react-icons/bs"
import { useContext } from "react"
import { ThemeContext } from "../../context/ThemeContext"


const Hero = () => {
   const {isDarkMode,toggleTheme} = useContext(ThemeContext);
   console.log(isDarkMode)
  return (
    <section className="h-screen relative bg-cover bg-center text-white" style={{backgroundImage:`url(${bannerImg})`}}>
        <div className="text-center pt-24 px-2 md:pt-44 space-y-6 md:w-1/2 mx-auto ">
            <h1 className="text-4xl font-medium  lg:text-6xl lg:leading-tight leading-snug">Make your interior more 
            minimalistic & modern</h1>
            <p className="font-normal text-2xl lg:w-1/2 mx-auto">Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

            {/* search field */}
            <div className="relative inline-block z-30">
            <input type="text" placeholder="Search furniture" className="w-full md:w-80 px-6 py-2 bg-white/25 rounded-full focus:outline-none border placeholder:text-white border-gray-300" />
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary p-2 cursor-pointer rounded-full">
                <FaSearch/>
            </div>
            </div>
        </div>
        {/* bottom blur effect */}
        <div className="absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm">
        </div>
        {/* hover button for displaying tooltip box  */}
        <div className="hidden xl:block absolute bottom-40 left-24">
            <TooltipButton position="bottom"/>
        </div>
        <div className="hidden xl:block absolute bottom-52 left-96">
            <TooltipButton position="bottom"/>
        </div>
        <div className="hidden xl:block absolute bottom-24 right-[820px]">
            <TooltipButton position="bottom"/>
        </div>
        <div className="hidden xl:block absolute bottom-12 right-16">
            <TooltipButton position="bottom"/>
        </div>
        {/* dark and light color switer */}
        <div className="absolute bottom-28 right-20 z-40">
            <button onClick={toggleTheme} className="focus:outline-none font-bold text-lg p-5 bg-black rounded-full">
                {
                    isDarkMode ? <BsSun className="text-yellow-300"/> : <BsMoon className="text-yellow-300"/>
                }
                
            </button>
        </div>
    </section>
  )
}

export default Hero