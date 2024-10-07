import React from "react";
import Layout from "./Layout";
import Hero from "./Hero";
import Cardcontent from "./Cardcontent";
import Counterup from "./Counterup";
import Slick from "./Slick";
import Testimonial from "./Testimonial";
import Achievementcontent from "./Achievementcontent";
import Pricing from "./Pricing";
import Heros from "./Heros";
import Gallery from "./Gallery";
import Numbers from "./Numbers";
import Form from "./Form";
import Beforeandafter from "./Beforeandafter";
import Rating from "./Rating";
import Textwithstar from "./Textwithstar";

const Home = () => {
  return (
    <Layout>
      <Heros/>
      <Textwithstar/>
      <Pricing/>
      
      
      
      <Beforeandafter/>
      <Numbers/>
     
      
    </Layout>
  );
};

export default Home;
