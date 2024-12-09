// import React from "react";
// import { useParams } from "react-router-dom";
// import { DATA } from "../../mock/index";
// import { SlBasket } from "react-icons/sl";
// import { CgCheckR } from "react-icons/cg";
// import { CgClipboard } from "react-icons/cg";
// import './SingilRoute.css'; 
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { DATA } from "../../mock/index";
import { SlBasket } from "react-icons/sl";
import { CgCheckR } from "react-icons/cg";
import { CgClipboard } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice"; // Redux aksiyasini import qilish
import './SingilRoute.css';

const SingleRoute = () => {
  const params = useParams();
  const item = DATA.find((el) => el.price == params.id);
  const dispatch = useDispatch(); // Redux dispatch funksiyasini olish

  // Xabarni ko'rsatish uchun state
  const [isAddedToCart, setIsAddedToCart] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(item)); // Mahsulotni savatga qo'shish
    setIsAddedToCart(true); // Xabarni ko'rsatish
    setTimeout(() => {
      setIsAddedToCart(false); // 3 soniya o‘tgach xabarni yashirish
    }, 3000);
  };

  return (
    <div className="single-route-container container">
      <div className="single-route-content">
        <h1 className="single-route-title">{item.title}</h1>
        <p> ⭐⭐⭐⭐⭐ 5 (2045 sharh) 62 fotosurat +18500 buyurtma</p>
        <img className="single-route-img" src={item.url[0]} alt={item.title} />
        <p>5 ⭐⭐⭐⭐⭐ 2045 sharh</p>
        <div className="single-route-details">
          <p className="single-route-desc">{item.desc}</p>
          <h3 className="single-route-price">Narx: {item.price} so'm</h3>
        </div>
      </div>

      <div className="right">
        <div className="con-min">
          <div className="df">
            <h1 className="nn">{item.price} so'm</h1>
            <del>{item.price - 25000} so'm</del>
            <mark>-28%</mark>
          </div>
          <mark>Katta savdo</mark>
          <button className="button00">
            <mark>Oyiga {Math.floor((item.price / 12) * 1.5)} so'mdan</mark>
            <p className="po">muddatli to'lov</p>
            <p className="po2">></p>
          </button>
          <div className="buttt">
            <button className="button01">
              <h2>1 klikda xarid qilish</h2>
            </button>
            <button className="button02">
              <SlBasket />
            </button>
          </div>
          <button className="button03" onClick={handleAddToCart}>
            SAVATGA QO'SHISH
          </button>
          <div className="icon00">
            <CgCheckR /> Sotuvda 25 dona bor
          </div>
          <div className="icon00">
            <CgClipboard />
            Bu haftada 2 kishi sotib oldi
          </div>
        </div>
      </div>

      {/* Mahsulot savatga qo'shildi xabari */}
      {isAddedToCart && (
        <div className="added-to-cart-notification">
          Mahsulot savatga qo'shildi
        </div>
      )}
    </div>
  );
};

export default SingleRoute;

// const SingleRoute = () => {
//   const params = useParams();
//   const item = DATA.find((el) => el.price == params.id);

//   return (
//     <div className="single-route-container container">

//       <div className="single-route-content">
//           <h1 className="single-route-title">{item.title}</h1>
//           <p>  ⭐⭐⭐⭐⭐ 5 (2045 sharh) 
//  62 fotosurat
//  +18500 buyurtma</p>
//         <img className="single-route-img" src={item.url[0]} alt={item.title} />
//         <p>5 ⭐⭐⭐⭐⭐
//         2045  sharh</p>
//         <div className="single-route-details">
//           <p className="single-route-desc">{item.desc}</p>
//           <h3 className="single-route-price">Narx: {item.price} so'm</h3>
//         </div>
//       </div>
//       <div className="right">
//         <div className="con-min">
//        <div className='df'> <h1 className='nn'>{item.price} so'm</h1><del>{item.price - 25000}so'm</del><mark>-28%</mark></div>
//         <mark>Katta savdo</mark>
//         <button className='button00'><mark>Oyiga {Math.floor((item.price / 12) * 1.5)} so'mdan</mark><p className='po'>muddatli to'lov</p><p className='po2'>></p></button>
//         <div className="buttt"><button className='button01'><h2>1 klikda xarid qilish</h2></button> <button className='button02'><SlBasket /></button></div>
//         <button className='button03'>SAVATGA QO'SHISH</button>
//         <div className='icon00'><CgCheckR />Sotuvda 25 dona bor</div>
//         <div className='icon00'><CgClipboard />
//         Bu haftada 2 kishi sotib oldi</div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleRoute;

