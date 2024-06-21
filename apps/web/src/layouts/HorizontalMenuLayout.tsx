import { Title } from "@/components/title";
import { Outlet } from "react-router-dom";

type Props = {
    title: string;
}

export function HorizontalMenuLayout({ title }: Props) {
    return (
        <div className="w-full h-full flex flex-row items-center justify-start pt-8">
            <div className="w-[35%] h-full">
                <Title>{title}</Title>
            </div>
            <div className="flex w-full h-full items-center justify-center">
                <Outlet/>
            </div>
        </div>
    )
}