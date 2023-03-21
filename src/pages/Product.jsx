import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ClipboardCopy from "../components/ClipboardCopy";
import Color from "../components/Color";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
import ReactImageZoom from "react-image-zoom";
import {TbGitCompare} from 'react-icons/tb';
import {GiRoyalLove} from 'react-icons/gi'
import "./product.css";

const Product = () => {
  const [orderedProduct] = useState(true);
  const props = {
    width: 400,
    height: 500,
    zoomWidth: 500,
    img: "https://m.media-amazon.com/images/I/714FPwrJSLS._AC_UL1000_.jpg",
  };

  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <div className="main-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex flex-wrap gap-15">
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/81OFlyd7L4L._AC_UL400_.jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/61hwd7aAmnL._AC_UL400_.jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/717BtkvbYJL._AC_UL400_.jpg"
                    alt="watch"
                  />
                </div>
                <div>
                  <img
                    src="https://m.media-amazon.com/images/I/71Q7JMrurtL._AC_UL400_.jpg"
                    alt="watch"
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Fossil Men's Nate Stainless Steel Quartz Chronograph Watch
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$49.99</p>
                  <div className="d-flex align-items-center gap-10">
                    <ReactStars
                      count={5}
                      // onChange={ratingChanged}
                      size={18}
                      isHalf={true}
                      value={4}
                      edit={false}
                      emptyIcon={<i className="far fa-star"></i>}
                      halfIcon={<i className="fa fa-star-half-alt"></i>}
                      fullIcon={<i className="fa fa-star"></i>}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0 t-review">(2 reviews)</p>
                  </div>
                  <a className="review-btn" href="#review">
                    Write a review
                  </a>
                </div>
                <div className="py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Type :</h3>{" "}
                    <p className="mb-0 product-data">Watch</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Brand :</h3>{" "}
                    <p className="mb-0 product-data">Quartz</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Categories :</h3>{" "}
                    <p className="mb-0 product-data">
                      airpods, watches, cameras, headphones, smart televisions.
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Tags :</h3>{" "}
                    <p className="mb-0 product-data">
                      apple, samsung, oppo, redmi
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading mb-0">Availability :</h3>{" "}
                    <p className="mb-0 product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading mb-0">Size :</h3>{" "}
                    <div className="d-flex flex-wrap gap-15">
                      <span className="badge bg-white text-dark border border-secondary">
                        S
                      </span>
                      <span className="badge bg-white text-dark border border-secondary">
                        M
                      </span>
                      <span className="badge bg-white text-dark border border-secondary">
                        XL
                      </span>
                      <span className="badge bg-white text-dark border border-secondary">
                        XXL
                      </span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading mb-0">Color :</h3> <Color />
                  </div>
                  <div className="d-flex align-items-center gap-15 mt-2 mb-3">
                    <h3 className="product-heading mb-0">Quantity :</h3>{" "}
                    <div className="">
                      <input
                        type="number"
                        style={{ width: "70px" }}
                        className="form-control"
                        name=""
                        min={1}
                        max={10}
                        id=""
                      />
                    </div>
                    <div>
                      <div className="d-flex justify-content-center gap-30 ms-5 align-items-center">
                        <button className="button border-0" type="submit">
                          Add to cart
                        </button>
                        <button to="/signup" className="button signup">
                          Buy It Now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-15">
                    <div>
                      <a href="/"><TbGitCompare className="fs-5 me-2"/> Add to Compare</a>
                    </div>
                    <div>
                      <a href="/"><GiRoyalLove className="fs-5 me-2"/> Add to Wishlist</a>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading mb-0">Shipping & Returns :</h3>{" "}
                    <p className="mb-0 product-data">Free shipping and returns available on
                    all orders! <br /> We ship all Kenyan domestic orders within <b>5 - 10 business days</b>.</p>
                  </div>
                  <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading mb-0">Copy product link :</h3>{" "}
                    <ClipboardCopy copyText="https://m.media-amazon.com/images/I/714FPwrJSLS._AC_UL1000_.jpg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="description-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3 rounded-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Provident, reiciendis rerum! Illum debitis distinctio amet
                  blanditiis voluptas delectus fuga atque. Lorem ipsum dolor sit
                  amet consectetur adipisicing elit. Illum, tenetur!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="review" className="reviews-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h4>Reviews</h4>
              <div className="review-inner-wrapper rounded-3">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-1">Customer Reviews</h4>
                    <div className="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={18}
                        isHalf={true}
                        value={4}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <Link to="/" className="text-decoration-underline">
                        Write a review
                      </Link>
                    </div>
                  )}
                </div>
                <div className="review-form">
                  <form action="" className="d-flex flex-column gap-15">
                    <div className="pt-3">
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="kim@example.com"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="rating">Rating</label>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={18}
                        isHalf={true}
                        value={0}
                        edit={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <div>
                      <label htmlFor="title">Review Title</label>
                      <input
                        type="text"
                        placeholder="Give your review a title"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <label htmlFor="reviews">Body of Review (1500)</label>
                      <textarea
                        name="review"
                        placeholder="Add review!!"
                        id=""
                        className="w-100 form-control"
                        rows="4"
                      ></textarea>
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0 mb-3">
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-3">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="mb-0">Dennis Rotich</h3>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={18}
                        isHalf={true}
                        value={4}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat, sunt repellendus sed, officia sit reiciendis
                      commodi minima, laborum deserunt incidunt pariatur
                      delectus vitae maiores perspiciatis consequuntur quibusdam
                      iste libero labore!
                    </p>
                  </div>
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center">
                      <h3 className="mb-0">Stanley Rotich</h3>
                      <ReactStars
                        count={5}
                        // onChange={ratingChanged}
                        size={18}
                        isHalf={true}
                        value={4.5}
                        edit={false}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                      />
                    </div>
                    <p className="mt-2">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Quaerat, sunt repellendus sed, officia sit reiciendis
                      commodi minima, laborum deserunt incidunt pariatur
                      delectus vitae maiores perspiciatis consequuntur quibusdam
                      iste libero labore!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="popular-wrapper pb-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You may also like</h3>
            </div>
          </div>
          <div className="row">
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default Product;
