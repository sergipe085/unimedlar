
import { cn } from "@/lib/utils";
import React from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
} 

export function JPCard({ children, ...props }: Props) {
    return (
        <div className={cn(`flex h-full flex-col w-full bg-white rounded-3xl drop-shadow-[0_0_12px_rgba(26,87,169,0.20)]`, props.className)} >
            { children }
        </div>
    )
}