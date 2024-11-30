import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  // Define state to store the predicted temperature and loading state
  const [loading, setLoading] = useState(true);
  const [prediction, setPrediction] = useState(null);

  // Fetch prediction data when the component mounts
  useEffect(() => {
    // Call your backend API for prediction
    axios
      .get("http://localhost:8000/api/prediction")
      .then((res) => {
        setPrediction(res.data.tomorrow_temperature);  // Set the predicted temperature
        setLoading(false);  // Set loading to false after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching prediction:", error);
        setLoading(false);  // Set loading to false even in case of error
      });
  }, []);  // Empty array means this effect runs once when the component mounts

  return (
    <div>
      {loading ? (
        <div>Loading...</div>  // Show loading message while waiting for data
      ) : (
        <div>
          <h3>Tomorrow's Predicted Temperature:</h3>
          <p>{prediction ? `${prediction}°C` : "No prediction available"}</p>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
