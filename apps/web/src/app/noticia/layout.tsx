"use client"

import { ChildrenProps } from "@/types";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useApi } from "../hub/_hooks/useApi";
import Login from "../(auth)/login/page";
import { Header } from "../hub/_components/layout/header";
import { useRouter } from "next/navigation";
import { TextBold } from "../_components/text/text-bold";
import { Module } from "../hub/_components/layout/module";
import { ModuleSelector } from "../hub/_components/layout/module-selector";

export default function AppLayout({ children }: ChildrenProps) {
    return (
        <div className="bg-[#F3F8FF] flex justify-end flex-row h-[100vh] pb-0">
            <div className="w-full flex flex-col items-center justify-center">
                <div className="min-h-[90vh] w-full overflow-y-scroll scrollbar-hide">
                    <main className="min-h-[90vh] h-full  flex flex-col items-start justify-start">
                        {children}
                    </main>
                </div>
            </div>
        </div>
    )
}