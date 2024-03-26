import React, { useState } from 'react';
import axios from 'axios';

const PharmacyRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [apothekeId, setApothekeId] = useState('');

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
      apothekeId,
    };

    try {
      const response = await axios.post('http://localhost/react-rezept/server/backend/endpoints.php/backend/pharmacy/register', payload);
      alert(response.data.message); // Anzeige der Erfolgsmeldung
      // Optional: Weiterleitung zur Anmeldeseite oder zum Dashboard
      window.location.href = '/backend/pharmacy/login'; // Hier anpassen, je nachdem, wo die Anmeldeseite liegt
    } catch (error) {
      console.error(error);
      alert('Registrierung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-signin mb-2">
      <h1 className="h3 mb-3 font-weight-normal">Bitte registrieren</h1>
      <label htmlFor="apotheke-id" className="sr-only">Apotheke-ID</label>
      <input type="text" id="apotheke-id" className="form-control mb-2" name="apotheke-id" required autoFocus value={apothekeId} onChange={(e) => setApothekeId(e.target.value)} />
      <label htmlFor="name" className="sr-only">Name</label>
      <input type="text" name="name" id="inputName" className="form-control mb-2" required value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor="inputEmail" className="sr-only">Email-Adresse</label>
      <input type="email" name="email" id="email" className="form-control mb-2" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="inputAddress" className="sr-only">Adresse</label>
      <input type="text" id="address" name="address" className="form-control mb-2"  required value={address} onChange={(e) => setAddress(e.target.value)} />
      <label htmlFor="inputPhoneNumber" className="sr-only">Telefonnummer</label>
      <input type="tel" id="phonenumber" name="phonenumber" className="form-control mb-2" required value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
      <label htmlFor="inputPassword" className="sr-only">Passwort</label>
      <input type="password" id="password" name="password" className="form-control mb-2"  required value={password} onChange={(e) => setPassword(e.target.value)} />
      <label htmlFor="confirmpassword" className="sr-only">Passwort bestätigen</label>
      <input type="password" id="confirmpassword" name="confirmpassword" className="form-control mb-2"  required value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary btn-block m" type="submit">Registrieren</button>
      </div>
    </form>
  );
};

export default PharmacyRegister;
