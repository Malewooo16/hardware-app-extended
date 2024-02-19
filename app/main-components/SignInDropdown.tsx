"use client"

import Dropdown from 'react-bootstrap/Dropdown';
import { ShoppingCartOutlined, Chat, HelpOutlined, AccountCircleOutlined} from '@mui/icons-material';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function SignInDropdown() {
  const [login, setLogin] = useState(true)

  const handleSignUp = ()=>{
    setLogin(false)
  }
  return (
    <Dropdown>
      <Dropdown.Toggle  id="dropdown-basic">
      <li className="user-icon"> <AccountCircleOutlined  className="user-icon-svg"/> <p> Welcome <br/> <strong>Sign In </strong> </p>  </li>

      </Dropdown.Toggle>

      {login ? <Dropdown.Menu className="signin-dropdown">
      <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button  type="submit">
        Sign In
      </Button>
      <p className="mt-2"> New Customer? <span onClick={handleSignUp}> Start here </span> </p>
    </Form>
    
      </Dropdown.Menu> : <Dropdown.Menu className="signin-dropdown">
     <div className="signup-main">
     <h5> Sign Up </h5>
        
     </div>
      <Form>
        
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="email" placeholder="Enter Phone Number" />
      </Form.Group>
      <p className="signup-main-p" > A verification code will be sent <br/> to this number </p>
     
      <Button  type="submit">
        Send Code
      </Button>
     
    </Form>


    <Form>
        
      <Form.Group className="mt-3" controlId="formBasicEmail">
        <Form.Label>Enter Verification Code </Form.Label>
        <Form.Control type="email" placeholder="Enter Code" />
      </Form.Group>
     
      <Button  type="submit" className="mt-2 disabled">
      Submit
      </Button>
     
    </Form>


    
      </Dropdown.Menu>}
    </Dropdown>
  );
}

export default SignInDropdown;