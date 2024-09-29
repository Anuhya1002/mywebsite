"use client";
import React, { useEffect, useState } from "react";

const Example = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users"); // Fetch users from the API
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result); // Set the users in the state
      } catch (error) {
        setError(error.message); // Capture any error
        console.error("Error fetching data:", error);
      }
    };

    fetchData(); // Call the fetch function
  }, []);

  if (error) {
    return <div>Error: {error}</div>; // Display any error
  }

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Example;
