import Image from "next/image"

import twitterIcon from "../../../../public/icone1.svg";


type Props = {
    name: string;
    size?: number;
}

export function Icon({ name, size = 64 }: Props) {
    return (
        <Image src={require(`../../../../public/icons/${name}`)} alt={"aasdasdas"} width={size} height={size}/>
    )
}