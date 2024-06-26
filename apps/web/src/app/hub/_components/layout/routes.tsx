"use client"

import { ChevronLeft, LogOut } from 'lucide-react';
import { useApi } from '../../_hooks/useApi';
import { usePathname, useRouter } from 'next/navigation';
import { TextBold } from '@/app/_components/text/text-bold';
import { Text } from '@/app/_components/text/text';

export async function HeaderRoutes() {
    const router = useRouter();
    const pathname = usePathname();

    function navigateToIndex(index: number) {
        var targetPathname = "";
        const routes = pathname.split("/");
        for (let i = 0; i <= index; i++) {
            targetPathname += routes[i];

            if (i != index) {
                targetPathname += "/"
            }
        }

        router.push(targetPathname)
    }

    return ( 
        <div 
            className='flex flex-row cursor-pointer items-center justify-center' 
        >   
            <ChevronLeft onClick={() => {
                if ( pathname != "/hub") {
                    router.back();
                }
            }} color="#173509"/>
            <p className=' text-unimed-secundary'>{pathname.split("/").map((e, i) => {
                
                const text = `${e}${i == pathname.split("/").length - 1 ? "" : ""}`

                if (i == pathname.split("/").length - 1) {
                    return (
                        <span onClick={() => navigateToIndex(i)} className='font-bold'>{text}</span>
                    )
                }
                return (
                    <span onClick={() => navigateToIndex(i)}>{text}/</span>
                )
            })}</p>
        </div>
    )
}