import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

const Booking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_API_URL;
  console.log('this is backend url',backendUrl);

  useEffect(() => {
    axios.get(`${backendUrl}/booking`)
      .then((response) => {
        setAllBooking(response.data);
        setLoading(false); 
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false); 
      });
  }, [backendUrl]);
  
  return (
    <Layout>
      <div>
        {loading ? (
          <p>Loading bookings...</p> 
        ) : error ? (
          <p>Error: {error}</p> 
        ) : allBooking.length > 0 ? (
          allBooking.map((item, index) => (
            <div key={index}>
              <a href={`tel:${item.number}`}>{item.number}</a>
              <p>{item.address}</p>
              <p>{item.price}</p>
            </div>
          ))
        ) : (
          <p>No bookings available</p> 
        )}
      </div>
    </Layout>
  );
}

export default Booking;


