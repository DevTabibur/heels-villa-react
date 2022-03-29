import React from "react";
import { Button, Card, CardImg } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Product = (props) => {
  const { name, price, pairImage, sideImage } = props.product;

  return (
    <div className="ml-4">
      <Card style={{width: "18rem"}}>
        <Card.Img variant="top" src={pairImage} />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>
            Price: ${price}
          </Card.Text>
          <Button variant="primary">Add to Cart</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Product;
