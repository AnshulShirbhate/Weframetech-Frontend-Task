import React from "react";
import Image from "next/image";

const Subscribe: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f9f6f9] p-6 pb-14 md:p-10  md:pb-28 rounded-lg">
      {/* Left Side */}
      <div className="flex justify-center items-center">
        <Image
          src="/subscribeimages/sofa.png"
          height={800}
          width={800}
          alt="Living Room"
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Right side */}
      <div className="flex flex-col justify-center text-center md:text-left bg-pink-100 p-6 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          S’inscrire & économiser <span className="text-[#00bcd4]">10%</span>
        </h2>
        <p className="text-gray-600 text-sm md:text-base mb-6">
          Office ipsum you must be muted. Synergize helicopters prioritize anyway job due harvest most opportunity didn’t. Yet busy any meeting shark light marginalized 4-blocker message. Productize corporate nail caught synergy highlights lunch. Company another pushback items dear or any.
        </p>

        
        <div className="flex flex-col md:flex-row items-center">
          <input
            type="email"
            placeholder="john@doe.com"
            className="w-full md:w-auto flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm mb-4 md:mb-0 md:mr-4 focus:outline-none focus:ring-2 focus:ring-[#00bcd4]"
          />
          <button className="px-6 py-2 bg-[#00bcd4] text-white rounded-md text-sm hover:bg-[#00a6c3] transition">
            S’INSCRIRE →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
