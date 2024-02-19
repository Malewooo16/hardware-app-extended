import React, { useState } from 'react'
import Link from "next/link";
import { Add, Remove, ShoppingCartCheckout } from "@mui/icons-material";
import styles from "../page.module.css";
import { useDispatch } from "react-redux";
import StarsRatings from './Rating';
import Button from "react-bootstrap/Button";
import Container from 'react-bootstrap/Row';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import Image from 'react-bootstrap/Image';
import Modal from "react-bootstrap/Modal"
import { addToCart } from "../store/cartSlice";

interface Product {
  id: number;
  title: string;
  price: number;
  images: any;
  thumbnail: string;
  removed:boolean;
  rating:number;
}

export default function ProductItem(props) {
	const { product } = props

	const [count, setCount] = useState(1);

	const dispatch = useDispatch()

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

	const handleAddToCart = () => {
    if(count > 0) {
    	console.log("Should add to cart", count)
	    dispatch(
	      addToCart({
	        id: product.id,
	        name: product.title,
	        price: product.price,
	        quantity: count,
	        totalPrice: product.price,
	        thumbnail:product.thumbnail,
	        removed:false,
	      })
	    );
	    setCount(1)
    }
  };

  const renderPrice = (price, discount) => {
  	if(discount > 0) {
  		const newPrice = (price * ((100 - discount) / 100)).toFixed(2)
  		return (
  			<>
					<li><b>${newPrice}</b></li>
					<li style={{ color: "grey"}}><b><s>${price}</s></b></li>
				</>
			)
  	}
		return (
			<li>{price}</li>
		)	
  }

  if(product == null) return null

	return (
		<div
	    key={product.id}
	    className="d-flex mb-3 mx-3 justify-content-between card product"
	  >
	    <Link href={`/product/${product.id}`}>
	    	<Row>
	    		<Col>
	    			<ul style={{ color: "black"}}>
			        <li> <StarsRatings value={product.rating} />  </li>
			        <li><b>{product.title}</b></li>
			        {renderPrice(product.price, product.discountPercentage)}
			      </ul>
	    		</Col>
	    		<Col style={{ maxHeight: "200px", maxWidth: "200px", overflow: "hidden" }} >
		        <Image
		          src={product.thumbnail}
		          alt={product.title}
		          fluid
		        />
	    		</Col>
	    	</Row> 
	    </Link>
	    <div className="d-flex justify-content-around align-items-center mt-2">
	    	<div className="d-flex flex-column align-items-center" >
		    	<div className="d-flex w-100 justify-content-center align-items-center my-2">
		    		<div style={{ background: "black", color:"white", width: "fit-content", borderRadius: "50%" }} onClick={decrement}>
							<Remove/>
		    		</div>
						<div className="mx-2 w-25 d-flex justify-content-center" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', padding: "5px", borderRadius:"25%" }}>
							{count}
						</div>
						<div style={{ color: "orange", width: "fit-content", borderRadius: "50%", border: "solid" }}>
			      	<Add onClick={increment}/>
						</div>
	      	</div>
	    		<Button
		        variant="warning"
		        onClick={handleAddToCart}
		      >
		      	Add to cart
		        <ShoppingCartCheckout />
		      </Button>
	    	</div>
	    	<Container className="discount-label">
	    		<p>Save: {product.discountPercentage}%</p>
	    	</Container>
	    </div>
	  </div>
  )
}