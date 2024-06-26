import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getAcompanhamentos } from "@/data/acompanhamento";
import Link from "next/link";
import { RedirectType, redirect } from "next/navigation";
import { CriarAcompanhamentoForm } from "../_components/criar-acompanhamento-form";
import { SeletorPacientes } from "@/app/hub/_components/seletores/seletor-pacientes";

export default async function NovoAcompanhamento() {
    const acompanhamentos = await getAcompanhamentos();
        
    return (
        <div className="w-full">
            <Title>Adicionar acompanhamento</Title>
            <Subtitle className="mb-4">Acompanhamentos do Unimed Lar</Subtitle>
            <CriarAcompanhamentoForm/>
        </div>
    );
}
  