import { Dashboard } from "@/components/admin/Dashboard";
import { Metadata } from "next";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "SwyftPay",
  description: "Bienvenue",
  // other metadata
};

export default async function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
