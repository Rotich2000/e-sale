import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import "./Contact.css";
import {IoIosHome} from "react-icons/io"
import {AiFillPhone} from "react-icons/ai"
import {GrMail} from "react-icons/gr"
import {BsInfoLg} from "react-icons/bs"

const Contact = () => {
  let documents = "Contact Us";
  return (
    <>
      <Meta title={documents} />
      <BreadCrumb title={documents} />
      <div className="contact-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <iframe
                title="myplace"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.722972040714!2d36.90034094999999!3d-1.2085711499999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f3f1d7603f149%3A0xbb99ceec05e92cfd!2sNaivas%20Supermarket%20Githurai%20Branch!5e0!3m2!1sen!2ske!4v1677088594507!5m2!1sen!2ske"
                width="600"
                height="450"
                className="border-0 w-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="col-12 mt-5">
              <div className="contact-inner-wrapper d-flex justify-content-between">
                <div>
                  <h3 className="contact-title mb-4">Contact Us</h3>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <input
                        type="text"
                        placeholder="Name*"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email*"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <input
                        type="tel"
                        placeholder="Phone number"
                        className="form-control"
                      />
                    </div>
                    <div>
                      <textarea
                        name="comment"
                        placeholder="Comment"
                        id=""
                        className="w-100 form-control"
                        rows="4"
                      ></textarea>
                    </div>
                    <div>
                      <button className="button border-0">Submit</button>
                    </div>
                  </form>
                </div>
                <div>
                  <h3 className="contact-title mb-4">Get in touch with us</h3>
                  <div>
                    <ul>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <IoIosHome className="fs-5"/>
                        <address className="mb-0">House Number: 1046 Near Nairobi</address>
                        </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <AiFillPhone className="fs-5"/>
                        <a href="tel:+254 746960449">+254 746 960 449</a>
                        </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <GrMail className="fs-5"/>
                        <a href="mailto: drkimutai@gmail.com">drkimutai@gmail.com</a>
                        </li>
                      <li className="mb-3 d-flex align-items-center gap-15">
                        <BsInfoLg className="fs-5"/>
                        <p className="mb-0">Monday - Friday 8AM - 5PM</p>
                        </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
