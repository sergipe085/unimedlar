"use client"

import React, { useState } from 'react';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { TiposProfissionais } from '@prisma/client';
import { AdicionarAtendimentoDTO, adicionarAtendimentoSchema } from '@/schemas/acompanhamento';
import { adicionarAtendimento } from '@/actions/acompanhamentos/adicionarAtendimento';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Subtitle } from '@/app/_components/text/subtitle';
import { Button } from '@/app/_components/button';
import { MultiSelector, MultiSelectorTrigger, MultiSelectorInput, MultiSelectorContent, MultiSelectorList, MultiSelectorItem } from '@/components/ui/multiselect';
import { setValue } from '@syncfusion/ej2-base';
import { SeletorProcedimentos } from '@/app/hub/_components/seletor-procedimentos';
import { SeletorMedicamentos } from '@/app/hub/_components/seletor-medicamentos';
import { Plus, Trash, Trash2 } from 'lucide-react';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Title } from '@/app/_components/text/title';

type Props = {
    idAcompanhamento: string;
}

const AdicionarAtendimentoForm = ({ idAcompanhamento }: Props) => {
    const [data, setData] = useState<AdicionarAtendimentoDTO>({
        idAcompanhamento,
        profissionaisNecessarios: [] as any[],
        procedimentos: [
            {
                medicamentoId: "",
                procedimentoId: "",
                quantidade: 1,
                tipo: "procedimento"
            }
        ]
    } as AdicionarAtendimentoDTO);
    const [tipo, setTipo] = useState<"medicamento" | "procedimento">("procedimento");
    const [error, setError] = useState<string>();

    async function handleSubmit() {
        try {

            await adicionarAtendimento({
                ...data
            })
        }
        catch(err: any) {
            setError("Erro ao criar atendimento. Verifique todos os dados.")
            
        }
    }

    return (
        <div>
            <Title>Adicione um atendimento</Title>
            <div>
                <Label>Titulo do atendimento</Label>
                <Input 
                    type='number' 
                    placeholder='Digite o titulo do atendimento'
                    value={data.intervaloEmDia} 
                    onChange={(e) => setData({ ...data, intervaloEmDia: Number(e.currentTarget.value) })}
                />
            </div>
            <div>
                <Label>Intervalo em dias</Label>
                <Input 
                    type='number' 
                    placeholder='Intervalo em dias que vai repetir o atendimento'
                    value={data.intervaloEmDia} 
                    onChange={(e) => setData({ ...data, intervaloEmDia: Number(e.currentTarget.value) })}
                />
            </div>

            <div className='w-full'>
                <Label>Profissionais necessarios</Label>
                <MultiSelector values={data.profissionaisNecessarios} onValuesChange={(values) => setData({ ...data, procedimentos: data.procedimentos, profissionaisNecessarios: values as any[] })} loop className="cursor-pointer">
                    <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Selecione os tipos de profissionais necessários" />
                    </MultiSelectorTrigger>
                    <MultiSelectorContent>
                        <MultiSelectorList>
                            <MultiSelectorItem value={TiposProfissionais.ENFERMEIRO}>Endermeiro</MultiSelectorItem>
                            <MultiSelectorItem value={TiposProfissionais.FISIOTERAPEUTA}>Fisioterapeuta</MultiSelectorItem>
                            <MultiSelectorItem value={TiposProfissionais.MEDICO}>Medico</MultiSelectorItem>
                            <MultiSelectorItem value={TiposProfissionais.TERAPEUTA}>Terapeuta</MultiSelectorItem>
                        </MultiSelectorList>
                    </MultiSelectorContent>
                </MultiSelector>
            </div>
            <div>
                <Subtitle>Etapas do atendimento</Subtitle>
                
                <Table>
                    <TableHeader>
                        <TableHead>Etapa</TableHead>
                        <TableHead>Tipo</TableHead>
                        <TableHead>Procedimento</TableHead>
                        <TableHead>Quantidade</TableHead>
                        <TableHead>Duração</TableHead>
                        <TableHead>Ações</TableHead>
                    </TableHeader>
                    <TableBody>
                        {
                            data.procedimentos?.map((proced, index) => {
                                return (
                                    <TableRow>
                                        <TableCell><p className='font-normal text-lg'>{index + 1}.</p></TableCell>
                                        <TableCell>
                                            <Select defaultValue='procedimento' onValueChange={v => {
                                                const newProcedimentos = [...data.procedimentos];
                                                newProcedimentos[index].tipo = v as any;
                                                setData({
                                                    ...data,
                                                    procedimentos: newProcedimentos
                                                })
                                            }}>
                                                <SelectTrigger>
                                                    <SelectValue placeholder="TIPO" />
                                                </SelectTrigger>
                                                <SelectContent className=''>
                                                    <SelectGroup>
                                                    <SelectLabel>Tipo de etapa</SelectLabel>
                                                        <SelectItem value="procedimento">PROCEDIMENTO</SelectItem>
                                                        <SelectItem value="medicamento">MEDICAMENTO</SelectItem>
                                                    </SelectGroup>
                                                </SelectContent>
                                            </Select>
                                        </TableCell>
                                        <TableCell>
                                            {
                                                proced.tipo == "procedimento" ? (
                                                    <SeletorProcedimentos/>
                                                ) : (
                                                    <SeletorMedicamentos/>
                                                )
                                            }
                                        </TableCell>
                                        <TableCell>
                                            <Input 
                                                className='w-24'
                                                type='number' 
                                                min={1}
                                                placeholder='Quantidade'
                                                value={proced.quantidade} 
                                                onChange={(e) => {
                                                    const newProcedimentos = [...data.procedimentos];
                                                    newProcedimentos[index].quantidade = Number(e.currentTarget.value);
                                                    setData({
                                                        ...data,
                                                        procedimentos: newProcedimentos
                                                    })
                                                    setData({ ...data, intervaloEmDia: Number(e.currentTarget.value) })
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Input 
                                                className='w-24'
                                                type='number' 
                                                min={0}
                                                max={24}
                                                placeholder='Duração'
                                                value={proced.duracaoEmHoras} 
                                                onChange={(e) => {
                                                    const newProcedimentos = [...data.procedimentos];
                                                    newProcedimentos[index].duracaoEmHoras = Number(e.currentTarget.value);
                                                    setData({
                                                        ...data,
                                                        procedimentos: newProcedimentos
                                                    })
                                                    setData({ ...data, intervaloEmDia: Number(e.currentTarget.value) })
                                                }}
                                            />
                                        </TableCell>
                                        <TableCell>
                                            <Trash2 onClick={() => {
                                                var newProcedimentos = [...data.procedimentos];
                                                console.log(data.procedimentos)
                                                newProcedimentos.splice(index, 1);
                                                setData({
                                                    ...data,
                                                    procedimentos: newProcedimentos
                                                })
                                            }} className=' text-red-700 w-24 mb-2 cursor-pointer' />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell colSpan={4}>Total</TableCell>
                            <TableCell className="text-left">$2,500.00</TableCell>
                            <TableCell className="text-left">
                                <Plus onClick={() => {
                                    setData({ ...data, procedimentos: [...data.procedimentos, {
                                        medicamentoId: "",
                                        procedimentoId: "",
                                        quantidade: 1,
                                        duracaoEmHoras: 1,
                                        tipo: "procedimento"
                                    }] })
                                }} className='  text-unimed-primary w-24 mb-2 cursor-pointer' />
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>

            <Button onClick={handleSubmit}>Adicionar Atendimento</Button>
            <p>{error}</p>
        </div>
    )

}

export default AdicionarAtendimentoForm;
