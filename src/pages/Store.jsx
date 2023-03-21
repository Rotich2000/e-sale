import React, { useState } from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import "./store.css";
import ProductCard from '../components/ProductCard'
import Color from "../components/Color";

const Store = () => {
  const [grid, setGrid] = useState(4)
  return (
    <>
      <Meta title="Store" />
      <BreadCrumb title="Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Show by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>Tv</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter by</h3>
                <div>
                  <h5 className="sub-title">Availability</h5>
                  <div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        In Stock (1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        value=""
                        id=""
                      />
                      <label htmlFor="" className="form-check-label">
                        Out of Stock (0)
                      </label>
                    </div>
                    <h5 className="sub-title mt-3">Prices</h5>
                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput"
                          placeholder="From"
                        />
                        <label htmlFor="floatingInput">From</label>
                      </div>
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="floatingInput1"
                          placeholder="To"
                        />
                        <label htmlFor="floatingInput1">To</label>
                      </div>
                    </div>
                    <h5 className="sub-title mt-3">Colors</h5>
                    <div>
                      <Color/>
                    </div>
                    <h5 className="sub-title mt-3">Size</h5>
                    <div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value=""
                          id="color-1"
                        />
                        <label htmlFor="color-1" className="form-check-label">
                          S (1)
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          value=""
                          id="color-2"
                        />
                        <label htmlFor="color-2" className="form-check-label">
                          M (1)
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphones
                    </div>
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Laptop
                    </div>
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Mobile
                    </div>
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Tablet
                    </div>
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Speakers
                    </div>
                    <div className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Televisions
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card">
                <h3 className="filter-title">Random product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Smart Watch Series 7</h5>
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
                      <b>$ 783</b>
                    </div>
                  </div>  
                  <div className="random-products d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="watch"
                      />
                    </div>
                    <div className="w-50">
                      <h5>Smart Watch Series 7</h5>
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
                      <b>$ 783</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-10">
                  <p className="mb-0" style={{width: "100px"}} >Sort By:</p>
                  <select name="" className="form-control form-select">
                    <option value="manual">Featured</option>
                    <option value="best-selling" selected="selected">Best selling</option>
                    <option value="title-ascending">
                      Alphabetically, A-Z
                    </option>
                    <option value="title-descending">
                      Alphabetically, Z-A
                    </option>
                    <option value="price-ascending">
                      Price, low to high
                    </option>
                    <option value="price-descending">
                      Price, high to low
                    </option>
                    <option value="created-ascending">
                      Date, old to new
                    </option>
                    <option value="created-descending">
                      Date, new to old
                    </option>
                  </select>
                </div>
                <div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="totalproducts mb-0">21 Products</p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img onClick={() => {setGrid(3)}} src="/images/gr4.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(4)}} src="/images/gr3.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(6)}} src="/images/gr2.svg" className="d-block img-fluid" alt="grid" />
                      <img onClick={() => {setGrid(12)}} src="/images/gr.svg" className="d-block img-fluid" alt="grid" />
                    </div>
                  </div>
                </div>
                </div>
              </div>
              <div className="product-list pb-5">
              <div className="d-flex gap-10 flex-wrap">
              <ProductCard grid={grid}/>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Store;
