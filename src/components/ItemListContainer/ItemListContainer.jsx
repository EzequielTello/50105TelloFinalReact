import React from "react";
import { Card } from "react-bootstrap";
import { useParams, Link } from "react-router-dom";
export const ItemListContainer = ({ products }) => {
  console.log("Número de productos:", products.length);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        width: "100vw",
        justifyContent: "space-around",
      }}
    >
      {products.map((product) => {
        console.log("Precio del producto:", product.price);

        return (
          <Card
            key={product.id}
            style={{ width: "15rem", margin: 20, height: "500px" }}
          >
            <Link to={`/item/${product.id}`}>
              <Card.Img variant="top" src={product.thumbnail} />
            </Link>
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>{product.price}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};
