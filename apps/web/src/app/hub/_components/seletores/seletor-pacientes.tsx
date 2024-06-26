"use client"

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/api";
import { Paciente, } from "@prisma/client";
import { SelectProps } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

type Props = {

} & SelectProps

export function SeletorPacientes({ ...props }: Props) {
    const [pacientes, setPacientes] = useState<Paciente[]>([]);

    async function fetchPacientes() {
        const { data } = await api.get("/data/pacientes");

        setPacientes(data.pacientes);
    }

    useEffect(() => {
        fetchPacientes()
    }, [])

    return (
        <Select { ...props }>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um procedimento" />
            </SelectTrigger>
            <SelectContent className=''>
                <SelectGroup>
                <SelectLabel>Pacientes</SelectLabel>
                    {
                        pacientes?.map(paciente => {
                            return (
                                <SelectItem value={paciente.id}>{paciente.nome}</SelectItem>
                            )
                        })
                    }                    
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}