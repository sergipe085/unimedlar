import { geocoder } from "../services/geo";

interface IReq {
    lat: number;
    lon: number;
}

interface IRes {
    rua: string;
}

export async function get_address_based_on_location({ lat, lon }: IReq): Promise<IRes> {

    const result = await geocoder.reverse({
        lat,
        lon
    })


    console.log(result);

    return {
        rua: result[0].streetName.toLowerCase().replace("rua ", "")
    }
}   