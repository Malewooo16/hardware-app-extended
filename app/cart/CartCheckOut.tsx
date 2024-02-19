import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, CartState, CartItem } from '../utilities/cartTypes';
import { addToCart, toggleRemove, resetCart } from '../store/cartSlice';
import { useRouter } from 'next/navigation';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

interface CartProps {
  prev: () => void; // If it also needs a 'prev' prop
}

export default function CartCheckOut(props: CartProps) {
  const cart = useSelector((state: RootState) => state.cart);

  const [phoneNumber, setPhoneNumber] = useState(sessionStorage.getItem("phoneNumber"))
  const newCart = cart.itemsList.filter((item) => !item.removed);
  const processedCart = { ...cart, itemsList: newCart };
  const dispatch = useDispatch();
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState("");
  const [typeSelected, setTypeSelected] = useState("");

  const [showMobile, setShowMobile] = useState(false);
  const [showBanking, setShowBanking] = useState(false);

  const handleCloseMobile = () => setShowMobile(false);
  const handleShowMobile = () => setShowMobile(true);

  const handleCloseBanking = () => setShowBanking(false);
  const handleShowBanking = () => setShowBanking(true);

  const addHandler = (product: CartItem) => {
    dispatch(addToCart(product));
  };

  const deleteHandler = (productId: number) => {
    dispatch(toggleRemove(productId));
  };

  const onSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    trigger().then((isValid) => {
      if (isValid) {
        fetch('https://cart-reducer-d4875-default-rtdb.firebaseio.com/cartitems.json', {
          method: 'PUT',
          body: JSON.stringify(cart),
        })
          .then((response) => {
            if (response.ok) {
              dispatch(resetCart());
              return response.json();
            } else {
              return response.json().then((errorData) => {
                console.log(errorData);
              });
            }
          })
          .then((responseData) => {
            console.log(responseData);
            setShow(true);

            // Use setTimeout to delay the router.push
            setTimeout(() => {
              router.push('/', { scroll: false });
            }, 700);
          })
          .catch((err) => {
            console.error(err);
          });
      }
    });
  };

  const handlePhone = (evt) => {
    console.log(evt.target.value)
    setPhoneNumber(evt.target.value)
  }

  const handlePaymentMethod = (evt, type) => {
    setPaymentSelected(evt.target.alt)
    setTypeSelected(type)
    if(type == "mobile") handleShowMobile()
    if(type == "bank") handleShowBanking()
  }

  const isSelected = (alt) => {
    return paymentSelected == alt
  } 

  const schema = yup.object().shape({
    cardHolder: yup.string().required('Enter valid name'),
    cardNumber: yup
      .string()
      .matches(/^(?!0+$)\d{13,19}$/, 'Enter valid card number')
      .required('Enter card number'),
    expmonth: yup.string().matches(/^(0[1-9]|1[0-2])$/, 'Enter MM').required('Required'),
    expyr: yup.string().matches(/^(20\d{2}|[3-9]\d)$/, 'Enter YYYY').required('Required'),
    cvv: yup.string().matches(/^\d{3,4}$/, 'Enter valid cvv').required('Required'),
    phoneNumber: yup.string().matches(/^\+255[1-9]\d{8}$/, 'Enter valid phone number').required('Required'),
  });

  const { register, handleSubmit, formState:{errors}, trigger } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <>
      {show ? (
        <h5 className="order-passed">Order processed successfully</h5>
      ) : (
        <div className="row cart">
          <div className="checkout-headers">
            <h4>Cart Checkout</h4>
            <p>Please check and make sure your orders are correct</p>
          </div>
          {cart ? (
            <div className="cart-process-main mb-5">
              <div className="cart-process" style={{ height: 'auto' }}>
                {newCart.map((cart: CartItem) => (
                  <div className="d-flex justify-content-between p-3 cart-checker" key={cart.id}>
                    <img src={cart.thumbnail} alt={cart.name} width="250px" />
                    <div>
                      <h4>{cart.name}</h4>
                      <p>Product Price: {cart.price}</p>
                      <p>Total Quantity: {cart.quantity}</p>
                      <p>Total Price: {cart.totalPrice}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="order-payments">
                <h3> Mobile Payment </h3>
                <p> please select your preferred Mobile Payment Method</p>
                <div className="d-flex align-items-center justify-content-between"> 
                    <img onClick={(evt) => handlePaymentMethod(evt, "mobile")} className={isSelected("tigo") ? "mobile-pay-logo-selected" : "mobile-pay-logo"} src="https://seeklogo.com/images/T/Tigo-logo-BDF99BD6CC-seeklogo.com.png" alt="tigo" width="100px" />
                    <img onClick={(evt) => handlePaymentMethod(evt, "mobile")}className={isSelected("airtel") ? "mobile-pay-logo-selected" : "mobile-pay-logo"} src="https://1.bp.blogspot.com/-zUhUG9NDTQo/XwDDR3l0lsI/AAAAAAAALkY/V8DkFAgXNhMxLbQzEIlacyGrXpQWE60jQCLcBGAsYHQ/s1600/airtel.jpg" alt="airtel" width="100px" height="100px"/>
                    <img onClick={(evt) => handlePaymentMethod(evt, "mobile")} className={isSelected("vodacom") ? "mobile-pay-logo-selected" : "mobile-pay-logo"} src="https://ecx3c45fnwd.exactdn.com/wp-content/uploads/2017/09/vodacom-new-logo-e1511251029420.jpg?strip=all&lossy=1&ssl=1" alt="vodacom" width="100px" />
                    <img onClick={(evt) => handlePaymentMethod(evt, "mobile")} className={isSelected("halopesa") ? "mobile-pay-logo-selected" : "mobile-pay-logo"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEcgcaOWqnartkGLYxgNG13BNotkTpPvY2AA&usqp=CAU" alt="halopesa" width="100px" />
                </div>

                <h3 className='mt-5'> Bank Payment </h3>
                <p> please select your preferred Mobile Payment Method</p>
                <div className="d-flex align-items-center "> 
                  <img onClick={(evt) => handlePaymentMethod(evt, "bank")} className={isSelected("crdb") ? "mobile-pay-logo-selected" : "mobile-pay-logo"} src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/072019/crdb_logo_3d-01_copy.png?L6F4A8DyAuhGIYRGm71lRBQxIxUz4wCi&itok=14hZGM7l" alt="crdb" width="100px" />
                  <img onClick={(evt) => handlePaymentMethod(evt, "bank")} className={isSelected("nmb") ? "mobile-pay-logo-selected mx-5" : "mobile-pay-logo mx-5"} src="https://upload.wikimedia.org/wikipedia/commons/8/88/Nmb_logo.jpg" alt="nmb" width="100px" height="100px"/>
                </div>
                <div className="payment-form-submit">
                  <Form onSubmit={onSubmit}>
                    { typeSelected == "mobile" ? 
                      <>
                        <Modal centered show={showMobile} onHide={handleCloseMobile}>
                          <Modal.Header closeButton>Provide Phone number for {paymentSelected}</Modal.Header>
                          <Modal.Body>
                            <h5>
                              Provide Phone number to receive procedures on your phone in order to complete the purchase
                            </h5>
                            <Form.Group as={Col}>
                            <Form.Label>Phone Number</Form.Label>
                              <Form.Control type="text" onChange={handlePhone} value={phoneNumber} placeholder="+255 XX XXX XXXX" {...register("phoneNumber")}/>
                              <p> {errors.phoneNumber?.message} </p>
                            </Form.Group>
                            <Modal.Footer>
                              <Button type="submit">Proceed</Button>
                            </Modal.Footer>
                          </Modal.Body>
                        </Modal>
                      </> 
                    : <>
                      <Modal centered show={showBanking} onHide={handleCloseBanking}>
                        <Modal.Header closeButton>Provide Banking information for {paymentSelected}</Modal.Header>
                        <Modal.Body>
                          <h5>
                            Provide Your Bank information to receive procedures in order to complete the purchase
                          </h5>
                          <Form.Group as={Col}>
                          <Form.Label>Bank Account Number</Form.Label>
                            <Form.Control type="text" placeholder="XXXX XX XXX XXXX" {...register("phoneNumber")}/>
                            <p> {errors.phoneNumber?.message} </p>
                          </Form.Group>
                          <Modal.Footer>
                            <Button type="submit">Proceed</Button>
                          </Modal.Footer>
                        </Modal.Body>
                      </Modal>
                    </>  }
                    <>
                      <h5 className="my-3"> Enter Card Details</h5>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>Card Holder</Form.Label>
                          <Form.Control type="text" {...register("cardHolder")}/>
                          <p> {errors.cardHolder?.message} </p>
                        </Form.Group>

                        <Form.Group as={Col}>
                          <Form.Label>Card Number</Form.Label>
                          <Form.Control type="text" {...register("cardNumber")}/>
                          <p> {errors.cardNumber?.message} </p>
                        </Form.Group>
                      </Row>
                      <Row className="mb-3">
                        <Form.Group as={Col}>
                          <Form.Label>Expire Month</Form.Label>
                          <Form.Control {...register("expmonth")}/>
                          <p> {errors.expmonth?.message} </p>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>Expire Year</Form.Label>
                          <Form.Control {...register("expyr")}/>
                          
                          <p> {errors.expyr?.message} </p>
                        </Form.Group>

                        <Form.Group as={Col}>
                        <Form.Label>CVV</Form.Label>
                          <Form.Control {...register("cvv")}/>
                          <p> {errors.cvv?.message} </p>
                        </Form.Group>
                      </Row>
                      
                    </>
                    <Button variant="primary" type="submit">
                        Pay $ {cart.totalPrice}
                      </Button>
                  </Form>
                </div>
              </div>
            </div>
          ) : (
            <h2 style={{ textAlign: 'center' }}>Cart is Loading</h2>
          )}
        </div>
      )}
    </>
  );
}



