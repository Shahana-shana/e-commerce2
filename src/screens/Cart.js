import {  Navigate, useNavigate, useParams} from "react-router-dom";
import ProductDetails from "./productDetails";
import { useState ,useEffect  } from "react";

function Cart () {
    const [count,setCount]=useState(1);
   
    const navigate=useNavigate();

const addItem=()=>{
   if(count>=1)
    setCount(prevCount => prevCount + 1);
   
    
}
const deleteItem=()=>{
    if(count>1)
    setCount(prevCount => prevCount - 1);
  
    
}
const backTo=()=>{
   
   navigate('/');
}
    return (  
        <div>
            <ProductDetails/> 

           <div>
            <button onClick={addItem}>+</button>

            </div>
            <div>
                {count}
            </div>
           <div>
                <button onClick={deleteItem} >-</button>
                </div>
           
        <div>
            <button onClick={backTo}>back to home</button>
        </div>
        </div>
    );
}


export default Cart ;