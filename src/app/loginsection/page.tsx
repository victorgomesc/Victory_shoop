"use client";

import Image from "next/image";
import React, { useState, FormEvent } from 'react';
import Link from "next/link";

export default function LoginModal(){

    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePassworChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para um servidor, armazenar localmente, etc.
    console.log('Valor do input:', emailValue);
    console.log('Valor do input:', passwordValue);
  };
        
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
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center">
                    <label className="text-3xl font-bold">Digite seu email</label>
                    <input className="border-solid text-2xl mt-8 border-2 border-sky-200 hover:border-sky-700"
                        type="text"
                        placeholder="exemplo@email.com"
                        value={emailValue}
                        onChange={handleEmailChange}
                    />
                    <label className="mt-16 text-3xl font-bold">Digite sua senha</label>
                    <input className="border-solid text-2xl mt-8 border-2 border-sky-200 hover:border-sky-700"
                        type="password"
                        placeholder="********"
                        value={passwordValue}
                        onChange={handlePassworChange}
                    />
                    <button type="submit" className="w-44 h-10 mt-10 bg-orange-500 hover:bg-orange-700 font-semibold text-xl rounded-full">Login</button>
                    <Link href="/cadastrosection">
                    <p className="text-blue-900 hover:text-blue-500 mt-10 font-bold">Cadastre-se</p>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>

</div>
    )
}