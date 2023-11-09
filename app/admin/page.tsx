import { Dashboard } from "@/components/admin/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwyftPay",
  description: "Bienvenue",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
