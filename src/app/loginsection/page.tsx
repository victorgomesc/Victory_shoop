"use client";

import FormLogin from "@/components/formLogin";

export default function LoginModal(){
return(
<div className="h-screen bg-gradient-to-r from-purple-600 to-red-600 w-screen items-center justify-center">
    <div className=" container object-top max-w-none bg-gray-950 h-32 items-center justify-center flex">
        <div className=" w-2/4 items-center justify-center flex">
          <h1 className=" text-5xl font-bold text-white">Bem Vindo a Victory</h1>
        </div>
    </div>

    <FormLogin />

</div>
    )
}