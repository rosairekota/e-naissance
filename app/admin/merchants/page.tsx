import { MerchantsList } from "@/components/admin/merchants";
import { Metadata } from "next";
import { getServerSession } from "next-auth";


export const metadata: Metadata = {
  title: "SwyftPay|merchants page",
  description: "Bienvenue",
  // other metadata
};

export default async function MerchanPage() {
  return (
    <>
      <MerchantsList />
    </>
  );
}
