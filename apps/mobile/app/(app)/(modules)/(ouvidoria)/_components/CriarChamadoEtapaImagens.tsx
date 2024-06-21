import { ActionsContainer } from "@/app/_components/ActionsContainer";
import { Camera } from "@/app/_components/Camera";
import { ThemedText } from "@/app/_components/ThemedText";
import { Camera as CameraIco, ChevronRight } from "lucide-react-native";
import { useEffect, useState } from "react";
import { Image } from "react-native";

type Data = {
    title: string;
    description: string;
}
type Props = {
    onContinue(data: Data);
}

export function CriarChamadaEtapaImagens({ onContinue }: Props) {
    const [data, setData] = useState<Data>();
    const [cameraEnabled, setCameraEnabled] = useState<boolean>(false);
    const [capturedImage, setCapturedImage] = useState<string>(null);

    if (cameraEnabled) {
        return (
            <Camera onCancel={() => setCameraEnabled(false)} onTakePicture={(pic) => {
                // console.log(pic)
                setCapturedImage(pic)
            }}/>
        )
    } 

    return (
        <>
            <ActionsContainer actions={[
                {
                    action: async () => setCameraEnabled(true),
                    icon: CameraIco,
                    type: "full",
                    title: "Tirar foto"
                },
                {
                    action: async () => onContinue(data),
                    icon: ChevronRight,
                    type: "full",
                    title: "Continuar"
                },
            ]}/>
            <ThemedText>Adicione imagens que comprovem sua denuncia</ThemedText>
        
            <Image 
                className="w-full aspect-square rounded-2xl"
                source={{ uri: capturedImage ?? null }}
            />

        </>
    )
}