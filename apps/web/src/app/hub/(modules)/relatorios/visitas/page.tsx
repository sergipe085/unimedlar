import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/mytable";
import { getChamados } from "@/data/chamados";
import { getPacientes } from "@/data/pacientes";
import { getUsuarios } from "@/data/usuarios";
import { getVisitas } from "@/data/visitas";

export default async function RelatorioVisitas() {
    const visitas = await getVisitas();
        
    return (
        <div className="w-full">
            <Title>Relatório Visitas</Title>
            <Subtitle className="mb-4">Visitas domiciliares realizadas e previstas</Subtitle>
            <>
                <TableHeader>PACIENTE,DATA PREVISTA,NOTA AVALIACAO,PROFISSIONAL COMPARECEU,PROFISSIONAL CUMPRIU HORÁRIO</TableHeader>
                <TableBody>
                    {
                        visitas.map(visita => {
                            return (
                                <TableRow>
                                    {
                                        [
                                            visita.atendimento?.paciente.nome,
                                            visita.dataVisita.toLocaleDateString("pt-BR"),
                                            visita.avaliacao?.nota,
                                            visita.avaliacao?.profissionalCompareceu ? "SIM" : "NÃO",
                                            visita.avaliacao?.profissionalCumpriuCargaHoraria ? "SIM" : "NÃO",
                                            // visita.iniciadaEm?.toLocaleString("pt-BR") ?? "-",
                                            // visita.finalizadaEm?.toLocaleString("pt-BR") ?? "-",
                                        ] as string[]
                                    }
                                </TableRow>
                                    
                            )
                        })
                    }
                </TableBody>
            </>
        </div>
    );
}
  