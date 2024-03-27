import React from 'react';

const DoctorDashboard = () => {
    return (
        <div className="container mt-4">
          <h1>Willkommen, Arzt!</h1>
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title">Versicherungsinformationen und Patientendaten</h2>
              <p className="card-text">Hier können Sie Versicherungsinformationen und Patientendaten eingeben.</p>
              <a href="/versicherung_patienten" className="btn btn-primary">Zur Seite für Versicherungsinformationen und Patientendaten</a>
            </div>
          </div>
          <div className="card mt-4">
            <div className="card-body">
              <h2 className="card-title">Rezept anlegen</h2>
              <p className="card-text">Hier können Sie ein neues Rezept anlegen.</p>
              <a href="/rezept_anlegen" className="btn btn-primary">Zur Seite für das Anlegen von Rezepten</a>
            </div>
          </div>
        </div>
      );
    };
export default DoctorDashboard;
