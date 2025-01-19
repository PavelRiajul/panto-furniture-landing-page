import Products from "../shop/Products"
import Hero from "./Hero"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div>
     <Hero/>
     <WhyChoose/>
     <Products hedline="Best Selling Product"/>
    </div>
  )
}

export default Home