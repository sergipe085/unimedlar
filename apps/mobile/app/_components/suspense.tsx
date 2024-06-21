import React from "react"
import { Loading } from "./loading";

type Props = {
    children: React.ReactNode | null;
}

export function Suspense({ children }: Props) {
    if (!children) {
        return <Loading/>
    }

    return (
        <>
            { children }
        </>
    )
}