import React from "react";
import mylogo from '../images/logo-color.png';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter.png';
import linkedin from '../images/linkedin.png';

function Footer() {
  return (
    <div className="w-full bg-[#181b1b] text-white font-serif flex flex-col justify-center items-center">
      <div className="grid grid-cols-2 md:grid-cols-4 pl-5 pr-5 pb-10 pt-10 ">
        <div>
            <img src={mylogo} className="h-[200px] w-[200px]" alt="" />
        </div>
        <div>
          <h1 className="font-semibold text-xl ">download</h1>
          <p>Windows App</p>
          <p>Mac App</p>
          <p>Linux App</p>
          <p>Android App</p>
          <h1 className="font-semibold text-xl">Services</h1>
          <p>Customer Support</p>
          <p>Delivery and Shipping</p>
        </div>
        <div>
        <h1 className="font-semibold text-xl ">Product</h1>
          <p>Size Guide</p>
          <p>Product Care</p>
          <p>Material Information</p>
          <p>Warranty</p>
          <h1 className="font-semibold text-xl">Company</h1>
          <p>Terms & condition</p>
          <p>Privacy policy</p>
        </div>
        <div>
        <h1 className="font-semibold text-xl">Get in touch</h1>
        <div className="flex mb-2">
          <a href="https://web.facebook.com/Rakibul59900"><img src={facebook} className="h-[30px] w-[30px] " alt="" /></a>
          <img src={twitter} alt="" className="h-[30px] w-[30px] text-white " />
          <img src={linkedin} alt="" className="h-[30px] w-[30px] " />
        </div>
          <p className="text-[#000000]">Subscribe</p>
          <div>
            <input type="text" name="" id="" className="rounded-2xl h-[30px] w-[150px] text-black p-2 mb-2" placeholder="Enter email address" />
            <button className="bg-[#554dd1] rounded-2xl h-[30px] w-[90px] ml-2 p-1">Subscribe</button>
          </div>
        </div>
      </div>
        <hr className="w-[75%] text-[#434c58] " />
        <div className="p-5">
        <p>&copy;2024 Rakibul Alam. All rights reserved.</p>
        </div>
    </div>
  );
}

export default Footer;
