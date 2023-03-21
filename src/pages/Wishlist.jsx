import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "./wishlist.css";

const Wishlist = () => {
  return (
    <>
      <Meta title="Favorites" />
      <BreadCrumb title="Favorites" />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch-01.jpg" alt="watch" className="img-fluid d-block m-auto" />
                </div>
                <div className="p-3">
                <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                <h6 className="price">$35.19</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch-02.jpg" alt="watch" className="img-fluid d-block m-auto" />
                </div>
                <div className="p-3">
                <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                <h6 className="price">$35.19</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch-03.jpg" alt="watch" className="img-fluid d-block m-auto" />
                </div>
                <div className="p-3">
                <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                <h6 className="price">$35.19</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="wishlist-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute cross img-fluid"
                />
                <div className="wishlist-card-image">
                  <img src="images/watch-04.jpg" alt="watch" className="img-fluid d-block m-auto" />
                </div>
                <div className="p-3">
                <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                <h6 className="price">$35.19</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
