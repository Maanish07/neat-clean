import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

const Booking = () => {
  const [allbooking, setAllbooking] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/booking')
      .then((response) => {
        console.log(response.data);
        setAllbooking(response.data); // Access the data properly
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div>
      {allbooking.length > 0 ? (
        allbooking.map((item, index) => (
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
  );
}

export default Booking;

