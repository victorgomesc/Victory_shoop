import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react";


export default function Footer() {
    return(
        <footer className=" h-56 mt-10 w-full bg-gray-800">
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
    )
}