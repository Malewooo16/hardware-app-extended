"use client"

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {LiaShippingFastSolid} from 'react-icons/lia'
import {TbTruckReturn} from 'react-icons/tb'

function LeavingSoon( props:{leaving:boolean, revertToRegister:()=> void,  closeAllModals:()=>void}) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     

      <Modal show={props.leaving} onHide={handleClose} centered>
        <Modal.Header >
          <Modal.Title>Leaving Soon</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <h5 className="text-center">You Are Missing Out On</h5>
            <div className='d-flex justify-content-between mt-2'>
              <p className="why-u-leaving">  <LiaShippingFastSolid/>  Fast <br/> Free Shipping  </p>
              <p className="why-u-leaving"> <TbTruckReturn/>  90 Days <br/> Returns </p>
            </div>
        </Modal.Body>
          
          <div className="d-flex justify-content-between mb-2 px-2">
          <Button variant="secondary" onClick={props.closeAllModals}>
            Leave
          </Button>
          
          <Button variant="primary" onClick={props.revertToRegister}>
            Continue
          </Button>
          </div>
        
      </Modal>
    </>
  );
}

export default LeavingSoon;