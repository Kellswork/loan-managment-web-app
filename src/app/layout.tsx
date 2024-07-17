import type { Metadata } from "next";
import { StoreContextProvider } from "./_context-and-reducer/storeContext";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "lendsqr",
  description: "Lendsqr frontend engineer assesment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreContextProvider>{children}</StoreContextProvider>
      </body>
    </html>
  );
}
