import { Button } from "@/app/_components/Button";
import { Input } from "@/app/_components/Input";
import ParallaxScrollView from "@/app/_components/ParallaxScrollView";
import { ThemedText } from "@/app/_components/ThemedText";
import { ThemedView } from "@/app/_components/ThemedView";
import { useAuth } from "@/data/auth/hooks/useAuth";
import { registerForPushNotificationsAsync } from "@/lib/notifications";
import { router } from "expo-router";
import { useState } from "react";
import { View } from "react-native";

type Input = {
    username: string;
    password: string;
}

export default function Login() {
    const { login } = useAuth();
    const [input, setInput] = useState<Input>({} as Input);
    const [error, setError] = useState<string | null>(null);

    async function handleLogin() {
        try {
            const notToken = await registerForPushNotificationsAsync()
            console.log(notToken);
            await login({
                username: input.username,
                password: input.password,
                expoNotificationToken: notToken
            });
    
            router.replace("/")
        }
        catch(err) {
            console.log(err.message);
            setError("Ocorreu um erro efetuar login")
        }
    }

    return (
        <ParallaxScrollView>
            <ThemedText type="title">Login</ThemedText>
            <ThemedText type="default">Insira seu email e sua senha</ThemedText>
            <Input placeholder="seu cpf" value={input.username} onChangeText={(t) => setInput({ ...input, username: t })}/>
            <Input placeholder="sua senha" value={input.password} onChangeText={(t) => setInput({ ...input, password: t })}/>
            {/* {
                error && (
                    <ThemedText>{error}</ThemedText>
                )
            } */}
            <Button
                type="default"
                onPress={handleLogin}
            >
                entrar
            </Button>
        </ParallaxScrollView>
    )
}