import React from 'react'
import { Link } from 'react-router-dom';
import navbarLogo from "../../assets/uzum.png"
import { CiSearch } from "react-icons/ci";
import { AiFillCalendar } from "react-icons/ai";
import { CiUser } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";
import { IoIosHome } from "react-icons/io";
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
          
          <Link className='noll1 navbar-collection-item' to="/">
          <IoIosHome />
        <span>menyu</span>
      </Link>
          <Link className='navbar-collection-item' to="/Singin">
        <CiUser />
        <span>Kirish</span>
      </Link>
      <Link className='navbar-collection-item' to="/Likes">
        <CiHeart />
        <span>Saralangan</span>
      </Link>
      <Link className='navbar-collection-item' to="/Savat">
        <SlBasket />
        <span>Savat</span>
      </Link>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbarmidl