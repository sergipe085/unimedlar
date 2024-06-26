import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { api } from "@/lib/api";
import { Medicamento } from "@prisma/client";
import { SelectProps } from "@radix-ui/react-select";
import { useEffect, useState } from "react";

type Props = {

} & SelectProps

export function SeletorMedicamentos({ ...props }: Props) {
    const [medicamentos, setMedicamentos] = useState<Medicamento[]>([]);

    async function fetchMedicamentos() {
        const { data } = await api.get("/data/medicamentos");

        setMedicamentos(data.medicamentos);
    }

    useEffect(() => {
        fetchMedicamentos()
    }, [])

    return (
        <Select { ...props }>
            <SelectTrigger>
                <SelectValue placeholder="Selecione um medicamento" />
            </SelectTrigger>
            <SelectContent className=''>
                <SelectGroup>
                <SelectLabel>Medicamentos</SelectLabel>
                {
                        medicamentos?.map(med => {
                            return (
                                <SelectItem value={med.id}>{med.nome}</SelectItem>
                            )
                        })
                    }   
                </SelectGroup>
            </SelectContent>
        </Select>
    )
}