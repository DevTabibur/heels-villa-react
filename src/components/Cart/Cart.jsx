import React from "react";
import { Button } from "react-bootstrap";

const Cart = () => {
  return (
    <div>
      <h2>Cart</h2>
      <Button variant="success">Choose one For Me</Button>{" "}
      <Button variant="danger">Reset Cart</Button>{" "}
    </div>
  );
};

export default Cart;
