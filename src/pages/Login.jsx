import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import { Link } from "react-router-dom";
import "./login.css"

const Login = () => {
  return (
    <>
      <Meta title="Login" />
      <BreadCrumb title="Login" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className="text-center mb-3">Login</h3>
                        <form action="" className="d-flex flex-column gap-20">
                            <div>
                            <input type="email" name="email" placeholder="Email" className="form-control border-0" />
                            </div>
                            <div>
                            <input type="password" name="password" placeholder="Password" className="form-control border-0" />
                            </div>
                            <div>
                                <Link to="/forgot" className="text-decoration-underline text-center w-100 pb-3" >Forgot password</Link>
                                <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0" type="submit">Login</button>
                                    <Link to="/signup" className="button signup">Sign up</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Login;
