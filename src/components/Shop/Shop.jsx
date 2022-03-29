import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/mir-hussain/boots-data/main/data.json"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    console.log(product);
  };

  return (
    <>
      <div className="heading py-5">
        <h1 className="text-bold text-danger text-center mx-auto">
          This is Heels Villa Shop
        </h1>
      </div>

      <div className="shop">
        <div className="products-container">
          {products.map((product, index) => (
            <Product
              key={index}
              handleAddToCart={handleAddToCart}
              product={product}
            />
          ))}
        </div>

        <div className="cart-container">
          <Cart />
        </div>
      </div>
    </>
  );
};

export default Shop;
