import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
} from "../redux/action";
import { Link } from "react-router-dom";

function Cart() {
  const cartItems = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

    // Calculate total
    const totalAmount = cartItems.reduce((total, item) => {
        return total + (item.price * item.qty);
      }, 0);

  return (
    <div className="container mt-5">
      <h2 className="display-6 fw-bolder text-center mb-4">Shopping Cart</h2>
      <div className="card">
        <ul className="list-group list-group-flush">
          {cartItems.map((item, index) => (
            <li className="list-group-item d-flex align-items-center" key={index}>
              <div className="col">
                <img src={item.image} className="img-thumbnail" alt={item.title} height="100px" width="100px" />
              </div>
              <div className="col-md-6">
                <h5>{item.title}</h5>
                <p>$ {item.price} x {item.qty}</p>
              </div>
              <div className="col-md-2">
                <div className="input-group">
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="input-group-text">{item.qty}</span>
                  <button
                    className="btn btn-outline-secondary"
                    onClick={() => dispatch(increaseQuantity(item.id))}
                  >
                    +
                  </button>
                  </div>
              </div>
              <div className="col-md-2">
                  <button
                    className="btn btn-danger ms-2"
                    onClick={() => dispatch(removeFromCart(item.id))}
                  >
                    Remove
                  </button>
                  </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-4 text-center">
        <p className="fw-bold">Total Amount: ${totalAmount.toFixed(2)}</p>
        <Link to="/" className="btn btn-primary"><i className="fa fa-arrow-left me-1"></i> Continue Shopping</Link>
      </div>
    </div>
  );
}

export default Cart;
