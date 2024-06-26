import { ChildrenProps } from "@/types";

export function Text({ children }: ChildrenProps) {
    return (
        <h1 className=" font-light text-unimed-secundary text-lg">{children as string}</h1>
    )
}