"use client"

import { cn } from "../../lib/utils";
import { ChildrenProps } from "@/types";
import { Subtitle } from "./text/subtitle";
import { Spinner } from "react-activity";
import { useState } from "react";

type Props = {
    
} & ChildrenProps & React.ButtonHTMLAttributes<HTMLButtonElement>

export function Button({ children, onClick, ...props }: Props) {
    const [loading, setLoading] = useState<boolean>(false);

    async function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setLoading(true);

        await new Promise(async (res, rej) => {
            if (onClick) {
                await onClick(e);
                res(null);
            }
            rej();
        })

        setLoading(false);
    }

    return (
        <button disabled={loading} className={cn("bg-[#008D52] p-4 flex items-center justify-center rounded-2xl", props.className)} onClick={handleClick} {...props}>
            <Subtitle className={`${loading ? "text-[#008D52]" : "text-[#ffffff]"} font-semibold text-md`}>{children}</Subtitle>
            
            {
                loading && (
                    <Spinner style={{
                        position: "absolute"
                    }} speed={1} size={16} color="#ffffff"/>
                )
            }
        </button>
    )
}