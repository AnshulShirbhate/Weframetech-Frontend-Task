import React from "react";
import Image from "next/image";
import { Plus, Heart, Ruler, CircleOff } from "lucide-react";
import Link from "next/link";

const MainPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-600 mb-4">
        <Link href="/" className="hover:text-blue-500">
          Home
        </Link>{" "}
        &gt;{" "}
        <a href="#" className="hover:text-blue-500">
          Art de la table
        </a>
      </nav>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        {/* Left Side (Image Thumbnails) */}
        <div className="relative">
          {/* White Rectangle Background */}
          <Image
            src="/mainimages/rectanglewhite.png"
            height={1100}
            width={1100}
            alt="White Rectangle"
            className="mx-auto"
          />

          {/* Thumbnails */}
          <div className="absolute top-4 left-4 flex flex-col space-y-4 z-10">
            {[1, 2, 3, 4].map((_, index) => (
              <Image
                key={index}
                src="/mainimages/smalltable.png"
                alt={`Thumbnail ${index + 1}`}
                className="w-10 h-10 border border-gray-300 rounded-md"
                height={40}
                width={40}
              />
            ))}
          </div>

          {/* Main Product Image */}
          <div className="absolute inset-0 flex justify-center items-center">
            <Image
              src="/mainimages/product.png"
              alt="Main Product"
              className="lg:w-3/5 lg:h-4/6 md:h-2/5 md:w-2/5 h-3/5 w-3/5 border border-gray-300 bg-inherit"
              height={800}
              width={800}
            />
          </div>
        </div>

        {/* Right Side (Product Details) */}
        <div className="rightside lg:col-span-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-2 flex justify-between">
            Cheese – appareil à raclette 1/2 roue
            <span>
              <Heart></Heart>
            </span>
          </h1>
          <p className="text-xl text-black font-semibold mb-4 border-b pb-4">
            39,50€ <span className="text-sm text-gray-400">/piece</span>
          </p>

          <div className="sizesection mb-4 border-b pb-4">
            <span className="flex space-x-2">
              <Ruler />
              <p className="">20 Cm</p>
              <CircleOff />
              <p className="">50 Cm</p>
            </span>
          </div>

          <p className="text-sm text-gray-600 mb-4 md:border-b md:pb-64">
            Location appareil à raclette - Raclette traditionnelle 1/2 roue
            <br />
            Réglable en hauteur
            <br />
            Appareil à raclette professionnel
            <br />
            Boîtier de chauffe horizontal réglable en hauteur
            <br />
            <br />
            <span>220V</span>
            <br />
            <span>900W</span>
          </p>

          <div className="flex items-center space-x-4 mb-4">
            <span className="flex">
                <button className="border-t border-l border-b border-gray-300 px-2 py-1">-</button>
                <span className="border-t border-b py-1 px-6">1</span>
                <button className="border-t border-r border-b border-gray-300 px-2 py-1">+</button>
            </span>
            <button style={{backgroundColor: "#5CD2DD"}} className=" text-white px-4 py-2 rounded-lg w-full">
              AJOUTER AU PANIER
            </button>
          </div>
        </div>
      </div>

      {/* Description and Tabs */}
      <div className="mt-8 border-gray-300 pt-4 grid grid-cols-1 md:grid-cols-2 space-x-5">
        <div>
          <h2 className="text-lg font-bold text-gray-800 mb-2">
            Description produit
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Esti vous propose à la location un/une &quot;Jewel  grand
            couteau/10pc&quot; pour votre événement et ce dès 0,35 € / pièce
            (HTVA). Que ce soit pour votre mariage, une fête d&apos;anniversaire ou
            du personnel, ce produit a fait l&apos;objet d&apos;une sélection rigoureuse
            par notre équipe.
          </p>
        </div>

        {/* Tabs */}
        <div className="">
          <button className="bg-stone-50 w-full p-4 text-left flex justify-between">
            <span>LIVRAISONS</span>
            <span>
              <Plus />
            </span>
          </button>

          <button className=" bg-stone-50 w-full p-4 text-left flex justify-between">
            <span>QUESTIONS </span>
            <span>
              <Plus />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
