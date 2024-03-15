import React from "react";
import Banner from "../assets/Banner.png";
import CarouselItem from "./CarouselItem";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const items = [
  {
    description: "25% discount all Paulo Coelho books!",
    img: "https://img.freepik.com/free-vector/literature-book-club-twitch-banner-template_23-2149730151.jpg",
  },
  {
    description: "25% discount all Paulo Coelho books!",
    img: "https://static.vecteezy.com/system/resources/thumbnails/021/916/224/small/promo-banner-with-stack-of-books-globe-inkwell-quill-plant-lantern-ebook-world-book-day-bookstore-bookshop-library-book-lover-bibliophile-education-for-poster-cover-advertising-vector.jpg",
  },
  {
    description: "25% discount all Paulo Coelho books!",
    img: "https://i.pinimg.com/736x/c5/79/6d/c5796df4f44ea2c26643da920b15d5d7.jpg",
  },
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {items.map((item) => (
          <CarouselItem item={item} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
