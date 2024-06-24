"use client"

import { ChildrenProps } from "@/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "./_hooks/useApi";
import Login from "../(auth)/login/page";
import { Header } from "./_components/layout/header";
import { useRouter } from "next/navigation";
import { TextBold } from "../_components/text/text-bold";
import { Module } from "./_components/layout/module";
import { ModuleSelector } from "./_components/layout/module-selector";
import { Sidebar } from "./_components/layout/sidebar";

export default function AppLayout({ children }: ChildrenProps) {
    const { auth_data, loading } = useApi();
    const router = useRouter();
    useEffect(() => {    
        if (auth_data == undefined) {
            console.log("AUTH DATA NULO< IR PAR ALOGIN")
            const cuida = localStorage?.getItem(`@BI-JP-${process.env.NEXT_PUBLIC_APP_NAME}:auth_data`)    ;
            console.log(cuida);
            if (!cuida) {
                redirect("/login")
            }
        }
    }, [])

    return (
        <div className="bg-unimed-bg flex justify-end flex-row h-[100vh] pb-0">
            {/* <ModuleSelector/> */}
            <Sidebar/>
            <div className="w-full flex flex-col items-center justify-center">
                <Header/>
                <div className="min-h-[90vh] w-full overflow-y-scroll scrollbar-hide">
                    <main className="min-h-[90vh] md:p-8 md:pt-0 p-2 h-auto  flex flex-col items-start justify-start">
                        {children}
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