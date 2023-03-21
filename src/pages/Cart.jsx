import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import watch from '../images/watch-01.jpg';
import {BsFillTrashFill} from 'react-icons/bs'
import './cart.css';
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
      <Meta title="Cart" />
      <BreadCrumb title="Cart" />
      <Container class1="cart-wrapper home-wrapper-2 py-5">
      <div className="row">
                <div className="col-12">
                    <div className="cart-header d-flex py-3 justify-content-between align-items-center">
                        <h4 className="cart-col-1">Product</h4>
                        <h4 className="cart-col-2">Price</h4>
                        <h4 className="cart-col-3">Quantity</h4>
                        <h4 className="cart-col-4">Total</h4>
                    </div>
                    <div className="cart-data mb-2 d-flex py-3 justify-content-between align-items-center">
                        <div className="cart-col-1 d-flex gap-15 align-items-center">
                            <div className="w-25">
                                <img src={watch} className="img-fluid" alt="product" />
                            </div>
                            <div className="w-75">
                                <p>Amazon Essentials Men's Easy to Read Strap Watch</p>
                                <p>Size: S</p>
                                <p>Color: #AB5A5A</p>
                            </div>
                        </div>
                        <div className="cart-col-2">
                            <h5 className="price">$ 100</h5>
                        </div>
                        <div className="cart-col-3 d-flex align-items-center gap-15">
                            <div><input type="number" className="form-control" min={1} max={10} name="" id="" /></div>
                            <div className="d-flex justify-content-center align-items-center" style={{cursor: "pointer", background: "#232f3e", width: "50px", height: "50px", borderRadius: "50%"}}><BsFillTrashFill className="fs-5 text-white"/></div>
                        </div>
                        <div className="cart-col-4">
                            <h5 className="total">$ 500</h5>
                        </div>
                    </div>
                </div>
                <div className="col-12 py-2 mt-4">
                   <div className="d-flex justify-content-between align-items-baseline">
                   <Link className="button" to="/store">Continue shopping</Link>
                   <div className="d-flex align-items-end flex-column">
                    <h4>Subtotal: $1000</h4>
                    <p>Taxes and shipping calculated at checkout</p>
                    <Link to='/checkout' className="button">checkout</Link>
                   </div>
                   </div>
                </div>
            </div>
      </Container>
    </>
  );
};

export default Cart;
