"use client"

import React, { useEffect, useState } from 'react'
import {  ShoppingCartCheckout } from "@mui/icons-material";
import Link from "next/link";
import SpecialProduct from "./SpecialProduct";
import Button  from "react-bootstrap/Button";
import styles from '../page.module.css'
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import StarsRatings from './Rating';
import ProductItem from "./ProductItem"

interface Product {
    id: number;
    title: string;
    price: number;
    images: any;
    thumbnail: string;
    removed:boolean;
    rating:number;

  }

export default function TodaysBestDeals() {
    const [productsArr, setProductsArr] = useState([])
    const limit=6


    const dispatch = useDispatch();

  const handleAddToCart = (product: Product) => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        totalPrice: product.price,
        thumbnail: product.thumbnail,
        removed:false
      })
    );
  };

    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=30`)
        .then((response)=>response.json())
        .then((products)=>setProductsArr(products.products))

    },[limit])
  return (
    <>
      <div  className={styles.todaysBestDeals}>
        <h1 >Today's Best Deals</h1>
        {productsArr.length > 0 ? (
          <div>
            <div className="row todaysBest" >
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
