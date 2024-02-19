"use client";
import StarsRatings from "@/app/main-components/Rating";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import Button from "react-bootstrap/Button";
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Image from "react-bootstrap/Image";
import { Add, Remove, ShoppingBasket, ShoppingCartCheckout } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/cartSlice"
import Footer from "@/app/main-components/Footer";
import Badge from 'react-bootstrap/Badge';

interface Product {
  id: number;
  title: string;
  price: number;
  images: any;
  thumbnail: string;
  description: string;
  rating: number;
}
export default function Page({ params }: { params: { id: string } }) {
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
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  useEffect(() => {
    fetch(`https://dummyjson.com/products/${params.id}`)
      .then((response) => response.json())
      .then((productData) => setProduct(productData));
  }, [params.id]);

  const dispatch = useDispatch();

  useEffect(() => {
    if(product?.productVariation) {
      setVariation(product.productVariation)
      setColor(variation[0].color)
    }
  }, [product])

  const handleAddToCart = (product: Product) => {
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
  };

  const handleDimensions = (dim) => {
    setDimensions(dim)
  }

  const handleColor = (clr) => {
    setColor(clr)
  }
  
  return (
    <div>
      <div className="mx-5">
      {product && (
        <div>
          <div className={styles.detailed_product}>
          <div className="d-flex justify-content-center" >
            <Carousel>
              { product.images.map((img) => (
                <CarouselItem>
                  <Image
                    src={img}

                    fluid
                  />
                </CarouselItem>
              ))}
            </Carousel>
          </div>
            <StarsRatings value={product.rating} />
            <div className="d-flex">
              { product.images.map((img, i) => (
                    <Image
                      src={img}
                      id={i}
                      className="mx-2"
                      width="100px"
                      fluid
                    />
              ))} 
            </div>
            <h3>{product.title} </h3>{" "}
            <p>{product.description} </p>
            <h4>Price-${product.price} </h4>
            <p style={{ color: "red" }}>Please select your preferred product size and color before proceding</p>
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
            <p className="my-2" style={{ color: "red" }}>Product type selected</p>
            <div className="d-flex mb-5">
              { color ? <div
                    className="me-2" 
                    style={{ height: "50px", width: "100px", border: "solid", borderColor: "black", borderRadius: "10%", background: color }} 
                  /> : null}
              { dimensions ? <div 
                  className="d-flex align-items-center justify-content-center me-2"
                  style={{ height: "50px", width: "100px", border: "solid", borderColor: "black", borderRadius: "10%"}} 
                >
                  <b>{dimensions}</b>
                </div>: null}
            </div>
            <div className="d-flex mb-5">
              <Button variant="warning" onClick={() => handleAddToCart(product)}>
                <ShoppingCartCheckout /> Add to card
              </Button>
              <div className="d-flex align-items-center mx-5">
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
            </div>
          </div>
        </div>
      )}
      
    </div>
    </div>
  );
}
