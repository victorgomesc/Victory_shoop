"use client";

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import ProductCard from "@/components/productCard";
import Footer from "@/components/footer";
import Baner from "@/components/baner";
import Header from "@/components/header";


export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3.5,
      spacing: 30,
    },
  })


  return (
    <>
    <div className="h-full flex items-center justify-center flex-col bg-gray-100">
      <Header />

      <Baner />

        <div ref={sliderRef} className="keen-slider max-w-[80%]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>


        <div ref={sliderRef} className="keen-slider max-w-[80%]">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>

        <Footer />

    </div>
    </>
  );
}
