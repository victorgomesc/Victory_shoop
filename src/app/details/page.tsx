import Footer from "@/components/footer";
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

    <Footer/>

</div>
    )
}