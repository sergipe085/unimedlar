"use client"

import { ChildrenProps } from "@/types";
import { redirect } from "next/navigation";
import { useState } from "react";
import Login from "../(auth)/login/page";
import { useRouter } from "next/navigation";
import { useApi } from "../hub/_hooks/useApi";
import { TextBold } from "../_components/text/text-bold";
import { Title } from "../_components/text/title";

export default function AuthLayout({ children }: ChildrenProps) {
    const { auth_data, loading } = useApi();
    const router = useRouter();

    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-4">
            {/* <Title>login</Title> */}
            <div className="flex w-full bg-unimed-bg h-full items-center justify-center">
                {children}
            </div>
        </div>
    )
}