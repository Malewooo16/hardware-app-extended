
"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import {MdAccountCircle} from "react-icons/md"
import ThemeSwitch from './ThemeSwitch';
import TzIcon from './TanzaniaSvg';
import { useDispatch, useSelector } from 'react-redux';
import {setTrue} from "../store/signIn"

function AccountSidebar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const dispatch=useDispatch()

const handleShowModal=()=>{
  dispatch(setTrue())
}
  return (
    <>
      
      <MdAccountCircle onClick={handleShow} style={{cursor:"pointer"}}/>
      

      <Offcanvas show={show} onHide={handleClose} placement={"end"} style={{width:"200px", height:"300px"}}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Account and Settings</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ul className="mobile-settings-list">
            <li onClick={handleShowModal}> <strong>Login/Register</strong> </li>
            <li> Country:<TzIcon/> </li>
            <li>Notifications</li>
            <li className="d-flex align-items-center">Theme &nbsp; <ThemeSwitch/> </li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default AccountSidebar;