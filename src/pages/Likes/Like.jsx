// import React from 'react';
// import { useSelector } from 'react-redux';
// import "./Likes.css";

// const Like = () => {
//   const likedItems = useSelector((state) => state.wishlist.items); // Redux store'dan saralangan mahsulotlar

//   return (
//     <div className='div-like'>
//       {likedItems.length > 0 ? (
//         <>
//           <h2 className='h2-like'>Saralangan Mahsulotlar</h2>
//           <div className="liked-products">
//             {likedItems.map(item => (
//               <div key={item.id} className="liked-product">
//                 <img src={item.url[0]} alt={item.title} />
//                 <h3>{item.title}</h3>
//                 <p>{item.price} so'm</p>
//               </div>
//             ))}
//           </div>
//         </>
//       ) : (
//         <div>
//           <img src="https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
//           <h2 className='h2-like'>Sizga yoqqanini qoʻshing</h2>
//           <p className='p-like'>Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Like;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice"; // Redux action
import { addToLiked, removeFromLiked } from "../../redux/wishiesSlice"; // Redux actions
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import "./Likes.css"; // `Product.css`ni import qilamiz
import { Link } from "react-router-dom";
import Footer from '../../companents/Footer/Footer'

const Like = ({data}) => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.wishlist.items); // Yoqtirgan mahsulotlar
  const [notification, setNotification] = useState(false); // Notification holati

  // Mahsulotni savatga qo'shish
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    // Agar mahsulot yoqtirilgan bo'lsa, uni liked ro'yxatidan olib tashlash
    if (likedItems.some((likedItem) => likedItem.id === item.id)) {
      dispatch(removeFromLiked(item)); // Yo'qtirilgan mahsulotni olib tashlash
    }
    setNotification(true); // Mahsulot qo'shilganini bildirish
    setTimeout(() => setNotification(false), 3000); // 3 soniyadan keyin bildirishnomani yopish
  };

  // Mahsulotni yoqtirish yoki olib tashlash
  const handleLike = (item) => {
    const isLiked = likedItems.some((likedItem) => likedItem.id === item.id);
    
    if (isLiked) {
      dispatch(removeFromLiked(item)); // Agar yoqtirilgan bo'lsa, olib tashlash
    } else {
      dispatch(addToLiked(item)); // Aks holda, yoqtirish
    }
  };

  return (
    <>
    <div className="product">
      {/* Bildirishnoma */}
      {notification && (
        <div className="notification">
          Mahsulot savatga qo'shildi ✅
        </div>
      )}

      <div className="container">
        <h1 className="product-title">Yoqtirgan Mahsulotlar:</h1>
        <div className="product-wrapper">
          {likedItems.map((item, index) => (
            <div key={index} className="card">
              <div className="card-image">
              <Link to={`/product/${item.price}`}>
                  <img src={item.url[0]} alt={item.title} />
                </Link>
                {/* Yoqtirish ikonkasi */}
                <FaHeart
                  className={`like-icon ${likedItems.some(likedItem => likedItem.id === item.id) ? "liked" : ""}`}
                  onClick={() => handleLike(item)} // Mahsulotni yoqtirish yoki olib tashlash
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <mark>{Math.floor((item.price / 12) * 1.5)} som / oyiga</mark>
                <div className="card-price">
                  <div className="card-price-item">
                    <del>{(item.price * 1.2).toFixed(0)}</del>
                    <h3>{item.price}</h3>
                  </div>
                  <button
                    className="card-btn-basket"
                    onClick={() => handleAddToCart(item)} // Mahsulotni savatga qo'shish
                  >
                    <SlBasket />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Like;

