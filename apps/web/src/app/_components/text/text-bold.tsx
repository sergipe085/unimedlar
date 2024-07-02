import { ChildrenProps } from "@/types";

export function TextBold({ children }: ChildrenProps) {
    return (
        <h1 className=" font-bold text-unimed-secundary text-lg">{children as string}</h1>
    )
}