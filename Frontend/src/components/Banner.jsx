import ArrayHome3 from "../../public/ArrayHome3.webp";
import { LazyLoadImage } from "react-lazy-load-image-component";
import React from "react";

const Banner = () => {
  return (
    <div className="mt-14">
      <LazyLoadImage
        src={ArrayHome3}
        alt="ArrayLogic Academy"
        effect="opacity"
        width="1920"
        height="1080"
        loading="lazy"
      />
    </div>
  );
};
export default Banner;
