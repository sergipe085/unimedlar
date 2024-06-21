import { TextInput, TextInputProps } from "react-native"
import { Card } from "./Card"
import { globals } from "@/utils/globals"

type Props = {

} & TextInputProps

export function Input({ ...props }: Props) {
    return (
        <Card type={"outline"}>
            <TextInput 
                style={{
                    width: "100%",
                    height: "100%",
                    color: globals.colors.black,
                    fontWeight: "bold"
                }} 
                placeholderTextColor={globals.colors.primary50}
                cursorColor={globals.colors.primary50}
                {...props}
            >
            </TextInput>
        </Card>
    )
}