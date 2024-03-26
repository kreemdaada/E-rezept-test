import React, { useState } from 'react';
import axios from 'axios';

const PharmacyLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [apothekeId, setApothekeId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      apothekeId,
    };

    try {
      const response = await axios.post('http://localhost/react-rezept/server/backend/endpoints.php/backend/pharmacy/login', payload);
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      window.location.href = '/dashbord';
    } catch (error) {
      console.error(error);
      alert('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Bitte anmelden</h1>
      <label htmlFor="apotheke-id" className="sr-only">Apotheke-ID</label>
      <input type="text" name="apotheke-id" id="apotheke-id" className="form-control" placeholder="Apotheke-ID" required autoFocus value={apothekeId} onChange={(e) => setApothekeId(e.target.value)} />
      <label htmlFor="inputEmail" className="sr-only">Email-Adresse</label>
      <input type="email" id="email" name="email" className="form-control" placeholder="Email-Adresse" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="inputPassword" className="sr-only">Passwort</label>
      <input type="password" id="password" name="password" className="form-control" placeholder="Passwort" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary btn-block" type="submit">Anmelden</button>
      </div>
    </form>
  );
};

export default PharmacyLogin;
