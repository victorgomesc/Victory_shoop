import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'

const createUserFormSchema = z.object({
    email: z.string().nonempty('O email é obrigatorio').email('Formato do email nao é valido'),
    password: z.string().min(6, 'A senha precissa de no minimo 6 caracteres'),
})

type createUserFormData = z.infer<typeof createUserFormSchema>


export default function FormLogin() {
    const [ output, setOutput] = useState('')
    const { register, handleSubmit, formState: { errors } } = useForm<createUserFormData>({
        resolver: zodResolver(createUserFormSchema)
    })

    function createUser(data: any) {
        setOutput(JSON.stringify(data, null, 2))
    }

    const [emailValue, setEmailValue] = useState<string>('');
    const [passwordValue, setPasswordValue] = useState<string>('');

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
    };

    const handlePassworChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
    };

    /*const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode fazer o que quiser com os dados do formulário, como enviar para um servidor, armazenar localmente, etc.
    console.log('Valor do input:', emailValue);
    console.log('Valor do input:', passwordValue);
    }; */

    return(
    <div className="max-w-none mt-10 h-4/5 items-center justify-center flex">
        <div className="container w-3/5 bg-white rounded-3xl h-5/6 flex">
            <div className="w-1/2 h-full">
                <Image src="/assets/baner.jpg" alt=" " width={500} height={500} className="object-fill h-full w-5/6 rounded-3xl" />
            </div>
            <div className="w-1/2 h-full flex flex-col items-center justify-center">
                <form onSubmit={handleSubmit(createUser)} className="flex flex-col">
                    <div className="h-full w-full flex flex-col items-center justify-center">
                    <label className="text-3xl font-bold">Digite seu email</label>
                    <input className="border-solid text-2xl mt-8 border-2 border-sky-200 hover:border-sky-700"
                        type="text"
                        placeholder="exemplo@email.com"
                        {...register('email')}
                        value={emailValue}
                        onChange={handleEmailChange}
                    />
                    {errors.email && <span>{errors.email.message}</span>}
                    <label className="mt-16 text-3xl font-bold">Digite sua senha</label>
                    <input className="border-solid text-2xl mt-8 border-2 border-sky-200 hover:border-sky-700"
                        type="password"
                        placeholder="********"
                        {...register('password')}
                        value={passwordValue}
                        onChange={handlePassworChange}
                    />
                    {errors.password && <span>{errors.password.message}</span>}
                    <button type="submit" className="w-44 h-10 mt-10 bg-orange-500 hover:bg-orange-700 font-semibold text-xl rounded-full">Login</button>
                    <Link href="/cadastrosection">
                    <p className="text-blue-900 hover:text-blue-500 mt-10 font-bold">Cadastre-se</p>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}