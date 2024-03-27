import React, { useState } from 'react';
import axios from 'axios';

const DoctorRegister = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      name,
      email,
      password,
      address,
      phoneNumber,
      userId,
    };

    try {
      const response = await axios.post('http://localhost/react-rezept/server/backend/endpoints.php/backend/doctor/register', payload);
      console.log(response.data); // Überprüfen Sie die Antwort im Konsolenlog
      alert('Registrierung erfolgreich! Bitte melde dich an.');
      // Optional: Weiterleitung zur Anmeldeseite oder zur Dashboard-Seite
      window.location.href = '/backend/doctor/login';
    } catch (error) {
      console.error(error);
      alert('Registrierung fehlgeschlagen. Bitte überprüfe deine Eingaben und versuche es erneut.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-signin mb-2">
      <h1 className="h3 mb-3 font-weight-normal">Bitte registrieren</h1>
      <input type="text" className="form-control mb-2" placeholder="Name" required value={name} onChange={(e) => setName(e.target.value)} />
      <input type="email" className="form-control mb-2" placeholder="Email-Adresse" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" className="form-control mb-2" placeholder="Passwort" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <input type="text" className="form-control mb-2" placeholder="Adresse" required value={address} onChange={(e) => setAddress(e.target.value)} />
      <input type="text" className="form-control mb-2" placeholder="Telefonnummer" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <input type="text" className="form-control mb-2" placeholder="User ID" required value={userId} onChange={(e) => setUserId(e.target.value)} />
      <button className="btn btn-lg btn-primary btn-block" type="submit">Registrieren</button>
    </form>
  );
};

export default DoctorRegister;
