"use client"

import { Button } from "./button";
import { Title } from "./text/title";

type Props = {
    action: {
        method: () => Promise<void>,
        name: string;
    };
    title: string;
}

export function TitleWithAction({ action, title }: Props) {
    return (
        <div className="flex flex-row w-full justify-between items-start">
            <Title>{ title }</Title>
            <Button onClick={async () => await action.method()}>{ action.name }</Button>
        </div>
    )
}