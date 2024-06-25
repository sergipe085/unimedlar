"use client"

import Image from "next/image";
import { useRouter } from "next/navigation";
import { Title } from "./_components/text/title";
import { Subtitle } from "./_components/text/subtitle";

export default function LadingPage() {
  const router = useRouter();

  return (
    <div className="w-full min-h-screen bg-[#f6f5f8] flex flex-col px-4 items-center justify-start">
      miau
    </div>
  );
}
