import Products from "../shop/Products"
import Expriences from "./Expriences"
import Hero from "./Hero"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div>
     <Hero/>
     <WhyChoose/>
     <Products hedline="Best Selling Product"/>
     <Expriences/>
    </div>
  )
}

export default Home