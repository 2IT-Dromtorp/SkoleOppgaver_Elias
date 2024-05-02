import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const PendingItemsPage = () => {
  const [pendingItems, setPendingItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/utstyr', {
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
          }
        });
        const pendingData = response.data.filter(item => item.pending === 1);
        setPendingItems(pendingData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    const interval = setInterval(() => {
        fetchData();
      }, 1000);
  
      return () => clearInterval(interval);
    }, []);


  const handleUpdatePending = async (id) => {
    try {
      const response = await fetch('/api/pending', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
        body: JSON.stringify({ id, pending: 0, available: 1 })
      });
      if (!response.ok) {
        throw new Error('Failed to update pending status');
      }
      // Optionally handle successful response
    } catch (error) {
      console.error('Error updating pending status:', error);
    }
}

  return (
    <div>
        <Link to="/loggedin">Tilbake?</Link>
      <h2>Pending Items Page</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Image</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {pendingItems.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><img src={item.image} alt={item.name} /></td>
              <button onClick={() => handleUpdatePending(item.id)}><td>Pending</td></button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PendingItemsPage;
