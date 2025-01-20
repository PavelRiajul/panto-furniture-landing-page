import { useState } from "react";
import { createContext } from "react";
import Swal from "sweetalert2";


export const CartContext = createContext();

export const CartProvider =({children}) => {
    const [cartitems,setCartItems] = useState([])

    const addToCart = (product) =>{
        if(cartitems.some((item)=> item.id === product.id)){
            //alert("Product already added to cart")
            Swal.fire({
                title: "Opps!",
                text: "This product is already in your cart!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
              })
        }else{
            setCartItems(prevItem => [...prevItem, product])
            Swal.fire({
                title: "Added!",
                text: "This product is added in your cart!",
                icon: "success",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
              })
        }
    }

    const cartCount = cartitems.length;

    return(
        <CartContext.Provider value={{cartCount,addToCart}}>
            {children}
        </CartContext.Provider>
    )
}