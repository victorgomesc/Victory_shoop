"use client";

import Image from "next/image";

export default function Cadastro(){
return(
<div className="h-screen bg-gradient-to-r from-purple-600 to-red-600 w-screen items-center justify-center">
    <div className=" container object-top max-w-none bg-gray-950 h-32 items-center justify-center flex">
        <div className=" w-2/4 items-center justify-center flex">
          <h1 className=" text-5xl font-bold text-white">Bem Vindo a Victory</h1>
        </div>
    </div>

    <div className="max-w-none mt-10 h-4/5 items-center justify-center flex">
        <div className="container w-3/5 bg-white rounded-3xl h-5/6 flex">
            <div className="w-1/2 h-full">
                <Image src="/assets/baner.jpg" alt=" " width={500} height={500} className="object-fill h-full w-5/6 rounded-3xl" />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <form className="flex flex-col">
                    <label>Digite seu email:</label>
                    <label>Comfirme seu email:</label>
                    <label>Digite sua senha:</label>
                    <label>Comfirme sua senha:</label>
                    <button>Cadastre-se</button>
                    <a href="/loginsection">Login</a>
                </form>
            </div>
        </div>
    </div>

</div>
    )
}