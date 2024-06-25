import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { TableBody, TableHeader } from "@/components/ui/table";
import { getPacientes } from "@/data/pacientes";
import { getUsuarios } from "@/data/usuarios";

export default async function Usuarios() {
    const usuarios = await getUsuarios();
        
    return (
        <div className="w-full">
            <Title>Usuários</Title>
            <Subtitle className="mb-4">Base de dados de usuários</Subtitle>
            <>
                <TableHeader>NOME,LOGIN,ID</TableHeader>
                <TableBody>{
                    usuarios.map(usuario => {
                        return [usuario.nome, usuario.login,usuario.id]
                    })
                }</TableBody>
            </>
        </div>
    );
}
  