import { Trash2 } from "lucide-react";
import Image from "next/image";


export default function ProductCardCar() {
    return(
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
    )
}