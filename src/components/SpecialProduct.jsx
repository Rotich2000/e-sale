import React from "react";
import "./specialProduct.css";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <div className="col-6 mb-3">
      <div className="special-product-card">
        <div className="d-flex justify-content-between">
          <div>
            <img
              className="img-fluid"
              src="images/headphone-01.jpg"
              alt="headphones"
            />
          </div>
          <div className="special-product-content">
            <h5 className="brand">Havels</h5>
            <h6 className="title">BENGOO G9000 Stereo Gaming Headset.</h6>
            <ReactStars
              count={5}
              // onChange={ratingChanged}
              size={24}
              isHalf={true}
              value={3.5}
              edit={false}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="price">
              <span className="red-p">$100 </span> &nbsp; <strike>$400</strike>
            </p>
            <div className="discount-till d-flex align-items-center gap-10">
              <p className="mb-0">
                <b>5</b> days
              </p>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-2 bg-danger">
                  {new Date().getHours()}
                </span>
                :
                <span className="badge rounded-circle p-2 bg-danger">
                  {new Date().getMinutes()}
                </span>
                :
                <span className="badge rounded-circle p-2 bg-danger">
                  {new Date().getSeconds()}
                </span>
              </div>
            </div>
            <div className="prod-count my-3">
                <p>Products: 5</p>
                <div className="progress" style={{height: "5px"}}>
                  <div
                    className="progress-bar bg-success"
                    role="progressbar"
                    style={{width: "50%"}}
                    aria-valuenow="25"
                    aria-valuemin="0"
                    aria-valuemax="100"
                  ></div>
                </div>
              </div>
              <Link to="/" className="button">Add to cart</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialProduct;
