//"use client"

import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
import { useSelector } from 'react-redux';
import { RootState } from '../utilities/cartTypes';
import {useForm} from 'react-hook-form'
import *  as yup from 'yup'
import { yupResolver } from "@hookform/resolvers/yup"

interface CartProps {
  next: () => void; // Adjust the type accordingly
  
}
export default function DeliveryForm( props:CartProps  ) {

  const [phoneNumber, setPhoneNumber] = useState(sessionStorage.getItem("phoneNumber"))
  const schema = yup.object().shape({
      phoneNumber: yup.string().matches(/^\+255[1-9]\d{7}$/, "Enter Valid Phone Number").required("Enter Valid Phone Number") ,
      method:yup.string().required( "Method is required"),
      address: yup.string().required("Required"),
      customerName: yup.string().required("Required")
  })

  const { register, handleSubmit , formState:{errors}, trigger} =useForm({
      resolver:yupResolver(schema)
  })

  const onSubmit=()=>{
    const next=props.next
    next()

  }

  const handlePhone = (evt) => {
    console.log(evt.target.value)
    setPhoneNumber(evt.target.value)
  }

  const cartPrice=useSelector((state:RootState)=>state.cart.totalPrice)
  return (
    <div className="delivery-form">
        <h4>Basic Information</h4>
        <p>Please check and make sure your payment <br/> information is correct</p>

        <Form onSubmit={handleSubmit(onSubmit)}>
        <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Customer Name</Form.Label>
          <Form.Control type="text"  {...register("customerName")} />
          <p> {errors.customerName?.message} </p>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Prefered Pickup/ Delivery Method</Form.Label>
          <Form.Select defaultValue="Choose..." {...register("method")}>
            <option value={"delivery"}>Delivery</option>
            <option value={"pickup"} > Pickup </option>
          </Form.Select>
          <p> {errors.method?.message} </p>
        </Form.Group>

        
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Customer Phone Number</Form.Label>
          <Form.Control type="tel" value={phoneNumber} onChange={handlePhone} placeholder="+255 XX XXX XXXX" {...register("phoneNumber")}  onBlur={() => trigger("phoneNumber")}/>
          <p> {errors.phoneNumber?.message} </p>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Address</Form.Label>
          <Form.Control type="text"  {...register("address")} />
          <p> {errors.address?.message} </p>
        </Form.Group>
      </Row>

      {cartPrice ? <div className="d-flex align-items-center justify-content-center row m-5"> <Button type="submit"> Pay ${cartPrice} </Button></div> : null}
        </Form>
    </div>
  )
}


