"use client";

import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import Link from "next/link";

interface Product {
  id: number;
  title: string;
  price: string;
  images: any;
  thumbnail: string;
}
export default function ProductGrid() {
  const [productsArr, setProductsArr] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [paginationTriggered, setPaginationTriggered] = useState(false);
  const limit = 20;

  const handlePageChange = (selectedPage: { selected: number }) => {
    setPaginationTriggered(true);
    setCurrentPage(selectedPage.selected + 1);
  };
  const fetchProducts = async () => {
    const skip = (currentPage - 1) * limit;
    console.log("Skip", skip);
    //console.log(`https://dummyjson.com/products?limit=${limit}&skip=${skip}`)
    const response = await fetch(
      `https://dummyjson.com/products?limit=${limit}&skip=${skip}`
    );
    const data = await response.json();
    setCount(data.total);
    return data.products;
  };
  useEffect(() => {
    fetchProducts().then((products) => {
      setProductsArr(products);
      // Scroll to top only if pagination was triggered
      if (paginationTriggered) {
        window.scrollTo({ top: 850, behavior: "smooth" });
      }
    });
    // Reset pagination trigger after scroll
    setPaginationTriggered(false);
  }, [currentPage]);
  // <Link href={`/product/${product.id}`}></Link>
  return (
    <div style={{ display: "inline", width: "95%" }}>
      <h1 style={{ textAlign: "center" }}>Products Grid</h1>
      {productsArr.length > 0 ? (
        <div className="row">
          {productsArr.map((product: Product) => (
            <Link key={product.id} href={`/product/${product.id}`} className="col-lg-3 col-md-4 col-sm-6 mb-4 mx-3  card">
              <div
                key={product.id}
                
              >
                <div className="products-imgs">
                  {" "}
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    width="200px"
                    height="250px"
                  />{" "}
                </div>

                <ul>
                  <li>{product.title}</li>
                  <li>$ {product.price}</li>
                </ul>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p>Loading Products ...</p>
      )}
      <ReactPaginate
        pageCount={Math.ceil(count / 20)}
        previousLabel={<ArrowBackIos />}
        nextLabel={<ArrowForwardIos />}
        onPageChange={handlePageChange}
        containerClassName="pagination-btns"
        disabledClassName="disabled-pagination-btn"
        activeClassName="active-pagination-btn"
      />
    </div>
  );
}
