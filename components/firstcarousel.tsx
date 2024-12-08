import React from "react";
import Slider from "react-slick";
import Image from "next/image";

const Carousel: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const items = Array(5).fill(null); // Placeholder for 5 carousel items

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Articles similaires</h2>
      <Slider {...settings}>
        {items.map((_, index) => (
          <div key={index} className="p-2">
            <div className="border border-gray-300 rounded-lg p-4 text-center">
              {/* Thumbnail */}
              <div className="mb-4">
                <Image
                  src="/path-to-image/table.png" // Replace with actual image paths
                  alt={`Table ${index + 1}`}
                  width={200}
                  height={200}
                  className="mx-auto"
                />
              </div>
              {/* Label */}
              <p className="text-sm text-gray-600 uppercase mb-2">Art de la table</p>
              {/* Price */}
              <p className="text-lg font-semibold mb-1">0€</p>
              <p className="text-sm text-gray-500 mb-2">0.35€/Pièce • REF: VABGN5</p>
              {/* Quantity */}
              <div className="text-sm text-blue-600">20 pièces</div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

const SampleNextArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: "block", right: -15 }}
      onClick={onClick}
    />
  );
};

const SamplePrevArrow = (props: any) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} z-10`}
      style={{ ...style, display: "block", left: -15 }}
      onClick={onClick}
    />
  );
};

export default Carousel;
