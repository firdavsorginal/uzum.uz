import React from 'react';
import './Singin.css';

const LoginForm = () => {
  return (
    <div className="container12">
      <div className="form">
        <p className='pip'>Telefon raqamini kiriting</p>
        <p className='pip2'>Tasdiqlash kodini SMS orqali yuboramiz</p>
        <input type="text" placeholder="+998 000 00 00" className="input" />
        <button className="button">Kodni olish</button>
        <p className="note">
          Avtotizatsiyadan o'tish orqali siz <a> shaxsiy ma'lumotlarni qayta ishlash siyosatiga rozilik
          bildirasiz.</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
