import { logout } from "@/data/auth/api/logout"
import { api } from "@/lib/api"
import { ChildrenProps } from "@/utils/types/children-props"
import { createContext, useContext, useEffect, useState } from "react"
import { useStorageState } from "./useStorageState"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import { globals } from "@/utils/globals"
import { ThemedText } from "@/app/_components/ThemedText"

type Context = {
    run(f: () => Promise<void>): Promise<void>;
    loading: Boolean;
}

const LoadingContext = createContext<Context>({
    run: null,
    loading: null
} as Context);

export function LoadingProvider({ children }: React.PropsWithChildren) {
    const [loading, setLoading] = useState<boolean>(false);
    const [loadingFunctions, setLoadingFunctions] = useState<number>(0);

    useEffect(() => {
        console.log(loadingFunctions);
        if (loadingFunctions == 0) {
            setLoading(false);
        }
        else {
            setLoading(true);
        }
    }, [loadingFunctions])

    async function run(f: () => Promise<void>): Promise<void> {
        // setLoadingFunctions(loadingFunctions + 1);
        setLoading(true);

        try {
            await f();
        }
        catch(err) {
            console.error(err.message);
        }
        // setLoadingFunctions(loadingFunctions);
        setLoading(false);
    }

    return (
        <LoadingContext.Provider value={{
            run,
            loading
        }}>
            {
                loading && (
                    <LoadingPopover/>
                )
            }
            { children }
        </LoadingContext.Provider>
    )
}

export function useLoading() {
    const context = useContext(LoadingContext);

    if (!context) {
        throw new Error("use LoadingProvider");
    }

    return context;
}

function LoadingPopover() {
    return (
        <View
            style={{
                ...StyleSheet.absoluteFillObject,
                backgroundColor: globals.colors.fg,
                zIndex: 999,
                flex: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }}
        >
            <ActivityIndicator color={"white"}/>
            <ThemedText style={{color: "white"}}>carregando...</ThemedText>
        </View>
    )
}