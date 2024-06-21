"use client"

import { Markdown } from "@/app/_components/markdown";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { useDetalhesNoticia } from "@/app/hub/(modules)/noticias/api/detalhesNoticia";
import Image from "next/image";

type Params = {
  id: string;
}

export default function Noticia({ params: { id } }: { params: Params }) {
  const { noticia } = useDetalhesNoticia(id);

  if (!noticia) {
    return (
      <div className="w-full h-full items-center justify-center">
        <Subtitle>Carregando...</Subtitle>
      </div>
    )
  }

  return (
    <>
      {/* <div className="w-full">
        <Image src={"/image.png"} className="z-0 object-cover w-full h-[20%] top-0" width={128} height={128} alt={""}/>
        <div className="w-full bg-[#183A67da] z-10 top-0 h-[20%]">
        </div>
      </div> */}
      <div className="h-72 w-full bg-gradient-to-r from-[#183A67] to-indigo-500"></div>

      <div className="px-4 md:px-24 py-16">
        <Markdown content={noticia.descricao}/>
      </div>
    </>
  );
}