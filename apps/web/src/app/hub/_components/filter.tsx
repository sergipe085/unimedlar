"use client"

import { Button } from '@/app/_components/button';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { usePathname, useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

type Filter = {
    title: string;
    name: string;
    values: string[]
}

type Props = {
    filters: Filter[]
}

export function FilterComponent({ filters }: Props) {
    const searchParams = useSearchParams();

    const [values, setValues] = useState<Record<string, string>>(() => {
        const v: Record<string, string> = {};

        filters.forEach(f => {
            v[f.name] = searchParams.get(f.name) || "";
        })

        return v;
    });

    const [assunto, setAssunto] = useState(searchParams.get("assunto") || '');
    const [urgencia, setUrgencia] = useState(searchParams.get("urgencia") || '');
    const [status, setStatus] = useState(searchParams.get("status") || '');

    const router = useRouter();
    const pathname = usePathname();

    const handleFilterChange = () => {
        const params = new URLSearchParams();
        if (assunto && assunto != "TODOS") params.set("assunto", assunto);
        if (urgencia && urgencia != "TODOS") params.set("urgencia", urgencia);
        if (status && status != "TODOS") params.set("status", status);
        router.push(`${pathname}?${params.toString()}`);
    };

    function handleValueChange(name: string, value: string) {
        setValues({
            ...values,
            [name]: value
        })
    }

    useEffect(() => {
        if (values) {
            const params = new URLSearchParams();
            Object.keys(values).map(key => {
                if (values[key] && values[key] != "TODOS") params.set(key, values[key]);
            })
            router.push(`${pathname}?${params.toString()}`);
        }
    }, [values])

    return (
        <div className="flex flex-row mb-4 items-center gap-4">
            {
                filters?.map(filter => {
                    return (
                        <Select onValueChange={(value) => handleValueChange(filter.name, value)}>
                            <SelectTrigger>
                                <SelectValue placeholder={`Selecione o ${filter.name}`} />
                            </SelectTrigger>
                            <SelectContent className=''>
                                <SelectGroup>
                                <SelectLabel>{filter.title}</SelectLabel>
                                <SelectItem value={"TODOS"}>TODOS</SelectItem>
                                    {
                                        filter.values?.map((v: string) => {
                                            return (
                                                <SelectItem value={v}>{v}</SelectItem>
                                            )
                                        })
                                    }   
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    )
                })
            }
            {/* <Select onValueChange={(value) => setAssunto(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Selecione o assunto" />
                </SelectTrigger>
                <SelectContent className=''>
                    <SelectGroup>
                    <SelectLabel>Assuntos</SelectLabel>
                    <SelectItem value={"TODOS"}>TODOS</SelectItem>
                    {
                            assuntos?.map((assunto: string) => {
                                return (
                                    <SelectItem value={assunto}>{assunto}</SelectItem>
                                )
                            })
                        }   
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => setUrgencia(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Selecione a prioridade" />
                </SelectTrigger>
                <SelectContent className=''>
                    <SelectGroup>
                    <SelectLabel>Prioridades</SelectLabel>
                    <SelectItem value={"TODOS"}>TODOS</SelectItem>
                    {
                            urgencias?.map((urgencia: string) => {
                                return (
                                    <SelectItem value={urgencia}>{urgencia}</SelectItem>
                                )
                            })
                        }   
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select onValueChange={(value) => setStatus(value)}>
                <SelectTrigger>
                    <SelectValue placeholder="Selecione o status" />
                </SelectTrigger>
                <SelectContent className=''>
                    <SelectGroup>
                    <SelectLabel>Status</SelectLabel>
                    <SelectItem value={"TODOS"}>TODOS</SelectItem>
                    {
                            statuses?.map((status: string) => {
                                return (
                                    <SelectItem value={status}>{status}</SelectItem>
                                )
                            })
                        }   
                    </SelectGroup>
                </SelectContent>
            </Select> */}
            <Button onClick={handleFilterChange}>Filtrar</Button>
        </div>
    );
};