import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'
import Page1 from './Components/Page1/Page1'
import Section1 from './sections/Section1'
import Section2 from './sections/Section2'
import Section3 from './sections/Section3'



function App() {
  

  return (
    <div className="">
      {/* Page */}
      <Page1/>
      {/* Section 1 */}
      <Section1/>
      {/* Section 2 */}
      <Section2/>
      {/* Section 3 */}
      <Section3/>
      {/* Footer */}
      <Footer/>

      {/* NAVBAR */}
      {/* NAVBAR */}
    </div>
    
  )
}

export default App
