import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Button2Content = () => {
  const [columns, setColumns] = useState([]);
  const [selectedColumn, setSelectedColumn] = useState('ElevID');
  const [updateElevData, setUpdateElevData] = useState({});
  const [elevID, setElevID] = useState('');

  useEffect(() => {
    axios.post('http://localhost:3305/Select')
      .then(response => {
        if (response.data.status === 200) {
          const columnNames = Object.keys(response.data.data[0]);
          const filteredColumns = columnNames.filter(column => column !== 'elevID');
          setColumns(filteredColumns);
        } else {
          console.error(response.data.message);
        }
      })
      .catch(error => console.error(error));
  }, []);

  const updateElevDataRequest = (e) => {
    const form = new FormData(e.target);
    console.log(form)
    const data = {
      navn: selectedColumn,
      verdi: form.get(selectedColumn),
      elevID: form.get('elevID'),
    }
    if (selectedColumn === "ElevID") {
      console.log("kanke gjøre sånt");
      return
    }
    axios.put(`http://localhost:3305/updateuser/${selectedColumn}/${form.get(selectedColumn)}/${form.get('elevID')}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(error => console.error(error));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateElevDataRequest(e);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Select Column:
          <select value={selectedColumn} onChange={(e) => setSelectedColumn(e.target.value)}>
            {columns.map(column => (
              <option key={column} value={column}>{column}</option>
            ))}
          </select>
        </label>
        <br />
        <label>
          {selectedColumn}:
          <input type="text" name={selectedColumn} />
        </label>
        <br />
        <label>
          ElevID:
          <input type="text" name="elevID" />
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Button2Content;
