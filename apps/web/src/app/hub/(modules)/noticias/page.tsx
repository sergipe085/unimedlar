"use client"

import { TitleWithAction } from "@/app/_components/title-with-action";
import { useRouter } from "next/navigation";
import { useNoticias } from "./api/listNoticias";
import { Subtitle } from "@/app/_components/text/subtitle";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { deleteNoticia } from "./api/deleteNoticia";

export default function NoticiasHome() {
  const router = useRouter();
  const { noticias } = useNoticias();

  async function test() {
    router.push("noticias/nova-noticia")
  }

  async function handleDeleteNoticia(id: string) {
    await deleteNoticia({
      id
    });
  }

  return (
    <>
      <TitleWithAction title="Notícias" action={{
        name: "Nova notícia",
        method: test
      }}/>
      <div className="h-full w-full gap-2 flex flex-col mt-4">
        {
          noticias?.map(noticia => {
            return (
             
                <Card className="bg-white p-4 w-full flex flex-row justify-between">
                   <Link className="" href={`noticias/${noticia.id}`}>
                    <Subtitle>{noticia.titulo}</Subtitle>
                  </Link>
                  <Button onClick={async () => await handleDeleteNoticia(noticia.id ?? "")}><Trash/></Button>
                </Card>
            )
          })
        }
      </div>
    </>
  );
}
