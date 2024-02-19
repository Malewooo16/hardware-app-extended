import React from 'react'
import { BallTriangle } from  'react-loader-spinner'


export default function LoadingSpinner() {
  return (
    <div className="d-flex  flex-column align-items-center justify-content-center" style={{height:"100vh"}}>
     <BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass=""
  wrapperStyle={{}}
  visible={true}
/>
 <h4 className="text-center"> Get ready for a great hardware shopping experience </h4>
    </div>
  )
}
