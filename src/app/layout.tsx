import type { Metadata } from "next";
import "../styles/globals.scss";
import { StoreContextProvider } from "./_context-and-reducer/storeContext";

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
