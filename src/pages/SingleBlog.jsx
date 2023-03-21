import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import './singleblog.css'
import { Link } from "react-router-dom";
import {HiArrowNarrowLeft} from "react-icons/hi";
import blog from '../images/blog-1.jpg'

const SingleBlog = () => {
  return (
    <>
      <Meta title="Dynamic Blog Name" />
      <BreadCrumb title="Dynamic Blog Name" />
      <div className="blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-3">
                <div className="filter-card mb-3">
                <h3 className="filter-title">Shop by Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Home</li>
                    <li>Our Store</li>
                    <li>Blogs</li>
                    <li>Contact</li>
                  </ul>
                </div>
              </div>
                </div>
                <div className="col-9">
                    <div className="single-blog-card">
                        <h3 className="title">
                            A Beautiful Sunday Morning Renaissance
                        </h3>
                        {/* <img src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="blog" className="img-fluid w-100 my-4" /> */}
                        <img src={blog} className="img-fluid w-100 my-4" alt="blog" />
                        <p>3D gaming has come a long way in recent years, 
                            and has become increasingly popular among gamers.
                             With the advent of new technologies and the rise of 
                             powerful gaming consoles and computers, gaming in 3D has
                             become more accessible and immersive than ever before.
                        </p>
                        <Link to="/blogs" className="d-flex align-items-center gap-10"> <HiArrowNarrowLeft className="fs-4" /> Back</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  );
};

export default SingleBlog;
