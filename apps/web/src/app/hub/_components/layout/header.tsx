"use client"
import { ChevronLeft, LogOut } from 'lucide-react';
import { useApi } from '../../_hooks/useApi';
import { usePathname, useRouter } from 'next/navigation';
import { TextBold } from '@/app/_components/text/text-bold';
import { Text } from '@/app/_components/text/text';

export function Header() {
    const { signOut, auth_data } = useApi();
    const router = useRouter();
    const pathname = usePathname();

    return ( 
        <header className="h-20 flex items-center w-full">
            <div className="flex flex-1 flex-row justify-between">
                <div 
                    className='flex flex-row cursor-pointer items-center justify-center' 
                    onClick={() => {
                        if ( pathname != "/hub") {
                            router.back();
                        }
                    }} 
                >   
                    <ChevronLeft className=' ' color="#183A67"/>
                    <p className='text-[#183A67]'>{pathname.split("/").map((e, i) => {
                        
                        const text = `${e}${i == pathname.split("/").length - 1 ? "" : ""}`

                        if (i == pathname.split("/").length - 1) {
                            return (
                                <span className='font-bold'>{text}</span>
                            )
                        }
                        return (
                            <>{text}/</>
                        )
                    })}</p>
                </div>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='flex flex-row gap-2 items-start'>
                        <Text>{auth_data?.user.name}, </Text>
                    </div>
                    <LogOut color='#183A67' className=' cursor-pointer' onClick={() => {
                        signOut();
                        router.replace("/login")
                    }}/>
                </div>
            </div>
        </header>
    )
}