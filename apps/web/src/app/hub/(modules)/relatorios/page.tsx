import { Title } from "@/app/_components/text/title";
import { Calendar } from "lucide-react";
import { GridSelector } from "../../_components/layout/grid-selector";
import { Subtitle } from "@/app/_components/text/subtitle";

export default function RelatorioVisitas() {
    return (
        <>
            <Title>Relatórios</Title>
            <Subtitle>Acesse relatórios detalhados</Subtitle>
            <GridSelector 
                options={[
                    {
                        to: "/hub/relatorios/visitas",
                        title: "Visitas",
                        icon: null,
                        activated: true,
                        appears: true
                    },
                ]}
            />
        </>
    );
}
  