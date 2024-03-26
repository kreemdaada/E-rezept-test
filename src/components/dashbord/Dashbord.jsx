import React from 'react';
import DoctorDashboard from './DoctorDashbord';
import PharmacyDashbord from './PharmacyDashbord'
const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user.type === 'doctor') {
    return <DoctorDashboard />;
  } else if (user.type === 'pharmacy') {
    return <PharmacyDashbord />;
  } else {
    return <div>Unbekannter Benutzertyp</div>;
  }
};

export default Dashboard;
