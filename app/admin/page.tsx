import { Dashboard } from "@/components/Dashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "SwyftPay | ",
  description: "Welcome",
  // other metadata
};

export default function Home() {
  return (
    <>
      <Dashboard />
    </>
  );
}
