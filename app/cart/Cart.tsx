"use client"

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from "next/link"
import { RootState, CartState, CartItem } from '../utilities/cartTypes';
import { Add, Remove } from "@mui/icons-material";
import DeleteIcon from '@mui/icons-material/Delete';
import { addToCart, removeFromCart, toggleRemove } from '../store/cartSlice';
import DeliveryForm from './DeliveryForm';
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

interface CartProps {
  next: () => void; // Adjust the type accordingly
  
}
export default function Cart(props:CartProps) {
  const cart = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [product, setProduct] = useState<Product | null>(null);
  const [variation, setVariation] = useState([
    { color: "white", dimensions: ["05 Feet", "10 Feet", "15 Feet", "20 Feet", "25 Feet"] },
    { color: "black", dimensions: ["05 Feet", "10 Feet", "15 Feet", "20 Feet", "25 Feet"] },
    { color: "yellow", dimensions: ["05 Feet", "10 Feet", "15 Feet", "20 Feet", "25 Feet"] },
    { color: "red", dimensions: ["05 Feet", "10 Feet", "15 Feet", "20 Feet", "25 Feet"] },
    { color: "beige", dimensions: ["05 Feet", "10 Feet", "15 Feet", "20 Feet", "25 Feet"] } 
  ]);
  const [color, setColor] = useState(null)
  const [dimensions, setDimensions] = useState(null)
  const [count, setCount] = useState(0);
  
  const addHandler = (product: CartItem) => {
    dispatch(addToCart(product));
    
  };

  const deleteHandler = (productId: number) => {
    dispatch(toggleRemove(productId));
    
  };

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  useEffect(() => {
    if(product?.productVariation) {
      setVariation(product.productVariation)
      setColor(variation[0].color)
    }
  }, [product])

  const handleDimensions = (dim) => {
    setDimensions(dim)
  }

  const handleColor = (clr) => {
    setColor(clr)
  }

  return (
    <div className='cart'>
      <h4>Cart</h4>
      <p>Please check and make sure your orders <br/> are correct</p>

      {cart.totalPrice !== 0 ? (
        <><table className='cart-table table'>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Remove</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cart.itemsList.map((cart: CartItem) => (
              <tr className="cartItems" key={cart.id}>
                <td className="d-flex flex-column">
                  <div>
                    <div className="d-flex">
                      <div className="w-25">
                        <Image className="cart-img" src={cart.thumbnail} alt={cart.name} fluid/>
                      </div>
                      <div className="m-2 d-flex flex-column justify-space-around">
                        {cart.name}
                        <div className="d-flex align-items-center my-4">
                          <div style={{ background: "black", color:"white", width: "fit-content", borderRadius: "50%" }} onClick={decrement}>
                            <Remove/>
                          </div>
                          <div className="mx-2" style={{ boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.5)', padding: "5px", borderRadius:"25%" }}>
                            {count}
                          </div>
                          <div style={{ color: "orange", width: "fit-content", borderRadius: "50%", border: "solid" }}>
                            <Add onClick={increment}/>
                          </div>
                        </div>
                        <Link href={"product/"+cart.id}>See more details</Link>
                      </div>
                    </div>
                  </div>
                  <p className="m-0">Dimensions</p>
                  <div className="d-flex">
                    { variation[0].dimensions.map((dim) => (
                      <div 
                        className="d-flex align-items-center justify-content-center me-2" 
                        style={{ height: "50px", width: "100px", border: "solid", borderColor: "black", borderRadius: "10%"}} 
                        onClick={(evt) => handleDimensions(dim)}
                      >
                        <b>{dim}</b>
                      </div>
                    ))} 
                  </div>
                  <p className="m-0" >Color</p>
                  <div className="d-flex">
                    { variation.map((vr) => (
                        <div 
                          className="me-2" 
                          style={{ height: "50px", width: "100px", border: "solid", borderColor: "black", borderRadius: "10%", background: vr.color }} 
                          onClick={(evt) => handleColor(vr.color)}
                        />
                      ))}
                  </div>
                </td>
                <td>{cart.price}</td>
                <td>{cart.quantity}</td>
                <td>{cart.totalPrice}</td>
                <td>
                  <button className="btn " onClick={() => deleteHandler(cart.id)}>
                    <DeleteIcon />
                  </button>
                </td>
                <td>
                  {cart.removed ? 
                    <>
                      <h5 style={{ color: "red" }}>Removed</h5>
                      <Button variant="secondary" onClick={() => deleteHandler(cart.id)}>Undo removal</Button>
                    </> : <h5 style={{ color: "green" }}>Cleared</h5>}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mobile-cart"> 
        
        {cart.itemsList.map((cart:CartItem)=> (
          <div className={`mb-4 mx-2 card ${cart.removed ? 'removed' : ''}`} key={cart.id}> 
            <div className="mobile-cart-img">
              <img src={cart.thumbnail} alt={cart.name} className="img-fluid" />
               </div>
            <div className="d-flex">
              <ul className='list-unstyled'>
                <li> {cart.name}  </li>
                <li> Price:<strong> $ {cart.price}</strong> </li>
                <li> Total Price: <strong> $ {cart.totalPrice}</strong> </li>
                <li> Remove Item : <button className="btn " onClick={() => deleteHandler(cart.id)}>
                    <DeleteIcon />
                  </button></li>
              </ul>
              
               </div>
          </div>
        ))}
        </div>
        </>
      ) : (
        <h5 style={{ textAlign: 'center' }}> Your cart is empty <br/> continue browsing our products to view your cart</h5>
      )}

     { cart.totalPrice !== 0 ?  <DeliveryForm next={props.next} /> : null }
    </div>
  );
}

