import React from "react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";
import "./Home.css";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import Container from "../components/Container";
import { services } from "../utils/Data";

const Home = () => {
  return (
    <>
      <Container class1="home-wrapper-1 py-5">
        <div className="row">
          <div className="col-6">
            <div className="main-banner position-relative p-3">
              <img
                src="images/main-banner.jpg"
                alt="banner"
                className="img-fluid rounded-3"
              />
              <div className="main-banner-content position-absolute">
                <h4>supercharged for pros</h4>
                <h5>iPad S13+ Pro</h5>
                <p>
                  From $999.00 or $41.62/mo. <br /> for 24 mo. Footnote*{" "}
                </p>
                <Link className="button" to="/">
                  BUY NOW
                </Link>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-01.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>best sale</h4>
                  <h5>Laptops Max</h5>
                  <p>From $1699.00 or $64.62/mo.</p>
                </div>
              </div>

              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-02.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>new arrival</h4>
                  <h5>Buy Ipad Air</h5>
                  <p>
                    From $599.00 or $49.91/mo. <br /> for 12 mo*{" "}
                  </p>
                </div>
              </div>
              {/* ------- */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-03.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>15% off</h4>
                  <h5>Smartwatch 7</h5>
                  <p>
                    Shop the latest band <br /> styles and colors{" "}
                  </p>
                </div>
              </div>
              {/* ---------- */}
              <div className="small-banner position-relative">
                <img
                  src="images/catbanner-04.jpg"
                  alt="banner"
                  className="img-fluid rounded-3"
                />
                <div className="small-banner-content position-absolute">
                  <h4>free engraving</h4>
                  <h5>Airpods Max</h5>
                  <p>
                    High-fidelity playback & <br /> ultra-low distortion{" "}
                  </p>
                </div>
              </div>
              {/* --- */}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="services d-flex align-items-center justify-content-between">
              {services?.map(({ title, tagline, image }, j) => (
                <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={image} alt="services" />
                  <div>
                    <h6 className="mb-0">{title}</h6>
                    <p className="mb-0">{tagline}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container class1="home-wrapper-2 py-5">
        <div className="row">
          <div className="col-12">
            <div className="categories d-flex flex-wrap justify-content-between align-items-center">
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>smart tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>laptops</h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>Cameras</h6>
                  <p>10 items</p>
                </div>
                <img src="images/camera.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>smart tv</h6>
                  <p>10 items</p>
                </div>
                <img src="images/tv.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>Music & Gaming</h6>
                  <p>10 items</p>
                </div>
                <img src="images/headphone.jpg" alt="cameras" />
              </div>
              <div className="d-flex align-items-center gap">
                <div>
                  <h6>laptops</h6>
                  <p>10 items</p>
                </div>
                <img src="images/laptop.jpg" alt="cameras" />
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Container class1="featured-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Featured Collection</h3>
          </div>
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="famous-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-3">
            <div className="famous-card bg-white bor p-3 shadow">
              <div className="famous-content">
                <h5>Big Screen</h5>
                <h6>Smart Watch Series 7</h6>
                <p>From $399 or $16.62/mo for 24 mo.*</p>
              </div>
              <img
                className="img-fluid"
                src="images/famous-1.jpg"
                alt="famous"
              />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card bg-white bor p-3 shadow">
              <div className="famous-content">
                <h5>Laptops</h5>
                <h6>Macbook pro</h6>
                <p>From $1180 or $50.62/mo for 24 mo.*</p>
              </div>
              <img
                className="img-fluid"
                src="images/famous-2.jpg"
                alt="famous"
              />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card bg-white bor p-3 shadow">
              <div className="famous-content">
                <h5>Hard Drive</h5>
                <h6>Seagate Portable 2TB</h6>
                <p>From $61.84 or $6.42/mo for 24 mo.* </p>
              </div>
              <img
                className="img-fluid"
                src="images/famous-3.jpg"
                alt="famous"
              />
            </div>
          </div>

          <div className="col-3">
            <div className="famous-card bg-white bor p-3 shadow">
              <div className="famous-content">
                <h5>Camera</h5>
                <h6>Logitech C920x HD</h6>
                <p>From $62.90 or $6.62/mo for 24 mo.*</p>
              </div>
              <img
                className="img-fluid"
                src="images/famous-4.jpg"
                alt="famous"
              />
            </div>
          </div>
        </div>
      </Container>

      <Container class1="special-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Special Products</h3>
          </div>
        </div>
        <div className="row">
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
          <SpecialProduct />
        </div>
      </Container>

      <Container class1="popular-wrapper py-5 home-wrapper-2">
        <div className="row">
          <div className="col-12">
            <h3 className="section-heading">Our popular products</h3>
          </div>
        </div>
        <div className="row">
          <ProductCard />
          <ProductCard />
        </div>
      </Container>

      <Container class1="marque-wrapper home-wrapper-2 py-5">
      <div className="row">
            <div className="col-12">
              <div className="marquee-inner-wrapper card-wrapper">
                <Marquee className="d-flex align-items-center">
                  <div className="mx-4 w-25">
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-02.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-04.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-06.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div className="mx-4 w-25">
                    <img src="images/brand-08.png" alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
      </Container>
      
      <Container class1="blog-wrapper py-5 home-wrapper-2">
      <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
            <div className="col-3">
              <BlogCard />
            </div>
          </div>
      </Container>
    </>
  );
};

export default Home;
