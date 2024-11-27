import { useState } from 'react'
import './App.css'
import Navbar from './companents/Navbar/Navbarmain'
import Banner from './companents/Banner/Banner'
import Kirish from './pages/Singin/Singin'
import Saralangan from './pages/Likes/Like'
import Savat from './pages/Savat/Savat'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Footer from './companents/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    
    <Router>
      
    <Navbar />
    
   {/* < Footer/> */}
   <Routes>
        <Route path="/Singin" element={<Kirish />} />
        <Route path="/Likes" element={<Saralangan />} />
        <Route path="/Savat" element={<Savat />} />
        <Route path="/"  />
      </Routes>
      <Banner />
    </Router>
  )
}

export default App
