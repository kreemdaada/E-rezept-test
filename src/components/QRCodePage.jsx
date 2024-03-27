import React from 'react';
import QRCode from 'qrcode.react';
import VersicherungPatientenForm from './VersicherungPatientenForm';
import RezeptAnlegenForm from './RezeptAnlegenForm';
const QRCodeGenerator = ({ formDataVersicherung, formDataRezept }) => {
  // Funktion zum Generieren des QR-Codes mit kombinierten Daten aus beiden Formularen
  const generateCombinedQRCode = () => {
    if (!formDataVersicherung || !formDataRezept) {
      console.error('Formulardaten sind nicht vollständig.');
      return null;
    }

    const combinedData = {
      versicherung: formDataVersicherung,
      rezept: formDataRezept
    };
    return JSON.stringify(combinedData);
  };

  // Überprüfen, ob die Formulardaten vorhanden sind
  const qrCodeData = generateCombinedQRCode();
  if (!qrCodeData) {
    return (
      <div className="container mt-4">
        <h2>QR-Code mit kombinierten Daten</h2>
        <p>Es sind keine Formulardaten vorhanden.</p>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>QR-Code mit kombinierten Daten</h2>
      <div>
        <QRCode value={qrCodeData} />
      </div>
    </div>
  );
};

export default QRCodeGenerator;
