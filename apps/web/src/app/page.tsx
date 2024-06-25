"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Title } from "./_components/text/title";
import { Subtitle } from "./_components/text/subtitle";
import Link from "next/link";
import { MotionValue, motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useMemo, useRef, useState } from "react";
import unimed from "../../public/logo.png"
import celular from "../../public/celular.png"
import idosa from "../../public/idosa.png"


import { FlipWords } from "./_components/flip-words";

import dynamic from "next/dynamic"

const Scene = dynamic(() => import("./_components/iphone/Scene"), { ssr: false })


export default function LadingPage() {
  const words = [`gerenciar`, "monitorar", "planejar"];
  const router = useRouter();

  return (
    <main className="h-svh bg-white w-full flex flex-col">
      <div className="p-2 w-full flex bg-white items-center justify-center fixed gap-8">
        <Image className="h-12 w-32" src={unimed} alt={"unimed logo"}></Image> 
        <p>miau</p>
        <p>miau</p> 
        <p>miau</p> 
      </div>
      {/* <Image src={idosa} alt=""></Image> */}
      <div className="mt-10 bg-cover w-screen bg-idosa2 sm:bg-idosa h-[800px] sm:h-svh">
        <div className="bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed">
        <div className="flex h-full x justify-start pt-24 px-4 sm:px-40 sm:pb-96 sm:pt-60">
          <div className="text-black mb-96">
            <h2 className="mb-4 text-4xl font-semibold">O tratamento continua, mesmo fora do hospital.</h2>
            <h4 className="mb-6 text-xl w-2/5">De casa, os pacientes continuam conectados às equipes médicas pelos apps para iOS e iPadOS entre as consultas. As organizações de saúde podem criar apps com o CareKit ou oferecer apps existentes para dar ainda mais autonomia aos pacientes. E o iPhone, o iPad, o Apple Watch, o app Saúde e apps e aparelhos médicos compatíveis com HealthKit facilitam o registro e compartilhamento de dados.</h4>
            <button className="bg-white p-2">veja oportunidades</button>
          </div>
        </div>
        </div>
      </div>
        <div className="text-xl sm:text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400 items-center text-center">
          Com o Unimed Lar você pode<br />
          <FlipWords className="text-2xl sm:text-4xl" words={words} />
        </div>
      <div className="flex flex-col w-full pt-20">
        <MacbookScroll></MacbookScroll>
      </div>
    </main>
  );
}



export const MacbookScroll = ({
  src,
  showGradient,
  title,
  badge,
}: {
  src?: string;
  showGradient?: boolean;
  title?: string | React.ReactNode;
  badge?: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window && window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const scaleX = useTransform(
    scrollYProgress,
    [0, 0.3],
    [1.2, isMobile ? 1 : 3]
  );
  const scaleY = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0.6, isMobile ? 1 : 1.5]
  );
  const translate = useTransform(scrollYProgress, [0, 1], [0, 1500]);
  const rotate = useTransform(scrollYProgress, [0.1, 0.12, 0.3], [-28, -28, 0]);
  const textTransform = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div
      ref={ref}
      className=" h-svh flex flex-col [perspective:800px] pt-40 transform md:scale-100  scale-[1] sm:scale-50"
    >
      <motion.h2
        style={{
          translateY: textTransform,
          opacity: textOpacity,
        }}
        className="dark:text-white text-neutral-800 text-3xl font-bold text-center -mb-10"
      >
        {title || (
          <span>
            Sério acho que isso foi tao custoso que tinha que dar certo <br /> nao to nem brincando.
          </span>
        )}
      </motion.h2>
      <Scene />
    </div>
  );
};