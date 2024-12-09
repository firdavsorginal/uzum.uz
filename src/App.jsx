// import { useState } from 'react'
// import './App.css'
// import Navbar from './companents/Navbar/Navbarmain'
// import Banner from './companents/Banner/Banner'
// import Kirish from './pages/Singin/Singin'
// import Saralangan from './pages/Likes/Like'
// import Savat from './pages/Savat/Savat'
// import Home from './pages/Home/Home'


// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import SingleRoute from './pages/SingilRoute/SingilRoute'
// import Footer from './companents/Footer/Footer'
// function App() {


//   return (
    
//   <>
//     <Navbar />
//     <Routes>
  

//         <Route path="/Singin" element={<Kirish />} />
//         <Route path="/Likes" element={<Saralangan />} />
//         <Route path="/Savat" element={<Savat />} />
//         <Route path="/" element={<Home />}  />
//         <Route path="/product/:id" element={<SingleRoute />} />

//         </Routes>
//       {/* <Banner /> */}
// {/* < Footer/> */}
//       </>
//   )
// }

// export default App
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react"; // PersistGate import qilindi
import { store, persistor } from "./redux/store"; // Store va Persistor

import Navbar from "./companents/Navbar/Navbarmain";
import Kirish from "./pages/Singin/Singin";
import Saralangan from "./pages/Likes/Like";
import Savat from "./pages/Savat/Savat";
import Home from "./pages/Home/Home";
import SingleRoute from "./pages/SingilRoute/SingilRoute";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <Router> */}
          <Navbar />
          <Routes>
            <Route path="/Singin" element={<Kirish />} />
            <Route path="/Likes" element={<Saralangan />} />
            <Route path="/Savat" element={<Savat />} />
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<SingleRoute />} />
          </Routes>
        {/* </Router> */}
      </PersistGate>
    </Provider>
  );
}

export default App;
