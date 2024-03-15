import React from "react";
import Nav from "../components/Nav";
import Carousel from "../components/Carousel";

const HomePage = () => {
  return (
    <>
      <Nav />
      <section className="carousel__sec">
        <Carousel />
      </section>
    </>
  );
};

export default HomePage;
