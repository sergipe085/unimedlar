import { useAuth } from "@/data/auth/hooks/useAuth"
import { Button } from "./Button";
import { router } from "expo-router";

export function Logout() {
    const { logout } = useAuth();

    async function handleLogout() {
        await logout();
        router.replace("/login");
    }

    return (
        <Button type={"outline"} onPress={handleLogout}>Sair</Button>
    )
}