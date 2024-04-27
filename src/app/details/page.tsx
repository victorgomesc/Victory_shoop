import { Instagram, Mail, Phone, Linkedin, Github } from "lucide-react";
import Image from "next/image";

export default function CardDetails() {
    return(
<div className="h-screen bg-gradient-to-r from-purple-600 to-red-600 w-screen items-center justify-center">
    <div className=" container object-top max-w-none bg-gray-950 h-32 items-center justify-center flex">
        <div className=" w-2/4 items-center justify-center flex">
          <h1 className=" text-5xl font-bold text-white">Detalhes do Produto</h1>
        </div>
    </div>
    <div className="max-w-none mt-10 h-4/5 items-center justify-center flex">
        <div className="container w-3/5 bg-white rounded-3xl h-5/6 flex">
            <div className="w-1/2 h-full">
                <Image src="/assets/real.jpg" alt=" " width={500} height={500} className="object-contain h-full w-full" />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold">Camisa Real Madrid</h1>
                <span className="mt-36 text-2xl font-bold">R$80,99 / 10x8,90</span>
                <div className="mt-32 w-96 text-center">
                    <p className="text-xl font-semibold text-gray-600">Camisa do real madrid na cor preta numero 7 com pet da uefa especial comemorativa</p>
                </div>
                <button className="rounded-full mt-8 bg-orange-600 text-white w-96 h-20 font-bold text-3xl hover:bg-orange-700">Comprar</button>
            </div>
        </div>
    </div>

    <footer className=" h-56 mt-5 w-full bg-gray-800">
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