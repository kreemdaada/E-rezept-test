import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import QRCode from 'qrcode.react'; // Importieren Sie die QRCode-Bibliothek

const VersicherungPatientenForm = () => {
  const [formData, setFormData] = useState({
    anrede: '',
    vollständigName: '',
    versicherung: '',
    versichertennummer: '',
    adresse: '',
    persönlicheKennnummer: '',
    geburtsdatum: '',
    ablaufdatum: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [qrData, setQrData] = useState(null); // Zustand für QR-Code-Daten
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Erstelle JSON-Objekt aus Formulardaten
    const jsonData = JSON.stringify(formData);
    console.log('Formulardaten als JSON:', jsonData);

    // Generiere QR-Code-Daten
    setQrData(jsonData);

    // Hier kannst du die Daten an die Datenbank senden

    // Setze den Zustand auf 'isSaved' auf true und zeige das Modal an
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    // Navigiere zur nächsten Seite, um ein Rezept anzulegen
    navigate('/rezept_anlegen');
  };


  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="anrede">Anrede:</label>
          <select id="anrede" name="anrede" className="form-control" value={formData.anrede} onChange={handleChange}>
            <option value="Herr">Herr</option>
            <option value="Frau">Frau</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="vollständigName">Vollständiger Name:</label>
          <input type="text" id="vollständigName" name="vollständigName" className="form-control" value={formData.vollständigName} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="versicherung">Versicherung:</label>
          <input type="text" id="versicherung" name="versicherung" className="form-control" value={formData.versicherung} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="versichertennummer">Versichertennummer:</label>
          <input type="text" id="versichertennummer" name="versichertennummer" className="form-control" value={formData.versichertennummer} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="adresse">Adresse:</label>
          <textarea id="adresse" name="adresse" className="form-control" value={formData.adresse} onChange={handleChange}></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="persönlicheKennnummer">Persönliche Kennnummer:</label>
          <input type="text" id="persönlicheKennnummer" name="persönlicheKennnummer" className="form-control" value={formData.persönlicheKennnummer} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="geburtsdatum">Geburtsdatum:</label>
          <input type="date" id="geburtsdatum" name="geburtsdatum" className="form-control" value={formData.geburtsdatum} onChange={handleChange}/>
        </div>

        <div className="form-group">
          <label htmlFor="ablaufdatum">Ablaufdatum:</label>
          <input type="date" id="ablaufdatum" name="ablaufdatum" className="form-control" value={formData.ablaufdatum} onChange={handleChange}/>
        </div>

        <button type="submit" className="btn btn-primary">Speichern</button>
        <button type="button" className="btn btn-secondary">Abbrechen</button>
      </form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Daten gespeichert!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Die Daten wurden erfolgreich gespeichert. Möchten Sie jetzt ein Rezept anlegen?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Ja, Rezept anlegen
          </Button>
          <Button variant="primary" onClick={() => setShowModal(false)}>
            Nein, später
          </Button>
        </Modal.Footer>
      </Modal>

      {/* QR-Code anzeigen, wenn qrData vorhanden ist */}
      {qrData && (
        <div className="mt-4">
          <h5>QR-Code:</h5>
          <QRCode value={qrData} />
        </div>
      )}
    </div>
  );
};



export default VersicherungPatientenForm;
