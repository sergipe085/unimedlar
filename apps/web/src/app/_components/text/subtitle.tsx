import { cn } from "@/lib/utils";
import { ChildrenProps } from "@/types";

type Props = {

} & ChildrenProps & React.HTMLAttributes<HTMLHeadingElement>

export function Subtitle({ children, ...props }: Props) {
    return (
        <h1 className={cn("font-normal text-[#183A67] text-2xl", props.className)}{...props}>{children as string}</h1>
    )
}