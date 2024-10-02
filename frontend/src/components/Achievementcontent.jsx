import React from "react";
import Achievement from "./Achievement";


const Achievementcontent = () =>{
    const Achive = [
        {
          title: '',
          description: 'Suceess Student',
          image: '/Assets/Card/jee.png',
          url : 'https://leetcode.com/u/Mannu_story07/',
        },
        {
          title: 'NEET',
          description: 'Class 11 , Class 12 , Dropper',
          image: '/Assets/Card/neet.png',
          url : 'https://github.com/Maanish07'
        },
        {
          title: 'FOUNDATION',
          description: 'Class 9, Class 10, Class 11 , Class 12 , Dropper',
          image: '/images/commerce.png',
          url : '/'
        },
      ];
    return (
        <>
        <div ClassName = "flex justify-center items-center">
        <h1 className="text-center text-2xl font-bold">Cources we offer</h1>
        </div>
        <div className="flex space-x-6 justify-center items-center py-8">
        
          {Achive.map((card, index) => (
            <Achievement 
              key={index}
              title={card.title}
              description={card.description}
              image={card.image}
              url = {card.url}
            />
          ))}
        </div>
        </>
    );
}

export default Achievementcontent;