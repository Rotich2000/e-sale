import React from 'react'
import { Link } from 'react-router-dom'
import {FaPhoneAlt,FaPinterestSquare} from 'react-icons/fa'
import {AiOutlineMail,AiOutlineInstagram,AiFillFacebook, AiOutlineTwitter} from 'react-icons/ai'
import newsletter from '../images/newsletter.png';


const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data d-flex gap-30 align-items-center">
              <img src={newsletter} alt="newsletter" />
              <h2 className='mb-0 text-white'>Sign up for newsletter</h2>
            </div>
          </div>
          <div className="col-7">
          <div className="input-group">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Enter your email address"
                  aria-label="Enter your email address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h4 className='text-white mb-4'>Contact Us</h4>
            <div>
              <address className='text-white fs-6'> House Number: 1046 Near Nairobi, <br /> Ruaraka, Allsops <br />
              PinCode: 76765
              </address>
              <a href="tel: +254746960449" className='mt-4 d-block mb-2 text-white'><FaPhoneAlt /> <span style={{paddingLeft: "10px"}}>0746 960 449</span></a>
              <a href="mailto: drkimutai@gmail.com" className='d-block mb-0 text-white'><AiOutlineMail /> <span style={{paddingLeft: "10px"}}>drkimutai@gmail.com</span></a>
              <div className="social_icons d-flex align-items-center gap-30 mt-4">
                <a className='text-white' href="/"><AiOutlineInstagram className='fs-4'/></a>
                <a className='text-white' href="/"><AiFillFacebook className='fs-4'/></a>
                <a className='text-white' href="/"><AiOutlineTwitter className='fs-4'/></a>
                <a className='text-white' href="/"><FaPinterestSquare className='fs-4'/></a>
              </div>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Information</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2' to="/privacy-policy">Privacy Policy</Link>
              <Link className='text-white mb-1 py-2' to="/refund-policy">Refund Policy</Link>
              <Link className='text-white mb-1 py-2' to="/shipping-policy">Shipping Policy</Link>
              <Link className='text-white mb-1 py-2' to="/terms-and-conditions">Terms Of Service</Link>
              <Link className='text-white mb-1 py-2' to="/blogs">Blogs</Link>
            </div>
          </div>
          <div className="col-3">
            <h4 className='text-white mb-4'>Account</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2' to="">Search</Link>
              <Link className='text-white mb-1 py-2' to="">About Us</Link>
              <Link className='text-white mb-1 py-2' to="">Faq</Link>
              <Link className='text-white mb-1 py-2' to="">Contact</Link>
              <Link className='text-white mb-1 py-2' to="">Size Chart</Link>
            </div>
          </div>
          <div className="col-2">
            <h4 className='text-white mb-4'>Quick Links</h4>
            <div className='footer-links d-flex flex-column'>
              <Link className='text-white mb-1 py-2' to="">Laptops</Link>
              <Link className='text-white mb-1 py-2' to="">Headphones</Link>
              <Link className='text-white mb-1 py-2' to="">Tablets</Link>
              <Link className='text-white mb-1 py-2' to="">Watch</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer className='py-4 overflow-hidden'>
      <div className="row">
        <div className="col-12">
          <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Developed by Kim</p>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer