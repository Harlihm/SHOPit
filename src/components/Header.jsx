// import React from 'react';
import { CiShoppingTag } from "react-icons/ci";
import { Link } from "react-router-dom";
import { AiOutlineShopping } from "react-icons/ai";
import { useSelector } from "react-redux";
import {FiMenu} from "react-icons/fi"
import { MdClose } from "react-icons/md"
import { useState } from "react";


const Header = () => {
  const productData = useSelector((state) => state.shopit.productData);
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <div className="head-co">
      <div className="header-wrapper">
        <Link style={{ textDecoration: "none", color: "black" }} to="/">
          <div className="logo">
            <p>SHOPit</p>
            <CiShoppingTag />
          </div>
        </Link>
        <div>
         
        </div>
       
        <div className="navbar">
          <div className={`menu-nav ${navbarOpen ? ' show-menu' : ''}`}>
    
            <ul>
              <li>Home</li>
              <li>Pages</li>
              <li>Shop</li>
              <li>Element</li>
              <li>Blog</li>
            </ul>
          
          </div>
      

          
        </div>
        <div className="header-ico-shop">
            <Link style={{ textDecoration: "none", color: "black" }} to="/cart">
              <span style={{ position: "relative" }}>
                <AiOutlineShopping />
                <span
                  style={{
                    position: "absolute",
                    fontSize: "20px",
                    left: "49px",
                    bottom: "20px",
                  }}
                >
                  {productData.length}
                </span>
              </span>
            </Link>
            <Link to="/login">
              <img
                className="pfp"
                src="https://i.pinimg.com/564x/e0/00/9d/e0009d4abbedae2ab9c3f993896ed182.jpg"
                alt=""
              />
            </Link>
            <button className="toggle"
    onClick={() => setNavbarOpen((prev) => !prev)}>
      {navbarOpen ? <MdClose /> : <FiMenu/>}
      </button>
          </div>
      </div>
    </div>
  );
};

export default Header;
