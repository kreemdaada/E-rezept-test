import React, { useState, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DoctorDashboard from './DoctorDashboard';
import PharmacyDashboard from './PharmacyDashboard';

const Dashboard = () => {
  const [userType, setUserType] = useState('unknown');
  const navigate = useNavigate();

  useEffect(() => {
    const simulateLogin = () => {
      setTimeout(() => {
        setUserType('doctor'); // Ändern Sie hier 'doctor' nach Bedarf
      }, 2000);
    };

    simulateLogin();
  }, []);

  useEffect(() => {
    if (userType !== 'unknown') {
      navigate(`/dashboard/${userType}`);
    }
  }, [userType, navigate]);

  return (
    <Routes>
      <Route path="/dashboard/doctor" element={userType === 'doctor' ? <DoctorDashboard /> : null} />
      <Route path="/dashboard/pharmacy" element={userType === 'pharmacy' ? <PharmacyDashboard /> : null} />
    </Routes>
  );
};

export default Dashboard;
