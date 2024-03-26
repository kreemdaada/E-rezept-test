import React, { useState } from 'react';
import axios from 'axios';

const DoctorRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [arztId, setArztId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwörter stimmen nicht überein!');
      return;
    }

    const payload = {
      email,
      password,
      name,
      address,
      phoneNumber,
      arztId,
    };

    try {
      const response = await axios.post('http://localhost/react-rezept/server/backend/endpoints.php/backend/doctor/register', payload);
      console.log(response.data); // Prüfe die Antwort im Konsolenlog
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
      <label htmlFor="arzt-id" className="sr-only">Arzt-ID</label>
      <input type="text" id="arzt-id" className="form-control mb-2" name="arzt-id" required autoFocus value={arztId} onChange={(e) => setArztId(e.target.value)} />
      <label htmlFor="name" className="sr-only">Name</label>
      <input type="text" id="name" name="name" className="form-control mb-2" required value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="email" className="sr-only">Email-Adresse</label>
      <input type="email" id="email" name="email" className="form-control mb-2" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="address" className="sr-only">Adresse</label>
      <input type="text" id="address" name="address" className="form-control mb-2" required value={address} onChange={(e) => setAddress(e.target.value)} />
      <label htmlFor="phonenumber" className="sr-only">Telefonnummer</label>
      <input type="tel" id="phonenumber" name="phonenumber" className="form-control mb-2" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <label htmlFor="password" className="sr-only">Passwort</label>
      <input type="password" id="password" name="password" className="form-control mb-2" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="confirmpassword" className="sr-only">Passwort bestätigen</label>
      <input type="password" id="confirmpassword" name="confirmpassword" className="form-control mb-2" required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary btn-block m" type="submit">Registrieren</button>
      </div>
    </form>
  );
};

export default DoctorRegister;
