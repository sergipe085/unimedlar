import { Button } from "@/app/_components/Button";
import { Input } from "@/app/_components/Input";
import { Logout } from "@/app/_components/Logout";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { useState } from "react";

type Input = {
    email: string;
    code: string;
}

export default function Register() {
    const { login } = useAuth();
    const [input, setInput] = useState<Input>({} as Input);

    return (
        <ParallaxScrollView>
            <Input placeholder="nome" value={input.code} onChangeText={(t) => setInput({...input, code: t})}/>
            <Button
                type="default"
                onPress={null}
            >
                entrar
            </Button>
            <ThemedText type="default">ou</ThemedText>
            <Button
                type="outline"
                onPress={null}
            >
                crie uma conta
            </Button>
            <Logout/>
        </ParallaxScrollView>
    )
}