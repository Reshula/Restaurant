import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cartSlice";
import ChangeQuantity from "../Cart/ChangeQuantity";
import { useState } from 'react';


const Dish = ({dish}) =>{
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
   
    return(
        <div >
            <img src={`./${dish.img}.jpg`} alt="food"/>
           <h2>{dish.name}</h2>
           <p> $ {dish.price}</p>
           <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
           <button onClick={() => {dispatch(addItemToCart({dish, quantity}))}}>Add To Cart</button>
          
           
        </div>
    )
}
export default Dish;