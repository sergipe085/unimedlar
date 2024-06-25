import { logout } from "@/data/auth/api/logout"
import { api } from "@/lib/api"
import { ChildrenProps } from "@/utils/types/children-props"
import { createContext, useContext, useEffect, useState } from "react"
import { useStorageState } from "../../general/hooks/useStorageState"
import { login } from "../api/login"

export type User  = {
    id: string,
    nome: string,
    cpf: string,
}

type Auth = {
    user: User,
    token: string
}

type Context = {
    login(data: {username: string, password: string, expoNotificationToken: string}): Promise<void>;
    logout(): Promise<void>;
    auth: Auth | null;
    loading: boolean;
}

const AuthContext = createContext<Context>({
    setData: null,
    auth: null,
    login: null,
    logout: null,
    loading: true
} as Context);

export function AuthProvider({ children }: React.PropsWithChildren) {
    // const [authData, setAuthData] = useState<Auth | null>({
    //     user: {
    //         email: "dapscreed@gmail.com"
    //     }
    // } as Auth);

    const [authData, setAuthData] = useState<Auth | null>(null);

    const [[isLoading, session], setSession] = useStorageState('session');

    useEffect(() => {
        if (!isLoading){
            const data = session ? JSON.parse(session): null;

            if (data) {
                api.defaults.headers.common = {'Authorization': `Bearer ${data.token}`}
                setAuthData(data);
            }
        }
    },[isLoading])

    async function handleLogin({ username, password, expoNotificationToken }) {
        const auth = await login({
            login: username,
            password,
            expoNotificationToken
        })

        api.defaults.headers.common = {'Authorization': `Bearer ${auth.token}`}

        setAuthData(auth);
        setSession(JSON.stringify(auth));
    }

    async function handleLogout() {

        // try {
        //     await logout();
        // }
        // catch(err) {

        // }

        setAuthData(null);
        setSession(null);
    }

    useEffect(() => {
        // if (authData) {
        //     api.defaults.headers.common = {'Authorization': `Bearer ${authData.token}`}
        // }
        // else {
        //     api.defaults.headers.common = {'Authorization': ``}
        // }
    }, [authData])

    return (
        <AuthContext.Provider value={{
            auth: authData,
            login: handleLogin,
            logout: handleLogout,
            loading: isLoading
        }}>
            { children }
        </AuthContext.Provider>
    )
}

export function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("use AuthProvider");
    }

    return context;
}

