'use client';
import React from 'react';
import Image from 'next/image';
import '../styles/footer.css';

const Footer = () => {
  return (
    <footer className="text-light pt-5 pb-4">
      <div className="container text-center text-md-start">
        {/* Newsletter Sign Up */}
        <div className="row mb-4 justify-content-center text-center">
          <div className="col-md-10">
            <h5 className="fw-bold text-uppercase">SIGN UP FOR LOOM UPDATES</h5>
            <p className="mb-3 fs-6">Get exclusive updates on the collection's launch.</p>
            <form className="d-flex justify-content-center">
              <input type="email" className="form-control w-50 me-2" placeholder="you@example.com" />
              <button type="submit" className="btn btn-light text-dark">Submit</button>
            </form>
            <p className="mt-2">Stay up to date with the Loom Newsletter.</p>
          </div>
        </div>

        {/* Footer Links */}
        <div className="row text-start">
          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold small">May we help you?</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-underline">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-underline">My Orders</a></li>
              <li><a href="#" className="text-light text-decoration-underline">FAQs</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Email Unsubscribe</a></li>
            </ul>
            <h6 className="text-uppercase fw-bold mt-5 small">Loom Services</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-underline">Discover Our Services</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold small">The Company</h6>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-underline">About Loom Essence</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Code of Ethics</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Legal</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Privacy and Cookie Policy</a></li>
              <li><a href="#" className="text-light text-decoration-underline">COOKIE SETTINGS</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Corporate Information</a></li>
              <li><a href="#" className="text-light text-decoration-underline">Accessibility Statement</a></li>
            </ul>
          </div>

          <div className="col-md-3 mb-3">
            <h6 className="text-uppercase fw-bold small">SIGN UP FOR LOOM UPDATES</h6>
            <p className="small">
              By entering your email address below, you consent to receiving our newsletter with access to our
              latest collections, events and initiatives. More details on this are provided in our
              <a href="#" className="text-light text-decoration-underline"> Privacy Policy</a>.
            </p>
            <form>
              <input type="email" className="form-control mb-2" placeholder="Email" />
            </form>
            <p>Country/Region</p>
            <a href="#" className="text-light text-decoration-underline">Nepal - South Asia</a>
          </div>

          <div className="col-md-3 text-center">
            {/* Company Logos */}
            <Image src="/assets/main_logo.png" alt="Loom Essence" width={60} height={60} className="mb-2" />
            <p className="small">Loom Essence</p>
            <Image src="/assets/main_logo.png" alt="Company Logo" width={60} height={60} className="mb-2" />
            <p className="small">Company Logo</p>
            <Image src="/assets/main_logo.png" alt="Company Logo" width={60} height={60} className="mb-2" />
            <p className="small">Company Logo</p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center pt-4 border-top mt-4 small">
          © 2025 Loom Essence - S & K. - All rights reserved. LICENCE # 3343/S/1876 and 9678/K/1244
        </div>
      </div>
    </footer>
  );
};

export default Footer;
