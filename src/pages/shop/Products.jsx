import { products } from "../../utils/products"
import ProductCard from "./ProductCard"


const Products = ({hedline}) => {
    const categories = ["Chair","Beds","Sofa","Lamp",]
  return (
    <div>
        <div className="section-container">
            <h2 className="text-4xl text-center font-bold my-8">{hedline}</h2>

            {/* category tabs */}
            <div className="bg-[#EEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16 ">
              <div className="flex flex-col sm:flex-row items-center md:justify-between justify-center gap-4">
                 {
                    categories.map((category)=> (
                        <button key={category} className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-primary hover:text-white transition-colors `}>{category}</button>
                    ))
                 }
              </div>
            </div>

            {/* product grid  */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {
                    products.map((product,index)=> (
                     <ProductCard key={index} product={product}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}
export default Products