import React from 'react';
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


const Pricing = ({ onPriceSelect }) => {
    const navigate = useNavigate();
    const plans = [
      {
        name: "1 BHK",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 200,
        isMostPop: false,
        features: [
            "1 Bathroom cleaning",
            "1 Livingroom cleaning",
            "Up to 1 bedrooms cleaning",
            "Small kitchen",
           
        ],
    },
    {
        name: "2 Bhk",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 250,
        isMostPop: true,
        features: [
          "1 Bathroom cleaning",
          "1 Livingroom cleaning",
          "Up to 2 bedrooms cleaning",
          "Small kitchen",
        ],
    },
    {
        name: "3 BHK",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        price: 300,
        isMostPop: false,
        features: [
          "1 Bathroom cleaning",
          "1 Livingroom cleaning",
          "Up to 3 bedrooms cleaning",
          "Small kitchen",
        ],
    },
    ];

    const handleClick = (price) => {
       
  };

  

    return (
        <section id="pricing" className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="relative max-w-xl mx-auto sm:text-center">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Pricing for all sizes
                    </h3>
                    <div className="mt-3 max-w-xl">
                        <p>Just Clean At Lowest Price</p>
                    </div>
                </div>
                <div className="mt-16 justify-center gap-6 sm:grid sm:grid-cols-2 sm:space-y-0 lg:grid-cols-3">
                    {plans.map((item, idx) => (
                        <div key={idx} className={`relative flex-1 flex items-stretch flex-col rounded-xl border-2 mt-6 sm:mt-0 ${item.isMostPop ? "mt-10" : ""}`}>
                            {item.isMostPop && (
                                <span className="w-32 absolute -top-5 left-0 right-0 mx-auto px-3 py-2 rounded-full border shadow-md bg-white text-center text-gray-700 text-sm font-semibold">
                                    Most popular
                                </span>
                            )}
                            <div className="p-8 space-y-4 border-b">
                                <span className="text-green-600 font-medium">
                                    {item.name}
                                </span>
                                <div className="text-gray-800 text-3xl font-semibold">
                                    ₹{item.price} <span className="text-xl text-gray-600 font-normal">/Per Visit</span>
                                </div>
                                <p>{item.desc}</p>
                                <button
                                   onClick={() => navigate('/book')}
                                    
                                    className="px-3 py-3 rounded-lg w-full font-semibold text-sm duration-150 text-white bg-black hover:bg-white hover:text-black active:bg-indigo-700"
                                >
                                    Get Started
                                </button>
                            </div>
                            <ul className="p-8 space-y-3">
                                <li className="pb-2 text-gray-800 font-medium">
                                    <p>Features</p>
                                </li>
                                {item.features.map((featureItem, idx) => (
                                    <li key={idx} className="flex items-center gap-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                        </svg>
                                        {featureItem}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            
        </section>

    );
};

export default Pricing;

