import React from 'react'
import { Link } from 'react-router-dom';
import "./Savat.css"
const Savat = () => {
  return (
    <div className='div-savat'>
      <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="" />
      <h2 className='h2-savat'>Savatingiz hozircha bo‘sh</h2>
      <p className='p-savat'>Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz yoki to‘plamlarni ko‘rishingiz mumkin</p>
      <Link to="/"> <button className='button-savat'>Bosh sahifa</button></Link>
    </div>
  )
}

export default Savat