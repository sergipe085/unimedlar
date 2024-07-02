import { Icon } from "@/app/_components/icons/Icon";
import { Subtitle } from "@/app/_components/text/subtitle";
import { cn } from "../../../../lib/utils";
import { LucideIcon, PersonStandingIcon } from "lucide-react";

type Props = {
    active: boolean;
    name: string;
} & React.HTMLAttributes<HTMLDivElement>

export function Module({ active, name, className, ...props }: Props) {
    return (
        <div
            className={cn(`flex items-center flex-col cursor-pointer gap-1`)}
            { ...props }
        >
            <div
                className={cn(`${active ? "bg-[#183A67]" : "bg-[#F3F8FF]"} flex items-center justify-center p-0 rounded-2xl`, className)}
            >
                {/* <PersonStandingIcon color={active ? "white" : "#183A67"}/> */}
                <Icon name="icone1.svg"/>
            </div>
            <Subtitle className={`${active ? "font-bold" : "font-normal"} text-center text-[#183A67] text-xs`}>{name}</Subtitle>
        </div>
    )
}