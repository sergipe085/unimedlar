"use client"

import { ChildrenProps } from "@/types";
import { redirect } from "next/navigation";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextBold } from "./_components/text/text-bold";
import { ModuleSelector } from "./hub/_components/layout/module-selector";
import { useApi } from "./hub/_hooks/useApi";
import { Header } from "./hub/_components/layout/header";
import { Title } from "./_components/text/title";
import { Subtitle } from "./_components/text/subtitle";

export default function NotFound() {
    const router = useRouter();

    return (
        <div className="bg-[#F3F8FF] flex justify-end flex-row h-[100vh] p-4 pb-0">
            {/* <ModuleSelector/> */}
            {/* <div className=" lg:flex block w-full max-w-28 h-[100vh]"/> */}
            <div className="w-full flex flex-col px-4 items-center justify-center">
                <Header/>
                <div className="min-h-[90vh] w-full overflow-y-scroll scrollbar-hide">
                    <main className="min-h-[90vh] p-8 h-full  flex flex-col items-center justify-center">
                        {/* {children} */}
                        <Title>404</Title>
                        <Subtitle>Página nao encontrada</Subtitle>
                    </main>
                    <footer className="h-[100px] w-full flex flex-row justify-between items-center">
                        <TextBold>@jptechnologies</TextBold>
                        <TextBold>@junglesoftwaredev</TextBold>
                    </footer>
                </div>
            </div>
        </div>
    )
}