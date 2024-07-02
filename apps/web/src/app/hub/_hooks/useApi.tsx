"use client"

import { api } from "../../../lib/api";
import { redirect } from "next/navigation";
import React, { createContext, useCallback, useContext,  useEffect,  useState } from "react";

interface IResumo {
    indicadores: IIndicador[];
}

interface IUser {
    nome: string;
    cpf: string;
    cargo: Cargo;
}

export interface Cargo {
    nome: string;
    modulos: string[];
    is_root: boolean;
}

interface IAuthData {
    user: {
        name: string;
    }
}

interface IGetIndicadorById {
    resumo: IIndicador;
    valores: any[];
}

interface IIndicador {
    id: string;
    id_indicador: number;
    nome: string;
    numerador: number;
    denominador: number;
    meta: number;
}

interface ApiState {
    token: string;
    user: IUser;
    resumo: IResumo;
    auth_data: IAuthData;
    indicadorById: IGetIndicadorById;
    config: Config | null;
}

interface SignInCredentials {
    username: string;
    password: string;
    token_notification: string;
}

interface ApiContextData {
    token: string;
    user: IUser;
    resumo: IResumo;
    auth_data: IAuthData;
    indicadorById: IGetIndicadorById;
    config: Config | null;
    loading: boolean;
    signIn({ username, password, token_notification }: SignInCredentials): Promise<void>;
    signOut(): void;
    getResumo(): Promise<any>;
    getIndicadorById(id: string): Promise<IGetIndicadorById>;
    checkAuthValid(): Promise<void>;
}

type Config = {
    regulacao: {
        agendamentoSimplificado: boolean;
    }
}

const ApiContext = createContext<ApiContextData>({} as ApiContextData);

interface IApiProvider {
    children: React.ReactNode;
}

export function ApiProvider({ children }: IApiProvider) {
    const [data, setData] = useState<ApiState>({} as ApiState)
    const [loading, setLoading] = useState(false);

    function getState() {
        console.log("GET STATE (AUTH DATA ABAIXO)")
        console.log(data.auth_data);
        console.log(data);
        console.log("ASUHDASUDH")
        const token = localStorage.getItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:token`);
        const user = JSON.parse(localStorage.getItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:user`) ?? "{}");
        const auth_data = JSON.parse(localStorage.getItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:auth_data`) ?? "{}");
        if (token && user) {
            api.defaults.headers.common['Authorization'] = "Bearer " + token;
            setData({
                token,
                user,
                auth_data,
                resumo: {} as IResumo,
                indicadorById: {} as IGetIndicadorById,
                config: null
            })
            console.log({
                token,
                user,
                auth_data,
                resumo: {} as IResumo,
                indicadorById: {} as IGetIndicadorById,
                config: null
            })
            return {
                token,
                user,
                auth_data,
                resumo: {} as IResumo,
                indicadorById: {} as IGetIndicadorById,
                config: null
            }
        }

        return null;
    }

    useEffect(() => {
        setLoading(true);
        const state = getState();
        if (state) {
            console.log(state)
            setData(state);
        }
        
    }, [])

    const signIn = useCallback(async ({username, password, token_notification }: SignInCredentials) => {
    
            const response = await api.post(`/login`, {
                login: username, 
                password,
            });
    
            const { token, user, pec_sus } = response.data;
            api.defaults.headers.common['Authorization'] = "Bearer " + token;
            
            
            
            // const auth_data_Response = await api.get("/auth")
            const auth_data = { ...response.data };
            
            localStorage.setItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:token`, token);
            localStorage.setItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:user`, JSON.stringify(user))
            localStorage.setItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:auth_data`, JSON.stringify(auth_data))    
    
            // const configResponse = await api.get("/config")

            // console.log(configResponse.data.data);

            setData({ 
                token, 
                user,
                auth_data,
                resumo: {} as IResumo,
                indicadorById: {} as IGetIndicadorById,
                config: null
            });
        
    }, [data]);

    const signOut = useCallback(() => {
        localStorage.removeItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:token`);
        localStorage.removeItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:user`);
        localStorage.removeItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:auth_data`);
        setData({} as ApiState);
    }, [data]);

    const getIndicadorById = useCallback(async (id: string) => {
        const response = await api.get("/indicators/" + id, {
            headers: {
                'Authorization': "Bearer " + data.token
            }
        })

        const indicador = response.data.data.indicadores as IGetIndicadorById;

        console.log(indicador)

        setData({...data, indicadorById: indicador})

        return indicador;
    }, []);

    async function checkAuthValid() {
        try {
            const auth_data_Response = await api.get("/auth")
            const { token, user, pec_sus } = auth_data_Response.data;
            const auth_data = { ...auth_data_Response.data, pec_sus };
            localStorage.setItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:user`, JSON.stringify(user))
            localStorage.setItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:auth_data`, JSON.stringify(auth_data))    
    
            const configResponse = await api.get("/config")

            setData({ 
                token: data.token, 
                user,
                auth_data,
                resumo: {} as IResumo,
                indicadorById: {} as IGetIndicadorById,
                config: configResponse.data.data
            });
        }
        catch (err: any) {
            console.log(err.message)
            // signOut();
        }
        
    }

    const getResumo = useCallback(async () => {
        const response = await api.get("/indicators", {
            headers: {
                'Authorization': "Bearer " + data.token
            }
        })

        const resumo = response.data.data;

        setData({...data, resumo})

        return resumo;
    }, []);

    return (
        <ApiContext.Provider value={ { loading, checkAuthValid, getIndicadorById, auth_data: data.auth_data, getResumo, token: data.token, user: data.user, indicadorById: data.indicadorById, signIn, signOut, resumo: data.resumo, config: data.config } }>
            { children }
        </ApiContext.Provider>
    );
}

export function useApi() {
    const context = useContext(ApiContext);

    if (!context) {
        throw new Error("useApi must be used within an ApiProvider");
    }

    return context;
}