"use client";

import { Instagram, Mail, Phone, Linkedin, Github, ShoppingCart, Trash2 } from "lucide-react";
import Image from "next/image";
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

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

        <div className="w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide1">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa Real Madrid</span>
          <div className="">
            <Image src="/assets/real.jpg" alt="" width={500} height={500} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>

  

        <div className=" w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide2">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa PSG</span>
          <div className="">
            <Image src="/assets/psg.jpg" alt="" width={500} height={500} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide3">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa Portugal</span>
          <div className="">
            <Image src="/assets/porto.jpg" alt="" width={500} height={500} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide4">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa Atletico MG</span>
          <div className="">
            <Image src="/assets/galo.jpg" alt="" width={500} height={500} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>

        <div className=" w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide5">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa Liverpool</span>
          <div className="">
            <Image src="/assets/live.jpg" alt="" width={450} height={450} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>

        
        <div className="w-96 h-4/5 bg-white mt-8 rounded-lg pb-6 keen-slider__slide number-slide6">
          <div className="flex gap-6 w-auto h-auto justify-center flex-col items-center">
          <span className="mt-8 w-auto h-auto text-xl font-bold text-black">Camisa Milan</span>
          <div className="">
            <Image src="/assets/milan.jpg" alt="" width={500} height={500} className="object-contain h-52 w-96" />
          </div>
          <div className=" w-4/5 mx-auto">
            <p className=" text-center text-black font-bold"> R$85,00/10 x 8,50</p>
          </div>
          <div className="flex bg-orange-600 items-center justify-center gap-2 h-10 w-44 rounded-full hover:bg-orange-700">
          <Trash2 />
          </div>
          <div className="flex gap-2 h-10 w-44 rounded">
            <button className="rounded-full bg-orange-600 text-black w-full font-bold hover:bg-orange-700">Pagar</button>
          </div>
          </div>
        </div>
      
        </div>

        </div>

    <footer className=" h-56 mt-16 w-full bg-gray-800">
          <div className="flex flex-row">
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
                <p className="text-white mt-2 flex gap-2"><Instagram size={20} />: Victor_gomesc</p>
                <p className="text-white mt-2 flex gap-2"><Mail size={20} />: victor@gmail.com</p>
                <p className="text-white mt-2 flex gap-2"><Phone size={20} />: +55(88)981437585</p>
                <p className="text-white mt-2 flex gap-2"><Linkedin size={20} />: Linkedin</p>
                <p className="text-white mt-2 flex gap-2"><Github size={20} />: GitHub</p>
             </div>
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
                <p className="text-white mt-2 font-bold flex gap-2">Parcerias</p>
                <p className="text-white mt-2 flex gap-2">Universidade federal do Ceara</p>
                <p className="text-white mt-2 flex gap-2">Sistem Coop</p>
                <p className="text-white mt-2 flex gap-2">Engenharia de computação</p>
                <p className="text-white mt-2 flex gap-2">Coop Tech</p>
             </div>
             <div className="flex ml-20 w-1/5 flex-col mt-3 justify-center">
                <p className="text-white mt-2 flex gap-2">04/24/2024</p>
                <p className="text-white mt-2 flex gap-2">Versão 0.0.1</p>
                <p className="text-white mt-2 flex gap-2">Author gomes victor</p>
                <p className="text-white mt-2 flex gap-2">Victory_store</p>
                <p className="text-white mt-2 flex gap-2">VGC Tec</p>
             </div>
             <div className="flex ml-64 w-1/5 flex-col mt-3 justify-start">
                <p className=" text-white mt-2 gap-2">Nike</p>
                <p className="text-white mt-2 gap-2">Adidas</p>
                <p className="text-white mt-2 gap-2">Pulma</p>
             </div>
          </div>
        </footer>

</div>
    )
}