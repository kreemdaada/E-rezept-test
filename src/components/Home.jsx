import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="container my-4">
      <div className="row">
        <div className="col-sm-6">
          <div className="card m-4">
            <div className="card-body">
              <h5 className="card-title">Arzt Registrierung</h5>
              <p className="card-text">Melden Sie sich als Arzt an.</p>
              <Link to="/backend/doctor/register" className="btn btn-primary">Registrieren</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card m-4">
            <div className="card-body">
              <h5 className="card-title">Arzt Login</h5>
              <p className="card-text">Loggen Sie sich als Arzt ein.</p>
              <Link to="/backend/doctor/login" className="btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card m-4">
            <div className="card-body">
              <h5 className="card-title">Apotheke Registrierung</h5>
              <p className="card-text">Melden Sie sich als Apotheke an.</p>
              <Link to="/backend/pharmacy/register" className="btn btn-primary">Registrieren</Link>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card m-4">
            <div className="card-body">
              <h5 className="card-title">Apotheke Login</h5>
              <p className="card-text">Loggen Sie sich als Apotheke ein.</p>
              <Link to="/backend/pharmacy/login" className="btn btn-primary">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
