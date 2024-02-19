"use client";

import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Form from "react-bootstrap/Form"
import {
  NotificationsActive,
  ShoppingCartOutlined,
  Chat,
} from "@mui/icons-material";

const FeedbackModal = () => {
  const [selectedNumber, setSelectedNumber] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [selectedContent, setSelectedContent] = useState('');
  const [selectedDesign, setSelectedDesign] = useState('');

 

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (selectedNumber) {
      console.log(`Selected number: ${selectedNumber}`);
      // You can perform further actions like submitting to a server, etc.
    } else {
      console.log("Please select a number");
    }
  };

  return (
    <>
      
      <Badge onClick={handleShow} pill bg="warning" style={{cursor:"pointer"}}>
        <Chat /> Feedback
        </Badge>
      
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Ujenzi Africa Feedback</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <div className="row">
                <label> Page Ratings </label>
              <div className="mb-3 mt-2 col">
                <label>Content:</label>
                <div className="d-flex">
                  {["very bad", "bad", "neutral", "good", "very good"].map(
                    (number) => (
                      <label
                        key={number}
                        className="number-radio-label mx-2 d-flex flex-column align-items-center "
                      >
                        <span className="">{number}</span>
                        <input
                          type="radio"
                          name="content"
                          className="mx-auto"
                          value={number}
                          checked={selectedContent === number.toString()}
                          onChange={e=> setSelectedContent(e.target.value)}
                        />
                      </label>
                    )
                  )}
                </div>
              </div>

              <div className="my-3 col">
                <label>Design:</label>
                <div className="d-flex">
                  {["very bad", "bad", "neutral", "good", "very good"].map(
                    (number) => (
                      <label
                        key={number}
                        className="number-radio-label mx-2 d-flex flex-column align-items-center "
                      >
                        <span className="">{number}</span>
                        <input
                          type="radio"
                          className="mx-auto"
                          name="design"
                          value={number}
                          checked={selectedDesign === number.toString()}
                          onChange={e=> setSelectedDesign(e.target.value)}
                        />
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
            <div className="my-3">
            <label> Page Comments</label>
            <Form.Select aria-label="Default select example">
      <option>Please Choose One</option>
      <option value="1">Comment One</option>
      <option value="2">Comment Two</option>
      <option value="3">Comment Three</option>
    </Form.Select>
      <Form.Group className="my-2" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3}  placeholder="Please enter your comments about this page"/>
      </Form.Group>

      
      <div className="my-3 d-flex" >
        <Form.Label>Please Enter your email or phone number to receive feedback from Ujenzi Africa</Form.Label>
        <Form.Control type="text" />
      </div>
            </div>

            <div className="d-flex justify-content-between my-3">
                <label>Would you recomend Ujenzi Africa <br/> to your family and freinds </label>
            <div className="d-flex">
                  {["very unlikely", "unlikely", "mabye", "yes", "absolutely"].map(
                    (number) => (
                      <label
                        key={number}
                        className="number-radio-label mx-2 d-flex flex-column align-items-center "
                      >
                        <span className="">{number}</span>
                        <input
                          type="radio"
                          name="content"
                          className="mx-auto"
                          value={number}
                          checked={selectedContent === number.toString()}
                          onChange={e=> setSelectedContent(e.target.value)}
                        />
                      </label>
                    )
                  )}
                </div>
            </div>
            
            <Modal.Footer>
            <button type="submit" className="my-2 btn btn-secondary">
              Submit
            </button>
        </Modal.Footer>
     </form>
          </div>
        </Modal.Body>
      
      </Modal>
    </>
  );
};

export default FeedbackModal;

{
  /*  */
}
