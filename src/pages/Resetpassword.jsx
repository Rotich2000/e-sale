import React from "react";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";

function Resetpassword() {
  return (
    <>
      <Meta title="Reset Password" />
      <BreadCrumb title="Reset Password" />
      <div className="login-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="login-card">
                        <h3 className="text-center mb-3">Reset Password</h3>
                        <form action="" className="d-flex flex-column gap-20">
                            <div>
                            <input type="password" name="password" placeholder="Password" className="form-control border-0" />
                            </div>
                            <div>
                            <input type="password" name="confirm-password" placeholder="Confirm Password" className="form-control border-0" />
                            </div>
                            <div>
                                <div className="d-flex justify-content-center gap-15 align-items-center">
                                    <button className="button border-0" type="submit">Reset</button>
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
}

export default Resetpassword;
