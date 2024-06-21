"use client"

import { Markdown } from "@/app/_components/markdown";
import { Title } from "@/app/_components/text/title";
import { useDetalhesNoticia } from "../api/detalhesNoticia";

type Params = {
  id: string;
}

export default function Noticia({ params: { id } }: { params: Params }) {
  const { noticia } = useDetalhesNoticia(id);

  return (
    <>
      <Title>{ noticia?.titulo }</Title>
      <Markdown content={noticia?.descricao}/>
    </>
  );
}