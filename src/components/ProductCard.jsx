import React from "react";
import ReactStars from "react-rating-stars-component";
import "./productCard.css";
import { Link, useLocation } from "react-router-dom";
import prodCompare from '../images/prodcompare.svg';
import wish from '../images/wish.svg';
import watch from '../images/watch.jpg';
import watch2 from '../images/watch-01.jpg';
import addcart from '../images/add-cart.svg';
import view from '../images/view.svg';

const ProductCard = ({grid}) => {
  let location = useLocation()
  return (
    <>
    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
      <Link to="/store/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <img src={wish} alt="wishlist" />
        </div>
        <div className="product-image">
          <img className="img-fluid" src={watch} alt="featured" />
          <img className="img-fluid" src={watch2} alt="featured" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students.
          </h5>
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
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
           Memory is 8GB high-bandwidth RAM to smoothly
           run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe
           Solid State Drive which allows to fast bootup and data transfer
          </p>
          <p className="price">$ 100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodCompare} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
      <Link to="/store/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <img src={wish} alt="wishlist" />
        </div>
        <div className="product-image">
          <img className="img-fluid" src={watch} alt="featured" />
          <img className="img-fluid" src={watch2} alt="featured" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students.
          </h5>
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
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
           Memory is 8GB high-bandwidth RAM to smoothly
           run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe
           Solid State Drive which allows to fast bootup and data transfer
          </p>
          <p className="price">$ 100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodCompare} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>

    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
      <Link to="/store/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <img src={wish} alt="wishlist" />
        </div>
        <div className="product-image">
          <img className="img-fluid" src={watch} alt="featured" />
          <img className="img-fluid" src={watch2} alt="featured" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students.
          </h5>
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
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
           Memory is 8GB high-bandwidth RAM to smoothly
           run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe
           Solid State Drive which allows to fast bootup and data transfer
          </p>
          <p className="price">$ 100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodCompare} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>

    <div className={location.pathname === "/store" ? `gr-${grid}` : "col-3"}>
      <Link to="/store/product/:id" className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
            <img src={wish} alt="wishlist" />
        </div>
        <div className="product-image">
          <img className="img-fluid" src={watch} alt="featured" />
          <img className="img-fluid" src={watch2} alt="featured" />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students.
          </h5>
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
          <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
           Memory is 8GB high-bandwidth RAM to smoothly
           run multiple applications and browser tabs all at once. Hard Drive is 256GB PCIe
           Solid State Drive which allows to fast bootup and data transfer
          </p>
          <p className="price">$ 100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="cart" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={prodCompare} alt="compare" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    </>
  );
};

export default ProductCard;
