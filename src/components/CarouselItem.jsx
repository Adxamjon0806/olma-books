import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <div className="carousel__item">
      <p>{item.description}</p>
      <img src={item.img} width={1200} height={450} alt="carousel item" />
    </div>
  );
};

export default CarouselItem;
