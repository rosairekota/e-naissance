import { Dashboard } from "@/components/admin/Dashboard";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "SwyftPay",
  description: "Bienvenue",
  // other metadata
};

export default async function Home() {
  const session = await getServerSession(authOptions)
  return (
    <>
      <Dashboard />
    </>
  );
}
