import { ChildrenProps } from "@/types";
import { RedirectType, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "./_hooks/useApi";
import Login from "../(auth)/login/page";
import { Header } from "./_components/layout/header";
import { useRouter } from "next/navigation";
import { TextBold } from "../_components/text/text-bold";
import { Module } from "./_components/layout/module";
import { ModuleSelector } from "./_components/layout/module-selector";
import { Sidebar } from "./_components/layout/sidebar";
import { auth } from "@/data/auth";

export default async function AppLayout({ children }: ChildrenProps) {
    const { user } = await auth();

    if (!user || !user.gerente) {
        return redirect("/login", RedirectType.replace);
    }

    return (
        <div className="bg-unimed-bg flex justify-end flex-row h-[100vh] pb-0">
            <Sidebar/>
            <div className="w-full flex flex-col items-center justify-center">
                <Header nome={user.nome}/>
                <div className="min-h-[90vh] w-full overflow-y-scroll scrollbar-hide">
                    <main className="min-h-[90vh] md:p-8 md:pt-0 p-2 h-auto  flex flex-col items-start justify-start">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}