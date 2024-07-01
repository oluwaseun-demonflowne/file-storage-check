import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Providers from "../providers/provider";
import { SocketProvider } from "../providers/socket-provider";
import NewMainNav from "./(shared)/Navigation/NewMainNav";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Storage",
  description: "a file storage application for student , developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocketProvider>
        <ClerkProvider>
        <Providers>
        {/* <section className=" flex"> */}
        {/* <Nav /> */}
        {/* <Suspense fallback={<Loading />}> */}
        {/* <DesktopNav /> */}
        <NewMainNav />
        {children}
        {/* </Suspense> */}
        {/* </section> */}
        </Providers>
        </ClerkProvider>
        </SocketProvider>
      </body>
    </html>
  );
}
