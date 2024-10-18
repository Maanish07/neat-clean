import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Layout from '../Layout';

const Booking = () => {
  const [allBooking, setAllBooking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const backendUrl = process.env.REACT_APP_BACKEND_API_URL;
  console.log('This is backend url:', backendUrl);

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
      <link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,300;0,400;1,600&display=swap" rel="stylesheet" />

      <div className="w-screen">
        <div className="mx-auto mt-8 max-w-screen-lg px-2">
          

          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            {loading ? (
              <p>Loading bookings...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : allBooking.length > 0 ? (
              <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
                <thead className="hidden border-b lg:table-header-group">
                  <tr>
                    <td width="50%" className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Address</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Date</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Contact</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Payment</td>
                    <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">Status</td>
                  </tr>
                </thead>
                <tbody className="lg:border-gray-300">
                  {allBooking.map((item, index) => (
                    <tr key={item.id || index}>
                      <td width="50%" className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                        {item.address}
                        <div className="mt-1 lg:hidden">
                          <p className="font-normal text-gray-500">{item.date}</p>
                        </div>
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">{item.bookingDate?.split("T")[0]}</td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell"><a href={`tel:${item.number}`}>{item.number}</a></td>
                      <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                        {item.price}
                        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">Complete</div>
                      </td>
                      <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                        <button className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">Complete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>No bookings available</p>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Booking;



