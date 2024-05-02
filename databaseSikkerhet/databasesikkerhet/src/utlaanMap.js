import React, { useState, useEffect } from "react";
import axios from "axios";
import "./forrside.css";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [rod, setRod] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/utstyr", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  

  const mongodb = (id, data) => {
    axios
      .put(
        "/api/utlaant",
        {
          pending: !data?.find((equipment) => equipment.id === id).pending,
          id: id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleClick = () => {
    setRod(!rod);
  };

  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Navn</th>
            <th>Bilde</th>
            <th>Utlånt?</th>
          </tr>
        </thead>
        <tbody>
          {data.map((equipment) => (
            <tr key={equipment.id}>
              <td>{equipment.id}</td>
              <td>{equipment.name}</td>
              <td>
                <img src={equipment.image} alt={equipment.name} />
              </td>
              <td className={equipment.available ? "tatt" : "ikketatt"}>
                <button
                  onClick={() => {
                    mongodb(equipment.id, data);
                    handleClick();
                  }}
                >
                  {equipment.pending
                    ? "pending"
                    : equipment.available
                    ? "Utlånt"
                    : "Ikke utlånt"}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
