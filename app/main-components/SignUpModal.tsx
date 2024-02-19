"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form"
import { useDispatch, useSelector } from 'react-redux';
import {setFalse} from "../store/signIn"
import LeavingSoon from './LeavingSoon';

function SignUpModal() {

  const [register, setRegister] = useState(false);
  const [userNotRegistering, setUserNotRegistering] = useState(false);
 const dispatch = useDispatch()
 
  const handleClose = () => dispatch(setFalse());
  const handleRegisterClose = ()=> {
    dispatch(setFalse())
    setRegister(false)
    setUserNotRegistering(true)
    
  }

  const handleLeavingModal=()=>{
    setUserNotRegistering(false)
  }

  const revertToRegister=()=>{
    setRegister(true)
    setUserNotRegistering(false)
  }

  const showModal= useSelector((state:any)=>state.signInModal.isTrue);

  const showRegister = ()=> setRegister(true)

  return (
    <>
      
       {!register ? 
       <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" className="shadow-none" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" className="shadow-none" />
      </Form.Group>
     
    </Form>
        </Modal.Body>
       
         <div className="d-flex justify-content-center">
         <Button variant="secondary" onClick={handleClose} className="modal-login-btn">
            Login
          </Button>
         </div>
          <p className="register-p">Don't have an account? <span onClick={showRegister}>Click Here</span></p>
      </Modal> :
       <Modal show={register} onHide={handleRegisterClose}>
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form className="mb-3">
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter Phone Number for Verification</Form.Label>
        <Form.Control type="email" placeholder="+255" className="shadow-none" />
      </Form.Group>
      <div className="d-flex justify-content-center">
         <Button variant="secondary" onClick={handleClose} className="modal-login-btn">
             Send Code
          </Button>
         </div>
    </Form>

    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>Enter Validation Code</Form.Label>
        <Form.Control type="text" placeholder="Enter Code" className="shadow-none" />
      </Form.Group>
      <div className="d-flex justify-content-center">
         <Button variant="secondary" disabled onClick={handleClose} className="modal-login-btn">
             Register
          </Button>
         </div>
    </Form>
        </Modal.Body>
         
      </Modal>}

      <LeavingSoon leaving={userNotRegistering} revertToRegister={revertToRegister} closeAllModals={handleLeavingModal}/>
    </>
  );
}

export default SignUpModal;