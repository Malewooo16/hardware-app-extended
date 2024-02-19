'use client'
import { useRef, useEffect, useState } from "react"
import {  NavbarDos, NavbarUno, Banner } from "./Navbar";
import SearchInput from "./SearchInput";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MainNavbar() {
  const navRef = useRef(null)
  const [sidebarOffset, setSidebarOffset] = useState(0)

  useEffect(() => {
    setSidebarOffset(navRef.current.offsetHeight)
  }, [navRef])

  return (
    <div className="fixed-top nav-main" ref={navRef}>
      <NavbarUno/>
      <div className="search-mobile"><SearchInput/></div>
      <NavbarDos sidebarOffset={sidebarOffset}/>
      <Banner/>
    </div>
    
   
  );
}
