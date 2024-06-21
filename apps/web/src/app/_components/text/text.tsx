import { ChildrenProps } from "@/types";

export function Text({ children }: ChildrenProps) {
    return (
        <h1 className=" font-light text-[#183A67] text-lg">{children as string}</h1>
    )
}