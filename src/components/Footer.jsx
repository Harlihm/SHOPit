import { FaFacebook, FaHome, FaInstagram, FaTwitter } from "react-icons/Fa"
import {ImGithub} from 'react-icons/im';
import{ BsPaypal, BsPersonFill } from 'react-icons/bs'
import { MdLocationOn } from 'react-icons/md'
import {CiShoppingTag} from 'react-icons/ci'


const Footer = () => {
  return (
    <div className="footer-wrapper">
    <div className="footer-content">
    <div className="fa-logo">
      <div className="logo">
       <p> <b>SHOPit</b> </p>
        <CiShoppingTag/>
      </div>
      <div className="ra-ico">
            <ImGithub/>
            <FaFacebook/>
            <FaTwitter/>
            <FaInstagram/>
        </div>
      </div>

      <div className="locate-us foot">
              <h2>locate us</h2>
              <p>address</p>
              <p>Mobile: 2349072865608</p>
              <p>Phone: 2349072865608</p>
              <p>e-mail: harlihm1@gmail.com</p>
      </div>

      <div className="profile foot">
        <h2>Profile</h2>
        <p><BsPersonFill className="p-fot"/> My account</p>
        <p><BsPaypal className="p-fot"/> check out</p>
        <p><FaHome className="p-fot"/>order tracking</p>
        <p><MdLocationOn className="p-fot"/> help & support</p>

      </div>
      <div className="subscribe">
<input type="text"  placeholder="e-mail"/>
<button>Subscribe</button>
        </div>
    </div>
    </div>
  )
}

export default Footer
