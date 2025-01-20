import { FiPlus } from "react-icons/fi"
import {useContext} from 'react'
import Rating from "../../components/Rating"
import { getImgUrl } from "../../utils/getImageURL"
import {CartContext} from "../../context/CartContext"


const ProductCard = ({product}) => { 
     const {addToCart} = useContext(CartContext);
  return (
    <div>
        <div className="bg-[#fafafa]">
            <img src={getImgUrl(`${product.imageUrl}`)} alt="" />
        </div>
        <div className="p-6 bg-white dark:bg-black shadow-sm">
            <h4 className="text-base mb-1">{product.category}</h4>
            <h3 className="font-semibold mb-2 text-xl">{product.name}</h3>
            <Rating rating={product.rating}/>
            <div className="mt-5 flex justify-between">
                <p className="text-secondary dark:text-white font-bold text-lg"><sup>$</sup>{product.price}</p>
                <button
                onClick={()=>{
                    addToCart(product)
                }}
                 className="bg-secondary text-white p-2 rounded-full hover:bg-black/55">
                    <FiPlus/>
                </button>
            </div>
        </div>
    </div>
  )
}
export default ProductCard