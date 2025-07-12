import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import TheMain from './the-main/TheMain';
import Contacts from './contacts/Contacts';
import Bron from './bron/Bron';
import AboutUs from './about-us/AboutUs';
import House from './house/House'; // Ensure this path is correct and the component exists
import PersonalOffice from './personal-office/PersonalOffice';
import Navigation from './components/Navigation';


function App() {
  return (
    <Router>
    <Navigation /> 

      <Routes>
        
        
        <Route path="/the-main" element={<TheMain />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/bron" element={<Bron />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/house" element={<House />} />
        <Route path="/personal-office" element={<PersonalOffice />} />
        <Route path="NotFound" element={<h1>Сторінку не знайдено</h1>} />
      </Routes>
    </Router>
        
  );
}

export default App;
