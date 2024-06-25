"use client"

import { criarAcompanhamento } from "@/actions/acompanhamentos/criarAcompanhamento";
import { useFormStatus } from "react-dom";

type SubmitButtonProps = {
    label: string;
    loading: React.ReactNode;
  };
  
export function SubmitButton({ label, loading }: SubmitButtonProps) {
    const { pending } = useFormStatus();

    return (
        <button disabled={pending} type="submit" className="border-2">
        {pending ? loading : label}
        </button>
    );
};

export function CriarAcompanhamentoForm() {
    const { pending } = useFormStatus();

    return (
      <form action={criarAcompanhamento} className="flex flex-col gap-y-2">
        <label htmlFor="text">Text</label>
        <textarea id="text" name="text" className="border-2" />
  
        <SubmitButton label="Create" loading="Creating ..." />
      </form>
    )
}