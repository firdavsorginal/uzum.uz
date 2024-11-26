import React from 'react'
import navbarLogo from "../../assets/uzum.png"
import { CiSearch } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
const Navbarmidl = () => {
  return (
    <div className='navbar'>
      <div className='container'>
        <div className='navbar-wrapper'>
          <a className='navbar-logo-Link' href="">
            <img className='navbar-logo' src={navbarLogo} alt="" />
          </a>
          <button className='navbar-category-btn'>
            <AiFillCalendar/>
            <span>Kategrory</span>
          </button>
          
          <div className='navbar-search'>
            <input type="text" placeholder='qidirish' />
            <button>
              <CiSearch />
            </button>
          </div>

          <div className="navbar-collection">
          <a className='navbar-collection-item ' href="">
          <CiUser />
          <span>Kirish</span>
          </a>
          <a  className='navbar-collection-item ' href="">
          <CiHeart />
          <span>Saralangan</span>
          </a>
          <a  className='navbar-collection-item ' href="">
            <SlBasket />
            <span>Savat</span>
          </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbarmidl