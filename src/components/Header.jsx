// import React from 'react';
import {CiShoppingTag} from 'react-icons/ci'

import { AiFillShop } from 'react-icons/ai'

const Header = () => {
  return (
<div className="head-co">
<div className="header-wrapper">
      <div className="logo">
        <p>SHOPit</p>
        <CiShoppingTag/>

      </div>
      <div className="header-nav">
         <div>
         <ul>
            <li>Home</li>
            <li>Pages</li>
            <li>Shop</li>
            <li>Element</li>
            <li>Blog</li>
         </ul>
         </div>

         <div className='header-ico-shop'>
         <AiFillShop/>
         <img src="https://i.pinimg.com/564x/e0/00/9d/e0009d4abbedae2ab9c3f993896ed182.jpg" alt="" />
           
         </div>
      </div>
    </div>
</div>
  )
}

export default Header
