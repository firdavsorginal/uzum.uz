import React from 'react'
import Navbartop from './Navbartop'
import Navbarmidl from './Navbarmidl'
import Navbarbottom from './Navbarbttom'
import "./Navbar.css"
const Navbarmain = () => {
  return (
    <div className='container1'>
<Navbartop />

<Navbarmidl />
<Navbarbottom />

    </div>
  )
}

export default Navbarmain