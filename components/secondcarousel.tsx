'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react'
import Image from 'next/image'

interface Product {
  id: number
  title: string
  price: number
  pricePerPiece: number
  pieces: number
  image: string
}

const products: Product[] = [
  {
    id: 1,
    title: "Title",
    price: 0,
    pricePerPiece: 0.35,
    pieces: 20,
    image: "/carouselimages/table.png"
  },
  {
    id: 2,
    title: "Title",
    price: 0,
    pricePerPiece: 0.35,
    pieces: 20,
    image: "/carouselimages/table.png"
  },
  {
    id: 3,
    title: "Title",
    price: 0,
    pricePerPiece: 0.35,
    pieces: 20,
    image: "/carouselimages/table.png"
  },
  {
    id: 4,
    title: "Title",
    price: 0,
    pricePerPiece: 0.35,
    pieces: 20,
    image: "/carouselimages/table.png"
  },
  {
    id: 5,
    title: "Title",
    price: 0,
    pricePerPiece: 0.35,
    pieces: 20,
    image: "/carouselimages/table.png"
  }
]

export default function SecondCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((currentIndex + 1) % products.length)
  }

  const previous = () => {
    setCurrentIndex((currentIndex - 1 + products.length) % products.length)
  }

  return (
    <div className="relative w-full px-4 py-10 mt-5 mb-10">
      <h2 className="text-2xl font-semibold mb-6">Ces produits pourraient vous intéresser</h2>
      
      <div className="relative overflow-hidden">
        <div 
          className="flex transition-transform duration-300 ease-in-out "
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {products.map((product) => (
            <div 
              key={product.id}
              className="px-4 md:min-w-[33.33%] min-w-full"
            >
              <div className="relative p-4 bg-stone-100">
                <button className="absolute top-4 left-4 z-10">
                  <Heart className="w-6 h-6 stroke-[1.5px] text-gray-400 hover:text-red-500" />
                </button>
                <div className="absolute top-4 right-4 z-10">
                  <span className="text-xs tracking-wide text-gray-600">ART DE LA TABLE</span>
                </div>
                <div className="mb-8 pt-8">
                  <Image
                    height={1000}
                    width={1000}
                    src={product.image}
                    alt={product.title}
                    className="w-full aspect-[3/2] md:aspect-[4/3] object-contain"
                  />
                </div>
                
                <div className="space-y-1">
                  <div className="flex justify-between items-baseline">
                    <h3 className="text-xl font-normal">{product.title}</h3>
                    <span className="text-xl">{product.price}€</span>
                  </div>
                  <div className="flex justify-between items-center text-xs text-gray-500">
                    <span>{product.pricePerPiece}€/Pièce - REF : VABGN5</span>
                    <span className='bg-gray-200 p-1 rounded-md'>{product.pieces} pièces</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={previous}
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

