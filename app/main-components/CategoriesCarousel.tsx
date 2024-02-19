
"use client"

import { ArrowBackIos, ArrowForwardIos, Laptop, Smartphone } from '@mui/icons-material';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Link from 'next/link';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShirt, faMobile, faBottleDroplet, faFlask, faBasketShopping, faHollyBerry, faChair, faLaptop } from "@fortawesome/free-solid-svg-icons";

// Configure the library (one-time setup)
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faCoffee, faShirt, faMobile, faBottleDroplet, faFlask, faBasketShopping, faHollyBerry, faChair, faLaptop);

function CustomCarousel() {
    const [index, setIndex] = useState(0);

    const handlePrev = () => {
      setIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
    };
  
    const handleNext = () => {
      setIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
    };

  return (
    <div>
      <h4 className='categories-title'>Browse All Categories</h4>
      <Carousel wrap={true} className="categories-carousel" indicators={false} activeIndex={index} onSelect={() => {}} prevIcon={<ArrowBackIos style={{color:"#474454"}} onClick={handlePrev} />}  nextIcon={<ArrowForwardIos style={{color:"#474454"}} onClick={handleNext} />}>
        <Carousel.Item >
         
          <ul className="categories-slides">
            <li> <Link href={`/categories/${'smartphones'}`}> <FontAwesomeIcon icon={faMobile} />  SmartPhones</Link>  </li>
            <li> <Link href={`/categories/${'laptops'}`}>  <FontAwesomeIcon icon={faLaptop} /> Laptops</Link>  </li>
            <li>  <Link href={`/categories/${'fragrances'}`}><FontAwesomeIcon icon={faBottleDroplet} /> Fragrances</Link> </li>
            <li>  <Link href={`/categories/${'skincare'}`}><FontAwesomeIcon icon={faFlask} /> SkinCare</Link>  </li>
            <li> <Link href={`/categories/${'groceries'}`}><FontAwesomeIcon icon={faBasketShopping} />  Groceries</Link>  </li>
          </ul>

        </Carousel.Item>
        <Carousel.Item>
          <ul className="categories-slides">
          <li> <Link href={`/categories/${'home-decoration'}`}> <FontAwesomeIcon icon={faHollyBerry} /> Home Decoration</Link>  </li> 
          <li> <Link href={`/categories/${'furniture'}`}> <FontAwesomeIcon icon={faChair} /> Furniture</Link>  </li>
          <li> <Link href={`/categories/${'tops'}`}> <FontAwesomeIcon icon={faShirt} /> Tops </Link>  </li>
          <li> <Link href={`/categories/${'womens-dresses'}`}> <img src="https://cdn-icons-png.flaticon.com/128/1785/1785255.png?ga=GA1.1.1994830766.1696254727&track=ais"  alt="dress svg" width="24px"/> Women's Dresses</Link>  </li>
          <li> <Link href={`/categories/${'womens-shoes'}`}> <img src="https://cdn-icons-png.flaticon.com/128/363/363565.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="high heels" width="24px"/> Women's Shoes</Link>  </li>
          </ul>
        </Carousel.Item>
        <Carousel.Item>
         <ul className="categories-slides">
            <li> <Link href={`/categories/${"mens-shits"}`}><img src="https://cdn-icons-png.flaticon.com/128/6649/6649473.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="mens-shirts" width="24px" /> Men's Shirts</Link> </li>
            <li> <Link href={`/categories/${"mens-shoes"}`}><img src="https://cdn-icons-png.flaticon.com/128/599/599761.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="mens-shoes" width="24px" /> Men's Shoes</Link></li>
            <li>  <Link href={`/categories/${"mens-watches"}`}><img src="https://cdn-icons-png.flaticon.com/128/4305/4305522.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="mens-watches" width="24px" /> Men's Watches</Link></li>
            <li> <Link href={`/categories/${"womens-watches"}`}><img src="https://cdn-icons-png.flaticon.com/128/4101/4101471.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="womens-watches" width="24px" /> Women's Watches</Link></li>
            <li>  <Link href={`/categories/${"womens-bags"}`}><img src="https://cdn-icons-png.flaticon.com/128/661/661496.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="womens-bags" width="24px" /> Women's Bags</Link> </li>
         </ul>
        </Carousel.Item>

        <Carousel.Item>
         <ul className="categories-slides">
            <li><Link href={`/categories/${"womens-jewellery"}`}><img src="https://cdn-icons-png.flaticon.com/128/7097/7097784.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="womens-jewellery" width="24px" /> Womens Jewellery </Link></li>
            <li><Link href={`/categories/${"sunglasses"}`}><img src="https://cdn-icons-png.flaticon.com/128/2944/2944715.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="sunglasses" width="24px" />  Sunglasses</Link></li>
            <li><Link href={`/categories/${"automotive"}`}><img src="https://cdn-icons-png.flaticon.com/128/6689/6689655.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="automotive" width="24px" />  Automotive </Link></li>
            <li><Link href={`/categories/${"motorcycle"}`}><img src="https://cdn-icons-png.flaticon.com/128/26/26969.png?ga=GA1.1.1994830766.1696254727&track=ais" alt=" motorcycle" width="24px" />  Motorcycle </Link></li>
            <li><Link href={`/categories/${"lighting"}`}><img src="https://cdn-icons-png.flaticon.com/128/10339/10339281.png?ga=GA1.1.1994830766.1696254727&track=ais" alt="lighting" width="24px" />  Lighting </Link></li>
         </ul>
        </Carousel.Item>
      </Carousel>
      
    
    </div>
  );
}

export default CustomCarousel;
