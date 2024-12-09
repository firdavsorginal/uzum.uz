import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import "./Product.css";
import { DATA } from "../../mock/index";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/cartSlice"; // Redux action
import { addToLiked, removeFromLiked } from "../../redux/wishiesSlice"; // Redux actions

const Product = () => {
  const dispatch = useDispatch();
  const likedItems = useSelector((state) => state.wishlist.items); // Redux'dan yoqtirilgan mahsulotlar
  const [notification, setNotification] = useState(false); // Bildirishnoma holati

  // Mahsulotni savatga qo'shish
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    setNotification(true);
    setTimeout(() => setNotification(false), 3000);
  };

  // Mahsulotni yoqtirish yoki yoqtirilganlar ro'yxatidan chiqarish
  const handleLike = (item) => {
    const isLiked = likedItems.some((likedItem) => likedItem.id === item.id);
    if (isLiked) {
      dispatch(removeFromLiked(item.id)); // Yoqtirilgan mahsulotni o'chirish
    } else {
      dispatch(addToLiked(item)); // Yangi mahsulotni qo'shish
    }
  };

  return (
    <div className="product">
      {/* Bildirishnoma */}
      {notification && (
        <div className="notification">Mahsulot savatga qo'shildi ✅</div>
      )}

      <div className="container">
        <h1 className="product-title">Mashhur Mahsulotlar:</h1>
        <div className="product-wrapper">
          {DATA.map((item, index) => (
            <div key={index} className="card">
              <div className="card-image">
                <Link to={`/product/${item.price}`}>
                  <img src={item.url[0]} alt={item.title} />
                </Link>
                {/* Yoqtirish ikonkasi */}
                <FaHeart
                  className={`like-icon ${
                    likedItems.some((likedItem) => likedItem.id === item.id)
                      ? "liked"
                      : ""
                  }`}
                  onClick={() => handleLike(item)}
                />
              </div>
              <div className="card-body">
                <h3 className="card-title">{item.title}</h3>
                <mark>
                  {Math.floor((item.price / 12) * 1.5)} som / oyiga
                </mark>
                <div className="card-price">
                  <div className="card-price-item">
                    <del>{(item.price * 1.2).toFixed(0)}</del>
                    <h3>{item.price}</h3>
                  </div>
                  <button
                    className="card-btn-basket"
                    onClick={() => handleAddToCart(item)}
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
  );
};

export default Product;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { SlBasket } from "react-icons/sl";
// import { FaHeart } from "react-icons/fa";
// import "./Product.css";
// import { DATA } from "../../mock/index";
// import { useDispatch } from "react-redux";
// import { addToCart } from "../../redux/cartSlice"; // Redux action

// const Product = () => {
//   const dispatch = useDispatch();
//   const [notification, setNotification] = useState(false); // Notification holati
//   const [likedItems, setLikedItems] = useState([]); // Yoqtirilgan mahsulotlar

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item)); // Mahsulotni savatga qo'shish
//     setNotification(true); // Mahsulot qo'shilganini bildirish
//     setTimeout(() => setNotification(false), 3000); // 3 soniyadan keyin bildirishnomani yopish
//   };

//   const handleLike = (item) => {
//     // Agar mahsulot allaqachon yoqtirilgan bo'lsa, olib tashlash
//     if (likedItems.includes(item.id)) {
//       setLikedItems(likedItems.filter((id) => id !== item.id));
//     } else {
//       // Yangi mahsulotni yoqtirish
//       setLikedItems([...likedItems, item.id]);
//     }
//   };

//   return (
//     <div className="product">
//       {/* Bildirishnoma */}
//       {notification && (
//         <div className="notification">
//           Mahsulot savatga qo'shildi ✅
//         </div>
//       )}

//       <div className="container">
//         <h1 className="product-title">Mashhur Mahsulotlar:</h1>
//         <div className="product-wrapper">
//           {DATA.map((item, index) => (
//             <div key={index} className="card">
//               <div className="card-image">
//                 <Link to={`/product/${item.price}`}>
//                   <img src={item.url[0]} alt={item.title} />
//                 </Link>
//                 {/* Yoqtirish ikonkasi */}
//                 <FaHeart 
//                   className={`like-icon ${likedItems.includes(item.id) ? "liked" : ""}`}
//                   onClick={() => handleLike(item)} // Mahsulotni yoqtirish
//                 />
//               </div>
//               <div className="card-body">
//                 <h3 className="card-title">{item.title}</h3>
//                 <mark>{Math.floor((item.price / 12) * 1.5)} som / oyiga</mark>
//                 <div className="card-price">
//                   <div className="card-price-item">
//                     <del>{(item.price * 1.2).toFixed(0)}</del>
//                     <h3>{item.price}</h3>
//                   </div>
//                   <button
//                     className="card-btn-basket"
//                     onClick={() => handleAddToCart(item)} // Mahsulotni savatga qo'shish
//                   >
//                     <SlBasket />
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Product;
