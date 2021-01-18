import React from 'react'
import { Link } from 'react-router-dom';
import Rating from './Rating';

/**
* @author
* @function Product
**/

const Product = (props) => {
    const {product} = props;
  return(
    <div className="card" key={product._id}>
        <Link to={`/products/${product._id}`}>
            <img
            className="medium"
            src={product.image}
            alt={product.name}
            width="200px"
            height="300px"
            />
        </Link>
        <div className="card-body">
            <Link to={`/products/${product._id}`}>
            <h2>{product.name}</h2>
            </Link>
            <Rating rating={product.rating} numReviews={product.numReviews}/>
            <div className="price">Rs.{product.price}</div>
        </div>
    </div>
   )

 }

export default Product