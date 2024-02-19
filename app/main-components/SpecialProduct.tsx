"use client"
import {  ShoppingCartCheckout } from "@mui/icons-material";
import Link from "next/link";
import Button  from "react-bootstrap/Button";
import styles from '../page.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
interface Product {
  id: number;
  title: string;
  price: number;
  images: any;
  thumbnail: string;
  rating:number;
}

import React, { useEffect, useState } from 'react'
import StarsRatings from './Rating';

export default function SpecialProduct() {

  const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        thumbnail:product.thumbnail,
        removed:false,
      })
    );
  };
    const [specialProduct, setSpecialProduct] = useState <Product | null> (null)
    useEffect(()=>{
        fetch("https://dummyjson.com/products/16")
        .then((response)=>response.json())
        .then((product)=>setSpecialProduct(product))
    },[])
  return (
    <>
      {specialProduct&&<div className ={styles.specialProduct}>
        <img className="img-fluid" src={specialProduct.thumbnail} width="200px" alt={specialProduct.title}/>
        <h4> {specialProduct.title} </h4>
        <StarsRatings value={specialProduct.rating} className={styles.ratings} />
        <Link href={`/product/${specialProduct.id}`} className={styles.link}>See more details</Link>
        
        <Button className={styles.addToCart} onClick={() => handleAddToCart(specialProduct)}> <ShoppingCartCheckout/>  <span> Add to Cart</span> </Button> 
        </div>}
    </>
  )
}
