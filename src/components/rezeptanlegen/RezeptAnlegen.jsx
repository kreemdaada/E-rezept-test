import React, { useState } from 'react';
import QRCode from 'qrcode.react'; // Importieren Sie die QRCode-Bibliothek
import { useNavigate } from 'react-router-dom';

const RezeptAnlegenForm = () => {
  const [formData, setFormData] = useState({
    patientId: '',
    medikamentName: '',
    termin: '',
    arztId: '',
    empfehlungApo: '',
    emailApo: '',
    vollständigerName: ''
  });
  const navigate = useNavigate(); // useNavigate aufrufen
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hier kannst du die Daten weiterverarbeiten, z.B. an einen Server senden
    console.log(formData);
  };

  // QR-Code-Daten generieren
  const generateQRCode = () => {
    const qrData = JSON.stringify(formData);
    return qrData;
  };
  const handleQRCodeClick = () => {
    // Navigieren Sie zur QR-Code-Seite
    navigate('/qrcode');
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="patientId">Patient ID:</label>
          <input type="text" id="patientId" name="patientId" className="form-control" value={formData.patientId} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="medikamentName">Medikament Name:</label>
          <input type="text" id="medikamentName" name="medikamentName" className="form-control" value={formData.medikamentName} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="termin">Termin eingeben:</label>
          <input type="datetime-local" id="termin" name="termin" className="form-control" value={formData.termin} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="arztId">Arzt ID:</label>
          <input type="text" id="arztId" name="arztId" className="form-control" value={formData.arztId} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="empfehlungApo">Empfehlung Apotheke:</label>
          <input type="text" id="empfehlungApo" name="empfehlungApo" className="form-control" value={formData.empfehlungApo} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="emailApo">E-Mail Apotheke:</label>
          <input type="email" id="emailApo" name="emailApo" className="form-control" value={formData.emailApo} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="vollständigerName">Vollständiger Name:</label>
          <input type="text" id="vollständigerName" name="vollständigerName" className="form-control" value={formData.vollständigerName} onChange={handleChange}/>
        </div>

        <button type="button" className="btn btn-secondary">Abbrechen</button>
        <button type="button" className="btn btn-danger" onClick={handleQRCodeClick}>
          QR-Codieren
        </button>
      </form>

      {/* QR-Code anzeigen */}
      <div className="mt-4">
        <h5>QR-Code:</h5>
        <QRCode value={generateQRCode()} />
      </div>
    </div>
  );
};

export default RezeptAnlegenForm;
