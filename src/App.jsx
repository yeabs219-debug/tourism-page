
import { Button } from '@/components/ui/button'
import Hero from './components/sections/hero'
import Navbar from './components/layout/navbar'
import Destinations from './components/sections/destinations'
import WhyVisit from './components/sections/whyvisit'
import Footer from './components/layout/footer'
import './App.css'
import { Route ,BrowserRouter, Routes } from 'react-router-dom'
import ScrollToTop from './utility/scrolltotop'
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginModal from './components/loginmodal/loginmodal'

function App() {
  const location = useLocation();

  
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
useEffect(() => {
  setShowLogin(false);
}, [location]);
 
  return (
    
    <>
    <Navbar isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} />
    <ScrollToTop/>
      <Routes>
        <Route path='/' element={<Hero isLoggedIn={isLoggedIn} setShowLogin={setShowLogin} />}/>
        <Route path='/destinations' element={<Destinations/>}/>
        <Route path='/whyvisit' element={<WhyVisit/>}/>
        <Route path='/footer' element={<Footer/>}/>
      </Routes>
      <Footer/>     
  <LoginModal  show={showLogin}  onClose={() => setShowLogin(false)} setIsLoggedIn={setIsLoggedIn}
/>
    </>
    
  )
}

export default App
