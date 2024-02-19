'use client'
import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import Modal from "react-bootstrap/Modal"
import Image from "react-bootstrap/Image"
import Button from "react-bootstrap/Button";

const AddToCartModal = () => {
  const cart = useSelector((state: RootState) => state.cart);

	const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false)

	useEffect(() => {
    const productsTotal = cart.itemsList
    .filter((item) => !item.removed)
    .reduce((accumulator, product) => accumulator + product.totalPrice, 0)
    if(productsTotal != totalPrice && productsTotal != 0) {
	    if(totalPrice != 0) {
	    	handleShow()
	    }
	    setTotalPrice(productsTotal)
    }
  }, [cart])

	const handleShow = () => {
    setShow(!show)
  }

	return (
		<Modal size="lg" centered show={show} onHide={handleShow}>
      <Modal.Header closeButton><h4>Added to Basket</h4></Modal.Header>
      <Modal.Body>
        <div className="d-flex justify-content-end">
          <div className="mx-5">
            <Button onClick={handleShow} variant="secondary">Continue Shopping</Button>
          </div>
          <Button href="/cart" variant="warning">Go to Basket</Button>
        </div>
        <div>
          <div>
            { cart.itemsList.filter((item) => !item.removed).map((item) => (
              <>
                <hr/>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center w-75">
                    <Image className="cart-img w-25" src={item.thumbnail} alt={item.name} fluid/>
                    <h3>{item.name}</h3>
                  </div>
                  <div>
                    {item.quantity} x <b>${item.price}</b>
                  </div>
                </div>
              </>
            ))}
          </div>
          <hr/>
          <div className="d-flex align-items-center justify-content-end">
            <p>Basket Total <b>${totalPrice}</b></p>
          </div>
        </div>
      </Modal.Body>
    </Modal>
	)
} 

export default AddToCartModal