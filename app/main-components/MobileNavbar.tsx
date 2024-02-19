"use client";
import React, { useRef } from "react";
import SideBar from "./Sidebar";
import HomeIcon from "./HomeIcon";
import AccountSidebar from "./AccountAndSettings";
import { RootState, CartState } from "../utilities/cartTypes";
import SearchInput from "./SearchInput"
import CartPopover from "./CartPopover"
import {
  ShoppingCartOutlined,
  Chat,
  HelpOutlined,
} from "@mui/icons-material";
import Link from "next/link";
import {
  Nav,
  Navbar,
  InputGroup,
  Badge,
  OverlayTrigger
} from "./ReactBootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function MobileNavbar() {
  const cart = useSelector((state: RootState) => state.cart);
  const cartTargetRef = useRef(null)
  return (
    <div className="mobile-navbar-main">
      <div className="mobile-navbar">
          <div className="d-flex align-items-center justify-content-between icons p-2">
              <SideBar />
              <div id="home">
                <HomeIcon />
              </div>
          </div>
          <div className="d-flex justify-content-between icons p-2">
            <OverlayTrigger
              trigger="click" 
              rootClose 
              placement="bottom" 
              overlay={(props) => <CartPopover cart={cart} ref={cartTargetRef} {...props}/>} 
              className='cart-nav'
              target={cartTargetRef.current}
            > 
              <div ref={cartTargetRef} className="mx-3">
                <ShoppingCartOutlined />
                {cart && (
                  <Badge
                    className={
                      cart.totalQuantity === 0
                        ? "cart-pill-hidden"
                        : "cart-pill"
                    }
                    pill
                    bg="warning"
                  >
                    {cart.totalQuantity}
                  </Badge>
                )}
              </div>
            </OverlayTrigger> 
            <AccountSidebar />
          </div>
      </div>
      <div className="ms-2 mb-3"> <SearchInput/> </div>
      <div className="mobile-navbar-overflow">
        <ul className="overflow-ul">
          <Link className="text-white" href={`/`}>
            <li> Best Sellers</li>
          </Link>
          <Link className="text-white" href={`/`}>
            <li>Ujenzi Live</li>
          </Link>
          <Link className="text-white" href={`/`}>
            <li className="special"> New Hardware </li>
          </Link>
          <Link className="text-white" href={`/`}>
            <li>Gift Ideas</li>
          </Link>
          <Link className="text-white" href={`/`}>
            <li>Gift Cards </li>
          </Link>
          <Link className="text-white" href={`/`}>
            <li>Build Deals </li>
          </Link>

          <Badge pill bg="warning">
            <Chat /> Feedback
          </Badge>
          <Badge pill bg="warning">
            <HelpOutlined /> Help Center
          </Badge>
        </ul>
      </div>
    </div>
  );
}
