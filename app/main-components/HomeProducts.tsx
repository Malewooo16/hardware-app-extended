"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ShoppingCartCheckout } from "@mui/icons-material";
import SpecialProduct from "./SpecialProduct";
import styles from "../page.module.css";
import { addToCart } from "../store/cartSlice";
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

export default function HomeProducts() {
  const [productsArr, setProductsArr] = useState([]);
  
  const limit = 4;
  const dispatch = useDispatch();

  const fetchProducts = async () => {
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=21`
    );
    const data = await response.json();
    return data.products;
  };

  useEffect(() => {
    fetchProducts().then((products) => {
      setProductsArr(products)
    });
  }, [limit]);

  

  return (
    <div style={{ display: "inline", width: "95%", marginBottom: "50px" }}>
      {productsArr.length > 0 ? (
        <div className={styles.homeProducts}>
          <div className="special-product">
            <SpecialProduct />
          </div>
          <div className="row home-products">
            {productsArr.map((product: Product) => (
              <ProductItem product={product} />
            ))}
          </div>
        </div>
      ) : (
        <p>Loading Products ...</p>
      )}
    </div>
  );
}