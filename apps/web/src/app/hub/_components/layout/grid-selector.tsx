"use client"

import Link from "next/link";
import { BarChart, BarChart2Icon, Icon, LucideIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { JPCard } from "@/app/_components/layout/jp-card";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Module } from "./module";

interface ISeletorGridProps {
    options: {
        icon: LucideIcon,
        title: string;
        to: string;
        activated?: boolean;
        appears: boolean;
    }[]
}

export function GridSelector({ options }: ISeletorGridProps){
    const router = useRouter();

    return(
        <div className="max-w-[1180px] flex flex-col gap-4 items-start justify-center pt-8">
            <Subtitle>acesse um modulo</Subtitle>
            <JPCard className="flex flex-row flex-wrap p-8 gap-8 items-center justify-between">
                {
                    options.map(option => {
                        // const Icon = option.icon;

                        return (
                            <div className=" cursor-pointer" onClick={() => {
                                router.push(option.to);
                            }}>
                                {/* {Icon} */}
                                <p>{option.title}</p>
                            </div>
                            // <Module className="" active={true} name={option.title}/>
                        )
                    })
                }
            </JPCard>
        </div>
    )
}