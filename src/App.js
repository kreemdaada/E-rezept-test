import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/about/about';
import Navigation from './components/Navbar'; 
import DoctorRegister from './components/auth/DoctorRegiester';
import PharmacyRegister from './components/auth/PharmacyRegister';
import DoctorLogin from './components/auth/DoctorLogin';
import PharmacyLogin from './components/auth/PharmacyLogin';
import Dashboard from './components/dashbord/Dashbord';
const App = () => {
  return (
    <Router>
      <div>
        
        <Navigation /> {/* Fügen Sie die Navigation-Komponente hier ein */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/backend/doctor/register" element={<DoctorRegister />} />
          <Route path="/backend/pharmacy/register" element={<PharmacyRegister />} />
          <Route path="/backend/doctor/login" element={<DoctorLogin />} />
          <Route path="/backend/pharmacy/login" element={<PharmacyLogin />} />
          <Route path="/dashbord" component={<Dashboard/>} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
