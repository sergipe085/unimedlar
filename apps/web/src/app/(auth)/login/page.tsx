"use client";

import { useRouter } from "next/navigation";
import { useApi } from "../../hub/_hooks/useApi";
import { Subtitle } from "@/app/_components/text/subtitle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { IMaskInput } from 'react-imask';

export default function Login() {
  const { signIn, auth_data } = useApi();
  const router = useRouter();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const [verSenha, setVerSenha] = useState(false);

  const handleEnterPress = async (e: any) => {
    if (e.key === "Enter") {
      await signIn({
        username: user.username,
        password: user.password,
        token_notification: 'token_notification'
      });
      
      router.replace("/home")
    }
  };

  return (
    <>
      <div className="w-full h-[80vh] flex items-center justify-center">
        <Card className="p-6 w-[60%] gap-4 flex flex-col">
          <div className="flex flex-col items-center justify-center">
            <CardTitle>Entrar como Admin</CardTitle>
            <CardDescription>Entrar como Admin</CardDescription>
          </div>
          <div>
            <Label>Usuário:</Label>
            <IMaskInput
              value={user.username}
              mask="000.000.000-00"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              onChange={(e) => setUser({ ...user, username: e.currentTarget.value })}
              onKeyDown={handleEnterPress}
              placeholder="Digite seu cpf"
            />
            {/* onChange={(e) => setCpf(e.currentTarget.value)} */}
          </div>
          <div>
            <Label>Senha:</Label>
            <Input
              type={verSenha ? "text" : "password"}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              onKeyDown={handleEnterPress}
              placeholder="Digite a senha"
            />
          </div>
          <div className="flex items-center gap-2 justify-end">
            <Checkbox onCheckedChange={() => setVerSenha(!verSenha)} />
            <Label>Ver senha</Label>
          </div>
          <Button disabled={(user.username == '' || user.password.length < 5) && true} onClick={() => {
            signIn({
              username: user.username,
              password: user.password,
              token_notification: 'token_notification'
            });
          }} className="w-full">
            <p>Entrar</p>
          </Button>
        </Card>
      </div>
    </>
  );
}
