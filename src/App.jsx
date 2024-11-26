import { useState } from 'react'
import './App.css'
import Navbar from './companents/Navbar/Navbarmain'
// import Footer from './companents/Footer/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
   {/* < Footer/> */}
    </>
  )
}

export default App
