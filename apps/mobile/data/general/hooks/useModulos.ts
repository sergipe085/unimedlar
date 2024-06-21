import { useEffect, useState } from "react";
import { Modulo } from "../types/modulo";
import { getModulos } from "../api/get-modulos";
import { getModulosEspecificos } from "../api/get-modulos-especificos";
import { useLoading } from "./useLoading";

export function useModulos() {
    const [modulos, setModulos] = useState<Modulo[]>([]);
    const { run } = useLoading();
    // const [modulosEspecificos, setModulosEspecificos] = useState<Modulo[]>([]);

    useEffect(() => {
        run(async () => {
            const modulos = await getModulos();
            setModulos(modulos);
        });
    }, [])

    return {
        modulos
    }
}

type Props = {
    idModulo: string
}
export function useModulosEspecificos({ idModulo }: Props) {
    const [modulos, setModulos] = useState<Modulo>();
    const { run } = useLoading();

    useEffect(() => {
        run(async () => {
            const modulos = await getModulosEspecificos(idModulo);
            setModulos(modulos);
        })
    }, [])

    return {
        modulos
    }
}

