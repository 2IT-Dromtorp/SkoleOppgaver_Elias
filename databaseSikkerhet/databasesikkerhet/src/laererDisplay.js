import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './laererDisplay.css';
import { Link } from 'react-router-dom';

function LaererDisplay() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/users', {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
          },
        });
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <Link to="/loggedin">Tilbake?</Link>
      <ul className="user-list">
        {users.map((user) => (
          <li key={user.username} className="user-item">
            <div className="user-details">
              <strong>Username:</strong> {user.username}<br />
              <strong>Email:</strong> {user.email}<br />
              <strong>First Name:</strong> {user.first_name}<br />
              <strong>Last Name:</strong> {user.last_name}<br />
              <strong>Phone:</strong> {user.phone}<br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LaererDisplay;

