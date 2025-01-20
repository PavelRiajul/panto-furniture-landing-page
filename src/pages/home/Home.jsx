import Products from "../shop/Products"
import Expriences from "./Expriences"
import Hero from "./Hero"
import Materials from "./Materials"
import Testimonials from "./Testimonials"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div>
     <Hero/>
     <WhyChoose/>
     <Products hedline="Best Selling Product"/>
     <Expriences/>
     <Materials/>
     <Testimonials/>
    </div>
  )
}

export default Home