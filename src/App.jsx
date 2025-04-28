import React from 'react'
import Home from './Pages/Home'
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <div className='w-full bg-[#000] relative '>
    <Navbar/>
      <div className=''>
       <Home/>
      </div>
    </div>

  )
}

export default App