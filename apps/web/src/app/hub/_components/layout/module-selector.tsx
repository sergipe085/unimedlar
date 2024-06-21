import { useRouter } from "next/navigation"
import { Module } from "./module"
import { useState } from "react"
import { BarChart } from "lucide-react"

type Props = {

}

type Module = {
    name: string;
    to:  string;
}

const modules = [
    {
        name: "bi",
        to: "/hub/bi"
    },
    {
        name: "painel de chamadas",
        to: "/hub/painel-de-chamadas"
    },
    {
        name: "regulação",
        to: "/hub/regulacao"
    }
]

export function ModuleSelector() {
    const [activeModule, setActiveModule] = useState<number>(0);
    const router = useRouter();

    function handleClickModule(module: Module, index: number) {
        setActiveModule(index);
        router.replace(module.to);
    }

    return (
        <div className=" lg:flex hidden rounded-3xl w-full px-4 max-w-28 shadow-lg h-full bg-white flex-col items-center pt-4">
            <div className=" cursor-pointer" onClick={() => router.replace("/hub")}>
                <img width={48} height={48} src="/jp-hub-icon.png"></img>
            </div>
            <div className="h-full flex flex-col items-center pt-12 gap-4">
                {
                    modules.map((module, index) => (
                        <Module 
                            onClick={() => handleClickModule(module, index)}
                            key={index}
                            active={index == activeModule}
                            name={module.name} 
                        />
                    ))
                }
                {/* <Module active={false} name={"bi"}/>
                <Module active={true} name={"painel de chamada"}/>
                <Module active={false} name={"regulacao"}/>
                <Module active={false} name={"teste"}/> */}
                {/* <h1 className="">Options</h1> */}
            </div>
        </div>
    )
}