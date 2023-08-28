import React from 'react'
import { FaCopyright } from 'react-icons/fa6'

const Footer = () => {

  return (
    <div id="footer">
        <div className="footer-container">
            <ul>
                <li className="list">Account Settings</li>
                <li>Forgot password?</li>
                <li>Flash sale</li>
                <li>Track your order</li>
                <li>Payment options</li>
                <li>Shipping and delivery</li>
            </ul>
            <ul>
                <li className="list">About Us</li>
                <li>Careers</li>
                <li>Blogs</li>
                <li>Terms and Conditions</li>
                <li>Privacy policy</li>
            </ul>
            <ul>
                <li className="list">Contact Us</li>
                <li>Chat with us</li>
                <li>FAQ</li>
                <li>Help desk</li>
            </ul>
            <ul>
                <li className="list">Follow our socials</li>
                <li>Instagram</li>
                <li>X</li>
                <li>Meta</li>
            </ul>
        </div>
        <p id="copyright"><FaCopyright icon="copyright"/>Copyright 2023 | All rights reserved </p>
    </div>
  )
}

export default Footer;