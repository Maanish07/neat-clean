import React, { useState } from 'react';
import axios from 'axios';
import Layout from './Layout';

const Form = ({ price }) => {
  const radios = [
    {
      name: '1 BHK',
      price: 150,
    },
    {
      name: '2 Bhk',
      price: 200,
    },
    {
      name: '3 BHK',
      price: 250,
    },
  ];

  const [selectedPlan, setSelectedPlan] = useState(radios[1]); // default plan selection
  const [phoneNumber, setPhoneNumber] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');

  const today = new Date().toISOString().split('T')[0]; // for min date

  const handlePlace = async (e) => {
    e.preventDefault();
    try {
      const amount = selectedPlan.price;
      const { data } = await axios.post(`http://localhost:4000/payment`, {
        amount,
      });
      initPayment(data.data); // init Razorpay payment with the returned order data
    } catch (err) {
      console.log(err);
    }
  };

  const initPayment = (data) => {
    const options = {
      key: 'rzp_test_y2KlnwPCrKqlwr', // consider moving this to a .env file
      amount: data.amount,
      currency: 'INR',
      name: 'सफाई',
      description: 'Test Transaction',
      image: '/Assets/Hero/logo.png',
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = `http://localhost:4000/verify`;
          const { data } = await axios.post(verifyUrl, {
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
          });

          
          const adminOrderEndpoint = `http://localhost:4000/booking`;
          const orderData = {
            phone: phoneNumber,
            plan: selectedPlan.name,
            payment_id: response.razorpay_payment_id,
            order_id: response.razorpay_order_id,
            signature: response.razorpay_signature,
            amount: selectedPlan.price,
          };
          const adminResponse = await axios.post(adminOrderEndpoint, orderData);
          console.log('Admin Order Response:', adminResponse.data);
        } catch (err) {
          console.error('Payment Verification Error:', err);
        }
      },
      prefill: {
        name: '',
        email: 'customer@example.com',
        contact: phoneNumber,
      },
      notes: {
        address: 'Customer Address',
      },
      theme: {
        color: '#000',
      },
    };
    try {
      const razorpayInstance = new window.Razorpay(options);
      razorpayInstance.open();
    } catch (error) {
      console.error('Error initializing Razorpay:', error);
    }
  };

  return (
    <Layout>
      <div className="w-screen flex">
        <div className="relative mx-auto mt-20 mb-20 max-w-screen-lg overflow-hidden rounded-t-xl bg-emerald-400/60 py-32 text-center shadow-xl shadow-gray-300">
          <h1 className="mt-2 px-8 text-3xl font-bold text-white md:text-5xl">Book an appointment</h1>
          <p className="mt-6 text-lg text-white">Get an appointment with our experienced accountants</p>
          <img
            className="absolute top-0 left-0 -z-10 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>

        <div className="mx-auto grid max-w-screen-lg px-6 pb-20">
          <div className="max-w-md mx-auto px-4">
            <h2 className="text-gray-800 font-medium">Find a plan</h2>
            <ul className="mt-6 space-y-3 flex gap-3">
              {radios.map((item, idx) => (
                <li key={idx}>
                  <label htmlFor={item.name} className="block relative">
                    <input
                      id={item.name}
                      type="radio"
                      checked={selectedPlan.name === item.name}
                      onChange={() => setSelectedPlan(item)}
                      name="payment"
                      className="sr-only peer"
                    />
                    <div className="w-full p-5 cursor-pointer rounded-lg border bg-white shadow-sm ring-black peer-checked:ring-2 duration-200">
                      <div className="pl-7">
                        <h3 className="leading-none text-gray-800 font-medium">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-600">₹ {item.price} /Per Visit</p>
                      </div>
                    </div>
                    <span className="block absolute top-5 left-5 border peer-checked:border-[5px] peer-checked:border-green-600 w-4 h-4 rounded-full"></span>
                  </label>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <label className="text-gray-600">Phone number</label>
            <div className="relative mt-2 max-w-xs text-gray-500">
              <input
                required
                type="number"
                placeholder="+91 99999-99999"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
              />
            </div>
          </div>

          <div className="relative my-6">
            <input
              id="id-date07"
              type="date"
              name="id-date07"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={today}
              className="peer relative h-10 rounded border border-slate-200 px-4 text-sm text-slate-500"
            />
            <label htmlFor="id-date07" className="absolute -top-2 left-2 z-[1] cursor-text px-2 text-xs text-slate-400">
              Date
            </label>
          </div>

          <button
            onClick={handlePlace}
            className="px-3 py-3 rounded-lg font-semibold text-sm duration-150 text-white bg-green-600 hover:bg-black hover:text-white active:bg-indigo-700"
          >
            Pay Now
          </button>
        </div>
      </div>
      <script src="https://unpkg.com/flowbite@1.5.2/dist/datepicker.js"></script>
    </Layout>
  );
};

export default Form;

