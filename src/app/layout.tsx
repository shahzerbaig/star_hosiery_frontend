import type { Metadata } from "next";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import "./globals.css";


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
      <body
         
      >
        <Theme appearance="dark"  accentColor="tomato" grayColor="sand" panelBackground="solid" radius="none" scaling="90%">
        {children}
        
        </Theme>
        
      </body>
    </html>
  );
}

