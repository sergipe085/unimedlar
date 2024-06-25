import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { getChamados } from "@/data/chamados";
import { getPacientes } from "@/data/pacientes";
import { getUsuarios } from "@/data/usuarios";

export default async function Chamados() {
    const chamados = await getChamados();
        
    return (
        <div className="w-full">
            <Title>Chamados</Title>
            <Subtitle className="mb-4">Últimos chamados da ouvidoria</Subtitle>
            <>
                <TableHeader>ASSUNTO,URGENCIA,STATUS,RECLAMACAO,REALIZADO EM</TableHeader>
                <TableBody>{
                    chamados.map(chamado => {
                        return <TableRow>
                            {
                                [chamado.assunto, chamado.urgencia, chamado.status, chamado.reclamacao, chamado.realizadoEm.toLocaleString("pt-BR")]
                            }
                        </TableRow>
                    })
                }</TableBody>
            </>
        </div>
    );
}
  