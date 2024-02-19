import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import Form from 'react-bootstrap/Form';
import { useDispatch, useSelector } from 'react-redux';
import { setFalse } from '../store/signIn';
import LeavingSoon from './LeavingSoon';

const RegisterForm = (props) => {
  const sessionPhone = sessionStorage.getItem("phoneNumber")
  const [validation, setValidation] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState(sessionPhone ? sessionPhone : "+255")
  const [registerStep, setRegisterStep] = useState(1)
  const [verificationCode, setVerificationCode] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [email, setEmail] = useState("")
  const [fullName, setFullName] = useState("")

  const handlePhoneNumber = (evt) => {
    if(evt.target.value.length > 3 && evt.target.value.length < 14 && !isNaN(Number(evt.target.value.substring(evt.target.value.length - 1)))){  
      setPhoneNumber(evt.target.value)
      sessionStorage.setItem('phoneNumber', evt.target.value)
    }
  }

  const handleVerificationCode = (evt) => {
    if(!isNaN(Number(evt.target.value)) && evt.target.value.length < 7) {
      setVerificationCode(evt.target.value)
    }
  }

  const handleFullName = (evt) => {
    setFullName(evt.target.value)
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value)
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value)
  }

  const handleConfirmPassword = (evt) => {
    setConfirmPassword(evt.target.value)
  } 

  const handleRegistration = (evt) => {
    evt.preventDefault()
    if(registerStep == 1) {
      setRegisterStep(2)
    } else if(registerStep == 2) {
      if(evt.currentTarget.checkValidity() === false) {
        evt.stopPropagation() 
        setValidation(true)
      } else {
      }
    }
  }

  return (
    <>  
      { registerStep == 1 ? 
      <>
        <Form className="mb-3" noValidate validated={validation}>
          <Form.Group className="mb-3">
            <Form.Label>Enter Phone Number for Verification</Form.Label>
            <Form.Control required type="text" value={phoneNumber} onChange={handlePhoneNumber} className="shadow-none" />
          </Form.Group>
          <div className="d-flex justify-content-center my-2">
            <Button variant="secondary" className="modal-login-btn">
              Send Code
            </Button>
          </div>
          <Form.Group className="mb-3">
            <Form.Label>Enter Validation Code</Form.Label>
            <Form.Control required type="text" value={verificationCode} onChange={handleVerificationCode} placeholder="Enter Code" className="shadow-none" />
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button variant="secondary" onClick={handleRegistration} disabled={verificationCode.length < 6} className="modal-login-btn">
              Continue
            </Button>
          </div>
        </Form> 
      </>
      : 
      <>
        <Form className="mb-3" noValidate validated={validation} onSubmit={handleRegistration} >
          <Form.Group className="mb-3">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="text" value={fullName} onChange={handleFullName} placeholder="John Doe" className="shadow-none" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid full name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control required type="email" value={email} onChange={handleEmail} placeholder="email@example.com" className="shadow-none" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email address.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Create Password</Form.Label>
            <Form.Control required type="password" value={password} onChange={handlePassword} placeholder="Create Password" className="shadow-none" />
            <Form.Control.Feedback type="invalid">
              Please create a valid password.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control required type="password" value={confirmPassword} onChange={handleConfirmPassword} placeholder="Confirm Password" className="shadow-none" />
            <Form.Control.Feedback type="invalid">
              Confirm your password.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="d-flex justify-content-center">
            <Button type="submit" variant="secondary" className="modal-login-btn">
              Register
            </Button>
          </div>
        </Form> 
      </>
    }
    </>
  )
}

const SignUpPopover = React.forwardRef((props, ref) => {
  const [register, setRegister] = useState(false);

  const [userNotRegistering, setUserNotRegistering] = useState(false);

  const handleRegisterClose = () => {
    //dispatch(setFalse());
    setRegister(false);
    setUserNotRegistering(true);
  };

  const handleLeavingModal = () => {
    setUserNotRegistering(false);
  };

  const revertToRegister = () => {
    setRegister(true);
    setUserNotRegistering(false);
  };

  const showRegister = () => setRegister(true);

  return (
    <Popover id="login-popover" style={{ maxWidth: "400em", ...props.style }} {...props} ref={ref}>
      <Popover.Header as="h3">{register ? "Register" : "Login"}</Popover.Header>
      <Popover.Body>
      {!register ?
        <>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
              <Form.Label>Email address or phone number</Form.Label>
              <Form.Control type="email" placeholder="Enter email or phone number" className="shadow-none" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" className="shadow-none" />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-center">
            <Button variant="secondary"className="modal-login-btn">
              Login
            </Button>
          </div>
          <p className="register-p">
            Don't have an account? <span onClick={showRegister}>Click Here</span>
          </p>
        </> : 
        <RegisterForm/>
      }
      </Popover.Body>
      <LeavingSoon leaving={userNotRegistering} revertToRegister={revertToRegister} closeAllModals={handleLeavingModal} />
    </Popover>
  );
})

export default SignUpPopover;