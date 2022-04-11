import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import axios from "axios";
import styled from "styled-components";
import { URL } from "../config";
const CartBtn = styled.button`
  background-color: #5be98f;
  border-radius: 10px;

  color: green;
  cursor: pointer;
  display: inline-block;

  padding: 7px 20px;
  text-align: center;
  text-decoration: none;
  transition: all 250ms;
  border: 0;
  font-size: 24px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  color: black;
`;

const styles = {
  pageContainer: {
    padding: "20px",
    fontSize: "20px",
  },
};

const ShowCart = (props) => {
  const { product } = props;
  const [counter, setCounter] = useState(0);

  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "green",
    border: "solid",
    width: "40px",
    height: "40px",
    fontWeight: "bold",
  };

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const getPrice = () => {
    if (product.discount == 0) {
      return (
        <h5>
          <b>{product.price}</b> rs
        </h5>
      );
    } else {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100;
      return (
        <h5>
          <strike>{product.price}</strike>
          <b> {discountedPrice} </b>
          rs
        </h5>
      );
    }
  };

  const getFinalPrice = () => {
    if (product.discount == 0) {
      return product.price;
    } else {
      const discountedPrice =
        product.price - (product.price * product.discount) / 100;
      return discountedPrice;
    }
  };

  useEffect(() => {
    getFinalPrice();
  }, []);

  const { id, name } = sessionStorage;
  const customerId = id;
  const productId = product.id;
  const unitQuantity = counter;
  const price = getFinalPrice();
  const totalPrice = unitQuantity * price;
  const discount = price;
  const productName = product.name;

  const addToBasket = () => {
    if (customerId === undefined) {
      toast.warning("Please login to add product in basket");
      navigate("/login");
    } else {
      const body = {
        customerId,
        productId,
        unitQuantity,
        totalPrice,
        productName,
      };

      const url = `${URL}/addToCart`

      if (unitQuantity != 0) {
        axios.post(url, body).then((response) => {
          toast.success("product added in cart successfully");
          const result = response.data;
          console.log(response);

          sessionStorage["loginStatus"] = 1;
          //navigate("/cart")
        });
      } else {
        toast.warning("Quantity is empty cannot be added");
      }
    }
  };

  return (
    <div class="column">
      <div class="card">
        {/* <img src={path} /> */}
        <h3>{product.productName}</h3>
        <p>{product.description}</p>
        <p>{getPrice()}</p>
        <div style={styles.pageContainer}>
          <CartBtn className="btn btn-dark" onClick={decrementCounter}>
            -
          </CartBtn>
          <span style={{ margin: "10px" }}>{counter}</span>
          <CartBtn className="btn btn-dark" onClick={incrementCounter}>
            +
          </CartBtn>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default ShowCart;
