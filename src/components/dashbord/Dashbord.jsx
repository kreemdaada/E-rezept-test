import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import DoctorDashboard from './DoctorDashbord';
import PharmacyDashbord from './PharmacyDashbord';

const Dashboard = () => {
  // Definiere den initialen Benutzertyp als 'unknown' (unbekannt)
  const [userType, setUserType] = useState('unknown');

  // Simuliere den Benutzerlogin und aktualisiere den Benutzertyp entsprechend
  useEffect(() => {
   
    // Für dieses Beispiel setzen wir den Benutzertyp einfach statisch auf 'doctor'
    setUserType('doctor');
  }, []); // Diese Effektfunktion wird nur einmal beim ersten Rendern ausgeführt

  return (
    <Route path="/dashbord">
      {/* Basierend auf dem Benutzertyp wird die entsprechende Dashboard-Komponente gerendert */}
      {userType === 'doctor' ? <DoctorDashboard /> : userType === 'pharmacy' ? <PharmacyDashbord /> : <div>Unbekannter Benutzertyp</div>}
    </Route>
  );
};

export default Dashboard;
