import React from 'react';
import Popover from 'react-bootstrap/Popover';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

const CartPopover = React.forwardRef((props, ref) => {
  const { cart } = props;
  const cartItems = cart.itemsList ?? []
  return (
    <Popover {...props} style={{ maxWidth: "400em", ...props.style }} ref={ref}>
      <Popover.Header as="h3">Shopping Cart</Popover.Header>
      <Popover.Body>
        {cartItems.length > 0 ? (
          <ListGroup>
        		<Row>
	        		<Col xs={5} className="d-flex justify-content-center"><strong>Item</strong></Col>
	        		<Col className="d-flex justify-content-center"><strong>Quantity</strong></Col>
	        		<Col className="d-flex justify-content-center"><strong>Price</strong></Col>
          	</Row>
						{cartItems.filter((item) => !item.removed).map((item, index) => (
              <ListGroup.Item key={index}>
              	<Row>
              		<Col xs={5} className="d-flex justify-content-center">{item.name}</Col>
              		<Col className="d-flex justify-content-center">{item.quantity}</Col>
              		<Col className="d-flex justify-content-center">${item.price}</Col>
              	</Row>
              </ListGroup.Item>
            ))}	
          </ListGroup>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </Popover.Body>
    	<div className="d-flex m-3 justify-content-end">
	      <Link href={"/cart"}>
	        Go to Checkout
	      </Link>
    	</div>
    </Popover>
  );
});

export default CartPopover;