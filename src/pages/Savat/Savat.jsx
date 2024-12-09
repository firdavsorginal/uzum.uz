import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/cartSlice';
import { Link } from 'react-router-dom';
import './Savat.css';
import Product from '../../companents/Product/Product'
import Footer from '../../companents/Footer/Footer'

const Savat = ({data}) => {
  const cartItems = useSelector((state) => state.cart.items); // Redux store'dan savatdagi mahsulotlar
  const dispatch = useDispatch();

  // Mahsulotni savatdan o'chirish
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  // Mahsulot miqdorini oshirish
  const handleIncreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, quantity: 1 }));
  };

  // Mahsulot miqdorini kamaytirish
  const handleDecreaseQuantity = (id) => {
    dispatch(updateQuantity({ id, quantity: -1 }));
  };

  // Jami narxni hisoblash
  const totalPrice = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);

  // Maksimal narx
  const maxPrice = 1000000;
  // Progress chizig'ining foizini hisoblash
  const progressPercentage = (totalPrice / maxPrice) * 100;
  const progressWidth = progressPercentage > 100 ? 100 : progressPercentage;

  // Raqamni som formatida ajratish uchun yordamchi funksiya
  const formatPrice = (price) => {
    return price.toLocaleString('uz-UZ'); // Uzbek formatida raqamni ajratib ko'rsatish
  };

  return (
    <>
    <div className="cart-container container">
      <div className="cart-content">
        {cartItems.length === 0 ? (
          <div className="div-savat">
            <img
              src="https://uzum.uz/static/img/shopocat.490a4a1.png"
              alt="Empty cart"
              className="empty-cart-image"
            />
            <h2 className="h2-savat">Savatingiz hozircha bo‘sh</h2>
            <p className="p-savat">
              Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz
              yoki to‘plamlarni ko‘rishingiz mumkin
            </p>
            <Link to="/">
              <button className="button-savat">Bosh sahifa</button>
            </Link>
          </div>
        ) : (
          <>
            <h2 className="cart-title">Savatdagi mahsulotlar</h2>
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <Link to={`/product/${item.price}`}>
                    <img
                      src={item.url[0]}
                      alt={item.title}
                      className="cart-item-image"
                    />
                  </Link>
                  <div className="cart-item-details">
                    <h3 className="cart-item-title">{item.title}</h3>
                    <p className="cart-item-price">{formatPrice(item.price)} so'm</p>
                    <div className="cart-item-quantity">
                      <button onClick={() => handleDecreaseQuantity(item.id)}>-</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => handleIncreaseQuantity(item.id)}>+</button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.id)}
                      className="remove-item-button"
                    >
                      O'chirish
                    </button>
                  </div>
                  <div className="cart-item-total">
                    {formatPrice(item.price * item.quantity)} so'm
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Buyurtma xulosasi faqat mahsulotlar bor bo'lsa ko'rinadi */}
      {cartItems.length > 0 && (
        <>
       <div className="order-summary-container">
  <div className="order-summary">
    <h3>Buyurtmalaringiz</h3>
    <p>
      Jami mahsulotlar soni: <strong>{cartItems.reduce((total, item) => total + item.quantity, 0)}</strong>
    </p>
    <p>
      Jami summa: <strong>{formatPrice(totalPrice)} so'm</strong>
    </p>
    <button className="order-button">Rasmiylashtirish</button>
  </div>

  <div className="new-order-summary">
    <h2>Buyurtmalarni topshirish punktiga bepul yetkazib beramiz</h2>
    {totalPrice < maxPrice && (
      <p className="free-shipping">
        Kuryer orqali bepul yetkazishgacha: {formatPrice(maxPrice - totalPrice)} so'm qoldi
      </p>
    )}
    <div className="progress-container">
      <div className="progress-bar" style={{ width: `${progressWidth}%` }}></div>
    </div>
    {totalPrice >= maxPrice && (
      <p className="no-delivery-text">Bepul yetkazib berishga erishildi!</p>
    )}
  </div>
</div>

        </>
      )}
    </div>
 <Product data={data}/>
 <Footer/>
 </>
  );
};

export default Savat;



// // export default Savat
// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { removeFromCart } from '../../redux/cartSlice';
// import './Savat.css';

// const Savat = () => {
//   const cartItems = useSelector((state) => state.cart.items); // Redux store'dan savatdagi mahsulotlar
//   const dispatch = useDispatch();

//   const handleRemoveFromCart = (id) => {
//     dispatch(removeFromCart(id));
//   };

//   return (
//     <div className="cart-container container">
//       {cartItems.length === 0 ? (
//         <>
//           <img src="https://uzum.uz/static/img/shopocat.490a4a1.png" alt="Empty cart" className="empty-cart-image" />
//           <h2 className="empty-cart-title">Savatingiz hozircha bo‘sh</h2>
//           <p className="empty-cart-description">
//             Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali topishingiz
//             yoki to‘plamlarni ko‘rishingiz mumkin
//           </p>
//         </>
//       ) : (
//         <>
//           <h2 className="cart-title">Savatdagi mahsulotlar</h2>
//           <div className="cart-items">
//             {cartItems.map((item) => (
//               <div key={item.id} className="cart-item">
//                 <img src={item.url[0]} alt={item.title} className="cart-item-image" />
//                 <div className="cart-item-details">
//                   <h3 className="cart-item-title">{item.title}</h3>
//                   <p className="cart-item-price">{item.price} som</p>
//                   <button onClick={() => handleRemoveFromCart(item.id)} className="remove-item-button">
//                     O'chirish
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Savat;

