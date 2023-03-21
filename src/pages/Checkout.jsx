import React from "react";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import watch from "../images/watch-02.jpg";
import "./checkout.css";

const Checkout = () => {
  return (
    <>
      <div className="checkout-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-7">
              <div className="checkout-left-data">
                <div className="website-name">Gamer's</div>
                <nav
                  style={{ "--bs-breadcrumb-divider": ">" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link className="text-dark total-price" to="/cart">Cart</Link>
                    </li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Information
                    </li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Shipping
                    </li>
                    &nbsp; &gt;
                    <li className="breadcrumb-item total-price active" aria-current="page">
                      Payment
                    </li>
                  </ol>
                </nav>
                <h4 className="title total">Contact information</h4>
                <p className="user-details total">
                  Dennis Rotich (drkimutai@gmail.com)
                </p>
                <h4 className="mb-3">Shipping Address</h4>
                <form
                  action=""
                  className="d-flex flex-wrap gap-15 justify-content-between"
                >
                  <div className="w-100">
                    <select defaultValue={'DEFAULT'} className="form-control form-select" name="" id="">
                      <option value="DEFAULT" disabled>
                        Select Country
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Address"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <input
                      type="text"
                      placeholder="Apartment, Suite, etc. (Optional)"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="City"
                      className="form-control"
                    />
                  </div>
                  <div className="flex-grow-1">
                    {" "}
                    <select defaultValue={'DEFAULT'} className="form-control form-select" name="" id="">
                      <option value="DEFAULT" disabled>
                        Select state
                      </option>
                    </select>
                  </div>
                  <div className="flex-grow-1">
                    <input
                      type="text"
                      placeholder="zipcode"
                      className="form-control"
                    />
                  </div>
                  <div className="w-100">
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to="/cart"
                        className="text-dark d-flex align-items-center gap-10"
                      >
                        <BsArrowLeft /> Return to Cart
                      </Link>
                      <Link to="/store" className="button">
                        Continue to shipping
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-5">
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center mb-2 gap-10">
                  <div className="w-75 d-flex align-items-center gap-10">
                    <div className="w-25 position-relative">
                      <span
                        style={{ right: -3, top: -10 }}
                        className="badge bg-secondary text-white rounded-circle position-absolute"
                      >
                        7
                      </span>
                      <img className="img-fluid" src={watch} alt="product" />
                    </div>
                    <div>
                      <h5 className="total-price">
                        Amazon Essentials Men's Easy to Read Strap Watch
                      </h5>
                      <p className="total-price">Watch</p>
                    </div>
                  </div>
                  <div className="">
                    <h5 className="total">$ 100</h5>
                  </div>
                </div>
              </div>
              <div className="border-bottom py-3">
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Subtotal</p>
                  <p className="mb-0 total-price">$700</p>
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  <p className="mb-0 total">Shipping</p>
                  <p className="mb-0 total-price">$300</p>
                </div>
              </div>
              <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                <h4 className="total">Total</h4>
                <h5 className="total-price">$1000</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
