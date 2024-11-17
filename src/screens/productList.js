import { useState,useEffect } from "react";
import ProductCard from "./productCard";


const ProductList = () => {


    const[productList,setProductList]=useState([]);
    function onLoadData(){
        fetch(' https://fakestoreapi.com/products').then((response)=>{
        
            response.json().then((data)=>{
                setProductList(data);
            })
        })
        
}
useEffect(()=>{
    onLoadData();
},[]
);
    
    return ( 
        <>
        
        <div className="container d-flex flex-wrap p-3">
            
        {productList.map((P) => {
        return <ProductCard product={P} />;
      })}</div>
        </>
     );
}
 
export default ProductList;