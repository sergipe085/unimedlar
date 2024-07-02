"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/api";
import { Procedimento } from "@prisma/client";
import { SelectProps } from "@radix-ui/react-select";
import { HTMLAttributes, InputHTMLAttributes, useEffect, useState } from "react";

type Props = {

} & SelectProps

export function SeletorProcedimentos({ ...props }: Props) {
    const [procedimentos, setProcedimentos] = useState<Procedimento[]>([]);

    async function fetchProcedimentos() {
        const { data } = await api.get("/data/procedimentos");

        setProcedimentos(data.procedimentos);
    }

    useEffect(() => {
        fetchProcedimentos()
    }, [])

    return (
        <Select { ...props }>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um procedimento" />
            </SelectTrigger>
            <SelectContent className=''>
                <SelectGroup>
                <SelectLabel>Procedimentos</SelectLabel>
                    {
                        procedimentos?.map(proced => {
                            return (
                                <SelectItem value={proced.id}>{proced.nome}</SelectItem>
                            )
                        })
                    }                    
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}