"use client"

import { useRouter } from "next/navigation"
import { Module } from "./module"
import { useState } from "react"
import { BarChart, ClipboardPlus, LayoutDashboard, LucideIcon, Megaphone, NotepadText, Settings, User } from "lucide-react"
import { cn } from "@/schemas/lib/utils"
import { Icon } from "@/app/_components/icons/Icon"
import { Subtitle } from "@/app/_components/text/subtitle"
import UnilarIcon from "../../../../../public/unilar-verde.svg"
import Image from "next/image"

type Props = {

}

type Module = {
    name: string;
    to:  string;
}

const modules = [
    {
        name: "Dashboard",
        to: "/hub/dashboard",
        Icon: LayoutDashboard
    },
    {
        name: "Chamados",
        to: "/hub/chamados",
        Icon: Megaphone
    },
    {
        name: "Pacientes",
        to: "/hub/pacientes",
        Icon: ClipboardPlus
    },
    {
        name: "Relatórios",
        to: "/hub/relatorios",
        Icon: NotepadText
    },
    {
        name: "Usuários",
        to: "/hub/usuarios",
        Icon: User
    },
    {
        name: "Configurações",
        to: "/hub/configuracoes",
        Icon: Settings
    }
]

export function Sidebar() {
    const [activeModule, setActiveModule] = useState<number>(0);
    const router = useRouter();

    function handleClickModule(module: Module, index: number) {
        setActiveModule(index);
        router.replace(module.to);
    }

    return (
        <div className=" lg:flex hidden w-full px-4 max-w-64 shadow-lg h-full bg-white flex-col items-center pt-4">
            <div className=" cursor-pointer" onClick={() => router.replace("/hub")}>
                {/* <img width={48} height={48} src="/jp-hub-icon.png"></img> */}
                <Image src={UnilarIcon} width={48} height={48} alt="Unilar Logo"/>
            </div>
            <div className="h-full w-full flex flex-col items-start pt-12 pl-4 gap-6">
                {
                    modules.map((module, index) => (
                        <SidebarUnit 
                            onClick={() => handleClickModule(module, index)}
                            key={index}
                            active={index == activeModule}
                            name={module.name} 
                            Icon={module.Icon}
                        />
                    ))
                }
            </div>
        </div>
    )
}

type SidebarUnitProps = {
    active: boolean;
    name: string;
    Icon: LucideIcon
} & React.HTMLAttributes<HTMLDivElement>

function SidebarUnit({ active, name, Icon, className, ...props }: SidebarUnitProps) {
    return (
        <div
            className={cn(`flex items-start justify-start gap-4 w-full flex-row cursor-pointer`, className)}
            { ...props }
        >
            <Icon color="#173509"/>
            <Subtitle className={`${active ? "font-bold" : "font-normal"} text-unimed-primary text-md`}>{name}</Subtitle>
        </div>
    )
}