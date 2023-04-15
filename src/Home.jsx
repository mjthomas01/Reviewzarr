import React from 'react'
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import Landing from './components/Landing';
import Footer from './components/footer';
import Features from './components/Features';
export default function Home() {
  return (
    <>
    <Navbar />
    <Landing />
    <div style={{margin:"50px"}}>
    <Features />
    </div>
    
    <div style={{height: "60vh"}} className="d-flex flex-column align-items-center justify-content-center">
    <div>
    <Search />
      
    </div>
    </div>
    <Footer />
    </>
  )
}
