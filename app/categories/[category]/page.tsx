"use client"

import  {useEffect, useState} from 'react'
import styles from "./page.module.css";
import Link from "next/link";
import toSentenceCase from '@/app/utilities/toUpperCase';
import StarsRatings from '@/app/main-components/Rating';
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice";
import Button from "react-bootstrap/Button";
import { ShoppingCartCheckout } from "@mui/icons-material";
import splitSentences from '@/app/utilities/titleFormater';
import Footer from '@/app/main-components/Footer';
import ProductItem from "@/app/main-components/ProductItem"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Form from 'react-bootstrap/Form';
import Dropdown from "react-bootstrap/Dropdown"

interface Product {
    id: number;
    title: string;
    price: number;
    images: any;
    thumbnail: string;
    rating:number; 
  }

export default function Page({ params }: { params: { category: string } }) {
  const [productsArr, setProductsArr] = useState([]);
  const [ratingValue, setRating] = useState("0");
  const categoryTitle = toSentenceCase(params.category);
  const titleFormatter = (text:string) => splitSentences(text, 2);
  
  const handleRating = (evt) => {
    setRating(evt.target.value)
  }

  const dispatch = useDispatch();
  const categories = [
    "smartphones",
    "laptops",
    "fragrances",
    "skincare",
    "groceries",
    "home-decoration",
    "furniture",
    "tops",
    "womens-dresses",
    "womens-shoes",
    "mens-shirts",
    "mens-shoes",
    "mens-watches",
    "womens-watches",
    "womens-bags",
    "womens-jewellery",
    "sunglasses",
    "automotive",
    "motorcycle",
    "lighting"
  ]

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
    
  useEffect(() => {
    console.log(params.category)
    fetch(`https://dummyjson.com/products/category/${params.category}`)
      .then((response) => response.json())
      .then((productData) => setProductsArr(productData.products));
  }, [params.category]);

  return (
    <div className="d-flex">
    <Col xs={4} lg={3} className="border-end">
      <div className="d-flex flex-column justify-space-between m-3">
        <div>
          <h3 className="m-3">Price variation</h3>
          <Form size="sm" className="d-flex align-items-center p-3">
            <Form.Control placeholder="Min"/>
            <h5 className="m-2" >to</h5>
            <Form.Control placeholder="Max"/> 
          </Form>
        </div>
        <div className="m-3">
          <h3>Size Variation &#x25bc;</h3>
        </div>
        <div className="m-3">
          <h3>Product manufacturer &#x25bc;</h3>
        </div>
        <div className="m-3">
          <h3>Rating</h3>
          <StarsRatings value={ratingValue} onChange={handleRating} />
        </div>
        <div>
          <h3 className="m-3">Year of production</h3>
          <Form size="sm" className="d-flex align-items-center p-3">
            <Form.Control placeholder="Oldest"/>
            <h5 className="m-2" >to</h5>
            <Form.Control placeholder="Latest"/> 
          </Form>
        </div>  
      </div>  
    </Col>
    <Col>
      <Row>
        <div className="d-flex flex-wrap justify-space-between">
          {categories.map((cat, index) => {
            const formattedCategory = toSentenceCase(cat);
            return (
              <div key={index} className="m-3">
                <Link className="text-black border p-2" style={{ borderRadius: "50px"}} href={`/categories/${cat}`}>
                  {formattedCategory}
                </Link>
              </div>
            );
          })}
        </div>
      </Row>
      <Row>
        <h1 className="m-4"> {categoryTitle} </h1>
      </Row>
      <Row className="m-4">
        {productsArr.length > 0 ? (
          <div className="d-flex flex-wrap ">
            {productsArr.map((product: Product) => (
              <ProductItem product={product}/>  
            ))}   
          </div>
        ) : (
          <p>Loading Products ...</p>
        )}
      {/* <ReactPaginate
        pageCount={Math.ceil(count / 20)}
        previousLabel={<ArrowBackIos />}
        nextLabel={<ArrowForwardIos />}
        onPageChange={handlePageChange}
        containerClassName="pagination-btns"
        disabledClassName="disabled-pagination-btn"
        activeClassName="active-pagination-btn"
      /> */}
      </Row>
    </Col>
    </div>
  )
}
