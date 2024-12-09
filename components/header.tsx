"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Lightbulb, Heart, ShoppingCart, Menu, X, Search, ChevronDown } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className=" items-center justify-center space-x-2 flex-row space-y-2">
          <span className="flex items-center justify-center">
            <Image
              height={100}
              width={100}
              src="/logo1.png"
              alt="logo1"
              className="h-7 w-11 "
            ></Image>
          </span>
          <Image
            height={100}
            width={100}
            src="/logo2.png"
            alt="Logo"
            className="h-3"
          />
        </div>

        {/* Search Bar (hidden on small screens) */}
        <div className="hidden md:flex flex-1 mx-6 relative">
          {/* Input Field */}
          <input
            type="text"
            placeholder="Rechercher un produit"
            className="w-full border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 pr-10" // Added padding-right for the icon
          />
          {/* Search Icon */}
          <Search
            size={20}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
          />
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="#"
            className="text-gray-600 hover:text-gray-800 hidden md:flex"
          >
            <Lightbulb />
            Inspirations
          </a>
          <a
            href="#"
            className="relative text-gray-600 hover:text-gray-800 hidden md:flex"
          >
            <span className="flex space-x-1">
              <Heart />
              <span>Mes favoris</span>
              <span className="bg-gray-300 px-2 items-center flex text-black text-xs rounded-full">
                24
              </span>
            </span>
          </a>
          <button className="hidden md:flex bg-blue-500 text-white px-4 py-2 rounded-lg space-x-2">
            <ShoppingCart />
            <span>Panier</span>
          </button>
          <div className="bg-gray-100 rounded-full h-11 w-11">
          </div>
          <div>
            <span className="flex">
              FR 
              <ChevronDown />
            </span>
          </div>
          


          {/* Hamburger Menu */}
          <button
            className="md:hidden bg-gray-100 p-2 rounded-lg"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu (visible on small screens) */}
      {isMenuOpen && (
        <div className="bg-gray-100 md:hidden p-4">
          <div className="mb-4 relative">
            {/* Input Field */}
            <input
              type="text"
              placeholder="Rechercher un produit"
              className="w-full border border-gray-300 p-2 text-gray-700 focus:outline-none focus:ring focus:ring-blue-300 pr-10" // Added padding-right for the icon
            />
            {/* Search Icon */}
            <Search
              size={20}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
            />
          </div>
          <ul className="space-y-2 text-sm font-medium text-gray-600">
            {[
              "ART DE LA TABLE",
              "MOBILIER",
              "NAPPAGE",
              "MATÉRIEL DE SALLE",
              "CUISINE",
              "BARBECUE",
              "TENTE",
              "CHAUFFAGE",
              "PODIUM - PISTE DE DANSE",
              "SON ET LUMIÈRE",
              "PACKS",
              "CONSOMMABLES",
            ].map((item, idx) => (
              <li key={idx} className="whitespace-nowrap hover:text-blue-600">
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-4 space-y-2">
            <a href="#" className="block text-gray-600 hover:text-gray-800">
              <Lightbulb className="inline-block mr-2" />
              Inspirations
            </a>
            <a
              href="#"
              className="block relative text-gray-600 hover:text-gray-800"
            >
              <Heart className="inline-block mr-2" />
              Mes favoris
              <span className="absolute top-0 right-0 bg-gray-300 text-black text-xs font-bold px-1.5 py-0.5 rounded-full">
                24
              </span>
            </a>
            <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center justify-center space-x-2">
              <ShoppingCart />
              <span>Panier</span>
            </button>
          </div>
        </div>
      )}

      {/* Navigation Links (visible on larger screens) */}
      <nav className="hidden md:block pb-3">
        <ul className="flex items-center justify-center space-x-8 px-4 py-2 overflow-x-auto text-sm font-medium text-gray-400">
          {[
            "ART DE LA TABLE",
            "MOBILIER",
            "NAPPAGE",
            "MATÉRIEL DE SALLE",
            "CUISINE",
            "BARBECUE",
            "TENTE",
            "CHAUFFAGE",
            "PODIUM - PISTE DE DANSE",
            "SON ET LUMIÈRE",
            "PACKS",
            "CONSOMMABLES",
          ].map((item, idx) => (
            <li key={idx} className="whitespace-nowrap hover:text-blue-600">
              {item}
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
