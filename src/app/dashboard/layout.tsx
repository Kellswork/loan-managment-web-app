import type { Metadata } from "next";
import "./dashboard.scss";
import Nav from "../components/navigation/navigation";
import Sidebar from "../components/sidebar/sidebar";
import "./dashboard.scss"

export const metadata: Metadata = {
  title: "lendsqr Dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
    <Nav/>
      <div className="dashboard-container">
        <Sidebar />
        <main className="dashboard-container-main">{children}</main>
      </div>
    </>
  );
}
