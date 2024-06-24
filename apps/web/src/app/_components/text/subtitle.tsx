import { cn } from "@/schemas/lib/utils";
import { ChildrenProps } from "@/types";

type Props = {

} & ChildrenProps & React.HTMLAttributes<HTMLHeadingElement>

export function Subtitle({ children, className, ...props }: Props) {
    return (
        <h1 className={cn("font-normal text-unimed-primary text-2xl", className)}{...props}>{children as string}</h1>
    )
}