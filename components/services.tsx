import Image from "next/image";
import React from "react";

const Services: React.FC = () => {
  const services = [
    {
      image: "/servicesimages/package.png",
    },
    {
      image: "/servicesimages/food.png",
    },
    {
      image: "/servicesimages/cart.png",
    },
    {
      image: "/servicesimages/truck.png",
    },
  ];

  return (
    <div className="py-10 text-center bg-gradient-to-b from-pink-100 to-gray-100">
      <h2 className="text-3xl mb-4">
        On s’occupe de <span className="text-[#00bcd4]">tout</span>
      </h2>
      <p className="text-gray-500 text-sm mb-10">
        Office ipsum you must be muted. It meeting commitment busy pain.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto max-w-4xl">
        {services.map((service, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <Image
              src={service.image}
              alt={service.image}
              height={150}
              width={150}
              className="h-32 w-32 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
