
import Banner from "@/components/client/Banner";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "E-naissance",
  description: "Bienvenue",
  // other metadata
};


export default async function Home() {
  const session = await getServerSession()
  if (session) {
    redirect('/admin')
  }
  redirect('/auth/signin')
  return (
    <>
      <Banner/>
    </>
  );
}
