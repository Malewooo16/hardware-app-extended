import AppMain from "./main-components/AppMain"
import Sliders from "./main-components/Carousel"
import NoTransitionExample from "./main-components/CategoriesCarousel"
import Footer from "./main-components/Footer"
import HomeCards from "./main-components/HomeCards"
import HomeProducts from "./main-components/HomeProducts"
import {Banner} from "./main-components/Navbar"
import NewHardware from "./main-components/NewHardware"
import SignUpModal from "./main-components/SignUpModal"
import TodaysBestDeals from "./main-components/TodaysBestDeals"


export default function Home() {
  return (
    <main >
      <Sliders/>
      <HomeCards/>
      <NoTransitionExample/>
      <HomeProducts />
      <TodaysBestDeals/>
      <img src="/Bobcat.png"  alt="bobcat"  className="img fluid bobcat"/>
      <NewHardware/>
      
    </main>
  )
}
