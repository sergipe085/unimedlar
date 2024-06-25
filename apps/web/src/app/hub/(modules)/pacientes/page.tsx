import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader, TableRow } from "@/components/ui/table";
import { getPacientes } from "@/data/pacientes";

export default async function Pacientes() {
    const pacientes = await getPacientes();
        
    return (
        <div className="w-full">
            <Title>Pacientes</Title>
            <Subtitle className="mb-4">Base de dados de pacientes</Subtitle>
            <>
                <TableHeader>NOME,CPF,CNS,ENDERECO</TableHeader>
                <TableBody>{
                    pacientes.map(paciente => {
                        return <TableRow>{
                            [paciente.nome, paciente.cpf, paciente.cns, paciente.endereco]
                        }</TableRow>
                    })
                }</TableBody>
            </>
        </div>
    );
}
  