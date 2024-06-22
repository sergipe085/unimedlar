"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Title } from "./_components/text/title";
import { Subtitle } from "./_components/text/subtitle";

export default function LadingPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#F3F8FF] flex flex-col px-4 items-center justify-start">
      <header className="h-[10vh] w-full flex flex-row justify-between items-center self-end">
          <Image src={"/jp-hub-logo.png"} width={48} height={48} alt={""}/>
          {/* <button>Acessar portal</button> */}
          {/* <Button onClick={() => router.replace('/login')}>
            <p>ir para login</p>
          </Button> */}
      </header>
      <main className="p-8 w-full h-[200vh] items-start">
        <div className=" flex flex-row justify-between">
          <div className="z-10 h-full flex flex-col items-start justify-center">
            <Title>JP Software</Title>
            <Subtitle>Melhore a qualidade do serviço de saúde da sua cidade</Subtitle>
            <button onClick={() => router.replace("/hub")}>Acessar portal</button>
          </div>
          <Image className="" src={"/mockup1.png"} width={768} height={768} alt={""}/>
        </div>
      </main>
      {/* <footer className="h-[10vh] w-full flex flex-row justify-between items-center self-end">
          <TextBold>@jptechnologies</TextBold>
          <TextBold>@junglesoftwaredev</TextBold>
      </footer> */}
    </div>
  );
}
