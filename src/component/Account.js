import React, { useState } from 'react';
import axios from 'axios';

const Account = ({ user, onLogout }) => {
  const [email, setEmail] = useState(user.email);
  const [password, setPassword] = useState(user.password);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/users/${user.id}`, { email, password });
      alert('Account updated');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2>Account Information</h2>
          <form onSubmit={handleUpdate}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary mt-3">
              Update
            </button>
          </form>
          <button onClick={onLogout} className="btn btn-secondary mt-3">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
