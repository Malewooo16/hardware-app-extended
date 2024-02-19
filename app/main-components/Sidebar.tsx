" use client"
import { useState } from 'react';
import {Offcanvas,
  OffcanvasHeader,
  OffcanvasBody,
  OffcanvasTitle,
  Button } from "./ReactBootstrap"
import {  MenuOutlined, SearchOutlined, Chat, HelpOutlined, NavigateNext} from '@mui/icons-material';
import toSentenceCase from '../utilities/toUpperCase';
import Link from 'next/link';


function SideBar(props) {
  const { heightOffset } = props
  const [show, setShow] = useState(false);
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

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   <MenuOutlined onClick={handleShow}  />
      <Offcanvas show={show} backdrop={false} onHide={handleClose} {...props} style={{ top: heightOffset}}>
        <OffcanvasHeader closeButton>
          <OffcanvasTitle className="text-white">Categories</OffcanvasTitle>
        </OffcanvasHeader>
        <OffcanvasBody className="offCanvas-categories">
        <ul>
            {categories.map((cat, index) => {
              const formattedCategory = toSentenceCase(cat);
              return (
                <li key={index} onClick={handleClose}>
                  <Link className="text-white" href={`/categories/${cat}`} className="offCanvans-links">
                    {formattedCategory} <NavigateNext />
                  </Link>
                </li>
              );
            })}
          </ul>
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
}

export default SideBar;