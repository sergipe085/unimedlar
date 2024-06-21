import { Icon } from "./icons/Icon";
import { Subtitle } from "./text/subtitle";

export function Maintence() {
    return (
        <div className="h-full w-full flex  flex-col gap-4 items-center justify-center">
            <Icon name="maintence-icon.svg" size={256}/>
            <Subtitle>Página em manutenção</Subtitle>
        </div>
    )
}