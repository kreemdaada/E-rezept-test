import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorDashbord from './DoctorDashbord';
import PharmacyDashbord from './PharmacyDashbord';

const Dashbord = () => {
  const [userType, setUserType] = useState('unknown');
  const navigate = useNavigate();

  useEffect(() => {
    const simulateLogin = () => {
      setTimeout(() => {
        setUserType('doctor');
      }, 2000);
    };

    simulateLogin();
  }, []);

  // eslint-disable-next-line no-unused-vars
  const ToLoginPage = () => {
    navigate('/backend/doctor/login');
  };

  if (userType !== 'doctor' && userType !== 'pharmacy') {
    throw new Error('Unbekannter Benutzertyp');
  }

  return (
    <Routes>
      <Route path="/dashbord/doctor" element={userType === 'doctor' ? <DoctorDashbord /> : null} />
      <Route path="/dashbord/pharmacy" element={userType === 'pharmacy' ? <PharmacyDashbord /> : null} />
    </Routes>
  );
};

export default Dashbord;
