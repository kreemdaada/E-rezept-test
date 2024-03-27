import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/about';
import Navigation from './components/Navbar'; 
import DoctorRegister from './components/auth/DoctorRegiester';
import PharmacyRegister from './components/auth/PharmacyRegister';
import DoctorLogin from './components/auth/DoctorLogin';
import PharmacyLogin from './components/auth/PharmacyLogin';
import DoctorDashboard from './components/doctordashboard/DoctorDashboard'; 
import VersicherungPatientenForm from './components/versicherung_patienten/VersicherungPatientenForm';
import RezeptAnlegen from './components/rezeptanlegen/RezeptAnlegen';
import QRCodeGenerator from './components/QRCodePage';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/backend/doctor/register" element={<DoctorRegister />} />
          <Route path="/backend/pharmacy/register" element={<PharmacyRegister />} />
          <Route path="/backend/doctor/login" element={<DoctorLogin />} />
          <Route path="/backend/pharmacy/login" element={<PharmacyLogin />} />
          {/* Füge die Route für das DoctorDashboard hinzu */}
          <Route path="/dashboard" element={<DoctorDashboard />} />
          <Route path="/versicherung_patienten" element={<VersicherungPatientenForm />} />
          <Route path="/rezept_anlegen" element={<RezeptAnlegen />} />
          {/* Übergebe die tatsächlichen Komponenten an QRCodePage */}
          <Route path="/qrcode" element={<QRCodeGenerator />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
