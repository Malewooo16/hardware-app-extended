

import React from 'react'
import Sidebar from './Sidebar'
import ProductGrid from './ProductGrid'
import AddToCartModal from "./AddToCartModal"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AppMain() {
  return (
    <div className='d-flex mb-5' style={{height:"100%"}}>
        <Sidebar/>
        <ProductGrid/>
        <AddToCartModal/>
    </div>
  )
}
