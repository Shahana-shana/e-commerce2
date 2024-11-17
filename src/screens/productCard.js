import { Link, useParams } from 'react-router-dom';
import './productCard.css';
import { useState } from 'react';





function ProductCard(props) {
    const params=useParams();
    const prodId=params.productId;
    // let item=0;

    return (
        <>
        <div className='style' >
     <div>
        <img src={props.product.image} height={140}/>
     </div>
     <Link to={"/products/" + props.product.id}>{props.product.title}</Link>
     
    
    <div className="category" >{props.product.category}</div>
    <div className='price' >{props.product.price}</div>
    <Link to={"/cart/" + props.product.id}>{<button className="btn btn-outline-dark"  >Add to Cart</button> }</Link>
     
    
    </div>

        </>
      );
}

export default ProductCard;