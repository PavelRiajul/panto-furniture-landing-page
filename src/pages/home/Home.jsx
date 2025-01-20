import Products from "../shop/Products"
import Expriences from "./Expriences"
import Hero from "./Hero"
import Materials from "./Materials"
import WhyChoose from "./WhyChoose"

const Home = () => {
  return (
    <div>
     <Hero/>
     <WhyChoose/>
     <Products hedline="Best Selling Product"/>
     <Expriences/>
     <Materials/>
    </div>
  )
}

export default Home