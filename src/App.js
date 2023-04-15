
import './App.css';


import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Analyse from './components/Analyse';
import Home from './Home';

function App() {
  return (
    <>


    

        <Routes>
          {/* <Route path="/">
            <Home />
          </Route> */}
          <Route path='/' element={<Home/>} />
          <Route path="/analyse" element={<Analyse />} />
            
          
        </Routes>
    
    
    
    
    
    
    


    
    </>
  );
}

export default App;
