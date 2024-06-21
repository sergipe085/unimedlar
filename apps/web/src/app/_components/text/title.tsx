import { ChildrenProps } from "@/types";

export function Title({ children }: ChildrenProps) {
    return (
        <h1 className=" font-bold text-[#183A67] text-4xl">{children as string}</h1>
    )
}