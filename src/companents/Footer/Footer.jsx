import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div className='con2'>
      <div><p>Biz haqimizda</p>
      <p className='pfoter'>Topshirish punktlari</p>
      <p className='pfoter'>Vakansiyalar</p></div>

      <div><p>Foydalanuvchilarga</p>
      <p className='pfoter'>Biz bilan bogʻlanish</p>
      <p className='pfoter'>Savol-Javob</p></div>

      <div><p>Tadbirkorlarga</p>
      <p className='pfoter'>Uzumda soting</p>
      <p className='pfoter'>Sotuvchi kabinetiga kirish</p></div>
    
      <div>
        <p>Ilovani yuklab olish</p>
       <p> <div className='pd'><img className='apple' src="data:image/png;base64,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" alt="" /><p >AppStore</p><img src="public/SVG.png" alt="" /><p>Google Play</p> </div></p>
        <p>Uzum ijtimoiy tarmoqlarda</p>
        <div className='img'><img src="Link → SVG.png" alt="" /><img src="Link → SVG (1).png" alt="" /><img src="Link → SVG (2).png" alt="" /><img src="Link → SVG (3).png" alt="" /></div>
       
      </div>
    </div>
  )
}

export default Footer