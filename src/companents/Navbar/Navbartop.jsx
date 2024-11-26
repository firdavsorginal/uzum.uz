import React from 'react'
import navbarLogo from "../../assets/uzum.png"
const Navbartop = () => {
  return (
   <>
    <div className='con del'>
<div className='pad'><p>Shahar:</p><b>Toshkent</b><b className='b1'>Topshirish punktlari</b></div>
<div><p className='p2'>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p></div>
<div className='pad1'><p className='p1'>Savol-javoblar</p><p className='p1'>Buyurtmalarim</p><img src="span.icon__selected-before.png" alt="" /><b>Оʻzbekcha</b></div>

    </div>
     <div className='nom'>
    <img src={navbarLogo} alt="" />
    <button>O'RNATISH</button>
    </div>
   </>
  )
}

export default Navbartop
