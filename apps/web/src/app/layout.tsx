import "./globals.css";
import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google"
import { redirect } from "next/navigation";
import { ApiProvider } from "./hub/_hooks/useApi";
import { initSyncfusion } from "@/lib/syncfusion";
import "react-activity/dist/library.css";
import { registerLicense } from "@syncfusion/ej2-base";
registerLicense('Ngo9BigBOggjHTQxAR8/V1NBaF5cWWFCf1FpRmJGdld5fUVHYVZUTXxaS00DNHVRdkdnWXpec3VQQ2NfUkJ+X0c=');

const fontSans = FontSans({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"]
})


export const metadata: Metadata = {
  title: "JP Hub",
  description: "JP Software Hub Pec SUS Saude",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="/jp-hub-icon.png"
        type="image/png"
        sizes="<generated>"
      />
      </head>
      <body className={`${fontSans.className} bg-[#F3F8FF]  min-h-screen bg-background antialiased`}>
        <ApiProvider>
          {children}
        </ApiProvider>
      </body>
    </html>
  );
}
