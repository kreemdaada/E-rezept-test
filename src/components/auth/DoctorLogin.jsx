import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Importiere useNavigate aus react-router-dom

const DoctorLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [arztId, setArztId] = useState('');
  const navigate = useNavigate(); // Verwende useNavigate, um das Routing zu steuern

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
      arztId,
    };

    try {
      const response = await axios.post('http://localhost/react-rezept/server/backend/endpoints.php/backend/doctor/login', payload);
      const token = response.data.token;
      localStorage.setItem('jwtToken', token);
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      navigate('/dashboard'); // Nach erfolgreicher Anmeldung sofort zur DoctorDashboard-Seite umleiten
    } catch (error) {
      console.error(error);
      alert('Anmeldung fehlgeschlagen. Bitte überprüfen Sie Ihre Eingaben und versuchen Sie es erneut.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-signin">
      <h1 className="h3 mb-3 font-weight-normal">Bitte anmelden</h1>
      <label htmlFor="arzt-id" className="sr-only">Arzt-ID</label>
      <input type="text" name="arzt-id" id="arzt-id" className="form-control" placeholder="Arzt-ID" required autoFocus value={arztId} onChange={(e) => setArztId(e.target.value)} />
      <label htmlFor="email" className="sr-only">Email-Adresse</label>
      <input type="email" name="email" id="email" className="form-control" placeholder="Email-Adresse" required value={email} onChange={(e) => setEmail(e.target.value)} />
      <label htmlFor="inputPassword" className="sr-only">Passwort</label>
      <input type="password" name="password" id="password" className="form-control" placeholder="Passwort" required value={password} onChange={(e) => setPassword(e.target.value)} />
      <div className="d-flex justify-content-center">
        <button className="btn btn-lg btn-primary btn-block" type="submit">Anmelden</button>
      </div>
    </form>
  );
};

export default DoctorLogin;
