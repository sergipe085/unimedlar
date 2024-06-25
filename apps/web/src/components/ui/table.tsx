import { JPCard } from "@/app/_components/layout/jp-card";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Title } from "@/app/_components/text/title";
import { cn } from "@/schemas/lib/utils";
import React, { HTMLAttributes } from "react";

type TableProps = {
    children: React.ReactNode;
}

export function Table({ children }: TableProps) {
    <div className="w-full">
        <div className=" flex flex-col w-full h-full gap-1 md:gap-2 flex-wrap pt-8">
            { children }
        </div>
    </div>
}

type TableHeaderProps = {
    children: string;
}

export function TableHeader({ children }: TableHeaderProps) {
    const comps = children.split(",");

    return (
        <JPCard className="p-2 md:p-8 h-12 rounded-xl md:rounded-2xl mb-2 flex items-center flex-row justify-center">
            {
                comps.map(comp => {
                    return (
                        <Subtitle className="w-full font-bold text-[8px] md:text-lg">{ comp }</Subtitle>
                    )
                })
            }
        </JPCard>
    )
}

type TableBodyProps = {
    children: any[];
}

export function TableBody({ children }: TableBodyProps) {
    return (
        <div className="w-full flex flex-col gap-2">
            {
                children.map((sub, index) => {
                    return sub
                })
            }
            
        </div>
    )
}

type TableRowProps = {
    children: string[]
} & HTMLAttributes<HTMLDivElement>;

export function TableRow({ children, className, ...props }: TableRowProps) {
    return (
        <JPCard className={cn(" hover:bg-gray-100 cursor-pointer transition-all p-2 md:p-8 h-12 rounded-xl md:rounded-2xl flex items-center flex-row justify-center", className)}>
            {
                children.map((comp, index) => {
                    return (
                        <Subtitle key={`sub_${index}_${comp}`} className="w-full text-[8px] md:text-lg text-left">{comp}</Subtitle>
                    )
                })
            }
        </JPCard> 
    )
}