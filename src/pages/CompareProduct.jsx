import React from 'react'
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import "./compareProduct.css"
import Color from '../components/Color';

const CompareProduct = () => {
  return (
    <>
    <Meta title="Compare Products" />
    <BreadCrumb title="Compare Products" />
    <div className="compare-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch-02.jpg" alt="compare" className='img-fluid d-block m-auto' />
                        </div>
                        <div className="compare-product-details py-3">
                            <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                            <h6 className="price my-3">$35.19</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Quartz</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch-01.jpg" alt="compare" className='img-fluid d-block m-auto' />
                        </div>
                        <div className="compare-product-details py-3">
                            <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                            <h6 className="price my-3">$35.19</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Quartz</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch-02.jpg" alt="compare" className='img-fluid d-block m-auto' />
                        </div>
                        <div className="compare-product-details py-3">
                            <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                            <h6 className="price my-3">$35.19</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Quartz</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src="images/cross.svg" alt="cross" className="position-absolute cross img-fluid" />
                        <div className="product-card-image">
                            <img src="images/watch-03.jpg" alt="compare" className='img-fluid d-block m-auto' />
                        </div>
                        <div className="compare-product-details py-3">
                            <h5 className="title">GOLDEN HOUR Fashion Business Mens Watches Chronograph Quartz Watch for Men</h5>
                            <h6 className="price my-3">$35.19</h6>
                            <div>
                                <div className="product-detail">
                                    <h5>Brand:</h5>
                                    <p>Quartz</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Type:</h5>
                                    <p>Watch</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Availability:</h5>
                                    <p>In Stock</p>
                                </div>
                                <div className="product-detail">
                                    <h5>Color:</h5>
                                    <Color/>
                                </div>
                                <div className="product-detail">
                                    <h5>Size:</h5>
                                    <div className="d-flex gap-10">
                                        <p>S</p>
                                        <p>M</p>
                                        <p>L</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CompareProduct