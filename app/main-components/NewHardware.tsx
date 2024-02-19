"use client"

import React, { useEffect, useState } from 'react'
import Link from "next/link";
import { ArrowBackIos, ArrowForwardIos, ShoppingCartCheckout } from "@mui/icons-material";
import Button  from "react-bootstrap/Button";
import styles from '../page.module.css'
import splitSentences from '../utilities/titleFormater';
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import ProductItem from "./ProductItem"
interface Product {
    id: number;
    title: string;
    price: number;
    images: any;
    thumbnail: string;
  
  }

export default function NewHardware() {
    const [productsArr, setProductsArr] = useState([])
    const sentenseFormatter = (text:string) => splitSentences(text, 4);
    const limit=8
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
        removed:false
      })
    );
  };
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=50`)
        .then((response)=>response.json())
        .then((products)=>setProductsArr(products.products))

    },[limit])
  return (
    <>
      <div  className={styles.todaysBestDeals}>
        <h1 >New Products</h1>
        {productsArr.length > 0 ? (
          <div>
            <div className="row newHardware" >   
            {productsArr.map((product: Product) => (
              <ProductItem product={product}/>
            ))}
          </div>
          </div>
        ) : (
          <p>Loading Products ...</p>
        )}  
      </div>
    </>
  )
}
