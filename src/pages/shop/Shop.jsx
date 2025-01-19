import bannerImg from "../../assets/banner.png"
import Products from "./Products"

const Shop = () => {
  return (
    <section className="min-h-screen">
      <div className="w-full h-[400px] bg-cover bg-center flex justify-center items-center text-white" style={{backgroundImage:`url(${bannerImg})`}}>
        <h1 className="text-4xl font-bold">Shop Our Products</h1>
      </div>
      <Products hedline="What's Your Choice"/>
    </section>
  )
}

export default Shop