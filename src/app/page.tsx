"use client";

import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import { ShoppingCart, Heart, CircleUserRound, Menu, Search } from 'lucide-react'

export default function Home() {

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 6,
      spacing: 48,
    },
  })

  return (
    <div className=" flex w-screen h-screen bg-gray-900">
      <div className="flex-col gap-6">
        <div className=" bg-zinc-950 flex flex-center justify-center h-40 w-screen">
          <div className="w-1/4 flex justify-center items-center">
            <button><Menu size={32} /></button>
          </div>
          <h1 className=" text-white text-5xl w-2/4 flex
            justify-center items-center font-bold">
            Victory Shoop
          </h1>
          <div className="w-1/4 flex justify-center items-center gap-14">
            <button><CircleUserRound size={32}/></button>
            <button><ShoppingCart size={32}/></button>
            <button><Search size={32}/></button>
          </div>
        </div>
        
        <div ref={sliderRef} className="keen-slider">
        
        <div className=" w-96 h-auto bg-zinc-600 mt-11 ml-10 rounded-lg pb-6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-white">Camisa Barcelona</span>
          <div className="">
            <Image src="/assets/barcelona.png" alt="" width={500} height={500} />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-white"> R$85,00 Camisa comemorativa do cetenario do barça na cor roxa</p>
          </div>
          <div className="flex gap-4 h-10 w-36 rounded">
            <button className="rounded-md bg-gray-950 text-white w-full font-bold hover:bg-gray-900">Comprar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-auto bg-zinc-600 mt-11 ml-10 rounded-lg pb-6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-white">Camisa Flamengo</span>
          <div className="">
            <Image src="/assets/flamengo.png" alt="" width={500} height={500} />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-white"> R$85,00 Camisa comemorativa do cetenario do flamengo na cor tradicional</p>
          </div>
          <div className="flex gap-4 h-10 w-36 rounded">
            <button className="rounded-md bg-gray-950 text-white w-full font-bold hover:bg-gray-900">Comprar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-auto bg-zinc-600 mt-11 ml-10 rounded-lg pb-6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-white">Camisa Botafogo</span>
          <div className="">
            <Image src="/assets/botafogo.png" alt="" width={500} height={500} />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-white"> R$85,00 Camisa comemorativa do cetenario do Botafogo na cor tradicional</p>
          </div>
          <div className="flex gap-4 h-10 w-36 rounded">
            <button className="rounded-md bg-gray-950 text-white w-full font-bold hover:bg-gray-900">Comprar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-auto bg-zinc-600 mt-11 ml-10 rounded-lg pb-6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-white">Camisa United</span>
          <div className="">
            <Image src="/assets/united.png" alt="" width={500} height={500} />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-white"> R$85,00 Camisa comemorativa do cetenario do united na cor vermelha</p>
          </div>
          <div className="flex gap-4 h-10 w-36 rounded">
            <button className="rounded-md bg-gray-950 text-white w-full font-bold hover:bg-gray-900">Comprar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-auto bg-zinc-600 mt-11 ml-10 rounded-lg pb-6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-white">Camisa Arsenal</span>
          <div className="">
            <Image src="/assets/arsenal.png" alt="" width={500} height={500} />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-white"> R$85,00 Camisa comemorativa do cetenario do united na cor vermelha</p>
          </div>
          <div className="flex gap-4 h-10 w-36 rounded">
            <button className="rounded-md bg-gray-950 text-white w-full font-bold hover:bg-gray-900">Comprar</button>
          </div>
          </div>
        </div>
      
        </div>
    
      </div>
    </div>
  );
}
