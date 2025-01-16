import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";
import HotjarScript from "@/components/HotjarScript";


export const metadata: Metadata = {
  title: "Star Hosiery",
  description: "A Trading Company",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <HotjarScript />
      </head>
      <body
         
      >
        <Theme appearance="dark"  accentColor="tomato" grayColor="sand" panelBackground="solid" radius="none" scaling="90%">
        {children}
        
        </Theme>
        
      </body>
    </html>
  );
}

