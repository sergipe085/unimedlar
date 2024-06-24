"use client"

import { Text } from '@/app/_components/text/text';
import { HeaderRoutes } from './routes';
import { auth } from '@/data/auth';
import { LogOut } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { signout } from '@/actions/signout';

type Props = {
    nome: string;
}

export function Header({ nome }: Props) {
    const router = useRouter();
    
    return ( 
        <header className="h-20 flex items-center w-full">
            <div className="flex flex-1 flex-row justify-between">
                <HeaderRoutes/>
                <div className='flex flex-row gap-2 items-center'>
                    <div className='flex flex-row gap-2 items-start'>
                        <Text>{nome}, </Text>
                    </div>
                    <LogOut color='#173509' className=' cursor-pointer' onClick={() => {
                        // signOut();
                        // signout();
                        router.replace("/login")
                    }}/>
                </div>
            </div>
        </header>
    )
}