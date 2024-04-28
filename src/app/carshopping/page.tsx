"use client";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Footer from "@/components/footer";
import ProductCardCar from "@/components/productCardCar";

export default function CartShopping(){

    const [sliderRef] = useKeenSlider({
        slides: {
          perView: 4,
          spacing: 30,
        },
      })

  return(
  <div className="h-screen bg-gradient-to-r from-purple-600 to-red-600 w-screen items-center justify-center">
      <div className=" container object-top max-w-none bg-gray-950 h-32 items-center justify-center flex">
        <div className=" w-2/4 items-center justify-center flex">
          <h1 className=" text-5xl font-bold text-white">Carrinho</h1>
        </div>
      </div>

    <div className="max-w-none h-4/5 items-center justify-center flex">
    <div ref={sliderRef} className="keen-slider max-w-[80%]">
        <ProductCardCar />
        <ProductCardCar />
        <ProductCardCar />
        <ProductCardCar />
        <ProductCardCar />
        <ProductCardCar />
        <ProductCardCar />
    </div>
    </div>

    <Footer />

  </div>
    )
}