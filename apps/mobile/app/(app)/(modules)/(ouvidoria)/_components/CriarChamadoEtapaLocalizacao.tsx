import { ActionsContainer } from "@/app/_components/ActionsContainer";
import { Input } from "@/app/_components/Input";
import { ChevronRight } from "lucide-react-native";
import { useEffect, useState } from "react";
import MapView, { LatLng, MarkerAnimated } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';


type Data = {
    title: string;
    description: string;
}
type Props = {
    onContinue(data: Data);
}

Geocoder.init("AIzaSyD5CCQ6HUssqhDHA7vdL3q9Zxhk4SPils4")

export function CriarChamadaEtapaLocalizacao({ onContinue }: Props) {
    const [data, setData] = useState<Data>();
    const [coordinate, setCoordinate] = useState<LatLng>({
        latitude: 0,
        longitude: 0
    });

    const [address, setAddress] = useState<string>("");

    useEffect(() => {
        console.log("GEOCODER")
        
        Geocoder.from(coordinate.latitude, coordinate.longitude)
		.then(json => {
            var addressComponent = json.results[0].formatted_address;
			console.log(JSON.stringify(addressComponent));
            setAddress(addressComponent)
		})
		.catch(error => console.warn(error));
    }, [coordinate])

    return (
        <>
            <ActionsContainer actions={[
                {
                    action: async () => onContinue(data),
                    icon: ChevronRight,
                    type: "full",
                    title: "Continuar"
                }
            ]}/>
            <Input placeholder="Endereco do chamado" value={address}></Input>
            <MapView  style={{
                width: '100%',
                aspectRatio: 1
            }}>
                <MarkerAnimated draggable onDragEnd={(e) => setCoordinate(e.nativeEvent.coordinate)} coordinate={coordinate}/>
            </MapView>
        </>
    )
}