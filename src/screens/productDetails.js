import { useEffect, useState } from 'react';
import{useParams}from 'react-router-dom';


function ProductDetails() {
    const params=useParams();
    const prodId=params.productId;
    const [items,setItem]=useState([]);
    // const items=[];


    const[product,setProduct]=useState({});
    function loadProductBtId(){
        fetch(' https://fakestoreapi.com/products/'+prodId ).then((response)=>{
        
            response.json().then((data)=>{
                setProduct(data);
                
                console.log(items)
            })
        }).catch(error=>{
            console.log(error);
            
        })
        
    }
    useEffect(()=>{
        loadProductBtId();
    },[prodId]
    );
    return (  
        <div>
           <img src={product.image} height={190}/>
            <h3>{[product.title]}</h3>
           
        
        </div>
    );
}

export default ProductDetails;