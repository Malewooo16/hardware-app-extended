import React from 'react'
import { BsFacebook, BsInstagram,  BsTwitter, BsYoutube, BsTiktok, BsLinkedin } from "react-icons/bs";
import Link from "next/link"

export default function Footer () {
  return (
    <div >
        <div className='footer-main'>
       <div className="footer">
        <h5>My Account </h5>
        <ul>
            <li>Login/Register </li>
            <li>History</li>
            <li>Orders</li>
            <li>Profile </li>  
        </ul>
       </div>
       <div className="footer">
       <h5>Company information</h5>
        <ul>
            <li>About Us</li>
            <li>Ivestor Relations </li>
            <li>Carrers</li>
            <li>Awards </li>
        </ul>
       </div>
       <div className="footer">
        <h5>Tools And Resources</h5>
        <ul>
            <li>Sell on Ujenzi</li>
            <li> Business</li>
            <li> Partner Services </li>
            <li> Sitemap </li>
            <Link href={`/brands`}><li>Shop by Brand </li></Link>
        </ul>
       </div>
       <div className="footer">
       <h5>Our Apps and Platforms</h5>
        <ul>
            <li>App Store</li>
            <li>Playstore </li>
            <li>POS System </li>
        </ul>
       </div>
       <div className="footer">
       <h5> <Link href={`/brands`}> Brands</Link> </h5>
        <ul>
            <li>Cement</li>
            <li>Tilings </li>
            <li>Celling</li>
            <li>Finishing</li>
           
        </ul>
       </div>
        
    </div>
      <div className="sub-footer" style={{height:"100%"}}>
        <div className="info-footer">
            <ul>
                <li>&copy; 2020-2023 Ujenzi Africa. All Rights Reserved</li>
                
                <li> <Link href={`/terms`}>Terms and Conditions</Link> </li>
                <li> <Link href={`/privacy`}> Privacy Policy </Link> </li>
                <li>Cookie Prefrences</li>
            </ul>
        </div>
        <div className="social-media">
            <ul>
                <li> <BsFacebook />   </li>
                <li> <BsTwitter/> </li>
                <li> <BsInstagram/> </li>
                <li> <BsLinkedin/> </li>
                <li><BsYoutube/></li>
                <li> <BsTiktok/> </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

