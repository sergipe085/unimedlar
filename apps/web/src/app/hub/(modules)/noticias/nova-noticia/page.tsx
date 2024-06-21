"use client"

import { Button } from "@/app/_components/button";
import { Title } from "@/app/_components/text/title";
import { TitleWithAction } from "@/app/_components/title-with-action";
import { MdEditor } from 'md-editor-rt';
import 'md-editor-rt/lib/style.css';
import { useState } from "react";
import { addNoticia } from "../api/addNoticia";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";

export default function NovaNoticia() {
  const [text, setText] = useState('# Hello Editor');
  const [title, setTitle] = useState<string>("");
  const [capa, setCapa] = useState<string>("");
  const router = useRouter();

  async function handleSalvarNoticia() {
    const noticia = await addNoticia({
      titulo: title,
      descricao: text,
      imagens: [capa]
    })

    router.push("/hub/noticias/" + noticia.id);
  }

  return (
    <>
      <TitleWithAction title="Nova notícia" action={{
        name: "Salvar",
        method: handleSalvarNoticia
      }}/>
      <div className="flex flex-col my-2 gap-2 w-full">

        <Input className="w-full" value={title} onChange={(e) => {
          setTitle(e.target.value)
        }} placeholder="titulo"></Input>
        <Input className="w-full" value={capa} onChange={(e) => {
          setCapa(e.target.value)
        }} placeholder="url da capa"></Input>
        <MdEditor modelValue={text} onChange={setText} />
      </div>
    </>
  );
}