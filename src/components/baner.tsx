import Image from "next/image";


export default function Baner() {
    return(
        <div className=" h-96 mt-8 w-4/5 bg-gradient-to-r 
            from-purple-500 to-blue-300">
          <Image src="/assets/b1.jpg" alt=" " width={500} 
            height={100} className=" object-fill w-full h-full" />
      </div>
    )
}