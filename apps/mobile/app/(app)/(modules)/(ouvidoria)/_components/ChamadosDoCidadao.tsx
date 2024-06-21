import { ScrollView } from "react-native";
import { useOuvidoriaChamados } from "../_data/hooks/useOuvidoriaChamados";
import { ChamadoUnit } from "./ChamadoUnit";

export function ChamadosDoCidadao() {
    const { chamados } = useOuvidoriaChamados();

    return (
        <ScrollView className="h-full w-full">
            {
                chamados?.map(chamado => {
                    return (
                        <ChamadoUnit key={chamado.id} chamado={chamado}/>
                    )
                })
            }
        </ScrollView>
    )
}