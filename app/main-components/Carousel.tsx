
import {Carousel, CarouselItem } from './ReactBootstrap';
import Image from "next/image"

function Sliders() {
  return (
    <Carousel data-bs-theme="dark"  indicators={false}>
      <CarouselItem interval={2000}>
        <img
          className="d-block img-fluid"
          src="https://wallpapercave.com/wp/wp8414096.jpg"
          height="900px"
          alt="First slide"
        />
        
      </CarouselItem>
      <CarouselItem interval={2000}>
        <img
          className="d-block img-fluid"
          src="https://i.pinimg.com/originals/41/50/a9/4150a9609e0ba55e94341c7e1d3aec14.jpg"
          alt="Second slide"
          height="900px"
          
        />
        
      </CarouselItem>
      <CarouselItem interval={2000}>
        <img
          className="d-block img-fluid garden-slide"
          src="https://png.pngtree.com/background/20230522/original/pngtree-collection-of-garden-tools-and-pots-on-a-wooden-bench-picture-image_2694170.jpg"
          alt="Third slide"
          height="900px"
          
        />
       
      </CarouselItem>
    </Carousel>
  );
}

export default Sliders;