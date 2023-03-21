import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import banner from "../assets/Banner.png";

const Carousal = () => {
  return (
    <>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
      >
        <div className="w-full h-[700px]">
          <img className="w-full h-full " src={banner} />
          <img src={banner} />
        </div>
        <div className="w-full h-[700px]">
          <img className="w-full h-full " src={banner} />
          <img src={banner} />
        </div>
        <div className="w-full h-[700px]">
          <img className="w-full h-full " src={banner} />
        </div>
      </Carousel>
    </>
  );
};

export default Carousal;
