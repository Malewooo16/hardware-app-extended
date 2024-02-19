"use client"
import { useRef } from 'react'
import { Assignment, LocationOn, NotificationsActive, ShoppingCartOutlined, Chat, HelpOutlined, AccountCircleOutlined} from '@mui/icons-material';
import Link from 'next/link';
import {Nav, Navbar, InputGroup, Badge, Form, FormCheck, OverlayTrigger } from "./ReactBootstrap"
import { RootState, CartState} from "../utilities/cartTypes"
import HomeIcon from './HomeIcon'
import SideBar from './Sidebar';
import SearchInput from './SearchInput';
import SignInDropdown from './SignInDropdown';
import SignUpPopover from './SignupPopover';
import CartPopover from './CartPopover';
import TzIcon from "./TanzaniaSvg"
import ThemeSwitch from './ThemeSwitch';
import { useDispatch, useSelector } from 'react-redux';
import {setTrue} from "../store/signIn"
import FeedbackModal from './FeedbackModal';

export function NavbarUno() {
  const loginTargetRef = useRef(null)
  const cartTargetRef = useRef(null)
  const cart=useSelector((state:RootState)=>state.cart)
  const dispatch=useDispatch()

  const handleShowModal=()=>{
    dispatch(setTrue())
  }


  const defaultSvgColor= ""
  return (
    <>
    <nav className="navbar-custom d-flex justify-content-between">
      <div className="d-flex" >
        <a href="/"><span><HomeIcon /></span> </a>
        <li className="location"> <LocationOn/><p><br/><strong></strong></p></li>
        <li className="search-main-nav">
          <SearchInput />
        </li>
        <li className="mx-4">
          <NotificationsActive  />
        </li>
        <li className="ms-2">
          <TzIcon/>
        </li>
      </div>
        <li className="ms-4">
          <div className="d-flex align-items-center">
            <caption className="text-white">Returns &<br/> <b>Orders</b></caption>
            <Assignment className="mx-2"/>
          </div>
        </li>
      <div className="d-flex justify-content-between me-2 w-25" ref={loginTargetRef}>
        <OverlayTrigger 
          trigger="click" 
          rootClose 
          placement="bottom" 
          overlay={(props) => <CartPopover cart={cart} ref={cartTargetRef} {...props}/>} 
          className='cart-nav'
          target={cartTargetRef.current}
        > 
          <li ref={cartTargetRef}>
            <div className="mx-2">
              <ShoppingCartOutlined />
              <Badge className={cart?.itemsList?.length > 0 ? "cart-pill-hidden" : "cart-pill"} pill bg="warning"> {cart.totalQuantity} </Badge> 
            </div>
          </li>
        </OverlayTrigger> 
        <li>
          <ThemeSwitch/>
        </li>
        <OverlayTrigger 
          trigger="click" 
          rootClose
          placement="bottom" 
          overlay={(props) => <SignUpPopover ref={loginTargetRef} {...props}/>} 
          target={loginTargetRef.current}
        >
          <li className="user-icon">
            <AccountCircleOutlined  className="user-icon-svg mx-2"/> <p className="w-100"> Welcome <br/> <strong>Sign In/Register</strong> </p>  
          </li>
        </OverlayTrigger>
      </div>
    </nav>
    
    </>
  );
}



export function NavbarDos(props) {
  const { sidebarOffset } = props

  return(
      <div className="text-white navbar-dos">
       <li><SideBar heightOffset={sidebarOffset} /></li> 
      <Link className="text-white" href={`/categories/best-sellers`}><li> Best Sellers</li></Link>
      <Link className="text-white" href={`/categories/ujenzi-live`}><li>Ujenzi Live</li></Link>
      <Link className="text-white" href={`/categories/new-hardware`}><li className="special"> New Hardware </li></Link>
      <Link className="text-white" href={`/categories/gift-ideas`}><li>Gift Ideas</li></Link>
      <Link className="text-white" href={`/categories/gift-cards`}><li>Gift Cards </li></Link>
      <Link className="text-white" href={`/categories/build-deals`}><li>Build Deals </li></Link>
      
    <FeedbackModal/>
    <Badge pill bg="warning" >
    <HelpOutlined/>  Help Center
    </Badge>

  </div>
  )

}

export function Banner(){
    return(
        <div className="banner"> Yeah we got exclusive deals !! </div>
    )
}