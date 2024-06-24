import { JPCard } from "@/app/_components/layout/jp-card";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { Calendar } from "lucide-react";

export default function Dashboard() {
    return (
        <>
            <div className="flex flex-row items-end gap-4">
                <Title>Dashboard</Title>
                <Subtitle>Hoje</Subtitle>   
            </div>

            
            

            <div className="w-full">
                <Subtitle className="font-semibold mt-8">Indicadores de Qualidade</Subtitle>
                <Subtitle className="mt-2 mb-2">Dados gerais</Subtitle>
                <div className=" flex flex-col md:flex-row w-full h-full gap-4">
                    <JPCard className="p-8 w-full">
                        <Title>8.9</Title>
                        <Subtitle>nota média</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>7.9</Title>
                        <Subtitle>pontualidade</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>9.8</Title>
                        <Subtitle>competencia</Subtitle>
                    </JPCard>
                    <JPCard className="p-8 w-full">
                        <Title>7.6</Title>
                        <Subtitle>profissionalismo</Subtitle>
                    </JPCard>
                </div>
                <div className=" flex flex-col w-full h-full gap-1 md:gap-2 flex-wrap pt-8">
                    <Subtitle className="mt-2 mb-2">Dados por cooperativa</Subtitle>
                    <JPCard className="p-2 md:p-8 h-12 rounded-xl md:rounded-2xl flex items-center flex-row justify-center">
                        <Subtitle className="w-full font-bold text-[8px] md:text-lg">COOP.</Subtitle>
                        <Subtitle className="w-full font-bold text-left text-[8px] md:text-lg">MEDIA</Subtitle>
                        <Subtitle className="w-full font-bold text-left text-[8px] md:text-lg">PROF.</Subtitle>
                        <Subtitle className="w-full font-bold text-left text-[8px] md:text-lg">COMP.</Subtitle>
                        <Subtitle className="w-full font-bold text-left text-[8px] md:text-lg">PONT.</Subtitle>
                        <Subtitle className="w-full font-bold text-left text-[8px] md:text-lg">VISITAS</Subtitle>
                    </JPCard>
                    <JPCard className="p-2 md:p-6 h-8 rounded-lg md:rounded-2xl flex items-center flex-row justify-between">
                        <Subtitle className="w-full text-[8px] md:text-lg">COOP A</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">12/19</Subtitle>
                    </JPCard>
                    <JPCard className="p-2 md:p-6 h-8 rounded-lg md:rounded-2xl flex items-center flex-row justify-between">
                        <Subtitle className="w-full text-[8px] md:text-lg"> A</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">8.9</Subtitle>
                        <Subtitle className="w-full text-[8px] md:text-lg text-left">17/23</Subtitle>
                    </JPCard>
                </div>
            </div>
        </>
    );
}
  